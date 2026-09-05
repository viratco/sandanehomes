import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.join(__dirname, '../src/data/blogPosts.js');

const rawContent = fs.readFileSync(targetFile, 'utf8');
const jsonStr = rawContent.replace(/^export const blogPosts = /, '').replace(/;\s*$/, '');
let posts = eval(jsonStr);

// A list of verified, existing luxury cover images in /public/blog/covers/
const validCovers = [
  "/blog/covers/residences-editorial.png",
  "/blog/covers/coco-facade.jpg",
  "/blog/covers/coco-bedroom.png",
  "/blog/covers/glam-facade.jpg",
  "/blog/covers/amaaltash-facade.jpg",
  "/blog/covers/amara-facade.jpg",
  "/blog/covers/sandane-homes-facade.jpg",
  "/blog/covers/hotel-room-6106.jpg",
  "/blog/covers/hotel-room-6108.jpg",
  "/blog/covers/hotel-room-6257.jpg",
  "/blog/covers/hotel-suite-6094.jpg",
  "/blog/covers/luxury-suite-7254.jpg",
  "/blog/covers/luxury-suite-7255.jpg",
  "/blog/covers/luxury-suite-7256.jpg",
  "/blog/covers/luxury-suite-7257.jpg",
  "/blog/covers/living-room.jpg",
  "/blog/covers/kitchen.jpg",
  "/blog/covers/hallway-mirror.jpg",
  "/blog/covers/dining-cafe-1.jpg",
  "/blog/covers/aesthetic-1.jpg",
  "/blog/covers/aesthetic-2.jpg",
  "/blog/covers/aesthetic-3.jpg",
  "/blog/covers/aesthetic-4.jpg",
  "/blog/covers/aesthetic-5.jpg",
  "/blog/covers/aesthetic-6.jpg",
  "/blog/covers/aesthetic-7.jpg",
  "/blog/covers/aesthetic-8.jpg",
  "/blog/covers/aesthetic-9.jpg",
  "/blog/covers/aesthetic-10.jpg"
];

let fixedCount = 0;
posts.forEach((post, index) => {
  if (post.coverImage) {
    const fullPath = path.join(__dirname, '../public', post.coverImage);
    if (!fs.existsSync(fullPath)) {
      // Assign a valid luxury image deterministically based on index
      const replacement = validCovers[index % validCovers.length];
      console.log(`Fixing image for slug "${post.slug}": ${post.coverImage} -> ${replacement}`);
      post.coverImage = replacement;
      fixedCount++;
    }
  } else {
    post.coverImage = validCovers[index % validCovers.length];
    fixedCount++;
  }
});

const updatedContent = `export const blogPosts = ${JSON.stringify(posts, null, 2)};\n`;
fs.writeFileSync(targetFile, updatedContent, 'utf8');
console.log(`Successfully fixed ${fixedCount} cover images across all blog posts!`);
