import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogPosts.js';
import { landingPages } from './src/data/landingPages.js';
import { PROPERTY_REDIRECTS, getBlogRedirect } from './src/data/blogRedirects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The base URL of the production site
const BASE_URL = 'https://www.sandanehomes.com';

const SEO_MAP = {
  '/': {
    title: 'Sandane Homes | Premium Serviced Apartments & Stays in Greater Noida',
    description: 'Discover luxury serviced apartments and premium residences by Sandane Homes in Greater Noida. Fully-serviced stays with top-notch amenities, professional hospitality, and comfort.',
    schemas: [{ "@context": "https://schema.org", "@type": "LodgingBusiness", "name": "Sandane Homes", "url": "https://www.sandanehomes.com/", "telephone": "+919711722273", "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" }, "parentOrganization": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" } }]
  },
  '/residences': {
    title: 'Residences by Sandane Homes | Luxury Serviced Apartments for Expats in Greater Noida',
    description: 'Fully furnished luxury 2 & 3 BHK apartments in Greater Noida for expats and corporate professionals. Housekeeping, maintenance & all essentials included. Just arrive.',
    schemas: [{ "@context": "https://schema.org", "@type": "LodgingBusiness", "name": "Residences by Sandane Homes", "url": "https://www.sandanehomes.com/residences", "telephone": "+919711722273", "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" }, "parentOrganization": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" }, "amenityFeature": [{ "@type": "LocationFeatureSpecification", "name": "Fully Furnished Kitchen", "value": true }, { "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true }] }]
  },
  '/amara': {
    title: 'Amara Inn | Premium Boutique Hotel in Greater Noida | Sandane Homes',
    description: 'Book Amara Inn by Sandane Homes in Greater Noida. Deluxe rooms, private balconies, daily breakfast, 24/7 housekeeping, and curated corporate hospitality near India Expo Mart.',
    ogImage: 'https://www.sandanehomes.com/residences-og.jpg',
    schemas: [{ "@context": "https://schema.org", "@type": "Hotel", "name": "Amara Inn by Sandane Homes", "url": "https://www.sandanehomes.com/amara", "telephone": "+919711722273", "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" }, "parentOrganization": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" }, "starRating": { "@type": "Rating", "ratingValue": "4" }, "amenityFeature": [{ "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true }, { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true }] }]
  },
  '/coco-house': {
    title: 'CoCo House | Luxury Boutique Hotel Greater Noida | Sandane Homes',
    description: 'CoCo House — a chic luxury boutique hotel in Greater Noida. Premium rooms, stylish interiors, full housekeeping, and curated hospitality. Book now.',
    ogImage: 'https://www.sandanehomes.com/residences-og.jpg',
    schemas: [{ "@context": "https://schema.org", "@type": "Hotel", "name": "CoCo House", "url": "https://www.sandanehomes.com/coco-house", "telephone": "+919711722273", "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" }, "parentOrganization": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" }, "starRating": { "@type": "Rating", "ratingValue": "4" }, "amenityFeature": [{ "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true }, { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true }] }]
  },
  '/saffron': {
    title: 'Saffron Inn | Boutique Hotel Greater Noida | Sandane Homes',
    description: 'Saffron Inn by Sandane Homes — warm, elegant boutique hotel in Greater Noida. Twin bedrooms, lounge spaces, 24/7 service, and premium comfort near India Expo Mart.',
    ogImage: 'https://www.sandanehomes.com/residences-og.jpg',
    schemas: [{ "@context": "https://schema.org", "@type": "Hotel", "name": "Saffron Inn by Sandane Homes", "url": "https://www.sandanehomes.com/saffron", "telephone": "+919711722273", "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" }, "parentOrganization": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" }, "starRating": { "@type": "Rating", "ratingValue": "4" }, "amenityFeature": [{ "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true }, { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true }] }]
  },

  '/sandane-homes': {
    title: 'Sandane Homes Hotel | Luxury Serviced Stays & Executive Suites Greater Noida',
    description: 'Indulge in luxury at Sandane Homes. Kitchenette rooms, executive suites, in-house café, 24/7 room service, and top-tier amenities for corporate stays in Greater Noida.',
    ogImage: 'https://www.sandanehomes.com/residences-og.jpg',
    schemas: [{ "@context": "https://schema.org", "@type": "Hotel", "name": "Sandane Homes", "url": "https://www.sandanehomes.com/sandane-homes", "telephone": "+919711722273", "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" }, "parentOrganization": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" }, "starRating": { "@type": "Rating", "ratingValue": "5" }, "amenityFeature": [{ "@type": "LocationFeatureSpecification", "name": "Kitchenette", "value": true }, { "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true }, { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true }] }]
  },
  '/glam': {
    title: 'The Glam | Premium Executive Stay Greater Noida | Sandane Homes',
    description: 'Premium serviced living at The Glam by Sandane Homes. Stylish rooms, dedicated workspaces, smart entertainment, and daily housekeeping for business and leisure travellers.',
    ogImage: 'https://www.sandanehomes.com/residences-og.jpg',
    schemas: [{ "@context": "https://schema.org", "@type": "Hotel", "name": "The Glam by Sandane Homes", "url": "https://www.sandanehomes.com/glam", "telephone": "+919711722273", "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" }, "parentOrganization": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" }, "starRating": { "@type": "Rating", "ratingValue": "4" }, "amenityFeature": [{ "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true }, { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true }] }]
  },
  '/pine-tales': {
    title: 'Pine Tales | Cozy Nature Boutique Stay Greater Noida | Sandane Homes',
    description: 'Relax at Pine Tales by Sandane Homes in Greater Noida. Breathtaking scenic views, cozy bedrooms, complimentary breakfast, terrace options, and premium hospitality.',
    ogImage: 'https://www.sandanehomes.com/residences-og.jpg',
    schemas: [{ "@context": "https://schema.org", "@type": "Hotel", "name": "Pine Tales by Sandane Homes", "url": "https://www.sandanehomes.com/pine-tales", "telephone": "+919711722273", "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" }, "parentOrganization": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" }, "starRating": { "@type": "Rating", "ratingValue": "4" }, "amenityFeature": [{ "@type": "LocationFeatureSpecification", "name": "Complimentary Breakfast", "value": true }, { "@type": "LocationFeatureSpecification", "name": "Terrace", "value": true }, { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true }] }]
  },
  '/amaaltash': {
    title: 'Amaaltash | Luxury Serviced Apartments Greater Noida | Sandane Homes',
    description: 'Experience comfort and elegance at Amaaltash by Sandane Homes. Beautiful rooms with common kitchenette, modern bathrooms, and high-speed WiFi for corporate travellers in Greater Noida.',
    ogImage: 'https://www.sandanehomes.com/residences-og.jpg',
    schemas: [{ "@context": "https://schema.org", "@type": "Hotel", "name": "Amaaltash by Sandane Homes", "url": "https://www.sandanehomes.com/amaaltash", "telephone": "+919711722273", "address": { "@type": "PostalAddress", "addressLocality": "Greater Noida", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" }, "parentOrganization": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" }, "starRating": { "@type": "Rating", "ratingValue": "4" }, "amenityFeature": [{ "@type": "LocationFeatureSpecification", "name": "Kitchenette", "value": true }, { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true }] }]
  },
  '/faqs': {
    title: 'FAQs | Sandane Homes Serviced Apartments Greater Noida',
    description: 'Answers to your most common questions about staying at Sandane Homes — from services and amenities to booking and corporate housing options.',
  },
  '/serviced-apartments-greater-noida': {
    title: 'Luxury Serviced Apartments Greater Noida | Sandane Homes',
    description: 'Fully furnished luxury serviced apartments in Greater Noida for expats & professionals. Daily housekeeping and utilities included. Just arrive.',
  },
  '/residences/relocation': {
    title: 'Sandane Homes Relocation Services | Corporate & Expat Relocation Greater Noida',
    description: 'Turnkey corporate relocation support in Greater Noida for Japanese, Korean, Chinese & MNC expats. Fully furnished luxury apartments, B2B GST invoicing, 300 Mbps WiFi & concierge.',
    ogImage: 'https://www.sandanehomes.com/residences-og.jpg',
    schemas: [{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sandane Homes Relocation Services",
      "serviceType": "Corporate & Expat Relocation",
      "provider": {
        "@type": "Organization",
        "name": "Residences by Sandane Homes",
        "url": "https://www.sandanehomes.com/residences"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Greater Noida, Uttar Pradesh, India"
      },
      "description": "Comprehensive corporate relocation services for international expats and executives moving to Greater Noida. Includes turnkey furnished apartments, airport pickup, 300 Mbps WiFi, and B2B GST master billing."
    }]
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

// ── Blog: SEO_MAP entries are generated from src/content/blogPosts.js ──
// Adding a post there automatically produces a static, crawlable page here
// plus a sitemap.xml entry below — no manual edits needed per post.
SEO_MAP['/blog'] = {
  title: 'The Sandane Journal | Relocation Guides & Living in Greater Noida',
  description: 'Practical guides on expat relocation, neighbourhood life, and corporate housing in Greater Noida & Delhi NCR — from the team at Sandane Homes.',
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Sandane Homes Journal",
      "url": `${BASE_URL}/blog`,
      "blogPost": blogPosts.map((p) => ({
        "@type": "BlogPosting",
        "headline": p.title,
        "url": `${BASE_URL}/blog/${p.slug}`,
        "datePublished": new Date(p.date).toISOString(),
      })),
    },
  ],
};

