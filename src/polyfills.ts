/**
 * Production Polyfills & Runtime Compatibility Layer
 * Ensures seamless execution across all browsers (Chrome, Safari, Firefox, Edge, Mobile WebViews)
 * and prevents runtime crashes from missing ECMAScript features used by pdfjs-dist.
 */

// 0. Ensure window.fetch is writable and has a setter to prevent:
// "Cannot set property fetch of #<Window> which has only a getter"
if (typeof window !== 'undefined' && 'fetch' in window) {
  try {
    let curFetch = window.fetch;
    const desc =
      Object.getOwnPropertyDescriptor(window, 'fetch') ||
      Object.getOwnPropertyDescriptor(Object.getPrototypeOf(window), 'fetch');
    if (!desc || !desc.set) {
      Object.defineProperty(window, 'fetch', {
        get() {
          return curFetch;
        },
        set(v: typeof window.fetch) {
          curFetch = v;
        },
        configurable: true,
        enumerable: true,
      });
    }
  } catch (e) {
    // ignore
  }
}

// 1. ECMAScript 2024 Promise.withResolvers polyfill
if (typeof Promise !== 'undefined' && typeof (Promise as any).withResolvers !== 'function') {
  (Promise as any).withResolvers = function <T>() {
    let resolve!: (value: T | PromiseLike<T>) => void;
    let reject!: (reason?: any) => void;
    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

// 2. Promise.try polyfill (Stage 3 ECMAScript / pdfjs-dist v4+)
if (typeof Promise !== 'undefined' && typeof (Promise as any).try !== 'function') {
  (Promise as any).try = function (fn: any, ...args: any[]) {
    return new Promise((resolve) => {
      resolve(fn(...args));
    });
  };
}

// 3. Map.prototype.getOrInsertComputed & getOrInsert polyfills (ECMAScript Map Upsert / pdfjs-dist v6+)
if (typeof Map !== 'undefined') {
  if (!(Map.prototype as any).getOrInsertComputed) {
    (Map.prototype as any).getOrInsertComputed = function (key: any, callback: (k: any) => any) {
      if (this.has(key)) {
        return this.get(key);
      }
      const value = callback(key);
      this.set(key, value);
      return value;
    };
  }
  if (!(Map.prototype as any).getOrInsert) {
    (Map.prototype as any).getOrInsert = function (key: any, defaultValue: any) {
      if (this.has(key)) {
        return this.get(key);
      }
      this.set(key, defaultValue);
      return defaultValue;
    };
  }
}

// 4. Uint8Array.prototype.toHex polyfill (TC39 proposal / pdfjs-dist v6+)
if (typeof Uint8Array !== 'undefined' && !(Uint8Array.prototype as any).toHex) {
  (Uint8Array.prototype as any).toHex = function () {
    let hex = '';
    for (let i = 0; i < this.length; i++) {
      hex += this[i].toString(16).padStart(2, '0');
    }
    return hex;
  };
}

// 5. Safe globalThis fallback
if (typeof globalThis === 'undefined') {
  (window as any).globalThis = window;
}

export {};
