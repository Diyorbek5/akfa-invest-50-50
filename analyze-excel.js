const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

// Find the xlsx file
const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.xlsx'));
console.log('Found Excel files:', files);

const filePath = path.join(dir, files[0]);
const workbook = XLSX.readFile(filePath);

console.log('\n=== WORKBOOK ANALYSIS ===');
console.log('Sheet Names:', workbook.SheetNames);
console.log('Number of sheets:', workbook.SheetNames.length);

workbook.SheetNames.forEach((sheetName, idx) => {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`SHEET ${idx + 1}: "${sheetName}"`);
    console.log('='.repeat(80));
    
    const sheet = workbook.Sheets[sheetName];
    const range = XLSX.utils.decode_range(sheet['!ref'] || 'A1');
    console.log(`Range: ${sheet['!ref']}`);
    console.log(`Rows: ${range.e.r - range.s.r + 1}, Cols: ${range.e.c - range.s.c + 1}`);
    
    // Get all data as JSON
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
    
    // Print all rows
    jsonData.forEach((row, rowIdx) => {
        const nonEmpty = row.filter(cell => cell !== '' && cell !== null && cell !== undefined);
        if (nonEmpty.length > 0) {
            console.log(`Row ${rowIdx + 1}: ${JSON.stringify(row)}`);
        }
    });
    
    // Also check for merged cells
    if (sheet['!merges']) {
        console.log(`\nMerged cells: ${JSON.stringify(sheet['!merges'])}`);
    }
});
