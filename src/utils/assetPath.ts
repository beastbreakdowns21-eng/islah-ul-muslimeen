/**
 * Resolves static asset paths relative to the current Vite BASE_URL.
 * Supports root domain ('/'), subpaths (e.g. GitHub Pages '/repo/'),
 * and preserves external URLs (http/https/data:/blob:).
 */
export function resolveAssetPath(path: string | undefined | null): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const base =
    (typeof import.meta !== 'undefined' &&
      import.meta.env &&
      import.meta.env.BASE_URL) ||
    '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
