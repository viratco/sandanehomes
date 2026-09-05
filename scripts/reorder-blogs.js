import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.join(__dirname, '../src/data/blogPosts.js');

const rawContent = fs.readFileSync(targetFile, 'utf8');

// Extract array string
const jsonStr = rawContent.replace(/^export const blogPosts = /, '').replace(/;\s*$/, '');

let posts = [];
try {
  posts = eval(jsonStr);
} catch(e) {
  console.error("Error evaluating blog posts:", e);
  process.exit(1);
}

const targetSlugs = [
  "sekisui-dljm-corporate-housing-greater-noida-yeida",
  "seiko-advance-industrial-coating-expats-noida-greater-noida",
  "mobase-india-corporate-serviced-apartments-greater-noida",
  "iljin-electronics-ascent-k-corporate-residences-greater-noida",
  "india-steel-summit-sumitomo-corporate-housing-greater-noida",
  "hitachi-high-tech-corporate-housing-noida-greater-noida-yeida",
  "lg-electronics-techzone-corporate-serviced-apartments-greater-noida",
  "spark-minda-automotive-joint-venture-corporate-housing-greater-noida",
  "escorts-kubota-japanese-expats-corporate-housing-greater-noida-yeida",
  "japanese-city-noida-international-airport-yeida-corporate-housing"
];

const newPosts = posts.filter(p => targetSlugs.includes(p.slug));
const oldPosts = posts.filter(p => !targetSlugs.includes(p.slug));

const reordered = [...newPosts, ...oldPosts];

const fileContent = `export const blogPosts = ${JSON.stringify(reordered, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`Reordered ${posts.length} posts! Top posts are now the 10 targeted enterprise outreach blogs.`);
