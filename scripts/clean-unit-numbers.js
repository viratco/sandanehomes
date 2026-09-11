import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.join(__dirname, '../src/data/landingPages.js');

let fileContent = fs.readFileSync(targetFile, 'utf8');

// Strip unit numbers like A-83, D-43, C-21, N-73, G-144, A-3003, E-302, X-2701, B-701, E-1401, D-3204, B-301, Tower XX, C-1901, T5-1704, T9-906b, Unit 6822, A-877B, B-782, 5107, 5917
fileContent = fileContent.replace(/"tower":\s*"Tower\s+[A-Z0-9]+-[0-9]+[A-Za-z]?"/g, (match) => {
  const tower = match.split('-')[0];
  return `${tower}"`;
});

fileContent = fileContent.replace(/"tower":\s*"Floor Unit\s+[0-9A-Z-]+"/g, '"tower": "Independent Builder Floor"');
fileContent = fileContent.replace(/"tower":\s*"Tower XX"/g, '"tower": "Luxury Tower"');
fileContent = fileContent.replace(/"tower":\s*"Tower T[0-9]+-[0-9]+[a-z]?"/g, (match) => {
  const parts = match.split('-');
  return `${parts[0]}"`;
});

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log('Cleaned unit numbers in landingPages.js!');
