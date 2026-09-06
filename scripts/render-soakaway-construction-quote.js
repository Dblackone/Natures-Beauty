const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const root = path.resolve(__dirname, '..');
  const input = path.join(root, 'soakaway-construction-quote-ipoti-ayeni-franlin.html');
  const output = path.join(root, 'soakaway-construction-quote-ipoti-ayeni-franlin.pdf');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(`file:///${input.replace(/\\/g, '/')}`, { waitUntil: 'load' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: output, format: 'A4', scale: 0.92, printBackground: true, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
  await browser.close();
  process.stdout.write(output);
})();
