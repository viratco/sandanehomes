// JSON-LD for the pages in src/data/residenceSearchPages.js. Used by the page
// itself (react-helmet) and by generate-seo.js (static head), so both agree.
// Plain JS only: generate-seo.js imports this with Node.
import { gurugramResidences, gurugramResidenceSchema, gurugramHomeSpecSchema } from '../data/gurugramResidences.js';
import { RESIDENCE_HOME_SPEC } from './schemaHelper.js';

const AREA = {
  gurugram: ['Gurugram', 'Gurgaon'],
  'greater-noida': ['Greater Noida'],
  ncr: ['Gurugram', 'Gurgaon', 'Greater Noida', 'Delhi NCR'],
};

export const residenceSearchSchemas = (page, baseUrl = 'https://www.sandanehomes.com') => {
  const url = `${baseUrl}/${page.slug}`;
  const schemas = [];

  const crumbs = [
    { name: 'Home', item: `${baseUrl}/` },
    { name: 'Residences by Sandane Homes', item: `${baseUrl}/residences` },
  ];
  if (page.city === 'gurugram') crumbs.push({ name: 'Gurgaon', item: `${baseUrl}/residences/gurgaon` });
  if (page.city === 'greater-noida') crumbs.push({ name: 'Greater Noida', item: `${baseUrl}/serviced-apartments-greater-noida` });
  crumbs.push({ name: page.h1, item: url });
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
  });

  // What we offer on this page, as a service from Residences by Sandane Homes.
  const homes = (page.city === 'gurugram' || page.city === 'ncr')
    ? (page.homes || gurugramResidences.map((r) => r.slug))
      .map((s) => gurugramResidences.find((r) => r.slug === s))
      .filter(Boolean)
      .map((r) => gurugramResidenceSchema(r, baseUrl))
    : [];
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.metaDescription,
    url,
    serviceType: 'Furnished serviced homes for long corporate stays',
    areaServed: AREA[page.city] || AREA.ncr,
    provider: {
      '@type': 'Organization',
      name: 'Residences by Sandane Homes',
      url: `${baseUrl}/residences`,
      telephone: '+919711722273',
      parentOrganization: { '@type': 'Organization', name: 'Sandane Homes', url: baseUrl },
    },
    ...(homes.length > 0
      ? { hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Homes', itemListElement: homes.map((h) => ({ '@type': 'Offer', itemOffered: h })) } }
      : { hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Homes', itemListElement: [{ '@type': 'Offer', itemOffered: page.city === 'gurugram' ? gurugramHomeSpecSchema : RESIDENCE_HOME_SPEC }] } }),
  });

  // The facts page also describes the brand itself, with every way to reach us.
  if (page.about) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Residences by Sandane Homes',
      url: `${baseUrl}/residences`,
      logo: `${baseUrl}/logo.png`,
      description: 'Long-stay brand of Sandane Homes: entire furnished 3–4 BHK homes in Gurugram and Greater Noida, leased by the month to companies for expat employees, families and project teams, and to individuals.',
      email: 'residences@sandanehomes.com',
      telephone: '+919711722273',
      areaServed: AREA.ncr,
      parentOrganization: { '@type': 'Organization', name: 'Sandane Homes', url: baseUrl },
      contactPoint: [
        { '@type': 'ContactPoint', contactType: 'reservations', telephone: '+918826269690', description: 'WhatsApp' },
        { '@type': 'ContactPoint', contactType: 'customer service', telephone: '+919711722273', description: 'Phone and KakaoTalk' },
        { '@type': 'ContactPoint', contactType: 'customer service', url: 'https://line.me/ti/p/hrUpm82UQu', description: 'LINE' },
      ],
    });
  }

  if (page.faqs?.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
  return schemas;
};
