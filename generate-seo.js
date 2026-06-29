import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The base URL of the production site
const BASE_URL = 'https://www.sandanehomes.com';

const SEO_MAP = {
  '/': {
    title: 'Sandane Homes | Premium Serviced Apartments & Stays in Greater Noida',
    description: 'Discover luxury serviced apartments and premium residences by Sandane Homes in Greater Noida. Fully-serviced stays with top-notch amenities, professional hospitality, and comfort.',
  },
  '/residences': {
    title: 'Serviced Apartments for Expats in Greater Noida | Residences by Sandane Homes',
    description: 'Premium fully-furnished serviced apartments in Greater Noida for corporate expats. Minutes from Honda, LG, Samsung & Yamaha. Flexible monthly stays. Book now.',
  },
  '/amara': {
    title: 'Amara Inn | Boutique Hotel in Greater Noida by Sandane Homes',
    description: 'Amara Inn — a premium boutique hotel in Greater Noida offering luxurious rooms, top-tier amenities, and exceptional hospitality by Sandane Homes.',
  },
  '/coco-house': {
    title: 'CoCo House | Luxury Boutique Hotel Greater Noida | Sandane Homes',
    description: 'CoCo House by Sandane Homes — a chic boutique luxury hotel stay in Greater Noida with premium rooms, stylish interiors, and curated hospitality experiences.',
  },
  '/saffron': {
    title: 'Saffron Inn | Boutique Hotel Greater Noida | Sandane Homes',
    description: 'Saffron Inn by Sandane Homes — a warm, elegant boutique stay in Greater Noida. Ideal for families, business travellers, and expats seeking comfort and style.',
  },
  '/glam': {
    title: 'Glam by Sandane Homes | Premium Stay Greater Noida',
    description: 'Glam by Sandane Homes — a stylish and modern luxury hotel experience in Greater Noida. Stunning interiors, premium amenities, and unmatched hospitality.',
  },
  '/pine-tales': {
    title: 'Pine Tales by Sandane Homes | Boutique Hotel Greater Noida',
    description: 'Pine Tales — nature-inspired luxury boutique stay in Greater Noida by Sandane Homes. Relax in beautifully designed rooms with serene, premium surroundings.',
  },
  '/amaaltash': {
    title: 'Amaaltash by Sandane Homes | Hotel Greater Noida',
    description: 'Amaaltash by Sandane Homes — premium hospitality and curated luxury in the heart of Greater Noida. Ideal for corporate and leisure travellers.',
  },
  '/faq': {
    title: 'FAQs | Sandane Homes Serviced Apartments Greater Noida',
    description: 'Answers to your most common questions about staying at Sandane Homes — from services and amenities to booking and corporate housing options.',
  },
  '/serviced-apartments-greater-noida': {
    title: 'Luxury Serviced Apartments Greater Noida | Sandane Homes',
    description: 'Fully furnished luxury serviced apartments in Greater Noida for expats & professionals. Daily housekeeping and utilities included. Just arrive.',
  }
};

const distPath = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

// Ensure dist and index.html exist
if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found. Make sure to run `vite build` first.');
  process.exit(1);
}

const originalHtml = fs.readFileSync(indexHtmlPath, 'utf8');

Object.keys(SEO_MAP).forEach((route) => {
  const seo = SEO_MAP[route];
  const canonical = `${BASE_URL}${route === '/' ? '' : route}`;
  
  // Create a regex to find the <title> tag
  let newHtml = originalHtml.replace(/<title>.*?<\/title>/i, `<title>${seo.title}</title>`);
  
  // Replace the meta description (or add if it doesn't exist)
  if (newHtml.includes('<meta name="description"')) {
    newHtml = newHtml.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${seo.description}" />`);
  } else {
    newHtml = newHtml.replace('</title>', `</title>\n    <meta name="description" content="${seo.description}" />`);
  }
  
  // Inject canonical and OG tags before </head>
  const tagsToInject = `
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sandane Homes" />
    <meta property="og:image" content="https://www.sandanehomes.com/residences-og.jpg" />
  `;
  
  newHtml = newHtml.replace('</head>', `${tagsToInject}\n  </head>`);

  // Determine where to save the file
  if (route === '/') {
    // Overwrite the root index.html
    fs.writeFileSync(indexHtmlPath, newHtml, 'utf8');
    console.log(`Generated SEO tags for / (root)`);
  } else {
    // Create a subfolder for the route and save as index.html
    const routePath = path.join(distPath, route.substring(1)); // remove leading slash
    if (!fs.existsSync(routePath)) {
      fs.mkdirSync(routePath, { recursive: true });
    }
    fs.writeFileSync(path.join(routePath, 'index.html'), newHtml, 'utf8');
    console.log(`Generated SEO tags for ${route}`);
  }
});

console.log('Post-build SEO generation complete!');
