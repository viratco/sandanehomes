import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.join(__dirname, '../src/data/blogPosts.js');

const rawContent = fs.readFileSync(targetFile, 'utf8');
const jsonStr = rawContent.replace(/^export const blogPosts = /, '').replace(/;\s*$/, '');
let posts = eval(jsonStr);

// Filter out Grand Arch blog post
const targetSlug = "grand-arch-ireo-gurugram-corporate-serviced-residences-expats";
const filteredPosts = posts.filter(p => p.slug !== targetSlug);

const fileContent = `export const blogPosts = ${JSON.stringify(filteredPosts, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf8');

console.log(`Successfully removed "${targetSlug}". Total blog posts remaining: ${filteredPosts.length}`);
