import { resolveAssetPath } from '../utils/assetPath';

// Lazy loader for PDF.js to prevent bundling it into the initial page load
let pdfjsPromise: Promise<typeof import('pdfjs-dist')> | null = null;
async function getPdfJs(): Promise<typeof import('pdfjs-dist')> {
  if (!pdfjsPromise) {
    pdfjsPromise = import('pdfjs-dist').then((mod) => {
      if (typeof window !== 'undefined' && !mod.GlobalWorkerOptions.workerSrc) {
        mod.GlobalWorkerOptions.workerSrc = resolveAssetPath('/pdf.worker.min.mjs');
      }
      return mod;
    });
  }
  return pdfjsPromise;
}

const DB_NAME = 'at_tahir_pdf_cover_cache_v2';
const STORE_NAME = 'pdf_covers';
const DB_VERSION = 1;

// Level 1: In-memory fast cache
const memoryCache = new Map<string, string>();

let dbPromise: Promise<IDBDatabase | null> | null = null;

/**
 * Lazily opens or connects to IndexedDB for persistent client-side thumbnail caching.
 */
function getDb(): Promise<IDBDatabase | null> {
  if (typeof window === 'undefined' || !window.indexedDB) {
    return Promise.resolve(null);
  }
  if (!dbPromise) {
    dbPromise = new Promise((resolve) => {
      try {
        const req = window.indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = (e: any) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: 'key' });
          }
        };
        req.onsuccess = (e: any) => {
          resolve(e.target.result);
        };
        req.onerror = (err) => {
          console.debug('IndexedDB cover cache failed to open:', err);
          resolve(null);
        };
      } catch (err) {
        console.debug('IndexedDB error:', err);
        resolve(null);
      }
    });
  }
  return dbPromise;
}

/**
 * Retrieves a cached thumbnail data URL from IndexedDB.
 */
export async function getCachedThumbnail(key: string): Promise<string | null> {
  if (!key) return null;
  if (memoryCache.has(key)) {
    return memoryCache.get(key)!;
  }

  const db = await getDb();
  if (!db) return null;

  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => {
        if (req.result && req.result.dataUrl) {
          memoryCache.set(key, req.result.dataUrl);
          resolve(req.result.dataUrl);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

/**
 * Persists a generated thumbnail data URL into IndexedDB and memory cache.
 */
export async function setCachedThumbnail(key: string, dataUrl: string): Promise<void> {
  if (!key || !dataUrl) return;
  memoryCache.set(key, dataUrl);

  const db = await getDb();
  if (!db) return;

  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put({ key, dataUrl, timestamp: Date.now() });
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    } catch {
      resolve();
    }
  });
}

/**
 * Concurrency-controlled extraction queue to prevent network and CPU contention
 * when user scrolls through multiple issues in the archive.
 */
class ExtractionQueue {
  private queue: Array<() => Promise<void>> = [];
  private activeCount = 0;
  private maxConcurrency = 2;

  public enqueue<T>(task: () => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await task();
          resolve(result);
        } catch (err) {
          reject(err);
        }
      });
      this.next();
    });
  }

  private next() {
    if (this.activeCount >= this.maxConcurrency || this.queue.length === 0) {
      return;
    }
    const task = this.queue.shift();
    if (!task) return;
    this.activeCount++;
    task().finally(() => {
      this.activeCount--;
      this.next();
    });
  }
}

const extractionQueue = new ExtractionQueue();

/**
 * Extracts the first page of an authentic PDF as an image thumbnail,
 * saves it into persistent IndexedDB cache, and returns the data URL.
 * Uses range requests so only the beginning of the PDF is downloaded.
 */
export async function extractFirstPageThumbnail(
  pdfUrl: string,
  cacheKey: string,
  targetWidth: number = 360,
  fallbackPdfUrl?: string
): Promise<string | null> {
  if (!pdfUrl && !fallbackPdfUrl) return null;

  // 1. Check memory cache
  if (memoryCache.has(cacheKey)) {
    return memoryCache.get(cacheKey)!;
  }

  // 2. Check IndexedDB
  const cached = await getCachedThumbnail(cacheKey);
  if (cached) {
    return cached;
  }

  // 3. Enqueue extraction to prevent CPU/memory spikes
  return extractionQueue.enqueue(async () => {
    // Re-check cache in case another task finished while queued
    if (memoryCache.has(cacheKey)) {
      return memoryCache.get(cacheKey)!;
    }
    const cachedAgain = await getCachedThumbnail(cacheKey);
    if (cachedAgain) {
      return cachedAgain;
    }

    const renderFromUrl = async (targetPdfUrl: string): Promise<string> => {
      const pdfjsLib = await getPdfJs();
      const loadingTask = pdfjsLib.getDocument({
        url: targetPdfUrl,
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@' + pdfjsLib.version + '/cmaps/',
        cMapPacked: true,
        rangeChunkSize: 65536,
      });

      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const originalVp = page.getViewport({ scale: 1.0 });
      const scale = targetWidth / originalVp.width;
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      canvas.width = Math.round(viewport.width);
      canvas.height = Math.round(viewport.height);
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Canvas 2D context unavailable');
      }

      await page.render({
        canvas,
        canvasContext: ctx,
        viewport,
      } as any).promise;

      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

      try {
        loadingTask.destroy();
      } catch {}

      return dataUrl;
    };

    try {
      let dataUrl: string;
      const primaryUrl = fallbackPdfUrl || pdfUrl;
      const alternateUrl = fallbackPdfUrl ? pdfUrl : undefined;

      try {
        dataUrl = await renderFromUrl(primaryUrl);
      } catch (firstErr) {
        if (alternateUrl && alternateUrl !== primaryUrl) {
          dataUrl = await renderFromUrl(alternateUrl);
        } else {
          throw firstErr;
        }
      }

      // Save in cache (IndexedDB + memory)
      await setCachedThumbnail(cacheKey, dataUrl);

      return dataUrl;
    } catch (err) {
      console.debug(`Page 1 extraction unavailable for ${cacheKey}:`, err);
      return null;
    }
  });
}
