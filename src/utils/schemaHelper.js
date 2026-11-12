/**
 * Schema.org Helper Utilities for Hotel and LodgingBusiness JSON-LD Structured Data
 */

export const SANDANE_PARENT_ORGANIZATION = {
  "@type": "Organization",
  "name": "Sandane Homes",
  "url": "https://www.sandanehomes.com"
};

// The Sandane Homes brand runs two different things: boutique hotels (rooms,
// short stays) and Residences by Sandane Homes (entire homes, long company
// stays). The brand itself is therefore an Organization, not a lodging.
export const SANDANE_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sandane Homes",
  "url": "https://www.sandanehomes.com/",
  "logo": "https://www.sandanehomes.com/logo.png",
  "telephone": "+919711722273",
  "description": "Sandane Homes runs boutique hotels in Greater Noida for short stays, and Residences by Sandane Homes for long stays: entire furnished 3–4 BHK homes of 2,700–3,500 sq ft for company expats and families in Greater Noida and Gurugram.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 27 / DLF Phase 4",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122002",
    "addressCountry": "IN"
  },
  "areaServed": ["Greater Noida", "Noida", "Gurugram", "Gurgaon", "Delhi NCR"],
  "subOrganization": {
    "@type": "Organization",
    "name": "Residences by Sandane Homes",
    "url": "https://www.sandanehomes.com/residences",
    "description": "Entire furnished 3–4 BHK serviced apartments and villas of 2,700–3,500 sq ft, leased to companies for expat employees and their families on long stays."
  }
};

// What one Residences by Sandane Homes home is, in numbers search engines can read.
// unitCode FTK = square foot.
export const RESIDENCE_HOME_SPEC = {
  "@type": "Apartment",
  "name": "Entire furnished 3–4 BHK serviced home",
  "accommodationCategory": "Serviced apartment for long corporate stays",
  "floorSize": { "@type": "QuantitativeValue", "minValue": 2700, "maxValue": 3500, "unitCode": "FTK" },
  "numberOfBedrooms": { "@type": "QuantitativeValue", "minValue": 3, "maxValue": 4 }
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
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 27 / DLF Phase 4",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122002",
    "addressCountry": "IN"
  },
  "areaServed": ["Gurugram", "Gurgaon", "DLF Cyber City", "Golf Course Road", "Sushant Lok", "Delhi NCR", "Noida", "Greater Noida"],
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
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 27 / DLF Phase 4",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122002",
    "addressCountry": "IN"
  },
  "areaServed": ["Gurugram", "Gurgaon", "DLF Cyber City", "Golf Course Road", "Sushant Lok", "Delhi NCR", "Noida", "Greater Noida"],
  "parentOrganization": SANDANE_PARENT_ORGANIZATION,
  "amenityFeature": amenities.map((amenity) => ({
    "@type": "LocationFeatureSpecification",
    "name": amenity,
    "value": true
  }))
});
