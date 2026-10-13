const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const fullHtml = fs.readFileSync(path.resolve(__dirname, 'presentation-pdf.html'), 'utf8');

function renderSlide(id, outName) {
  const m = fullHtml.match(new RegExp('<section[^>]+id="' + id + '"[\\s\\S]*?<\\/section>'));
  if (!m) return;
  const slideHtml = '<!DOCTYPE html><html><head><meta charset="UTF-8">' +
    fullHtml.match(/<style>[\s\S]*?<\/style>/)[0] +
    '</head><body style="background:#0B0C0D;display:flex;justify-content:center;padding:0;margin:0;">' +
    m[0] +
    '</body></html>';
  const fPath = path.resolve(__dirname, 'temp-' + id + '.html');
  fs.writeFileSync(fPath, slideHtml);
  spawnSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless',
    '--window-size=1122,794',
    '--screenshot=' + path.resolve(__dirname, outName),
    fPath
  ]);
  fs.unlinkSync(fPath);
  console.log('Rendered ' + outName);
}

renderSlide('page-4', 'preview-slide4.png');
renderSlide('page-9', 'preview-slide9.png');
