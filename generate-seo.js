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
  '/faqs': {
    title: 'FAQs | Sandane Homes Serviced Apartments Greater Noida',
    description: 'Answers to your most common questions about staying at Sandane Homes — from services and amenities to booking and corporate housing options.',
  },
  '/serviced-apartments-greater-noida': {
    title: 'Luxury Serviced Apartments Greater Noida | Sandane Homes',
    description: 'Fully furnished luxury serviced apartments in Greater Noida for expats & professionals. Daily housekeeping and utilities included. Just arrive.',
  },
  '/korean-expat-housing-delhi-ncr': {
    title: 'Korean Expat Housing in Delhi NCR | Serviced Apartments near Samsung, LG | Sandane',
    description: 'Premium serviced apartments for Korean expats in Greater Noida & Delhi NCR. Near Samsung R&D, LG Electronics, Korean mart. FRRO help, corporate billing, daily housekeeping. 한국인 주재원 아파트.',
    lang: 'ko',
    hreflang: ['en', 'ko', 'x-default'],
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        "name": "Sandane Homes — Korean Expat Housing Delhi NCR",
        "description": "Premium fully furnished serviced apartments for Korean expats in Greater Noida and Delhi NCR. Near Samsung R&D, LG, and Hyundai offices.",
        "url": "https://www.sandanehomes.com/korean-expat-housing-delhi-ncr",
        "telephone": "+919711722273",
        "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "High-Speed WiFi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Fully Furnished Kitchen", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Power Backup", "value": true }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Is Greater Noida safe for Korean families?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Greater Noida is one of the safest cities in Delhi NCR. Our properties are located inside gated premium societies such as Jaypee Greens, Ansal Golf Links, and Godrej Golf Link — all of which have 24/7 CCTV surveillance, security guards at every gate, and intercom systems. These societies are known for their quiet, disciplined environments with very low crime rates, making them ideal for Korean families." } },
          { "@type": "Question", "name": "How far is the apartment from Samsung R&D Noida and LG offices?", "acceptedAnswer": { "@type": "Answer", "text": "Our serviced apartments in Greater Noida are approximately 25–35 minutes by car from the Samsung R&D campus in Noida Sector 129 and the LG Electronics India office in Noida. With the Yamuna Expressway and Noida-Greater Noida Expressway providing direct connectivity, the commute is smooth even during peak hours." } },
          { "@type": "Question", "name": "Are there Korean grocery stores or restaurants near the apartments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. There is a well-stocked Korean mart in the Greater Noida / Noida corridor with Korean staples: ramyeon, kimchi, gochujang, doenjang, and packaged goods. Several Korean and Asian restaurants have also opened in the Sector 18 Noida area and near the India Expo Mart, offering authentic Korean BBQ and comfort food." } },
          { "@type": "Question", "name": "Do you assist Korean expats with FRRO registration?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our concierge team actively helps Korean expats navigate the FRRO registration process, which is mandatory within 14 days of arriving in India on a long-term visa. We guide you on the required documents and coordinate with your company's HR team to ensure the process is completed on time." } },
          { "@type": "Question", "name": "Can corporate HR teams book in bulk for a group of Korean employees?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer dedicated corporate housing packages for Korean multinationals and their HR teams: direct company invoicing, multiple simultaneous move-ins, airport pickup coordination, and a dedicated account manager." } }
        ]
      }
    ]
  },
  '/japanese-expat-housing-delhi-ncr': {
    title: 'Japanese Expat Housing Greater Noida | Near Honda, Yamaha | 日本人向け住宅',
    description: 'Premium serviced apartments in Greater Noida designed for Japanese expats. Close to Honda and Yamaha plants. Daily housekeeping, top security, fully furnished. 日本人向けサービスアパートメント.',
    lang: 'ja',
    hreflang: ['en', 'ja', 'x-default'],
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        "name": "Sandane Homes — Japanese Expat Housing Greater Noida",
        "description": "Premium fully furnished serviced apartments for Japanese expats in Greater Noida. Near Honda, Yamaha, and Yamuna Expressway industrial hubs.",
        "url": "https://www.sandanehomes.com/japanese-expat-housing-delhi-ncr",
        "telephone": "+919711722273",
        "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "High-Speed WiFi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Fully Furnished Kitchen", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Power Backup", "value": true }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Is Greater Noida safe for Japanese expatriates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely. Greater Noida is widely considered one of the most secure and well-planned cities in the Delhi NCR region. Our serviced apartments are situated within highly secure, premium gated communities like Jaypee Greens, Ansal Golf Links, and Godrej Golf Link, featuring 24/7 CCTV monitoring and professional security staff." } },
          { "@type": "Question", "name": "How long is the commute to Honda and Yamaha plants from the apartments?", "acceptedAnswer": { "@type": "Answer", "text": "The commute from our Greater Noida apartments to the Honda Motorcycle and Scooter India (HMSI) plant and the India Yamaha Motor plant typically ranges from 15 to 30 minutes, depending on the exact location along the Yamuna Expressway or Surajpur industrial area." } },
          { "@type": "Question", "name": "Do you provide corporate billing directly to our company?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in corporate housing and provide seamless corporate billing. We can invoice your Indian subsidiary (e.g., Honda India, Yamaha Motor India, or their vendors) directly, with clear, itemized GST invoices." } },
          { "@type": "Question", "name": "Is it easy to access Japanese food and groceries?", "acceptedAnswer": { "@type": "Answer", "text": "There are several Asian marts in the vicinity that stock Japanese staples like soy sauce, miso, and rice, and premium grocery delivery services bring imported Japanese goods to your door. Nearby Noida Sector 18 and Delhi host excellent authentic Japanese restaurants." } },
          { "@type": "Question", "name": "Do you offer support for FRRO registration?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our dedicated concierge team has extensive experience assisting Japanese nationals with the paperwork and online processes required for smooth and timely FRRO registration, coordinating closely with your company's HR department." } }
        ]
      }
    ]
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
  
  // Set the html lang attribute for language-targeted pages
  if (seo.lang) {
    newHtml = newHtml.replace(/<html lang=".*?"/i, `<html lang="${seo.lang}"`);
  }

  // hreflang alternate links (all variants point to the same URL — one page serves both languages)
  const hreflangTags = (seo.hreflang || [])
    .map((l) => `<link rel="alternate" hreflang="${l}" href="${canonical}" />`)
    .join('\n    ');

  // Static JSON-LD so non-JS crawlers (ChatGPT, Perplexity, etc.) see the schemas
  const schemaTags = (seo.schemas || [])
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n    ');

  // Inject canonical and OG tags before </head>
  const tagsToInject = `
    <link rel="canonical" href="${canonical}" />
    ${hreflangTags}
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sandane Homes" />
    <meta property="og:image" content="https://www.sandanehomes.com/residences-og.jpg" />
    ${schemaTags}
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