const DEFAULT_OG_IMAGE = `${BASE_URL}/residences-og.jpg`;

blogPosts.forEach((post) => {
  const ogImage = post.coverImage
    ? (post.coverImage.startsWith('http') ? post.coverImage : `${BASE_URL}${post.coverImage}`)
    : DEFAULT_OG_IMAGE;
  const isoDate = new Date(post.date).toISOString();
  const pageTitle = post.metaTitle || `${post.title} | Sandane Homes Journal`;
  const pageDescription = post.metaDescription || post.excerpt;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": pageDescription,
      "image": ogImage,
      "datePublished": isoDate,
      "dateModified": isoDate,
      "author": { "@type": "Organization", "name": post.author || "Sandane Homes" },
      "publisher": {
        "@type": "Organization",
        "name": "Sandane Homes",
        "logo": { "@type": "ImageObject", "url": `${BASE_URL}/logo.png` },
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${BASE_URL}/blog/${post.slug}` },
      "url": `${BASE_URL}/blog/${post.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE_URL}/blog` },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": `${BASE_URL}/blog/${post.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "Sandane Homes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      "telephone": "+91 97117 22273",
      "url": `${BASE_URL}`,
      "parentOrganization": {
        "@type": "Organization",
        "name": "Sandane Homes",
        "url": `${BASE_URL}`
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "489"
      },
      "areaServed": [
        "India Expo Mart",
        "Knowledge Park Greater Noida",
        "Pari Chowk",
        "Alpha Commercial Belt",
        "Surajpur",
        "Yamuna Expressway"
      ]
    }
  ];

  if (post.faqs && post.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": post.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  SEO_MAP[`/blog/${post.slug}`] = {
    title: pageTitle,
    description: pageDescription,
    ogImage,
    schemas,
    lang: post.lang || 'en',
    hreflang: post.lang ? [post.lang, 'en'] : ['en']
  };
});

