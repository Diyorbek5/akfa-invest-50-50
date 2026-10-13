const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const p3 = path.resolve(__dirname, 'preview-slide3.png');
const p9 = path.resolve(__dirname, 'preview-slide9.png');

// Using chrome with hash or evaluate
const script = `
  const el = document.getElementById('page-3');
  el.scrollIntoView();
`;

// Let's create small standalone preview files for page 3 and page 9
const fullHtml = fs.readFileSync(path.resolve(__dirname, 'presentation-pdf.html'), 'utf8');

function extractSlide(id, outName) {
  const m = fullHtml.match(new RegExp('<section[^>]+id=\"' + id + '\"[\\s\\S]*?<\\/section>'));
  if (!m) return;
  const slideHtml = '<!DOCTYPE html><html><head><meta charset=\"UTF-8\">' +
    fullHtml.match(/<style>[\s\S]*?<\/style>/)[0] +
    '</head><body style=\"background:#0B0C0D;display:flex;justify-content:center;padding:20px;\">' +
    m[0] +
    '</body></html>';
  const fPath = path.resolve(__dirname, 'temp-' + id + '.html');
  fs.writeFileSync(fPath, slideHtml);
  spawnSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless',
    '--window-size=1250,880',
    '--screenshot=' + path.resolve(__dirname, outName),
    fPath
  ]);
  fs.unlinkSync(fPath);
}

extractSlide('page-2', 'preview-slide2.png');
extractSlide('page-4', 'preview-slide4.png');
extractSlide('page-8', 'preview-slide8.png');
extractSlide('page-10', 'preview-slide10.png');
console.log('Done extracting 2, 4, 8, 10');
