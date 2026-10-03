// Gurugram properties operated by Residences by Sandane Homes.
// Single source for the /residences/gurgaon hub, the /residences showcase,
// the footer links and the JSON-LD built in generate-seo.js.
// Each slug must match a detail page in landingPages.js.

export const GURUGRAM_HUB_PATH = '/residences/gurgaon';

export const gurugramResidences = [
  {
    slug: 'elevate-hines-sector-58-gurgaon',
    name: 'Conscient Hines Elevate',
    sector: 'Sector 58',
    neighbourhood: 'Golf Course Extension Road',
    streetAddress: 'Conscient Hines Elevate, Sector 58, Golf Course Extension Road',
    propertyType: 'High-rise luxury condominium',
    configuration: '3BHK apartments',
    size: '2,095 – 2,595 sq.ft.',
    bedrooms: 3,
    metro: 'Sector 55-56 Rapid Metro · 8 min drive',
    cyberCity: '18 min drive',
    bestFor: 'Expat families and senior executives who want a resort-style clubhouse',
    highlights: [
      'International-grade tower developed with Hines',
      'Clubhouse with pool and squash courts included',
      'Vehicle-free landscaped podium',
    ],
  },
  {
    slug: 'green-meadows-sector-27-gurgaon',
    name: 'Green Meadows',
    sector: 'Sector 27',
    neighbourhood: 'near HUDA City Centre',
    streetAddress: 'Green Meadows, Sector 27',
    propertyType: 'Independent builder floor',
    configuration: '4BHK private floor',
    size: '2,230 sq.ft.',
    bedrooms: 4,
    metro: 'Millennium City Centre (HUDA) Metro · 8 min walk',
    cyberCity: '10 min drive',
    bestFor: 'Families and project teams who need four bedrooms and full privacy',
    highlights: [
      'Entire floor with private lift landing',
      '4 bedrooms, 4 bathrooms',
      'Walk to the Yellow Line metro',
    ],
  },
  {
    slug: 'sushant-lok-block-b-sector-27-gurgaon',
    name: 'Sushant Lok Block B',
    sector: 'Sector 27',
    neighbourhood: 'Sushant Lok 1',
    streetAddress: 'Block B, Sushant Lok 1, Sector 27',
    propertyType: 'Independent builder floor',
    configuration: '4BHK private floor',
    size: '300 sq.yd. (~2,700 sq.ft.)',
    bedrooms: 4,
    metro: 'Millennium City Centre (HUDA) Metro · 4 min drive',
    cyberCity: '12 min drive',
    bestFor: 'Executives who want a quiet, leafy street close to Galleria Market',
    highlights: [
      'Tree-lined, established expat neighbourhood',
      'Minutes from Galleria Market and Max Hospital',
      'Turnkey furnished by Sandane',
    ],
  },
];

// FAQs for the /residences/gurgaon hub (rendered on the page and as FAQPage JSON-LD)
export const gurugramHubFaqs = [
  {
    q: 'Where are Residences by Sandane Homes located in Gurgaon?',
    a: 'We operate three serviced residences in Gurugram: Conscient Hines Elevate in Sector 58 on Golf Course Extension Road, and two independent builder floors in Sector 27 — Green Meadows and Sushant Lok Block B — both a few minutes from the Millennium City Centre (HUDA City Centre) metro station.',
  },
  {
    q: 'What is included in the monthly rent?',
    a: 'Every residence is fully furnished with a working kitchen, linen and kitchenware. Daily housekeeping, linen changes twice a week, 300 Mbps Wi-Fi, 100% power backup, routine maintenance and parking are included. Clubhouse access is included at Conscient Hines Elevate.',
  },
  {
    q: 'Can our company pay directly and receive a GST invoice?',
    a: 'Yes. We sign lease agreements directly with companies and issue GST invoices every month. Many of our guests are relocating managers whose HR or general-affairs team handles the booking.',
  },
  {
    q: 'Do you support Japanese and Korean expats moving to Gurgaon?',
    a: 'Yes. We help with FRRO registration (Form C), airport pickup and settling in, and can adapt furnishing and kitchenware to Japanese or Korean household needs. Sector 27 and Golf Course Extension Road both have an established international community.',
  },
  {
    q: 'What is the minimum stay?',
    a: 'Our Gurugram residences are built for long stays of one month or more, typical for corporate assignments and relocations. Contact us with your dates and we will confirm availability.',
  },
];

export const isGurugramResidence = (slug) => gurugramResidences.some((r) => r.slug === slug);

// schema.org entries shared by the client (react-helmet) and generate-seo.js
export const gurugramResidenceSchema = (r, baseUrl = 'https://www.sandanehomes.com') => ({
  '@type': 'Accommodation',
  name: `${r.name}, ${r.sector}, Gurugram — Residences by Sandane Homes`,
  url: `${baseUrl}/${r.slug}`,
  accommodationCategory: 'Serviced apartment',
  numberOfBedrooms: r.bedrooms,
  address: {
    '@type': 'PostalAddress',
    streetAddress: r.streetAddress,
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    addressCountry: 'IN',
  },
});

export const gurugramItemListSchema = (baseUrl = 'https://www.sandanehomes.com') => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Residences by Sandane Homes in Gurugram (Gurgaon)',
  url: `${baseUrl}${GURUGRAM_HUB_PATH}`,
  numberOfItems: gurugramResidences.length,
  itemListElement: gurugramResidences.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: gurugramResidenceSchema(r, baseUrl),
  })),
});
