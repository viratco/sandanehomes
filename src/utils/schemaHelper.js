/**
 * Schema.org Helper Utilities for Hotel and LodgingBusiness JSON-LD Structured Data
 */

export const SANDANE_PARENT_ORGANIZATION = {
  "@type": "Organization",
  "name": "Sandane Homes",
  "url": "https://www.sandanehomes.com"
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
    "streetAddress": "Greater Noida",
    "addressLocality": "Greater Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201310",
    "addressCountry": "IN"
  },
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
    "streetAddress": "Greater Noida",
    "addressLocality": "Greater Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201310",
    "addressCountry": "IN"
  },
  "parentOrganization": SANDANE_PARENT_ORGANIZATION,
  "amenityFeature": amenities.map((amenity) => ({
    "@type": "LocationFeatureSpecification",
    "name": amenity,
    "value": true
  }))
});
