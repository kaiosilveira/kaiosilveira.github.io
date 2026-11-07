// Renders public/og-image.png (1200x630) in the Editorial look with headless Chromium.
// Usage: yarn og-image   (requires `npx playwright install chromium` once)
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const font = file => pathToFileURL(path.join(root, 'node_modules/@fontsource-variable', file)).href;
const out = path.join(root, 'public/og-image.png');

const tagline =
  'Architecture decisions are bets. I make them explicit, test the risky ones, and write down what would change my mind.';

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
@font-face { font-family: Newsreader; font-style: normal; font-weight: 200 800;
  src: url(${font('newsreader/files/newsreader-latin-opsz-normal.woff2')}) format('woff2'); }
@font-face { font-family: Newsreader; font-style: italic; font-weight: 200 800;
  src: url(${font('newsreader/files/newsreader-latin-opsz-italic.woff2')}) format('woff2'); }
@font-face { font-family: Hanken; font-weight: 100 900;
  src: url(${font('hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2')}) format('woff2'); }
* { box-sizing: border-box; margin: 0; }
html, body { width: 1200px; height: 630px; }
body { background: #fbfbfa; color: #15171c; font-family: Hanken, sans-serif; padding: 64px 80px;
  display: flex; flex-direction: column; justify-content: space-between; }
.kicker { font-size: 20px; letter-spacing: .14em; text-transform: uppercase; color: #4a4f5a; }
.name { font-family: Newsreader, serif; font-weight: 300; font-size: 168px; line-height: .86;
  letter-spacing: -.045em; font-variation-settings: "opsz" 72; }
.name span { display: block; }
.name .last { font-style: italic; font-weight: 400; padding-left: .55em; }
.name .last::after { content: "."; color: #2a45b8; font-style: normal; }
.foot { display: flex; justify-content: space-between; align-items: end; gap: 48px;
  border-top: 1px solid #dfe0e3; padding-top: 28px; }
.tagline { font-family: Newsreader, serif; font-size: 34px; line-height: 1.2; letter-spacing: -.015em;
  max-width: 820px; text-wrap: balance; }
.url { font-size: 20px; color: #4a4f5a; white-space: nowrap; }
</style></head><body>
<p class="kicker">Software Architect</p>
<h1 class="name"><span>Kaio</span><span class="last">Silveira</span></h1>
<div class="foot"><p class="tagline">${tagline}</p><p class="url">kaiosilveira.github.io</p></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, type: 'png' });
await browser.close();
console.log(`Wrote ${path.relative(root, out)}`);
