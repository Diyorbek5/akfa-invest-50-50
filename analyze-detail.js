const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.xlsx'));
const filePath = path.join(dir, files[0]);
const workbook = XLSX.readFile(filePath);

// Print ALL rows including empty ones for Sheet 1 to understand full structure
const sheet1 = workbook.Sheets[workbook.SheetNames[0]];
const data1 = XLSX.utils.sheet_to_json(sheet1, { header: 1, defval: '', blankrows: true });
console.log(`SHEET 1: "${workbook.SheetNames[0]}" - ALL ROWS:`);
data1.forEach((row, i) => {
    console.log(`Row ${i+1}: ${JSON.stringify(row)}`);
});

// Sheet 5 - investor offer - get ALL data
const sheet5 = workbook.Sheets[workbook.SheetNames[4]];
const data5 = XLSX.utils.sheet_to_json(sheet5, { header: 1, defval: '', blankrows: true });
console.log(`\n\nSHEET 5: "${workbook.SheetNames[4]}" - ALL ROWS:`);
data5.forEach((row, i) => {
    console.log(`Row ${i+1}: ${JSON.stringify(row)}`);
});

// Sheet 6 - money distribution
const sheet6 = workbook.Sheets[workbook.SheetNames[5]];
const data6 = XLSX.utils.sheet_to_json(sheet6, { header: 1, defval: '', blankrows: true });
console.log(`\n\nSHEET 6: "${workbook.SheetNames[5]}" - ALL ROWS:`);
data6.forEach((row, i) => {
    console.log(`Row ${i+1}: ${JSON.stringify(row)}`);
});
