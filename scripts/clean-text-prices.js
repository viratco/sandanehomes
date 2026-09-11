import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.join(__dirname, '../src/data/landingPages.js');

let fileContent = fs.readFileSync(targetFile, 'utf8');

// Replace specific price numbers in text FAQs (e.g. ₹180,000, ₹195,000, ₹215,000, ₹230,000, ₹235,000, ₹245,000, ₹260,000, ₹270,000, ₹285,000, ₹290,000) with corporate quote phrasing
fileContent = fileContent.replace(/₹\d{1,3}(,\d{3})+(\/month|\s*per month|\s*monthly)?/g, 'available on corporate request (B2B tariff)');
fileContent = fileContent.replace(/starting at ₹\d{1,3}(,\d{3})+/g, 'available on corporate request');

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log('Sanitized text price references in landingPages.js!');
