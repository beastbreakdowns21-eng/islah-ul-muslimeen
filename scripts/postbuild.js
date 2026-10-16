import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

try {
  const indexHtml = path.join(distDir, 'index.html');
  const notFoundHtml = path.join(distDir, '404.html');

  if (fs.existsSync(indexHtml)) {
    // Generate GitHub Pages SPA fallback
    fs.copyFileSync(indexHtml, notFoundHtml);
    console.log('✓ Generated dist/404.html for GitHub Pages SPA compatibility.');
  }

  const redirects = path.join(distDir, '_redirects');
  if (fs.existsSync(redirects)) {
    console.log('✓ Verified dist/_redirects for Netlify SPA routing.');
  }

  const htaccess = path.join(distDir, '.htaccess');
  if (fs.existsSync(htaccess)) {
    console.log('✓ Verified dist/.htaccess for Hostinger/Apache SPA routing.');
  }
} catch (err) {
  console.warn('Postbuild notice:', err.message);
}