// ── Landing Pages: Generate dynamic SEO_MAP entries from src/data/landingPages.js ──
landingPages.forEach((page) => {
  const schemas = [];
  
  // Standard Apartment Complex Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "name": page.h1,
    "description": page.metaDescription,
    "url": `${BASE_URL}/${page.slug}`,
    "telephone": "+919711722273",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    }
  });

  // Dynamic FAQ page schema if present
  if (page.faqs && page.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": page.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  SEO_MAP[`/${page.slug}`] = {
    title: page.metaTitle,
    description: page.metaDescription,
    ogImage: `${BASE_URL}/residences-og.jpg`,
    schemas
  };
});

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
  const ogImage = seo.ogImage || `${BASE_URL}/residences-og.jpg`;

  // Start with the original HTML
  let newHtml = originalHtml;

  // 1. Replace <title>
  newHtml = newHtml.replace(/<title>.*?<\/title>/i, `<title>${seo.title}</title>`);

  // 2. Replace <meta name="description">
  if (newHtml.includes('<meta name="description"')) {
    newHtml = newHtml.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${seo.description}" />`);
  } else {
    newHtml = newHtml.replace('</title>', `</title>\n    <meta name="description" content="${seo.description}" />`);
  }

  // 3. Strip ALL existing OG tags, canonical, twitter tags from the base HTML
  //    so they don't appear twice (with homepage values first, page-specific second).
  newHtml = newHtml
    .replace(/<meta property="og:[^"]*" content="[^"]*"\s*\/?>\n?/gi, '')
    .replace(/<meta name="twitter:[^"]*" content="[^"]*"\s*\/?>\n?/gi, '')
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>\n?/gi, '');

  // 4. Set the html lang attribute for language-targeted pages
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

  // 5. Inject canonical, OG, and Twitter tags before </head>
  let redirectScript = '';
  if (route.startsWith('/blog/') && route !== '/blog') {
    const slug = route.replace('/blog/', '');
    const redirectUrl = PROPERTY_REDIRECTS[slug] || getBlogRedirect(slug);
    redirectScript = `<meta http-equiv="refresh" content="0;url=${redirectUrl}" /><script>window.location.replace("${redirectUrl}");</script>`;
  }

  const tagsToInject = `
    ${redirectScript}
    <link rel="canonical" href="${canonical}" />
    ${hreflangTags}
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sandane Homes" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="${ogImage}" />
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

// ── Keep sitemap.xml in sync with high priority blog posts and landing pages automatically ──
const highPrioritySlugs = [
  'residences-by-sandane-homes-3bhk-luxury-serviced-apartments-japanese-korean-expats',
  'residences-by-sandane-homes-korean-3bhk-serviced-apartments-guide',
  'residences-by-sandane-homes-japanese-3bhk-serviced-apartments-guide',
  'residences-by-sandane-homes-chinese-3bhk-serviced-apartments-guide',
  'residences-by-sandane-homes-2bhk-luxury-serviced-apartments-japanese-korean-expats',
  'residences-by-sandane-homes-korean-2bhk-serviced-apartments-guide',
  'residences-by-sandane-homes-japanese-2bhk-serviced-apartments-guide',
  'residences-by-sandane-homes-chinese-2bhk-serviced-apartments-guide',
  'residences-by-sandane-homes-1bhk-luxury-serviced-apartments-japanese-korean-expats',
  'residences-by-sandane-homes-korean-1bhk-serviced-apartments-guide',
  'residences-by-sandane-homes-japanese-1bhk-serviced-apartments-guide',
  'residences-by-sandane-homes-chinese-1bhk-serviced-apartments-guide',
  'coco-house-auto-guide-749892',
  'amaaltash-by-sandane-homes-auto-guide-749892',
  'the-glam-by-sandane-homes-auto-guide-749892',
  'residences-by-sandane-homes-auto-guide-749892',
  'coco-house-auto-guide-798702',
  'amaaltash-by-sandane-homes-auto-guide-798702',
  'the-glam-by-sandane-homes-auto-guide-798702',
  'residences-by-sandane-homes-auto-guide-798702',
  'residences-by-sandane-homes-japanese-expat-housing-guide-noida',
  'coco-house-japanese-business-trip-hotel-india-expo-mart',
  'residences-by-sandane-homes-korean-expat-housing-greater-noida',
  'amaaltash-by-sandane-homes-korean-executive-hotel-rooms',
  'residences-by-sandane-homes-chinese-expat-serviced-apartments',
  'the-glam-by-sandane-homes-chinese-executive-boutique-stay',
  'coco-house-auto-guide-128805',
  'amaaltash-by-sandane-homes-auto-guide-128805',
  'the-glam-by-sandane-homes-auto-guide-128805',
  'residences-by-sandane-homes-auto-guide-128805',
  'coco-house-auto-guide-091160',
  'amaaltash-by-sandane-homes-auto-guide-091160',
  'the-glam-by-sandane-homes-auto-guide-091160',
  'residences-by-sandane-homes-auto-guide-091160',
  'coco-house-auto-guide-119507',
  'amaaltash-by-sandane-homes-auto-guide-119507',
  'the-glam-by-sandane-homes-auto-guide-119507',
  'residences-by-sandane-homes-auto-guide-119507',
  'the-glam-by-sandane-homes-luxury-boutique-stay-ansal-golf-links',
  'amara-inn-by-sandane-homes-corporate-extended-stay-hotel-greater-noida',
  'saffron-inn-by-sandane-homes-peaceful-hotel-near-india-expo-mart',
  'pine-tales-by-sandane-homes-cozy-boutique-stay-greater-noida',
  'sandane-homes-complete-hotel-portfolio-guide-greater-noida',
  'coco-house-hotel-near-auto-expo-2026-greater-noida',
  'coco-house-corporate-hotel-stay-knowledge-park-greater-noida',
  'coco-house-vs-5-star-hotels-india-expo-mart-stay',
  'coco-house-early-check-in-late-check-out-expo-mart-exhibitors',
  'coco-house-long-stay-hotel-rooms-surajpur-industrial-area',
  'residences-by-sandane-homes-luxury-3bhk-family-serviced-apartments-greater-noida',
  'residences-by-sandane-homes-relocation-guide-corporate-expats-noida',
  'coco-house-boutique-stay-creative-agencies-media-crews-expo-mart',
  'coco-house-group-booking-discounted-rates-trade-fairs-greater-noida',
  'amaaltash-by-sandane-homes-ihe-2026-exhibitor-hotel-booking-guide',
  'amaaltash-by-sandane-homes-group-stay-hospitality-delegates-ihe-expo-mart',
  'amaaltash-by-sandane-homes-executive-hotel-rooms-kitchenette-ihe-2026',
  'amaaltash-by-sandane-homes-vs-5-star-hotels-ihe-2026-expo-mart',
  'amaaltash-by-sandane-homes-early-check-in-gst-billing-ihe-2026',
  'residences-by-sandane-homes-korean-expat-housing-greater-noida',
  'residences-by-sandane-homes-japanese-expat-housing-greater-noida',
  'residences-by-sandane-homes-serviced-apartments-near-india-expo-mart',
  'residences-by-sandane-homes-luxury-villas-ansal-golf-links-greater-noida',
  'residences-by-sandane-homes-long-stay-extended-stay-apartments-noida-expressway',
  'residences-by-sandane-homes-vs-5-star-hotels-corporate-stays-greater-noida',
  'amaaltash-sandane-homes-boutique-hotel-ansal-golf-links-greater-noida',
  'the-glam-sandane-homes-boutique-hotel-ansal-golf-links-greater-noida',
  'residences-by-sandane-homes-luxury-serviced-apartments-greater-noida',
  'residences-by-sandane-homes-expat-housing-ansal-golf-links-greater-noida',
  'residences-by-sandane-homes-corporate-serviced-apartments-long-stay',
  'residences-by-sandane-homes-furnished-2bhk-3bhk-apartments-near-pari-chowk',
  'residences-by-sandane-homes-relocation-housing-surajpur-yamuna-expressway',
  'coco-house-sandane-homes-boutique-hotel-near-india-expo-mart',
  'coco-house-sandane-homes-group-accommodation-for-trade-exhibitors',
  'coco-house-sandane-homes-hotel-near-pari-chowk-greater-noida',
  'coco-house-sandane-homes-budget-luxury-hotel-knowledge-park',
  'coco-house-sandane-homes-long-stay-corporate-guest-house',
  'sandane-homes-luxury-suites-greater-noida-ansal-golf-links',
  'amaaltash-hotel-near-surajpur-industrial-area-greater-noida',
  'the-glam-luxury-stay-near-noida-international-airport-corridor',
  'amara-inn-hotel-near-yamuna-expressway-industrial-hub',
  'coco-house-corporate-team-housing-greater-noida',
  'hotels-near-auto-expo-2026-india-expo-mart-greater-noida',
  'hotels-near-noida-expo-centre-sector-62-greater-noida-corridor',
  'best-boutique-hotels-in-greater-noida-with-kitchenette-wifi',
  'serviced-apartments-vs-hotels-near-india-expo-mart-greater-noida',
  'hotels-near-galgotias-university-sharda-university-knowledge-park',
  'sandane-homes-luxury-hotel-near-india-expo-mart-gate-1',
  'amaaltash-hotel-near-knowledge-park-2-expo-mart-greater-noida',
  'the-glam-boutique-hotel-near-pari-chowk-expo-mart',
  'amara-inn-corporate-hotel-extended-stay-expo-mart',
  'coco-house-group-booking-hotel-single-gst-expo-mart',
  'hotels-near-ihgf-delhi-fair-2026-india-expo-mart',
  'hotels-near-elecrama-2026-india-expo-mart-greater-noida',
  'hotels-near-renewable-energy-india-expo-rei-2026',
  'hotels-near-cphi-pmec-india-2026-greater-noida',
  'hotels-5-minutes-from-india-expo-mart-greater-noida',
  'sandane-homes-luxury-hotel-near-ihe-2026-greater-noida',
  'amaaltash-hotel-near-ihe-2026-india-expo-mart-greater-noida',
  'the-glam-boutique-hotel-near-ihe-2026-greater-noida',
  'amara-inn-hotel-near-ihe-2026-india-expo-mart-greater-noida',
  'coco-house-hotel-near-ihe-2026-india-expo-mart-greater-noida',
  'hotels-near-ihe-2026-india-international-hospitality-expo',
  'extended-stay-hotel-greater-noida-amara-inn',
  'boutique-hotel-greater-noida-the-glam',
  'group-booking-hotel-near-india-expo-mart',
  'hotels-near-india-expo-mart-greater-noida',
  'amaaltash-hotel-near-india-expo-mart-greater-noida',
  'saffron-inn-hotel-near-india-expo-mart-greater-noida',
  'coco-house-hotel-near-india-expo-mart-greater-noida',
  'pine-tales-hotel-near-india-expo-mart-greater-noida',
  'glam-hotel-near-india-expo-mart-greater-noida',
  'amara-inn-hotel-near-india-expo-mart-greater-noida',
  'the-glam-luxury-hotel-near-india-expo-mart-greater-noida',
  'the-glam-boutique-hotel-near-pari-chowk-greater-noida',
  'amara-inn-corporate-hotel-near-india-expo-mart-greater-noida',
  'amara-inn-hotel-near-pari-chowk-metro-station-greater-noida',
  'coco-house-boutique-hotel-near-india-expo-mart-greater-noida',
  'coco-house-hotel-near-pari-chowk-greater-noida',
  'best-corporate-hotels-greater-noida',
  'hotels-near-knowledge-park-greater-noida',
  'hotels-near-pari-chowk-greater-noida',
  'business-hotels-greater-noida-for-trade-fair-teams',
  'serviced-apartments-greater-noida',
  'korean-expat-housing-delhi-ncr',
  'japanese-expat-housing-delhi-ncr',
  'residences'
];

function buildSitemapXml() {
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Homepage
  xml += `  <url>\n    <loc>${BASE_URL}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

  // Main Pages
  const mainPages = ['/residences', '/residences/relocation', '/sandane-homes', '/amara', '/amaaltash', '/saffron', '/glam', '/pine-tales', '/coco-house', '/blog', '/faqs'];
  mainPages.forEach((route) => {
    const priority = highPrioritySlugs.includes(route.substring(1)) ? '0.9' : '0.8';
    xml += `  <url>\n    <loc>${BASE_URL}${route}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  });

  // Blog Posts
  blogPosts.forEach((post) => {
    const isHighPriority = highPrioritySlugs.includes(post.slug);
    const priority = isHighPriority ? '0.9' : '0.8';
    const postDate = new Date(post.date).toISOString().split('T')[0];
    xml += `  <url>\n    <loc>${BASE_URL}/blog/${post.slug}</loc>\n    <lastmod>${postDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  });

  // Landing Pages
  landingPages.forEach((page) => {
    const isHighPriority = highPrioritySlugs.includes(page.slug);
    const priority = isHighPriority ? '0.9' : '0.7';
    xml += `  <url>\n    <loc>${BASE_URL}/${page.slug}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  });

  xml += `</urlset>\n`;
  return xml;
}

const finalSitemapXml = buildSitemapXml();
fs.writeFileSync(path.join(distPath, 'sitemap.xml'), finalSitemapXml, 'utf8');

const publicSitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
if (fs.existsSync(path.dirname(publicSitemapPath))) {
  fs.writeFileSync(publicSitemapPath, finalSitemapXml, 'utf8');
}
console.log(`Generated high-priority sitemap.xml with ${blogPosts.length} blog posts and ${landingPages.length} landing pages!`);

console.log('Post-build SEO generation complete!');
