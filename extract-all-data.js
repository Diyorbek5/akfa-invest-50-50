const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = XLSX.readFile('акфа презинтатцыя — копия.xlsx');

const result = {};

workbook.SheetNames.forEach(name => {
  const sheet = workbook.Sheets[name];
  result[name] = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
});

fs.writeFileSync('presentation-data.json', JSON.stringify(result, null, 2), 'utf8');
console.log('Saved presentation-data.json successfully with sheets:', Object.keys(result));
