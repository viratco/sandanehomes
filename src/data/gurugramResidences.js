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
    a: "Close to where you'll work. Our Gurugram residences are in Sector 58 on Golf Course Extension Road (Conscient Hines Elevate, about 18 minutes to Cyber City) and in Sector 27 near MG Road (Green Meadows and Sushant Lok Block B, 10–12 minutes to Cyber City, with Millennium City Centre metro a short walk or drive away). We also have residences in Greater Noida.",
  },
  {
    q: 'What is included in the monthly rent?',
    a: 'Everything needed to live normally from the first night: a fully furnished 3- or 4-bedroom home, daily housekeeping with linen changes twice a week, Wi-Fi, electricity, water, 100% power backup, and society maintenance charges, and repairs handled by our team. One monthly amount, no broker fees.',
  },
  {
    q: 'Can our company pay directly and receive a GST invoice?',
    a: 'Yes. We invoice your company directly each month with a GST invoice, so your employee never has to deal with rent, deposits or landlords.',
  },
  {
    q: 'Do you support Japanese and Korean expats moving to Gurgaon?',
    a: 'Yes. Much of our work is housing Japanese and Korean professionals in Gurugram. We prepare the apartment before arrival and can provide a bilingual English–Japanese city guide covering the commute, groceries, hospitals and registration.',
  },
  {
    q: 'What is the minimum stay?',
    a: '30 days (1 month). Stays run from there to multi-year corporate postings, and can be extended as assignments change.',
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
