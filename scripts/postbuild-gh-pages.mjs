import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const browserDistDir = join(process.cwd(), 'dist', 'barry-architect', 'browser');
const indexHtml = join(browserDistDir, 'index.html');
const notFoundHtml = join(browserDistDir, '404.html');
const noJekyllFile = join(browserDistDir, '.nojekyll');

if (existsSync(indexHtml)) {
  copyFileSync(indexHtml, notFoundHtml);
  writeFileSync(noJekyllFile, '');
  console.log('GitHub Pages post-build complete: created 404.html and .nojekyll in dist/barry-architect/browser');
} else {
  console.warn('Warning: dist/barry-architect/browser/index.html not found; skipping 404.html creation.');
}
