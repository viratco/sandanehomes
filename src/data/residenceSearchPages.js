// ─────────────────────────────────────────────────────────────
//  Residences by Sandane Homes: pages written for the things people type into
//  Google when they need what we do ("long stay serviced apartments gurgaon",
//  "fully furnished house for rent in gurgaon", "corporate guest house", …).
//
//  One template renders them all: src/components/pages/ResidenceSearchPage.jsx.
//  Routes (App.jsx), head tags + JSON-LD and both sitemaps (generate-seo.js)
//  are created from this list, so adding a page here is all that's needed.
//
//  Rules for this file (from the owner):
//  - No prices. No client or competitor names.
//  - Only the three Gurugram homes in gurugramResidences.js are ours there.
//    Don't claim homes in an area we don't operate in; say what's nearest.
//  - Plain JS only (generate-seo.js imports it with Node): no asset imports.
//
//  Fields:
//    slug, city ('gurugram' | 'greater-noida' | 'ncr'), metaTitle, metaDescription,
//    eyebrow, h1, lead, sections [{ heading, paragraphs[], points[] }],
//    homes: optional list of Gurugram residence slugs to show (default: all),
//    faqs [{ q, a }], related [{ text, href }],
//    canonicalPath: set when another page covers the search better; the page
//    then points Google there and stays out of the sitemaps.
// ─────────────────────────────────────────────────────────────

