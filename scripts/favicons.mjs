// Renders the favicon set in public/favicon/ in the Editorial look: an italic Newsreader "K"
// with the cobalt full stop on paper. Usage: yarn favicons   (requires `npx playwright install chromium` once)
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const font = file => pathToFileURL(path.join(root, 'node_modules/@fontsource-variable', file)).href;
const outDir = path.join(root, 'public/favicon');

const targets = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'android-chrome-192x192.png', size: 192 },
  { file: 'android-chrome-512x512.png', size: 512 },
];

const html = size => `<!doctype html>
<html><head><meta charset="utf-8"><style>
@font-face { font-family: Newsreader; font-style: italic; font-weight: 200 800;
  src: url(${font('newsreader/files/newsreader-latin-opsz-italic.woff2')}) format('woff2'); }
@font-face { font-family: Newsreader; font-style: normal; font-weight: 200 800;
  src: url(${font('newsreader/files/newsreader-latin-opsz-normal.woff2')}) format('woff2'); }
* { margin: 0; box-sizing: border-box; }
html, body { width: ${size}px; height: ${size}px; }
body { background: #fbfbfa; display: flex; align-items: center; justify-content: center; }
.k { font-family: Newsreader, serif; font-style: italic; font-weight: ${size < 48 ? 500 : 400};
  font-size: ${size * 0.86}px; line-height: 1; color: #15171c; letter-spacing: -.04em;
  font-variation-settings: "opsz" ${size < 48 ? 6 : 72}; transform: translate(-3%, -2%); }
.k::after { content: "."; font-style: normal; color: #2a45b8; }
</style></head><body><span class="k">K</span></body></html>`;

// Minimal .ico container holding PNG images (supported by every current browser).
const ico = images => {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, png }, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size >= 256 ? 0 : size, e);
    header.writeUInt8(size >= 256 ? 0 : size, e + 1);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(png.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += png.length;
  });
  return Buffer.concat([header, ...images.map(i => i.png)]);
};

const browser = await chromium.launch();
const rendered = {};
for (const { file, size } of targets) {
  const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
  await page.setContent(html(size), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  rendered[size] = await page.screenshot({ path: path.join(outDir, file), type: 'png' });
  await page.close();
  console.log(`Wrote public/favicon/${file}`);
}
await browser.close();

await writeFile(
  path.join(outDir, 'favicon.ico'),
  ico([16, 32].map(size => ({ size, png: rendered[size] }))),
);
console.log('Wrote public/favicon/favicon.ico');
