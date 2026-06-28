import { NextResponse } from 'next/server';

// SEO metadata map for all routes
const SEO_MAP = {
  '/': {
    title: 'Sandane Homes | Premium Serviced Apartments & Stays in Greater Noida',
    description: 'Discover luxury serviced apartments and premium residences by Sandane Homes in Greater Noida. Fully-serviced stays with top-notch amenities, professional hospitality, and comfort.',
    canonical: 'https://www.sandanehomes.com/',
  },
  '/residences': {
    title: 'Serviced Apartments for Expats in Greater Noida | Residences by Sandane Homes',
    description: 'Premium fully-furnished serviced apartments in Greater Noida for corporate expats. Minutes from Honda, LG, Samsung & Yamaha. Flexible monthly stays. Book now.',
    canonical: 'https://www.sandanehomes.com/residences',
  },
  '/amara': {
    title: 'Amara Inn | Boutique Hotel in Greater Noida by Sandane Homes',
    description: 'Amara Inn — a premium boutique hotel in Greater Noida offering luxurious rooms, top-tier amenities, and exceptional hospitality by Sandane Homes.',
    canonical: 'https://www.sandanehomes.com/amara',
  },
  '/coco-house': {
    title: 'CoCo House | Luxury Boutique Hotel Greater Noida | Sandane Homes',
    description: 'CoCo House by Sandane Homes — a chic boutique luxury hotel stay in Greater Noida with premium rooms, stylish interiors, and curated hospitality experiences.',
    canonical: 'https://www.sandanehomes.com/coco-house',
  },
  '/saffron': {
    title: 'Saffron Inn | Boutique Hotel Greater Noida | Sandane Homes',
    description: 'Saffron Inn by Sandane Homes — a warm, elegant boutique stay in Greater Noida. Ideal for families, business travellers, and expats seeking comfort and style.',
    canonical: 'https://www.sandanehomes.com/saffron',
  },
  '/glam': {
    title: 'Glam by Sandane Homes | Premium Stay Greater Noida',
    description: 'Glam by Sandane Homes — a stylish and modern luxury hotel experience in Greater Noida. Stunning interiors, premium amenities, and unmatched hospitality.',
    canonical: 'https://www.sandanehomes.com/glam',
  },
  '/pine-tales': {
    title: 'Pine Tales by Sandane Homes | Boutique Hotel Greater Noida',
    description: 'Pine Tales — nature-inspired luxury boutique stay in Greater Noida by Sandane Homes. Relax in beautifully designed rooms with serene, premium surroundings.',
    canonical: 'https://www.sandanehomes.com/pine-tales',
  },
  '/amaaltash': {
    title: 'Amaaltash by Sandane Homes | Hotel Greater Noida',
    description: 'Amaaltash by Sandane Homes — premium hospitality and curated luxury in the heart of Greater Noida. Ideal for corporate and leisure travellers.',
    canonical: 'https://www.sandanehomes.com/amaaltash',
  },
  '/sandane-homes': {
    title: 'Sandane Homes | The Luxury Boutique Hotel Greater Noida',
    description: 'The original Sandane Homes luxury boutique hotel in Greater Noida. Premium rooms, exceptional service, and the finest hospitality experience in NCR.',
    canonical: 'https://www.sandanehomes.com/sandane-homes',
  },
  '/faq': {
    title: 'FAQs | Sandane Homes Serviced Apartments Greater Noida',
    description: 'Answers to your most common questions about staying at Sandane Homes — from services and amenities to booking and corporate housing options.',
    canonical: 'https://www.sandanehomes.com/faq',
  },
};

export function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/$/, '') || '/'; // normalize trailing slash

  // Only process HTML page requests (not assets/api)
  const isPageRequest = !path.includes('.') && !path.startsWith('/api') && !path.startsWith('/_');
  if (!isPageRequest) {
    return NextResponse.next();
  }

  const seo = SEO_MAP[path] || SEO_MAP['/'];

  // Clone the request and pass SEO data as headers to be read by the HTML response
  const response = NextResponse.next();
  
  // Inject SEO data as custom response headers
  // These are read and applied to the HTML by Vercel's edge
  response.headers.set('x-seo-title', seo.title);
  response.headers.set('x-seo-description', seo.description);
  response.headers.set('x-seo-canonical', seo.canonical);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.png, logo.png, robots.txt, sitemap.xml, etc.
     */
    '/((?!api|_next/static|_next/image|favicon|logo|robots|sitemap|assets|.*\\..*).*)',
  ],
};