export const residenceSearchPages = [
  // ── Gurugram ──────────────────────────────────────────────
  {
    slug: 'long-stay-serviced-apartments-gurgaon',
    city: 'gurugram',
    metaTitle: 'Long Stay Serviced Apartments in Gurgaon | Monthly to Multi-Year | Residences by Sandane Homes',
    metaDescription: 'Long stay serviced apartments in Gurgaon, from one month to several years: entire furnished 3–4 BHK homes in Sector 27 and Sector 58, with housekeeping, Wi-Fi, utilities and power backup in one monthly amount. GST invoice to your company.',
    eyebrow: 'Gurgaon · One month to multi-year',
    h1: 'Long Stay Serviced Apartments in Gurgaon',
    lead: 'For stays counted in months, not nights: an entire furnished home that one person, one family or one team has to itself, looked after by our team for as long as the posting lasts.',
    sections: [
      {
        heading: 'Why a hotel room stops working after a few weeks',
        paragraphs: [
          'Hotel rooms and studio service apartments are built for short trips. After the first couple of weeks the things that matter change: a proper kitchen, a quiet bedroom away from where you work, space when family visits, a place that feels like home at the end of a long day.',
          'Our long stay homes in Gurgaon are 3 and 4 bedroom apartments and independent floors in settled residential sectors, not rooms off a hotel corridor. You get the space of a family home with the upkeep of a serviced apartment.',
        ],
      },
      {
        heading: 'What a long stay with us looks like',
        points: [
          'Minimum stay of 30 days, then month by month for as long as the assignment runs',
          'Extend or shorten as plans change; many stays run for a year or more',
          'One monthly amount covering the home, daily housekeeping, Wi-Fi, electricity, water, 100% power backup and society maintenance',
          'Linen changed twice a week, repairs handled by our team',
          'Korean and Japanese breakfast and dinner, and a car to and from the office, can be arranged',
          'Your company is invoiced directly each month, with GST',
        ],
      },
      {
        heading: 'Who stays with us long term',
        paragraphs: [
          'Most of our long stay guests are expats on 6 to 24 month postings, sent by their company. Others are project teams setting up an office or a plant, families who have just relocated and want to settle before choosing a permanent home, and senior executives between leases.',
          'Because the home is leased to the company, it can also pass from one employee to the next when postings rotate, without a new search each time.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the minimum stay for a long stay serviced apartment?', a: '30 days. From there, stays run month by month up to multi-year corporate postings, and can be extended as the assignment changes.' },
      { q: 'What is included in the monthly amount?', a: 'The furnished home, daily housekeeping with linen changes twice a week, Wi-Fi, electricity, water, 100% power backup, society maintenance and repairs. There are no broker fees.' },
      { q: 'Can our company pay and get a GST invoice?', a: 'Yes. We invoice your company directly every month with a GST invoice, so your employee never deals with rent, deposits or landlords.' },
      { q: 'Where in Gurgaon are your long stay homes?', a: 'In Sector 27 (Green Meadows and Sushant Lok Block B, about 10–12 minutes from Cyber City) and in Sector 58 on Golf Course Extension Road (Conscient Hines Elevate).' },
      { q: 'Why are prices not shown on the website?', a: 'The monthly amount depends on the home, the length of stay and the services you choose, so we share a quote once we know your dates, the number of people and where they will work.' },
    ],
    related: [
      { text: 'All our homes in Gurgaon', href: '/residences/gurgaon' },
      { text: 'Fully furnished house for rent in Gurgaon', href: '/fully-furnished-house-for-rent-gurgaon' },
      { text: 'Corporate guest house in Gurgaon', href: '/corporate-guest-house-gurgaon' },
      { text: 'Serviced apartments near DLF Cyber City', href: '/serviced-apartments-dlf-cyber-city-gurgaon' },
      { text: 'Japanese expat housing in Gurgaon', href: '/gurugram/japanese-expat-housing' },
      { text: 'Korean expat housing in Gurgaon', href: '/gurugram/korean-expat-housing' },
    ],
  },
  {
    slug: 'fully-furnished-house-for-rent-gurgaon',
    city: 'gurugram',
    metaTitle: 'Fully Furnished House for Rent in Gurgaon | 4 BHK Independent Floors | Residences by Sandane Homes',
    metaDescription: 'Fully furnished 4 BHK independent floors in Sector 27 and 3 BHK apartments in Sector 58, Gurgaon, for rent by the month. Move in with a suitcase: furniture, kitchenware, linen, Wi-Fi, housekeeping and maintenance included.',
    eyebrow: 'Gurgaon · Sector 27 & Sector 58',
    h1: 'Fully Furnished House for Rent in Gurgaon',
    lead: 'Entire 4 BHK independent floors in Sector 27 and 3 BHK apartments in Sector 58, furnished down to the kitchenware and kept running by our team while you live there.',
    sections: [
      {
        heading: 'Furnished really means furnished',
        paragraphs: [
          'Many "furnished" rentals come with a bed, a sofa and an empty kitchen. Ours are set up so you can live normally from the first night.',
        ],
        points: [
          'Furniture in every room: beds, wardrobes, sofas, dining table',
          'A kitchen with kitchenware, ready to cook in',
          'Fresh linen, changed twice a week',
          '300 Mbps Wi-Fi and 100% power backup, so work calls don\'t drop',
          'Daily housekeeping, with maintenance and repairs handled by us',
        ],
      },
      {
        heading: 'Independent floor or apartment?',
        paragraphs: [
          'Green Meadows and Sushant Lok Block B in Sector 27 are independent builder floors: you get an entire floor with four bedrooms, which suits families and teams who want privacy and space. Both are close to Millennium City Centre metro and about 10–12 minutes from Cyber City.',
          'Conscient Hines Elevate in Sector 58 is a 3 BHK in a high-rise on Golf Course Extension Road, with a clubhouse that has a pool and squash courts. It suits people who prefer a gated tower with facilities on site.',
        ],
      },
      {
        heading: 'Renting a house yourself vs renting through us',
        paragraphs: [
          'Renting a house in Gurgaon the usual way means a broker, a security deposit, buying furniture, setting up internet, paying separate electricity and maintenance bills, finding a housekeeper and calling the landlord when something breaks.',
          'With us there is one monthly amount, no broker fees, and one contact for everything. If your company is paying, we invoice the company directly with GST.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you rent only to companies, or also to individuals?', a: 'Both. Most of our guests are placed by their company, but individuals and families can rent directly too.' },
      { q: 'Is the whole house mine, or is it shared?', a: 'The whole home is yours. Each residence is let to one family or one company team, never by the room.' },
      { q: 'What is the minimum rental period?', a: 'One month (30 days). Stays can run for as long as you need, including multi-year postings.' },
      { q: 'Do you charge brokerage?', a: 'No. You deal with us directly and there are no broker fees.' },
      { q: 'How big are the houses?', a: 'Green Meadows is a 4 BHK floor of 2,230 sq ft, Sushant Lok Block B a 4 BHK floor of about 2,700 sq ft (300 sq yd plot), and Elevate 3 BHK apartments of 2,095–2,595 sq ft.' },
    ],
    related: [
      { text: 'All our homes in Gurgaon', href: '/residences/gurgaon' },
      { text: 'Long stay serviced apartments in Gurgaon', href: '/long-stay-serviced-apartments-gurgaon' },
      { text: 'Green Meadows, Sector 27', href: '/green-meadows-sector-27-gurgaon' },
      { text: 'Sushant Lok Block B, Sector 27', href: '/sushant-lok-block-b-sector-27-gurgaon' },
      { text: 'Conscient Hines Elevate, Sector 58', href: '/elevate-hines-sector-58-gurgaon' },
      { text: 'Company lease apartments', href: '/company-lease-apartments-delhi-ncr' },
    ],
  },
  {
    slug: 'corporate-guest-house-gurgaon',
    city: 'gurugram',
    metaTitle: 'Corporate Guest House in Gurgaon | Entire Homes for Company Teams | Residences by Sandane Homes',
    metaDescription: 'A corporate guest house in Gurgaon without running one yourself: entire furnished 3–4 BHK homes for visiting staff, project teams and expats, with housekeeping, meals, car service and one monthly GST invoice to your company.',
    eyebrow: 'Gurgaon · For HR, admin and travel desks',
    h1: 'Corporate Guest House in Gurgaon',
    lead: 'Many companies keep a guest house for visiting colleagues. We run it for you: a whole furnished home, looked after every day and invoiced to the company each month.',
    sections: [
      {
        heading: 'A company guest house, minus the admin',
        paragraphs: [
          'Setting up your own guest house means a lease in the company\'s name, furnishing a flat, hiring a housekeeper and a cook, paying the bills and fixing whatever breaks, all on top of the admin team\'s real job.',
          'With us the company books an entire home and we handle the rest. Your team has one contact for every employee and client you send us.',
        ],
      },
      {
        heading: 'How companies use it',
        points: [
          'Colleagues visiting from head office, one after another through the month',
          'Engineers and specialists on project or commissioning work',
          'New joiners who need somewhere to live while they look for a flat',
          'Senior management visits and client delegations',
          'Expat employees on longer postings, alone or with family',
        ],
      },
      {
        heading: 'What your guests get, and what your admin team gets',
        paragraphs: [
          'Guests get their own bedroom in a 3 or 4 BHK home, a living and dining room, a kitchen, daily housekeeping, 300 Mbps Wi-Fi and full power backup. Korean and Japanese breakfast and dinner, and a car to and from the office, can be arranged.',
          'Your admin team gets one booking for one guest or a whole team, one monthly GST invoice, and one person to call.',
        ],
      },
    ],
    faqs: [
      { q: 'Can different employees use the same guest house during the month?', a: 'Yes. The home is booked by the company, so you decide who stays and when; we just need to know who is arriving.' },
      { q: 'What is the minimum booking?', a: 'One month (30 days). Many companies keep a home booked for a year or more.' },
      { q: 'Do you provide meals?', a: 'Korean and Japanese breakfast and dinner can be arranged, and every home has a full kitchen.' },
      { q: 'Can several people stay in one home?', a: 'Yes. Our Gurgaon homes have 3 or 4 bedrooms, so a small team can stay together with a bedroom each.' },
      { q: 'How is it billed?', a: 'One monthly GST invoice to your company, covering the home, housekeeping, Wi-Fi, utilities and maintenance.' },
    ],
    related: [
      { text: 'Gurugram corporate housing', href: '/gurugram-corporate-housing' },
      { text: 'Company lease apartments', href: '/company-lease-apartments-delhi-ncr' },
      { text: 'Long stay serviced apartments in Gurgaon', href: '/long-stay-serviced-apartments-gurgaon' },
      { text: 'Corporate guest house in Greater Noida', href: '/corporate-guest-house-greater-noida' },
      { text: 'All our homes in Gurgaon', href: '/residences/gurgaon' },
    ],
  },
  {
    slug: 'serviced-apartments-dlf-cyber-city-gurgaon',
    city: 'gurugram',
    homes: ['green-meadows-sector-27-gurgaon', 'sushant-lok-block-b-sector-27-gurgaon', 'elevate-hines-sector-58-gurgaon'],
    metaTitle: 'Serviced Apartments near DLF Cyber City Gurgaon | 10–12 Min Drive | Residences by Sandane Homes',
    metaDescription: 'Serviced apartments near DLF Cyber City and Cyber Hub: entire furnished 4 BHK floors in Sector 27, about 10–12 minutes by car, and 3 BHK apartments in Sector 58. For company expats and teams on long stays, with GST billing.',
    eyebrow: 'Gurgaon · Near Cyber City & Cyber Hub',
    h1: 'Serviced Apartments near DLF Cyber City',
    lead: 'Our Sector 27 homes are about 10–12 minutes by car from Cyber City and close to Millennium City Centre metro: near the office, in a quiet residential street.',
    sections: [
      {
        heading: 'Live near Cyber City, not inside it',
        paragraphs: [
          'DLF Cyber City and Cyber Hub are offices, restaurants and traffic. Most people who work there live in the residential sectors around it, where streets are quieter and daily life is easier.',
          'Sector 27, where two of our homes are, is a settled residential area close to Galleria Market and Max Hospital, with Millennium City Centre metro nearby.',
        ],
      },
      {
        heading: 'Getting to work',
        points: [
          'Green Meadows, Sector 27: about 10 minutes by car to Cyber City, 8 minutes\' walk to Millennium City Centre metro',
          'Sushant Lok Block B, Sector 27: about 12 minutes by car to Cyber City, 4 minutes\' drive to the metro',
          'Conscient Hines Elevate, Sector 58: about 18 minutes by car to Cyber City',
          'The Yellow Line connects with the Rapid Metro at Sikanderpur for Cyber City',
          'A car to and from the office can be arranged with the stay',
        ],
      },
      {
        heading: 'Made for long stays and teams',
        paragraphs: [
          'These are entire 3 and 4 BHK homes, so a family or a small project team can live together, each with a bedroom. Stays start at one month and the company is invoiced directly, with GST.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you have serviced apartments inside DLF Cyber City?', a: 'No. Cyber City is an office district. Our nearest homes are in Sector 27, about 10–12 minutes away by car.' },
      { q: 'How far are your apartments from Cyber Hub?', a: 'Green Meadows is about 10 minutes and Sushant Lok Block B about 12 minutes by car from Cyber City and Cyber Hub. Elevate in Sector 58 is about 18 minutes.' },
      { q: 'Can you arrange daily transport to the office?', a: 'Yes, a car to and from the office can be arranged as part of the stay.' },
      { q: 'What sizes are available?', a: '4 BHK independent floors in Sector 27 (2,230 sq ft and about 2,700 sq ft) and 3 BHK apartments of 2,095–2,595 sq ft in Sector 58.' },
    ],
    related: [
      { text: 'All our homes in Gurgaon', href: '/residences/gurgaon' },
      { text: 'Serviced apartments in Sushant Lok', href: '/gurugram/sushant-lok' },
      { text: 'Long stay serviced apartments in Gurgaon', href: '/long-stay-serviced-apartments-gurgaon' },
      { text: 'Corporate guest house in Gurgaon', href: '/corporate-guest-house-gurgaon' },
    ],
  },
  {
    slug: 'serviced-apartments-golf-course-road-gurgaon',
    city: 'gurugram',
    homes: ['elevate-hines-sector-58-gurgaon'],
    metaTitle: 'Serviced Apartments on Golf Course Extension Road Gurgaon | Sector 58 | Residences by Sandane Homes',
    metaDescription: 'Serviced 3 BHK apartments at Conscient Hines Elevate, Sector 58 on Golf Course Extension Road, Gurgaon: 2,095–2,595 sq ft, clubhouse with pool and squash courts, furnished and looked after for long company stays.',
    eyebrow: 'Gurgaon · Sector 58 · Golf Course Extension Road',
    h1: 'Serviced Apartments on Golf Course Extension Road',
    lead: 'Large 3 BHK apartments at Conscient Hines Elevate in Sector 58, furnished by us and looked after every day, in a tower with a full clubhouse.',
    sections: [
      {
        heading: 'The building',
        points: [
          'An international-grade tower developed with Hines',
          'Clubhouse with a pool and squash courts, included with the stay',
          'A vehicle-free landscaped podium, good for children and evening walks',
          '3 BHK apartments of 2,095–2,595 sq ft',
        ],
      },
      {
        heading: 'Getting around',
        paragraphs: [
          'Sector 55-56 Rapid Metro is about 8 minutes by car, and Cyber City about 18 minutes. Golf Course Extension Road continues south from Golf Course Road, so the offices along Golf Course Road are within easy reach, and a car to and from the office can be arranged.',
        ],
      },
      {
        heading: 'Who it suits',
        paragraphs: [
          'Expat families and senior executives who want a resort-style clubhouse and the security of a gated high-rise. If you would rather have an entire independent floor with four bedrooms, see our Sector 27 homes.',
        ],
      },
    ],
    faqs: [
      { q: 'Is the clubhouse included?', a: 'Yes. Guests at Elevate can use the clubhouse, which has a pool and squash courts.' },
      { q: 'How many bedrooms do the apartments have?', a: 'Three bedrooms, in apartments of 2,095–2,595 sq ft.' },
      { q: 'Do you also have homes on Golf Course Road itself?', a: 'Our nearest homes to Golf Course Road are in Sector 27 (Green Meadows and Sushant Lok Block B). Elevate is on Golf Course Extension Road in Sector 58.' },
      { q: 'What is the minimum stay?', a: 'One month (30 days), up to multi-year postings.' },
    ],
    related: [
      { text: 'Conscient Hines Elevate, Sector 58', href: '/elevate-hines-sector-58-gurgaon' },
      { text: 'Serviced apartments on Golf Course Road', href: '/gurugram/golf-course-road' },
      { text: 'All our homes in Gurgaon', href: '/residences/gurgaon' },
      { text: 'Fully furnished house for rent in Gurgaon', href: '/fully-furnished-house-for-rent-gurgaon' },
    ],
  },
  // The three below target areas where we don't have a home. They say so, show
  // the nearest homes we do run, and point Google at the page that covers it.
  {
    slug: 'serviced-apartments-dlf-phase-5-gurgaon',
    city: 'gurugram',
    canonicalPath: '/gurugram/golf-course-road',
    homes: ['green-meadows-sector-27-gurgaon', 'sushant-lok-block-b-sector-27-gurgaon', 'elevate-hines-sector-58-gurgaon'],
    metaTitle: 'Serviced Apartments near DLF Phase 5 Gurgaon | Entire 3–4 BHK Homes | Residences by Sandane Homes',
    metaDescription: 'Looking for a serviced apartment near DLF Phase 5? We don\'t have homes inside Phase 5; our nearest are entire furnished 4 BHK floors in Sector 27 and 3 BHK apartments in Sector 58, for long company stays.',
    eyebrow: 'Gurgaon · Near DLF Phase 5',
    h1: 'Serviced Apartments near DLF Phase 5',
    lead: 'We don\'t run homes inside DLF Phase 5. Our nearest are in Sector 27 and on Golf Course Extension Road in Sector 58, both close to the Golf Course Road offices.',
    sections: [
      {
        heading: 'The nearest homes we run',
        paragraphs: [
          'In Sector 27, Green Meadows and Sushant Lok Block B are entire 4 BHK independent floors near Millennium City Centre metro. In Sector 58, Conscient Hines Elevate has 3 BHK apartments with a clubhouse. All are furnished, cleaned daily and leased by the month.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you have serviced apartments in DLF Phase 5?', a: 'No. Our nearest homes are in Sector 27 (Green Meadows and Sushant Lok Block B) and Sector 58 (Conscient Hines Elevate).' },
    ],
    related: [
      { text: 'Serviced apartments on Golf Course Road', href: '/gurugram/golf-course-road' },
      { text: 'All our homes in Gurgaon', href: '/residences/gurgaon' },
    ],
  },
  {
    slug: 'serviced-apartments-one-horizon-center-gurgaon',
    city: 'gurugram',
    canonicalPath: '/gurugram/golf-course-road',
    homes: ['green-meadows-sector-27-gurgaon', 'sushant-lok-block-b-sector-27-gurgaon', 'elevate-hines-sector-58-gurgaon'],
    metaTitle: 'Serviced Apartments near One Horizon Center Gurgaon | Residences by Sandane Homes',
    metaDescription: 'Serviced apartments for people working at One Horizon Center on Golf Course Road: entire furnished 4 BHK floors in Sector 27 and 3 BHK apartments in Sector 58, for long company stays with GST billing.',
    eyebrow: 'Gurgaon · Golf Course Road offices',
    h1: 'Serviced Apartments near One Horizon Center',
    lead: 'For people working at One Horizon Center and the other Golf Course Road offices: our nearest homes are in Sector 27 and on Golf Course Extension Road in Sector 58.',
    sections: [
      {
        heading: 'The nearest homes we run',
        paragraphs: [
          'Green Meadows and Sushant Lok Block B in Sector 27 are entire 4 BHK independent floors. Conscient Hines Elevate in Sector 58 has 3 BHK apartments with a clubhouse. Each is furnished, cleaned daily and leased by the month, and a car to and from the office can be arranged.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you have apartments inside One Horizon Center?', a: 'No, One Horizon Center is an office building. Our nearest homes are in Sector 27 and Sector 58.' },
    ],
    related: [
      { text: 'Serviced apartments on Golf Course Road', href: '/gurugram/golf-course-road' },
      { text: 'All our homes in Gurgaon', href: '/residences/gurgaon' },
    ],
  },
  {
    slug: 'serviced-apartments-sohna-road-gurgaon',
    city: 'gurugram',
    canonicalPath: '/residences/gurgaon',
    homes: ['elevate-hines-sector-58-gurgaon', 'green-meadows-sector-27-gurgaon', 'sushant-lok-block-b-sector-27-gurgaon'],
    metaTitle: 'Serviced Apartments for Sohna Road Gurgaon | Residences by Sandane Homes',
    metaDescription: 'We don\'t have homes on Sohna Road. Our Gurgaon homes are entire furnished 3–4 BHK apartments and floors in Sector 58 and Sector 27, for long company stays.',
    eyebrow: 'Gurgaon · Sohna Road',
    h1: 'Serviced Apartments for Sohna Road',
    lead: 'We don\'t run homes on Sohna Road. Our Gurgaon homes are in Sector 58 on Golf Course Extension Road and in Sector 27.',
    sections: [
      {
        heading: 'Our homes in Gurgaon',
        paragraphs: [
          'Conscient Hines Elevate in Sector 58 has 3 BHK apartments with a clubhouse. Green Meadows and Sushant Lok Block B in Sector 27 are entire 4 BHK independent floors. All are furnished, cleaned daily and leased by the month.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you have serviced apartments on Sohna Road?', a: 'No. Our Gurgaon homes are in Sector 58 (Golf Course Extension Road) and Sector 27.' },
    ],
    related: [
      { text: 'All our homes in Gurgaon', href: '/residences/gurgaon' },
      { text: 'Serviced apartments on Golf Course Extension Road', href: '/serviced-apartments-golf-course-road-gurgaon' },
    ],
  },

  // ── Greater Noida ─────────────────────────────────────────
  {
    slug: 'fully-furnished-house-for-rent-greater-noida',
    city: 'greater-noida',
    metaTitle: 'Fully Furnished House & Flat for Rent in Greater Noida | Entire 3–4 BHK Homes | Residences by Sandane Homes',
    metaDescription: 'Fully furnished houses, villas and flats for rent in Greater Noida: entire 3–4 BHK homes of 2,700–3,500 sq ft in Jaypee Greens, Ansal Golf Links and Godrej Golf Link, with housekeeping, Wi-Fi and maintenance included. Monthly and long company leases.',
    eyebrow: 'Greater Noida · Entire 3–4 BHK homes',
    h1: 'Fully Furnished House for Rent in Greater Noida',
    lead: 'Entire 3–4 BHK villas and apartments of 2,700–3,500 sq ft in Greater Noida\'s quiet golf communities, furnished and looked after by our team, by the month.',
    sections: [
      {
        heading: 'Big homes, ready on day one',
        paragraphs: [
          'Greater Noida has plenty of flats for rent; what is hard to find is a large home that is properly furnished and kept running for you. Ours have furniture in every room, a kitchen with kitchenware, fresh linen, 300 Mbps Wi-Fi and 100% power backup.',
          'Daily housekeeping is included, and when something needs fixing our team takes care of it, so you never chase a landlord.',
        ],
      },
      {
        heading: 'Where our homes are',
        paragraphs: [
          'Our Greater Noida homes are in the gated golf communities that expat families prefer: Jaypee Greens, Ansal Golf Links and Godrej Golf Link. They are green, quiet and secure, and within reach of the industrial and office areas of Greater Noida and the Yamuna Expressway.',
        ],
      },
      {
        heading: 'Renting a house yourself vs renting through us',
        points: [
          'No broker fees and no furniture to buy',
          'One monthly amount covering the home, housekeeping, Wi-Fi, utilities and maintenance',
          'Minimum stay of one month, extendable to multi-year postings',
          'Company invoiced directly with GST, if your employer is paying',
          'Korean and Japanese breakfast and dinner, and a car to work, can be arranged',
        ],
      },
    ],
    faqs: [
      { q: 'Can I rent a fully furnished house in Greater Noida for just a few months?', a: 'Yes. The minimum is one month (30 days), and you can extend month by month.' },
      { q: 'How big are the homes?', a: 'Our Greater Noida residences are entire 3–4 BHK villas and apartments of 2,700–3,500 sq ft.' },
      { q: 'Is the house shared with anyone?', a: 'No. Each home is let to one family or one company team, never by the room.' },
      { q: 'Do you charge brokerage?', a: 'No. You deal with us directly.' },
      { q: 'I only need a room for a few nights. Can you help?', a: 'Yes. Sandane Homes also runs boutique hotels in Greater Noida for short stays.' },
    ],
    related: [
      { text: 'Serviced apartments in Greater Noida', href: '/serviced-apartments-greater-noida' },
      { text: 'Jaypee Greens', href: '/serviced-apartments-jaypee-greens' },
      { text: 'Ansal Golf Links', href: '/serviced-apartments-ansal-golf-links' },
      { text: 'Godrej Golf Link', href: '/serviced-apartments-godrej-golf-link' },
      { text: 'Luxury villa rental in Greater Noida', href: '/luxury-villa-rental-greater-noida' },
      { text: 'Long stay apartments in Greater Noida', href: '/long-stay-apartments-greater-noida' },
    ],
  },
  {
    slug: 'corporate-guest-house-greater-noida',
    city: 'greater-noida',
    metaTitle: 'Corporate Guest House in Greater Noida | Company Accommodation for Teams | Residences by Sandane Homes',
    metaDescription: 'A company guest house in Greater Noida for visiting engineers, expats and project teams: entire furnished 3–4 BHK homes with housekeeping, Korean & Japanese meals, car service to the plant or office and one monthly GST invoice.',
    eyebrow: 'Greater Noida · For HR, admin and travel desks',
    h1: 'Corporate Guest House in Greater Noida',
    lead: 'For companies in Greater Noida\'s industrial and office belt: an entire furnished home for your visiting engineers, expats and project teams, run by us and invoiced to you each month.',
    sections: [
      {
        heading: 'Why companies here need one',
        paragraphs: [
          'Plants and offices in Greater Noida host a steady flow of visitors: engineers for installation and commissioning, specialists from head office, trainers, auditors and expats on longer postings. Hotel rooms get expensive and cramped for stays of weeks or months, and running your own guest house is a job in itself.',
        ],
      },
      {
        heading: 'What we provide',
        points: [
          'Entire 3–4 BHK villas and apartments of 2,700–3,500 sq ft, with a bedroom for each guest',
          'Daily housekeeping, linen, Wi-Fi and 100% power backup',
          'Korean and Japanese breakfast and dinner, on request',
          'A car to and from the plant or office',
          'One booking for one guest or a whole team, and one monthly GST invoice',
        ],
      },
      {
        heading: 'Short visits too',
        paragraphs: [
          'For visitors staying only a few nights, Sandane Homes also runs boutique hotels in Greater Noida, so one team can arrange both short and long stays.',
        ],
      },
    ],
    faqs: [
      { q: 'Can we rotate different employees through the same home?', a: 'Yes. The home is booked by the company, so you decide who stays; we just need to know who is arriving.' },
      { q: 'What is the minimum booking?', a: 'One month (30 days) for a residence. For a few nights, our Greater Noida hotels are the better fit.' },
      { q: 'Do you serve Korean and Japanese food?', a: 'Korean and Japanese breakfast and dinner can be arranged, and every home has a full kitchen.' },
      { q: 'How is it billed?', a: 'One monthly GST invoice to your company.' },
    ],
    related: [
      { text: 'Corporate housing in Greater Noida', href: '/corporate-housing-greater-noida' },
      { text: 'Accommodation for visiting engineers', href: '/accommodation-visiting-engineers-noida' },
      { text: 'Korean guest house in Greater Noida', href: '/korean-guest-house-greater-noida' },
      { text: 'Fully furnished house for rent in Greater Noida', href: '/fully-furnished-house-for-rent-greater-noida' },
      { text: 'Corporate guest house in Gurgaon', href: '/corporate-guest-house-gurgaon' },
    ],
  },

  // ── Both cities ───────────────────────────────────────────
  {
    slug: 'company-lease-apartments-delhi-ncr',
    city: 'ncr',
    metaTitle: 'Company Lease Apartments in Gurgaon & Greater Noida | Furnished Homes for Employees | Residences by Sandane Homes',
    metaDescription: 'Furnished 3–4 BHK homes leased to your company for employees and expats in Gurgaon and Greater Noida: one agreement, one monthly GST invoice, and your employee never deals with rent, deposits or landlords. One month to multi-year.',
    eyebrow: 'Gurgaon & Greater Noida · Company leases',
    h1: 'Company Lease Apartments for Your Employees',
    lead: 'Your company leases the home from us; your employee simply moves in. Furnished 3–4 BHK homes in Gurgaon and Greater Noida, one agreement and one monthly invoice.',
    sections: [
      {
        heading: 'What a company lease is',
        paragraphs: [
          'Instead of paying a house-rent allowance and leaving the employee to find a flat, the company books the home and pays us directly. The employee gets a ready home without brokers, deposits or utility bills, and the company gets one supplier and a GST invoice.',
        ],
      },
      {
        heading: 'Why HR and admin teams choose it',
        points: [
          'One agreement and one monthly GST invoice for every home you book',
          'No deposits, brokers or landlords for your employee to deal with',
          'Homes furnished, cleaned daily and maintained by us',
          'The same home can pass to the next employee when postings rotate',
          'One contact for every employee and client you send us',
        ],
      },
      {
        heading: 'Where and what',
        paragraphs: [
          'In Gurgaon: 4 BHK independent floors in Sector 27 and 3 BHK apartments in Sector 58. In Greater Noida: 3–4 BHK villas and apartments of 2,700–3,500 sq ft in Jaypee Greens, Ansal Golf Links and Godrej Golf Link. Stays run from one month to several years.',
        ],
      },
    ],
    faqs: [
      { q: 'Who signs the agreement?', a: 'Your company. The employee is the occupant, so they never sign a lease or pay a deposit.' },
      { q: 'Do you give a GST invoice?', a: 'Yes, one GST invoice to the company every month.' },
      { q: 'Can the home move to another employee?', a: 'Yes. When one posting ends, the next employee can move into the same home.' },
      { q: 'What is the shortest lease?', a: 'One month (30 days). Most company leases run for six months or longer.' },
      { q: 'What do you need from us to start?', a: 'The dates, how many people, the city and where they will work. We then share homes that fit.' },
    ],
    related: [
      { text: 'Gurugram corporate housing', href: '/gurugram-corporate-housing' },
      { text: 'Corporate housing in Greater Noida', href: '/corporate-housing-greater-noida' },
      { text: 'Corporate guest house in Gurgaon', href: '/corporate-guest-house-gurgaon' },
      { text: 'Corporate guest house in Greater Noida', href: '/corporate-guest-house-greater-noida' },
      { text: 'Expat housing in Delhi NCR', href: '/expat-housing-delhi-ncr' },
    ],
  },
];

export const residenceSearchPath = (p) => `/${p.slug}`;
export const getResidenceSearchPage = (slug) => residenceSearchPages.find((p) => p.slug === slug);
// Pages that should be in the sitemaps (the rest point Google to another page).
export const indexedResidenceSearchPages = residenceSearchPages.filter((p) => !p.canonicalPath);
