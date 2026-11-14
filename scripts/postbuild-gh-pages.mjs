import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  writeFileSync
} from 'node:fs';
import { join } from 'node:path';

const rootDir = process.cwd();
const browserDistDir = join(rootDir, 'dist', 'barry-architect', 'browser');
const docsDir = join(rootDir, 'docs');
const indexHtml = join(browserDistDir, 'index.html');
const notFoundHtml = join(browserDistDir, '404.html');
const noJekyllFile = join(browserDistDir, '.nojekyll');

if (existsSync(indexHtml)) {
  // 1. Create 404.html and .nojekyll inside dist/barry-architect/browser
  copyFileSync(indexHtml, notFoundHtml);
  writeFileSync(noJekyllFile, '');

  // 2. Sync built files into /docs for GitHub Pages /docs mode
  if (existsSync(docsDir)) {
    rmSync(docsDir, { recursive: true, force: true });
  }
  mkdirSync(docsDir, { recursive: true });
  cpSync(browserDistDir, docsDir, { recursive: true });

  // 3. Also place built artifacts in repo root (/) so GitHub Pages "main / (root)" serves index.html instead of README.md
  for (const file of readdirSync(rootDir)) {
    if (/^(main-[A-Z0-9]+\.js|styles-[A-Z0-9]+\.css|polyfills-[A-Z0-9]+\.js|chunk-[A-Z0-9]+\.js)$/i.test(file)) {
      rmSync(join(rootDir, file), { force: true });
    }
  }
  cpSync(browserDistDir, rootDir, { recursive: true });

  console.log(
    'GitHub Pages post-build complete: populated dist/barry-architect/browser, /docs, and root (/) with index.html, 404.html, and .nojekyll'
  );
} else {
  console.warn('Warning: dist/barry-architect/browser/index.html not found; skipping post-build steps.');
}
