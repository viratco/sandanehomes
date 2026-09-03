import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const coversDir = path.join(rootDir, 'public', 'blog', 'covers');
const blogPostsPath = path.join(rootDir, 'src', 'data', 'blogPosts.js');

// Available luxury image assets in public/blog/covers
const luxuryImages = [
  '/blog/covers/residences-editorial.png',
  '/blog/covers/hotel-suite-6094.jpg',
  '/blog/covers/hotel-room-6257.jpg',
  '/blog/covers/hotel-room-6108.jpg',
  '/blog/covers/hotel-room-6106.jpg',
  '/blog/covers/hotel-interior-1.jpg',
  '/blog/covers/luxury-suite-7254.jpg',
  '/blog/covers/luxury-suite-7255.jpg',
  '/blog/covers/luxury-suite-7256.jpg',
  '/blog/covers/luxury-suite-7257.jpg',
  '/blog/covers/luxury-suite-7272.jpg',
  '/blog/covers/luxury-suite-7278.jpg',
  '/blog/covers/aesthetic-1.jpg',
  '/blog/covers/aesthetic-2.jpg',
  '/blog/covers/aesthetic-3.jpg',
  '/blog/covers/aesthetic-6.jpg',
  '/blog/covers/aesthetic-7.jpg',
  '/blog/covers/aesthetic-8.jpg',
  '/blog/covers/aesthetic-9.jpg',
  '/blog/covers/aesthetic-10.jpg',
  '/blog/covers/aesthetic-12.jpg',
  '/blog/covers/aesthetic-13.jpg',
  '/blog/covers/aesthetic-14.jpg',
  '/blog/covers/aesthetic-15.jpg',
  '/blog/covers/aesthetic-20.jpg',
  '/blog/covers/aesthetic-22.jpg',
  '/blog/covers/aesthetic-25.jpg',
  '/blog/covers/aesthetic-26.jpg',
  '/blog/covers/coco-facade.jpg',
  '/blog/covers/coco-reception.jpg',
  '/blog/covers/coco-lounge.jpg',
  '/blog/covers/coco-hallway.jpg',
  '/blog/covers/coco-netflix-room.jpg',
  '/blog/covers/glam-facade.jpg',
  '/blog/covers/glam-room-1.jpg',
  '/blog/covers/glam-room-2.jpg',
  '/blog/covers/glam-room-3.jpg',
  '/blog/covers/glam-room-4.jpg',
  '/blog/covers/amaaltash-facade.jpg',
  '/blog/covers/amaaltash-room.jpg',
  '/blog/covers/amara-facade.jpg',
  '/blog/covers/amara-suite-1.jpg',
  '/blog/covers/amara-suite-2.jpg',
  '/blog/covers/amara-suite-3.jpg',
  '/blog/covers/amara-bedroom.jpg',
  '/blog/covers/amara-hallway.jpg',
  '/blog/covers/korean-breakfast.png',
  '/blog/covers/dining-cafe-1.jpg',
  '/blog/covers/living-room.jpg',
  '/blog/covers/kitchen.jpg',
  '/blog/covers/hallway-mirror.jpg'
];

console.log(`Reading ${blogPostsPath}...`);
const fileContent = fs.readFileSync(blogPostsPath, 'utf8');
const jsonText = fileContent.replace(/^\s*export\s+const\s+blogPosts\s*=\s*/, '').replace(/;\s*$/, '');
const posts = JSON.parse(jsonText);

console.log(`Distributing ${luxuryImages.length} luxury images across ${posts.length} blog posts...`);

posts.forEach((post, index) => {
  // Diversify cover images across all blog posts
  const selectedImage = luxuryImages[index % luxuryImages.length];
  post.coverImage = selectedImage;
});

const outputCode = `export const blogPosts = ${JSON.stringify(posts, null, 2)};\n`;
fs.writeFileSync(blogPostsPath, outputCode, 'utf8');

console.log(`Successfully updated cover images for all ${posts.length} blog posts!`);
