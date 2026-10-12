const fs = require('fs');
const content = fs.readFileSync('akfa-investor-presentation.html', 'utf8');
const slides = content.match(/data-slide="\d+"/g);
console.log('Slide count:', slides ? slides.length : 0);

const slideSections = content.split(/<!-- =+ SLIDE \d+/);
console.log('Slide comments split count:', slideSections.length - 1);

const titles = [];
const regex = /<h[12][^>]*>(.*?)<\/h[12]>/gs;
let match;
while ((match = regex.exec(content)) !== null) {
  titles.push(match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
}
console.log('\nSlide titles count:', titles.length);
titles.forEach((t, i) => console.log(`${i + 1}. ${t}`));
