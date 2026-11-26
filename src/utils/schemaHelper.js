/**
 * Schema.org helpers. Plain JS: generate-seo.js imports this with Node.
 *
 * One Organization entity describes the whole site (SANDANE_ORGANIZATION_SCHEMA,
 * added to every page's <head> by generate-seo.js). Other blocks point at it, or at
 * its Residences sub-organisation, by @id instead of repeating it.
 */

export const SITE_URL = 'https://www.sandanehomes.com';
export const ORG_ID = `${SITE_URL}/#organization`;
export const RESIDENCES_ID = `${SITE_URL}/residences#organization`;

export const SANDANE_PARENT_ORGANIZATION = { "@type": "Organization", "@id": ORG_ID, "name": "Sandane Homes" };
export const RESIDENCES_REF = { "@type": "Organization", "@id": RESIDENCES_ID, "name": "Residences by Sandane Homes" };

// Residences is a service-area business: it finds, leases, furnishes and manages homes
// on demand, so it has no street address. The Greater Noida hotel address belongs only
// on the hotel pages.
export const RESIDENCES_ORGANIZATION = {
  "@type": "Organization",
  "@id": RESIDENCES_ID,
  "name": "Residences by Sandane Homes",
  "url": `${SITE_URL}/residences`,
  "email": "residences@sandanehomes.com",
  "telephone": "+919711722273",
  "description": "Finds, leases, furnishes and manages 3–4 BHK homes for expat and corporate employees in Gurugram, Noida and Greater Noida, on demand, under a company lease with a monthly GST invoice.",
  "areaServed": ["Gurugram", "Noida", "Greater Noida"],
  "contactPoint": [
    { "@type": "ContactPoint", "contactType": "customer service", "telephone": "+919711722273", "description": "Phone" },
    { "@type": "ContactPoint", "contactType": "customer service", "telephone": "+918826269690", "description": "WhatsApp" },
    { "@type": "ContactPoint", "contactType": "customer service", "url": "https://line.me/ti/p/hrUpm82UQu", "description": "LINE" },
    { "@type": "ContactPoint", "contactType": "customer service", "url": "https://qr.kakao.com/talk/c2qbkrfJEP2YU5LqoffN7IeOuWU-", "description": "KakaoTalk" }
  ]
};

export const SANDANE_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  "name": "Sandane Homes",
  "url": `${SITE_URL}/`,
  "logo": `${SITE_URL}/logo.png`,
  "email": "residences@sandanehomes.com",
  "telephone": "+919711722273",
  "description": "Boutique hotels in Greater Noida for short stays, and Residences by Sandane Homes, which finds, leases, furnishes and manages homes for expat and corporate employees in Gurugram, Noida and Greater Noida.",
  "areaServed": ["Gurugram", "Noida", "Greater Noida"],
  // TODO(owner): add sameAs with the LinkedIn company page, Instagram and Google Business Profile URLs.
  "subOrganization": RESIDENCES_ORGANIZATION
};

// What one home is, in terms search engines can read: 3–4 BHK, nothing more.
export const RESIDENCE_HOME_SPEC = {
  "@type": "Apartment",
  "name": "Entire furnished 3–4 BHK home",
  "accommodationCategory": "Furnished home for long corporate stays",
  "numberOfBedrooms": { "@type": "QuantitativeValue", "minValue": 3, "maxValue": 4 }
};

// The Greater Noida hotels: locality only, since each hotel has its own street address.
const HOTEL_ADDRESS = {
  "@type": "PostalAddress",
  "addressLocality": "Greater Noida",
  "addressRegion": "Uttar Pradesh",
  "addressCountry": "IN"
};

export const createHotelSchema = ({
  name,
  url,
  description,
  starRating = "4",
  priceRange = "₹₹",
  image = "https://www.sandanehomes.com/residences-og.jpg",
  amenities = ["Daily Housekeeping", "High-Speed WiFi", "24/7 Power Backup", "Corporate GST Billing"]
}) => ({
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": name,
  "url": url,
  "description": description,
  "telephone": "+91 97117 22273",
  "priceRange": priceRange,
  "image": image,
  "address": HOTEL_ADDRESS,
  "areaServed": ["Greater Noida", "Noida"],
  "parentOrganization": SANDANE_PARENT_ORGANIZATION,
  "starRating": {
    "@type": "Rating",
    "ratingValue": String(starRating)
  },
  "amenityFeature": amenities.map((amenity) => ({
    "@type": "LocationFeatureSpecification",
    "name": amenity,
    "value": true
  }))
});

export const createLodgingSchema = ({
  name,
  url,
  description,
  priceRange = "₹₹₹",
  image = "https://www.sandanehomes.com/residences-og.jpg",
  amenities = ["Fully Furnished Kitchen", "Daily Housekeeping", "24/7 Security", "Corporate GST Invoicing"]
}) => ({
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": name,
  "url": url,
  "description": description,
  "telephone": "+91 97117 22273",
  "priceRange": priceRange,
  "image": image,
  "address": HOTEL_ADDRESS,
  "areaServed": ["Greater Noida", "Noida"],
  "parentOrganization": SANDANE_PARENT_ORGANIZATION,
  "amenityFeature": amenities.map((amenity) => ({
    "@type": "LocationFeatureSpecification",
    "name": amenity,
    "value": true
  }))
});
