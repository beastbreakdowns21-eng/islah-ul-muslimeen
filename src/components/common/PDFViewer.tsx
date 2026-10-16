import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  ExternalLink,
  Download,
  RotateCw,
  FileText,
  AlertCircle,
  Loader2,
  Maximize,
  RotateCcw,
  Scroll,
  BookOpen,
  RefreshCw,
} from 'lucide-react';
import { getLocalPdfPath } from '../../data/atTahirData';
import { getLocalArticlePdfPath } from '../../data/articlesData';
import { resolveAssetPath } from '../../utils/assetPath';

// Configure PDF.js worker using self-contained local worker
if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = resolveAssetPath('/pdf.worker.min.mjs');
}

export type ReadingMode = 'continuous' | 'single';

export interface PDFViewerProps {
  pdfUrl: string;
  localPdfUrl?: string;
  title: string;
  fileName?: string;
  initialPage?: number;
  expectedPageCount?: number;
  height?: string;
  className?: string;
  showDownload?: boolean;
  isArticle?: boolean;
  onClose?: () => void | Promise<void>;
  onLoadSuccess?: (loadedTotalPages: number) => void;
  onError?: () => void;
  onPageChange?: (page: number, total: number) => void;
}

interface PageDimensions {
  width: number;
  height: number;
}

/**
 * Subcomponent to render an individual PDF page.
 * Uses IntersectionObserver for lazy rendering so 200+ page documents
 * do not exhaust browser memory or slow down scrolling.
 */
interface PDFPageItemProps {
  pdfDoc: any;
  pageNumber: number;
  totalPages: number;
  scale: number;
  rotation: number;
  baseDimensions: PageDimensions;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  onPageInView?: (pageNumber: number) => void;
}

