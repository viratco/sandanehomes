import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.join(__dirname, '../generate-seo.js');

let fileContent = fs.readFileSync(targetFile, 'utf8');

const newSlugsToAdd = [
  'up-japan-city-noida-international-airport-yeida-expat-housing',
  'japan-city-yamuna-expressway-corporate-accommodation-japanese-engineers',
  'up-japan-township-noida-airport-expat-villas-serviced-residences',
  'japan-city-noida-international-airport-japanese-expat-housing-ja',
  'japanese-corporate-relocation-housing-greater-noida-yeida-guide',
  'automotive-supply-chain-japanese-engineers-housing-greater-noida',
  'yamuna-expressway-industrial-park-expat-housing-sandane-homes',
  'japanese-speaking-support-expat-serviced-apartments-noida-gurgaon',
  'sekisui-dljm-corporate-housing-greater-noida-yeida',
  'seiko-advance-industrial-coating-expats-noida-greater-noida',
  'mobase-india-corporate-serviced-apartments-greater-noida',
  'iljin-electronics-ascent-k-corporate-residences-greater-noida',
  'india-steel-summit-sumitomo-corporate-housing-greater-noida',
  'hitachi-high-tech-corporate-housing-noida-greater-noida-yeida',
  'lg-electronics-techzone-corporate-serviced-apartments-greater-noida',
  'spark-minda-automotive-joint-venture-corporate-housing-greater-noida',
  'escorts-kubota-japanese-expats-corporate-housing-greater-noida-yeida',
  'japanese-city-noida-international-airport-yeida-corporate-housing'
];

// Prepend these new high-priority slugs into the highPrioritySlugs array in generate-seo.js
const needle = 'const highPrioritySlugs = [\n';
if (fileContent.includes(needle)) {
  const formattedSlugs = newSlugsToAdd.map(s => `  '${s}',`).join('\n') + '\n';
  fileContent = fileContent.replace(needle, needle + formattedSlugs);
  fs.writeFileSync(targetFile, fileContent, 'utf8');
  console.log('Successfully updated generate-seo.js with high-priority slugs!');
} else {
  console.log('Could not find needle in generate-seo.js');
}
