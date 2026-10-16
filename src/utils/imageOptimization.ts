/**
 * Netlify Image CDN helper for large static content images.
 * In production on Netlify, serves modern WebP format resized to requested display widths.
 * In local dev or other environments, transparently falls back to direct static asset path.
 *
 * Example:
 * getNetlifyImageUrl('/assets/cover.png', { width: 400 })
 * => '/.netlify/images?url=%2Fassets%2Fcover.png&w=400&fm=webp' (on Netlify)
 * => '/assets/cover.png' (in local dev)
 */

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  fit?: 'cover' | 'contain';
}

export function getNetlifyImageUrl(src?: string | null, options: ImageOptions = {}): string {
  if (!src) return '';
  if (src.startsWith('data:') || src.startsWith('blob:') || src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // Only rewrite to Netlify Image CDN in production when deployed on Netlify or supported host
  if (
    typeof window !== 'undefined' &&
    (window.location.hostname.includes('netlify.app') || window.location.hostname.includes('islahulmuslimeen.org'))
  ) {
    const params = new URLSearchParams();
    params.set('url', src);
    if (options.width) params.set('w', String(options.width));
    if (options.height) params.set('h', String(options.height));
    params.set('q', String(options.quality ?? 82));
    params.set('fm', options.format ?? 'webp');
    if (options.fit) params.set('fit', options.fit);
    return `/.netlify/images?${params.toString()}`;
  }

  return src;
}