const PDFPageItem: React.FC<PDFPageItemProps> = ({
  pdfDoc,
  pageNumber,
  totalPages,
  scale,
  rotation,
  baseDimensions,
  scrollContainerRef,
  onPageInView,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<any>(null);

  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [rendered, setRendered] = useState<boolean>(false);
  const [actualDimensions, setActualDimensions] = useState<PageDimensions>(baseDimensions);

  // Compute display size at current scale & rotation
  const isRotated90or270 = rotation === 90 || rotation === 270;
  const pageWidth = isRotated90or270 ? actualDimensions.height : actualDimensions.width;
  const pageHeight = isRotated90or270 ? actualDimensions.width : actualDimensions.height;
  const displayWidth = Math.floor(pageWidth * scale);
  const displayHeight = Math.floor(pageHeight * scale);

  // 1. Observer for lazy rendering (load pages within 800px buffer)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShouldRender(true);
        } else {
          // If page is far outside viewport, we can release heavy canvas to save memory
          // Keep first 3 pages and near pages rendered; unrender if far away to maintain top performance
          const rect = entry.boundingClientRect;
          const container = scrollContainerRef.current;
          const containerRect = container?.getBoundingClientRect();
          if (containerRect) {
            const distanceAbove = containerRect.top - rect.bottom;
            const distanceBelow = rect.top - containerRect.bottom;
            if (distanceAbove > 2400 || distanceBelow > 2400) {
              setShouldRender(false);
              setRendered(false);
            }
          }
        }
      },
      {
        root: scrollContainerRef.current,
        rootMargin: '800px 0px',
        threshold: 0.01,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [scrollContainerRef]);

  // 2. Observer for active reading position (tracks currently visible page)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !onPageInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          onPageInView(pageNumber);
        }
      },
      {
        root: scrollContainerRef.current,
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.1, 0.5],
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pageNumber, onPageInView, scrollContainerRef]);

  // 3. Render canvas when shouldRender is true
  useEffect(() => {
    if (!shouldRender || !pdfDoc) return;

    let isCancelled = false;
    setIsRendering(true);

    const renderPage = async () => {
      try {
        if (renderTaskRef.current) {
          try {
            renderTaskRef.current.cancel();
          } catch {
            // ignore
          }
        }

        const page = await pdfDoc.getPage(pageNumber);
        if (isCancelled) return;

        const unscaledViewport = page.getViewport({ scale: 1.0, rotation });
        setActualDimensions({
          width: unscaledViewport.width,
          height: unscaledViewport.height,
        });

        const canvas = canvasRef.current;
        if (!canvas) return;

        const viewport = page.getViewport({ scale, rotation });
        const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;

        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        const context = canvas.getContext('2d', { alpha: false });
        if (!context) return;

        const transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null;

        const renderContext = {
          canvasContext: context,
          transform: transform || undefined,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;

        await renderTask.promise;
        if (!isCancelled) {
          setIsRendering(false);
          setRendered(true);
        }
      } catch (err: any) {
        if (err?.name === 'RenderingCancelledException') {
          return;
        }
        if (!isCancelled) {
          console.error(`Error rendering page ${pageNumber}:`, err);
          setIsRendering(false);
        }
      }
    };

    renderPage();

    return () => {
      isCancelled = true;
      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel();
        } catch {
          // ignore
        }
      }
    };
  }, [shouldRender, pdfDoc, pageNumber, scale, rotation]);

  return (
    <div
      id={`pdf-page-${pageNumber}`}
      ref={containerRef}
      data-page-number={pageNumber}
      className="flex flex-col items-center select-none"
      style={{
        width: displayWidth,
        maxWidth: '100%',
      }}
    >
      {/* Page Canvas Container with Distinct Card Framing */}
      <div
        className="relative bg-white rounded-xs shadow-md border border-slate-200/90 transition-shadow hover:shadow-lg overflow-hidden flex items-center justify-center"
        style={{
          width: displayWidth,
          height: displayHeight,
          maxWidth: '100%',
        }}
      >
        {/* Placeholder / Loading Indicator while Page Loads */}
        {(!rendered || isRendering) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-400 gap-2 z-10">
            <Loader2 className="w-5 h-5 animate-spin text-[#002FA7]" />
            <span className="text-[11px] font-mono font-medium text-slate-500">
              Loading page {pageNumber}...
            </span>
          </div>
        )}

        {/* The Page Canvas */}
        <canvas
          ref={canvasRef}
          className={`block max-w-full bg-white transition-opacity duration-150 ${
            rendered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Subtle Page Number Separator Tag */}
      <div className="py-1.5 px-3 text-[11px] font-mono text-slate-400 select-none">
        Page {pageNumber} of {totalPages}
      </div>
    </div>
  );
};

export const PDFViewer: React.FC<PDFViewerProps> = ({
  pdfUrl,
  localPdfUrl,
  title,
  fileName,
  initialPage = 1,
  expectedPageCount,
  height = '720px',
  className = '',
  showDownload = true,
  isArticle = false,
}) => {
  const [numPages, setNumPages] = useState<number>(expectedPageCount || 0);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  // EXACT USER REQUIREMENT: Default Zoom is strictly 100% (scale = 1.0)
  const [scale, setScale] = useState<number>(1.0);

  // EXACT USER REQUIREMENT: Default reading mode is strictly "Continuous Vertical"
  const [readingMode, setReadingMode] = useState<ReadingMode>('continuous');

  const [rotation, setRotation] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [baseDimensions, setBaseDimensions] = useState<PageDimensions>({
    width: 595,
    height: 842,
  });

  const effectiveFileName = fileName || pdfUrl.split('/').pop() || 'document.pdf';
  const isArticleDoc = isArticle || pdfUrl.includes('/assets/articles/') || (Boolean(fileName) && getLocalArticlePdfPath(fileName || '') !== null);
  const articleLocalPath = fileName ? getLocalArticlePdfPath(fileName) : null;
  const resolvedTargetUrl = isArticleDoc ? (localPdfUrl || articleLocalPath || pdfUrl) : pdfUrl;

  // Track active URL with seamless local fallback
  const [activeUrl, setActiveUrl] = useState<string>(resolvedTargetUrl);
  const [fallbackAttempted, setFallbackAttempted] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const pdfDocRef = useRef<any>(null);

  // Keep activeUrl in sync when pdfUrl prop changes
  useEffect(() => {
    const updatedUrl = isArticleDoc ? (localPdfUrl || articleLocalPath || pdfUrl) : pdfUrl;
    setActiveUrl(updatedUrl);
    setFallbackAttempted(false);
  }, [pdfUrl, localPdfUrl, isArticleDoc, articleLocalPath]);

  const handleRetry = () => {
    if (isArticleDoc) {
      const articleFallback = localPdfUrl || (fileName ? getLocalArticlePdfPath(fileName) : null) || pdfUrl;
      setActiveUrl(articleFallback);
    } else {
      setActiveUrl(pdfUrl);
    }
    setRetryKey((prev) => prev + 1);
  };

  // Open active PDF asset directly in a new browser tab
  const handleOpenInNewTab = () => {
    window.open(activeUrl, '_blank', 'noopener,noreferrer');
  };

  // Toggle fullscreen for the entire reader component
  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  // Load PDF Document with automatic, silent fallback to authentic local PDF if remote fails
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);
    setCurrentPage(initialPage);
    // Reset to 100% zoom when loading a new PDF
    setScale(1.0);

    const loadPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({
          url: activeUrl,
          cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@' + pdfjsLib.version + '/cmaps/',
          cMapPacked: true,
          disableRange: false,
          disableStream: false,
          withCredentials: false,
        });

        const pdf = await loadingTask.promise;
        if (isCancelled) return;

        pdfDocRef.current = pdf;
        setNumPages(pdf.numPages);

        // Read page 1 dimensions to set default page size placeholder
        try {
          const firstPage = await pdf.getPage(1);
          const vp = firstPage.getViewport({ scale: 1.0 });
          setBaseDimensions({
            width: vp.width,
            height: vp.height,
          });
        } catch {
          // fallback stays at 595 x 842
        }

        setLoading(false);
      } catch (err: any) {
        if (isCancelled) return;
        console.debug('PDF.js loading failed on', activeUrl, err);

        // If this is an article, handle article fallback
        if (isArticleDoc) {
          const articleFallback = localPdfUrl || (fileName ? getLocalArticlePdfPath(fileName) : null);
          if (!fallbackAttempted && articleFallback && activeUrl !== articleFallback) {
            setFallbackAttempted(true);
            setActiveUrl(articleFallback);
            return;
          }
          setError('Unable to display the PDF inline in this browser. You can download the authentic PDF file directly or open it in a new tab.');
          setLoading(false);
          return;
        }

        // For At-Tahir R2 publications: decoupled from local files.
        setError('This publication could not be rendered inline in your browser. You can open the authentic file directly in a new tab or download it.');
        setLoading(false);
      }
    };

    loadPDF();

    return () => {
      isCancelled = true;
    };
  }, [activeUrl, initialPage, retryKey, localPdfUrl, fileName, fallbackAttempted, isArticleDoc]);

  // Handle scrolling to a specific page smoothly
  const scrollToPage = useCallback(
    (targetPage: number) => {
      if (readingMode === 'continuous') {
        const el = document.getElementById(`pdf-page-${targetPage}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setCurrentPage(targetPage);
        } else {
          setCurrentPage(targetPage);
        }
      } else {
        setCurrentPage(targetPage);
      }
    },
    [readingMode]
  );

  // Prev Page Control (Works for both Continuous scroll and Single page)
  const handlePrevPage = () => {
    const prev = Math.max(currentPage - 1, 1);
    scrollToPage(prev);
  };

  // Next Page Control (Works for both Continuous scroll and Single page)
  const handleNextPage = () => {
    const next = Math.min(currentPage + 1, numPages || 1);
    scrollToPage(next);
  };

  // Zoom In / Zoom Out Controls
  const handleZoomIn = () => {
    setScale((prev) => Math.min(Number((prev + 0.15).toFixed(2)), 3.0));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(Number((prev - 0.15).toFixed(2)), 0.5));
  };

  // Reset to 100%
  const handleResetZoom = () => {
    setScale(1.0);
  };

  // Fit to Width calculation (only when explicitly requested by user)
  const handleFitToWidth = () => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth - 48;
    const isRotated90 = rotation === 90 || rotation === 270;
    const pageWidth = isRotated90 ? baseDimensions.height : baseDimensions.width;
    if (containerWidth > 0 && pageWidth > 0) {
      const calculatedScale = Math.min(Math.max(containerWidth / pageWidth, 0.4), 2.2);
      setScale(Number(calculatedScale.toFixed(2)));
    }
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handlePageInView = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  // Generate array of page numbers [1, 2, 3, ..., numPages]
  const pageNumbers = useMemo(() => {
    const total = numPages > 0 ? numPages : expectedPageCount || 0;
    return Array.from({ length: total }, (_, i) => i + 1);
  }, [numPages, expectedPageCount]);

  return (
    <div
      ref={viewerContainerRef}
      className={`bg-white rounded-2xl border border-[#EEF2F7] shadow-sm flex flex-col overflow-hidden transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-50 rounded-none border-none h-screen w-screen bg-[#0F172A]'
          : className
      }`}
      style={!isFullscreen ? { height } : undefined}
    >
      {/* Top Toolbar */}
      <div
        className={`px-3 sm:px-4 py-2.5 sm:py-3 border-b border-[#EEF2F7] flex flex-wrap items-center justify-between gap-2 shrink-0 ${
          isFullscreen ? 'bg-slate-900 border-slate-800 text-white' : 'bg-[#F8FAFC]'
        }`}
      >
        {/* Left: Document Information */}
        <div className="flex items-center gap-2 min-w-0 pr-1">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              isFullscreen ? 'bg-blue-600/30 text-blue-400' : 'bg-[#002FA7]/10 text-[#002FA7]'
            }`}
          >
            <FileText className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4
              className={`text-xs sm:text-sm font-bold truncate max-w-[170px] sm:max-w-[280px] md:max-w-[360px] ${
                isFullscreen ? 'text-white' : 'text-[#12247A]'
              }`}
              title={title}
            >
              {title}
            </h4>
            <p className="text-[11px] text-[#64748B] truncate font-mono hidden sm:block">
              {effectiveFileName}
            </p>
          </div>
        </div>

        {/* Center: Page Controls + Reading Mode Selector */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Previous Page */}
          <button
            type="button"
            onClick={handlePrevPage}
            disabled={currentPage <= 1 || loading}
            aria-label="Previous Page"
            title="Previous Page"
            className={`p-1.5 rounded-lg text-xs font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${
              isFullscreen
                ? 'hover:bg-slate-800 text-slate-200'
                : 'hover:bg-slate-200 text-slate-700 bg-white border border-slate-200'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Page Indicator */}
          <div
            className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono ${
              isFullscreen ? 'bg-slate-800 text-slate-200' : 'bg-white border border-slate-200 text-[#12247A]'
            }`}
          >
            <span>{currentPage}</span>
            <span className="opacity-50 mx-1">/</span>
            <span>{numPages || (loading ? '...' : 1)}</span>
          </div>

          {/* Next Page */}
          <button
            type="button"
            onClick={handleNextPage}
            disabled={currentPage >= numPages || loading}
            aria-label="Next Page"
            title="Next Page"
            className={`p-1.5 rounded-lg text-xs font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${
              isFullscreen
                ? 'hover:bg-slate-800 text-slate-200'
                : 'hover:bg-slate-200 text-slate-700 bg-white border border-slate-200'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Reading Mode Switcher: Continuous (Default) vs Single Page */}
          <div
            className={`hidden md:flex items-center rounded-lg p-0.5 border text-xs ${
              isFullscreen ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
            }`}
          >
            <button
              type="button"
              onClick={() => setReadingMode('continuous')}
              title="Continuous Vertical Scroll (Default)"
              className={`flex items-center gap-1 px-2 py-1 rounded-md font-medium text-[11px] transition-all cursor-pointer ${
                readingMode === 'continuous'
                  ? 'bg-[#002FA7] text-white shadow-2xs font-bold'
                  : isFullscreen
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Scroll className="w-3 h-3" />
              <span>Scroll</span>
            </button>

            <button
              type="button"
              onClick={() => setReadingMode('single')}
              title="Single Page Mode"
              className={`flex items-center gap-1 px-2 py-1 rounded-md font-medium text-[11px] transition-all cursor-pointer ${
                readingMode === 'single'
                  ? 'bg-[#002FA7] text-white shadow-2xs font-bold'
                  : isFullscreen
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>Page</span>
            </button>
          </div>
        </div>

        {/* Right Controls: Zoom, Reset, Fit, Fullscreen, Open in Tab, Download */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Zoom controls */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={scale <= 0.5 || loading}
              aria-label="Zoom Out"
              title="Zoom Out"
              className={`p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-40 ${
                isFullscreen
                  ? 'hover:bg-slate-800 text-slate-300'
                  : 'hover:bg-slate-200 text-slate-600 bg-white border border-slate-200'
              }`}
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>

            {/* Clickable Zoom Percentage Badge (Click to reset to 100%) */}
            <button
              type="button"
              onClick={handleResetZoom}
              title="Click to reset to 100%"
              className={`text-[11px] font-mono font-bold px-2 py-1 rounded-md transition-colors cursor-pointer ${
                isFullscreen
                  ? 'text-slate-200 hover:bg-slate-800'
                  : scale === 1.0
                  ? 'text-[#002FA7] bg-blue-50 font-extrabold border border-blue-200'
                  : 'text-slate-700 bg-white border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {Math.round(scale * 100)}%
            </button>

            <button
              type="button"
              onClick={handleZoomIn}
              disabled={scale >= 3.0 || loading}
              aria-label="Zoom In"
              title="Zoom In"
              className={`p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-40 ${
                isFullscreen
                  ? 'hover:bg-slate-800 text-slate-300'
                  : 'hover:bg-slate-200 text-slate-600 bg-white border border-slate-200'
              }`}
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Fit to width */}
          <button
            type="button"
            onClick={handleFitToWidth}
            disabled={loading}
            title="Fit to Width"
            className={`p-1.5 rounded-lg transition-colors cursor-pointer hidden sm:inline-flex ${
              isFullscreen
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-200 text-slate-600 bg-white border border-slate-200'
            }`}
          >
            <Maximize className="w-3.5 h-3.5" />
          </button>

          {/* Reset Zoom to 100% button */}
          <button
            type="button"
            onClick={handleResetZoom}
            disabled={loading || scale === 1.0}
            title="Reset to 100%"
            className={`p-1.5 rounded-lg transition-colors cursor-pointer hidden md:inline-flex ${
              isFullscreen
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-200 text-slate-600 bg-white border border-slate-200'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Rotate */}
          <button
            type="button"
            onClick={handleRotate}
            disabled={loading}
            title="Rotate Page"
            className={`p-1.5 rounded-lg transition-colors cursor-pointer hidden sm:inline-flex ${
              isFullscreen
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-200 text-slate-600 bg-white border border-slate-200'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          {/* Read / Open in New Tab Button */}
          <a
            href={activeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Read original PDF directly in a new tab"
            className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              isFullscreen
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-[#002FA7] hover:bg-[#12247A] text-white shadow-2xs'
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Read in New Tab</span>
          </a>

          {/* Download PDF Button */}
          {showDownload && (
            <a
              href={activeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={effectiveFileName}
              title={`Download ${effectiveFileName}`}
              className={`p-1.5 rounded-lg transition-colors inline-flex items-center gap-1 text-xs font-semibold ${
                isFullscreen
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  : 'bg-white hover:bg-slate-100 text-[#002FA7] border border-[#002FA7]'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Download</span>
            </a>
          )}

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen View'}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isFullscreen
                ? 'hover:bg-slate-800 text-slate-200'
                : 'hover:bg-slate-200 text-slate-600 bg-white border border-slate-200'
            }`}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Document Scrollable Canvas Area */}
      <div
        ref={containerRef}
        className={`flex-1 overflow-auto p-3 sm:p-6 relative scroll-smooth ${
          isFullscreen ? 'bg-[#0B1120]' : 'bg-[#E2E8F0]/40'
        }`}
      >
        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-20 space-y-3">
            <Loader2 className="w-8 h-8 text-[#002FA7] animate-spin" />
            <p className="text-xs sm:text-sm font-semibold text-[#12247A]">
              Loading document pages...
            </p>
          </div>
        )}

        {/* Error Fallback */}
        {error && !loading && (
          <div className="my-12 max-w-md mx-auto p-6 bg-white rounded-2xl border border-amber-200 shadow-md text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 mx-auto flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-800">
                This publication could not be loaded right now. Please try again.
              </h4>
              <p className="text-xs text-slate-600">
                You can retry loading or access the original publication directly below:
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={handleRetry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>

              <a
                href={activeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#002FA7] hover:bg-[#12247A] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in New Tab</span>
              </a>

              <a
                href={activeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download={effectiveFileName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>
        )}

        {/* CONTINUOUS VERTICAL READING MODE (Default) */}
        {!loading && !error && pdfDocRef.current && readingMode === 'continuous' && (
          <div className="w-full flex flex-col items-center gap-6 py-2">
            {pageNumbers.map((pNum) => (
              <PDFPageItem
                key={pNum}
                pdfDoc={pdfDocRef.current}
                pageNumber={pNum}
                totalPages={numPages || pageNumbers.length}
                scale={scale}
                rotation={rotation}
                baseDimensions={baseDimensions}
                scrollContainerRef={containerRef}
                onPageInView={handlePageInView}
              />
            ))}
          </div>
        )}

        {/* SINGLE PAGE READING MODE (Optional switch) */}
        {!loading && !error && pdfDocRef.current && readingMode === 'single' && (
          <div className="w-full min-h-full flex items-center justify-center py-4">
            <PDFPageItem
              key={currentPage}
              pdfDoc={pdfDocRef.current}
              pageNumber={currentPage}
              totalPages={numPages || 1}
              scale={scale}
              rotation={rotation}
              baseDimensions={baseDimensions}
              scrollContainerRef={containerRef}
            />
          </div>
        )}
      </div>

      {/* Reader Footer Navigation & Info */}
      <div
        className={`px-4 py-2 border-t border-[#EEF2F7] text-xs flex flex-wrap items-center justify-between gap-2 shrink-0 ${
          isFullscreen ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white text-slate-500'
        }`}
      >
        <div className="flex items-center gap-3 text-[11px]">
          <span>
            {readingMode === 'continuous' ? (
              <>
                <strong>Continuous Scroll:</strong> Page {currentPage} of {numPages || 1}
              </>
            ) : (
              <>
                <strong>Single Page:</strong> Page {currentPage} of {numPages || 1}
              </>
            )}
          </span>
          <span className="hidden sm:inline opacity-60">|</span>
          <span className="hidden sm:inline font-mono">Zoom: {Math.round(scale * 100)}%</span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <button
            type="button"
            onClick={handleOpenInNewTab}
            className="text-[#002FA7] dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Direct Asset Link</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
