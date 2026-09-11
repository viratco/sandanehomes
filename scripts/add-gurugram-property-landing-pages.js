import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.join(__dirname, '../src/data/landingPages.js');

const rawContent = fs.readFileSync(targetFile, 'utf8');

// The 10 Gurugram properties extracted directly from the verified Sandane Homes portfolio document
const gurugramProperties = [
  {
    slug: "dlf-park-place-sector-54-gurgaon",
    metaTitle: "DLF Park Place Sector 54 Gurgaon | Serviced Apartments | Residences by Sandane Homes",
    metaDescription: "Luxury 3BHK & 4BHK serviced apartments at DLF Park Place, Golf Course Road Sector 54 Gurgaon. Managed by Sandane Homes. Fully furnished, housekeeping, 10 mins to Sector 53-54 Metro.",
    canonical: "https://www.sandanehomes.com/dlf-park-place-sector-54-gurgaon",
    h1: "DLF Park Place, Sector 54, Golf Course Road Gurgaon",
    subtitle: "Premier 3BHK & 4BHK Serviced Condominiums Managed by Sandane Homes — 10 Mins to Metro",
    intro: "DLF Park Place in Sector 54, Golf Course Road is one of Gurugram's most prestigious gated luxury residential addresses. Situated right on the Golf Course Road transit spine, DLF Park Place offers world-class amenities, grand clubhouse facilities, lush landscaping, and multi-tier security. Residences by Sandane Homes provides fully furnished, hotel-grade serviced apartments inside DLF Park Place — tailored specifically for corporate MNC directors, Japanese and Korean expatriates, and high-net-worth business travellers seeking turnkey comfort, daily housekeeping, 300 Mbps Wi-Fi, and corporate GST billing.",
    propertyType: "Luxury Condominium",
    location: "Golf Course Road, Sector 54, Gurgaon",
    access: "10 mins walk to Sector 53-54 Metro Station",
    buildingAge: "15 Years",
    clubhouse: "₹38,000 / Year",
    servicesIncluded: "Maintenance, Reserved Parking, Daily Housekeeping, Periodic Preventive Maintenance, 24/7 Security",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Tower A-83", floor: "8th Floor", bhk: "3BHK", area: "1,983 sq.ft.", furnishing: "Fully Furnished", monthlyRent: "₹245,000", maintenance: "₹32,000 Quarterly", status: "Ready to Move" },
      { tower: "Tower D-43", floor: "4th Floor", bhk: "3BHK", area: "1,983 sq.ft.", furnishing: "Fully Furnished", monthlyRent: "₹245,000", maintenance: "₹32,000 Quarterly", status: "Ready to Move" },
      { tower: "Tower C-21", floor: "2nd Floor", bhk: "3BHK", area: "1,983 sq.ft.", furnishing: "Fully Furnished", monthlyRent: "₹245,000", maintenance: "₹32,000 Quarterly", status: "Ready to Move" },
      { tower: "Tower N-73", floor: "7th Floor", bhk: "4BHK", area: "2,700 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹290,000", maintenance: "₹32,000 Quarterly", status: "Furnished by Sandane" },
      { tower: "Tower G-144", floor: "14th Floor", bhk: "3BHK", area: "1,983 sq.ft.", furnishing: "Fully Furnished", monthlyRent: "₹245,000", maintenance: "₹32,000 Quarterly", status: "Ready to Move" }
    ],
    whyChooseTitle: "Why DLF Park Place with Sandane Homes",
    whyChooseItems: [
      { title: "Golf Course Road Prestige", text: "Walk to Sector 53-54 Rapid Metro Station and enjoy immediate access to One Horizon Center, Two Horizon, Central Plaza, and DLF Cyber City." },
      { title: "Full Expat Support Ecosystem", text: "FRRO Form C address proof issued within 24 hours, mild hygiene-compliant breakfast catering, and bilingual corporate concierge support." },
      { title: "5-Star Hotel Maintenance", text: "Daily professional housekeeping, weekly linen refresh, 100% power backup, and dedicated maintenance engineers on call." },
      { title: "Corporate B2B Master Billing", text: "Streamlined corporate lease contracts with direct GST input credit invoices for MNC mobility departments." }
    ],
    commuteTable: [
      { destination: "Sector 53-54 Rapid Metro Station", time: "10 minutes walk" },
      { destination: "One Horizon Center & Horizon Plaza", time: "5 minutes drive" },
      { destination: "DLF Cyber City & Cyber Hub", time: "12 minutes drive" },
      { destination: "IGI Airport New Delhi", time: "25 minutes via NH-48" },
      { destination: "Japanese & Korean Grocery Marts (Golf Course Rd)", time: "5 minutes drive" }
    ],
    inclusions: [
      "Turnkey fully furnished 3BHK and 4BHK residences with bespoke interior decor",
      "Fully equipped chef kitchen with refrigerator, microwave, induction/gas hob, and dinnerware",
      "Daily professional housekeeping and periodic deep cleaning",
      "300 Mbps high-speed optical fiber Wi-Fi and smart LED TVs",
      "100% power backup and continuous water supply",
      "Reserved covered parking bay for residents",
      "Clubhouse access with swimming pool, gym, and sports facilities",
      "Official Form C address verification for foreign expat FRRO compliance"
    ],
    faqs: [
      { question: "What unit configurations does Sandane Homes offer at DLF Park Place?", answer: "We manage multiple 3BHK (1,983 sq.ft.) and 4BHK (2,700 sq.ft.) luxury units with panoramic high-floor balconies and premium furnishings." },
      { question: "Is DLF Park Place suitable for Japanese and Korean corporate expats?", answer: "Yes, DLF Park Place is one of the most sought-after expat condominiums in Gurugram, located right along the Golf Course Road expat belt with nearby Japanese restaurants and Asian supermarkets." },
      { question: "What are the payment and deposit terms for Sandane Homes at DLF Park Place?", answer: "Standard terms include 2 months refundable security deposit and 1 month advance payment. Corporate GST master billing is supported." }
    ],
    related: [
      { text: "Elevate Hines Sector 59/58", link: "/elevate-hines-sector-58-gurgaon" },
      { text: "Emaar Digi Homes Sector 62", link: "/emaar-digi-homes-sector-62-gurgaon" },
      { text: "M3M Golfestate Sector 65", link: "/m3m-golfestate-sector-65-gurgaon" }
    ]
  },
  {
    slug: "elevate-hines-sector-58-gurgaon",
    metaTitle: "Elevate by Hines Sector 58 Gurgaon | Serviced Apartments | Sandane Homes",
    metaDescription: "Brand new 3BHK luxury serviced apartments at Conscient Hines Elevate, Sector 58 Gurgaon near Golf Course Ext Road. Managed by Sandane Homes for expats & corporate stays.",
    canonical: "https://www.sandanehomes.com/elevate-hines-sector-58-gurgaon",
    h1: "Conscient Hines Elevate, Sector 58, Gurgaon",
    subtitle: "Ultra-Modern 3BHK Architectural Residences by Hines & Sandane Homes — Golf Course Ext Road",
    intro: "Conscient Hines Elevate in Sector 58 is Gurugram's new benchmark for international luxury living. Developed in collaboration with international real estate firm Hines, Elevate features vehicle-free ground levels, stone-clad architectural facades, high-ceiling lobbies, and high international expat occupancy. Sandane Homes manages a premium fleet of 3BHK residences ranging from 2,095 to 2,595 sq.ft., providing corporate tenants and expat families with 5-star hotel services, turnkey custom furnishings, daily housekeeping, and concierge care.",
    propertyType: "Luxury Modern Condominium",
    location: "Sector 58, Gurgaon (Close to Golf Course Ext Road)",
    access: "5 mins to Golf Course Ext Road & Grand Hyatt Gurgaon corridor",
    buildingAge: "2 Years (Brand New Construction)",
    clubhouse: "Included in Maintenance",
    servicesIncluded: "Maintenance, Covered Parking, Daily Housekeeping, Periodic Maintenance, Resort Clubhouse",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Tower A-3003", floor: "30th Floor", bhk: "3BHK", area: "2,595 sq.ft.", furnishing: "Fully Furnished", monthlyRent: "₹285,000", maintenance: "₹22,000 Monthly", status: "Ready to Move" },
      { tower: "Tower E-302", floor: "3rd Floor", bhk: "3BHK", area: "2,595 sq.ft.", furnishing: "Fully Furnished", monthlyRent: "₹250,000", maintenance: "₹22,000 Monthly", status: "Ready to Move" },
      { tower: "Tower X-2701", floor: "27th Floor", bhk: "3BHK", area: "2,295 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹250,000", maintenance: "₹22,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower B-701", floor: "7th Floor", bhk: "3BHK", area: "2,095 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹250,000", maintenance: "₹22,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower E-1401", floor: "14th Floor", bhk: "3BHK", area: "2,095 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹250,000", maintenance: "₹22,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower D-3204", floor: "32nd Floor", bhk: "3BHK", area: "2,095 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹250,000", maintenance: "₹22,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower B-301", floor: "3rd Floor", bhk: "3BHK", area: "2,095 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹250,000", maintenance: "₹22,000 Monthly", status: "Furnished by Sandane" }
    ],
    whyChooseTitle: "Why Conscient Hines Elevate with Sandane Homes",
    whyChooseItems: [
      { title: "World-Class Hines Engineering", text: "Engineered to strict international building safety, soundproofing, and energy efficiency standards." },
      { title: "Vehicle-Free Surface Landscaping", text: "Pedestrian-only ground zones with European resort-style swimming pools and private jogging trails." },
      { title: "Turnkey Sandane Customization", text: "Apartments are fully furnished with plush mattresses, Italian leather sofas, dedicated workspaces, and smart appliances." },
      { title: "Expat Community Hub", text: "A vibrant international community of corporate assignees from American, European, and Japanese Fortune 500 firms." }
    ],
    commuteTable: [
      { destination: "Golf Course Extension Road", time: "2 minutes drive" },
      { destination: "Grand Hyatt Gurgaon & IREO Grand View", time: "4 minutes drive" },
      { destination: "Sector 55-56 Metro Station", time: "8 minutes drive" },
      { destination: "Cyber City & Cyber Hub", time: "18 minutes drive" },
      { destination: "IGI Airport Terminal 3", time: "30 minutes drive" }
    ],
    inclusions: [
      "Brand new 3BHK floor layouts ranging from 2,095 to 2,595 sq.ft.",
      "Custom designer interior fitouts designed for international corporate standards",
      "Daily housekeeping, garbage clearing, and periodic deep cleaning",
      "Complimentary high-speed 300 Mbps Wi-Fi with dual SSID coverage",
      "World-class clubhouse with temperature-controlled swimming pool and squash courts",
      "Reserved basement parking bays with EV charging provisions",
      "Direct B2B corporate lease agreements and GST invoicing"
    ],
    faqs: [
      { question: "What sizes are available at Conscient Hines Elevate through Sandane Homes?", answer: "We manage 3BHK residences from 2,095 sq.ft., 2,295 sq.ft., up to expansive 2,595 sq.ft. penthouses on the 30th and 32nd floors." },
      { question: "Is the clubhouse included in the monthly rent?", answer: "Yes, access to the Hines world-class resort clubhouse and fitness facilities is fully included." },
      { question: "Can Sandane Homes furnish units to custom expat company requirements?", answer: "Absolutely. We specialize in providing custom Japanese, Korean, and European furnishing packages including ergonomic chairs and specialized kitchenware." }
    ],
    related: [
      { text: "DLF Park Place Sector 54", link: "/dlf-park-place-sector-54-gurgaon" },
      { text: "Grand Arch Sector 58", link: "/the-grand-arch-sector-58-gurgaon" },
      { text: "Emaar Digi Homes Sector 62", link: "/emaar-digi-homes-sector-62-gurgaon" }
    ]
  },
  {
    slug: "the-grand-arch-sector-58-gurgaon",
    metaTitle: "The Grand Arch Sector 58 Gurgaon | Serviced Apartments | Sandane Homes",
    metaDescription: "Luxury 2BHK serviced apartment at IREO The Grand Arch, Sector 58 Gurgaon. Managed by Sandane Homes. Fully furnished, 1,561 sq.ft., clubhouse, close to Golf Course Ext Road.",
    canonical: "https://www.sandanehomes.com/the-grand-arch-sector-58-gurgaon",
    h1: "IREO The Grand Arch, Sector 58, Gurgaon",
    subtitle: "Iconic 2BHK Luxury Serviced Residence by Sandane Homes — Arch Clubhouse Living",
    intro: "IREO The Grand Arch in Sector 58 is an architectural landmark on the Golf Course Extension corridor. Known for its open-span architecture, massive state-of-the-art 'Le Club' community facility, and 4-side open views, Grand Arch is a top choice for expat professionals and corporate directors. Residences by Sandane Homes operates a curated, fully furnished 2BHK luxury serviced apartment (1,561 sq.ft.) featuring designer interiors, daily housekeeping, 300 Mbps Wi-Fi, and complete mobility concierge support.",
    propertyType: "Luxury Landmark Condominium",
    location: "Sector 58, Gurgaon (Close to Golf Course Ext Road)",
    access: "Direct access to Golf Course Extension Road & Sector 55-56 Metro",
    buildingAge: "Established Luxury Society",
    clubhouse: "₹2,600 / Monthly",
    servicesIncluded: "Maintenance, Reserved Parking, Daily Housekeeping, Periodic Maintenance, 24/7 Security",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Tower XX", floor: "2nd Floor", bhk: "2BHK", area: "1,561 sq.ft.", furnishing: "Fully Furnished", monthlyRent: "₹180,000", maintenance: "₹14,000 Monthly", status: "Ready to Move" }
    ],
    whyChooseTitle: "Why The Grand Arch with Sandane Homes",
    whyChooseItems: [
      { title: "Iconic Arch Architecture", text: "Floor-to-ceiling glass windows offering abundant natural daylight and panoramic city views." },
      { title: "Le Club 5-Star Amenities", text: "Over 50,000 sq.ft. of recreational facilities including bowling alley, cinema room, indoor heated pool, and fine dining." },
      { title: "Turnkey Expat Living", text: "Immediate move-in ready 2BHK with fully equipped kitchen, high-speed fiber internet, and fresh hotel linens." }
    ],
    commuteTable: [
      { destination: "Golf Course Extension Road", time: "1 minute drive" },
      { destination: "Sector 55-56 Rapid Metro Station", time: "6 minutes drive" },
      { destination: "DLF Cyber City", time: "15 minutes drive" },
      { destination: "IGI Airport New Delhi", time: "28 minutes drive" }
    ],
    inclusions: [
      "Spacious 1,561 sq.ft. 2BHK with dual master bedrooms and ensuite bathrooms",
      "Fully loaded kitchen with induction hob, microwave, refrigerator, and crockery",
      "Daily housekeeping and scheduled deep sanitation",
      "High-speed 300 Mbps Wi-Fi and smart entertainment system",
      "Reserved parking slot and 100% DG power backup",
      "Full corporate invoicing and foreign expat FRRO assistance"
    ],
    faqs: [
      { question: "What is the monthly rental for Sandane Homes at Grand Arch?", answer: "Our fully furnished 2BHK unit at The Grand Arch is available at ₹180,000/month with full hotel-grade services." },
      { question: "Is housekeeping included at The Grand Arch?", answer: "Yes, daily housekeeping, linen changes, and technical maintenance are all included in your Sandane Homes stay." }
    ],
    related: [
      { text: "Conscient Hines Elevate Sector 58", link: "/elevate-hines-sector-58-gurgaon" },
      { text: "Emaar Digi Homes Sector 62", link: "/emaar-digi-homes-sector-62-gurgaon" },
      { text: "M3M Heights Sector 65", link: "/m3m-heights-sector-65-gurgaon" }
    ]
  },
  {
    slug: "emaar-digi-homes-sector-62-gurgaon",
    metaTitle: "Emaar Digi Homes Sector 62 Gurgaon | Serviced Apartments | Sandane Homes",
    metaDescription: "Voice-enabled 2BHK & 3BHK smart serviced apartments at Emaar Digi Homes, Sector 62 Golf Course Ext Road Gurgaon. Managed by Sandane Homes. 10 mins to Sector 55-56 Metro.",
    canonical: "https://www.sandanehomes.com/emaar-digi-homes-sector-62-gurgaon",
    h1: "Emaar Digi Homes, Sector 62, Golf Course Ext Road Gurgaon",
    subtitle: "Voice-Enabled Smart 2BHK & 3BHK Serviced Residences Managed by Sandane Homes",
    intro: "Emaar Digi Homes in Sector 62 is Gurgaon's most innovative smart-home residential community. Designed by Emaar India, these residences feature voice and touch-activated lighting, automated climate control, smart door locks, and 3-side open architecture. Located 10 minutes from the Sector 55-56 Metro station, Residences by Sandane Homes manages a premium portfolio of 2BHK (1,508 sq.ft.) and 3BHK (2,588 sq.ft.) smart apartments with daily housekeeping, high-speed Wi-Fi, and dedicated expat concierge services.",
    propertyType: "Smart Luxury Condominium",
    location: "Golf Course Ext Road, Sector 62, Gurgaon",
    access: "10 mins to Sector 55-56 Metro Station",
    buildingAge: "3 Years (Modern Smart Complex)",
    clubhouse: "Included in Maintenance",
    servicesIncluded: "Maintenance, Parking, Daily Housekeeping, Periodic Maintenance, Smart Concierge",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Tower C-1901", floor: "19th Floor", bhk: "2BHK", area: "1,508 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹195,000", maintenance: "₹20,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower C-1902", floor: "19th Floor", bhk: "2BHK", area: "1,508 sq.ft.", furnishing: "Fully Furnished", monthlyRent: "₹195,000", maintenance: "₹20,000 Monthly", status: "Ready to Move" },
      { tower: "Tower C-1002", floor: "10th Floor", bhk: "2BHK", area: "1,508 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹195,000", maintenance: "₹20,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower C-2903", floor: "29th Floor", bhk: "2BHK", area: "1,508 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹195,000", maintenance: "₹20,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower A-1502", floor: "15th Floor", bhk: "3BHK", area: "2,588 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹235,000", maintenance: "₹20,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower A-1201", floor: "12th Floor", bhk: "3BHK", area: "2,588 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹235,000", maintenance: "₹20,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower B-1703", floor: "17th Floor", bhk: "2BHK", area: "1,508 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹195,000", maintenance: "₹20,000 Monthly", status: "Furnished by Sandane" }
    ],
    whyChooseTitle: "Why Emaar Digi Homes with Sandane Homes",
    whyChooseItems: [
      { title: "Voice-Activated Smart Automation", text: "Control lights, curtains, AC temperature, and entertainment via integrated smart hubs." },
      { title: "Expansive 3-Side Open Balconies", text: "Abundant fresh air and panoramic views of the Aravalli hills and Gurugram skyline." },
      { title: "Club Digi Life", text: "Elevated clubhouse featuring infinity pool, banquet hall, VR gaming zone, and wellness spa." },
      { title: "Turnkey Sandane Expat Living", text: "Ready to move in with zero setup friction, daily housekeeping, and 24/7 technical support." }
    ],
    commuteTable: [
      { destination: "Sector 55-56 Metro Station", time: "10 minutes drive" },
      { destination: "Worldmark Gurgaon (Sector 65)", time: "6 minutes drive" },
      { destination: "DLF Cyber City", time: "18 minutes drive" },
      { destination: "IGI Airport Terminal 3", time: "30 minutes drive" }
    ],
    inclusions: [
      "Fully automated smart 2BHK (1,508 sq.ft.) and 3BHK (2,588 sq.ft.) residences",
      "Complete designer furnishings, orthopedic mattresses, and executive work desks",
      "Daily professional housekeeping and linen servicing",
      "High-speed 300 Mbps Wi-Fi with zero lag for international videoconferences",
      "Access to Emaar clubhouse with gym, swimming pool, and tennis court",
      "B2B corporate billing with GST invoice and FRRO paperwork clearance"
    ],
    faqs: [
      { question: "What are the rental rates for Emaar Digi Homes through Sandane Homes?", answer: "2BHK smart homes start at ₹195,000/month, and expansive 3BHK residences start at ₹235,000/month." },
      { question: "Are the homes at Emaar Digi Homes voice-enabled?", answer: "Yes, all our Emaar Digi Homes apartments feature smart home automation with voice and app-controlled lighting and climate controls." }
    ],
    related: [
      { text: "Conscient Hines Elevate Sector 58", link: "/elevate-hines-sector-58-gurgaon" },
      { text: "M3M Heights Sector 65", link: "/m3m-heights-sector-65-gurgaon" },
      { text: "M3M Golfestate Sector 65", link: "/m3m-golfestate-sector-65-gurgaon" }
    ]
  },
  {
    slug: "m3m-heights-sector-65-gurgaon",
    metaTitle: "M3M Heights Sector 65 Gurgaon | Serviced Apartments | Sandane Homes",
    metaDescription: "High-rise 2BHK & 3BHK serviced apartments at M3M Heights, Sector 65 Golf Course Ext Road Gurgaon. Managed by Sandane Homes. Above M3M 65th Avenue high-street retail.",
    canonical: "https://www.sandanehomes.com/m3m-heights-sector-65-gurgaon",
    h1: "M3M Heights, Sector 65, Golf Course Ext Road Gurgaon",
    subtitle: "High-Rise 2BHK & 3BHK Urban Serviced Living Above M3M 65th Avenue by Sandane Homes",
    intro: "M3M Heights in Sector 65 is an urban luxury residential tower complex perched directly above M3M 65th Avenue, one of Gurugram's largest high-street retail, dining, and entertainment destinations. With direct access to cafes, supermarkets, multiplexes, and fitness centers right beneath your feet, M3M Heights offers the ultimate modern convenience. Residences by Sandane Homes operates a fleet of 2BHK (1,261 to 1,561 sq.ft.) and 3BHK (2,040 sq.ft.) serviced apartments, providing corporate assignees with seamless hospitality, daily cleaning, and full corporate amenities.",
    propertyType: "Urban Luxury High-Rise Condominium",
    location: "Sector 65, Gurgaon (5 mins to Golf Course Ext Road)",
    access: "5 mins to Golf Course Ext Road, direct access to retail mall below",
    buildingAge: "10 Years / Established Tower",
    clubhouse: "Included in Maintenance",
    servicesIncluded: "Maintenance, Parking, Daily Housekeeping, Periodic Maintenance, Retail Access",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Tower T-6", floor: "6th Floor", bhk: "2BHK", area: "1,561 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹190,000", maintenance: "₹16,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower T5-1704", floor: "17th Floor", bhk: "3BHK", area: "2,040 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹215,000", maintenance: "₹16,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower T5-602", floor: "6th Floor", bhk: "2BHK", area: "1,358 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹190,000", maintenance: "₹16,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower T4-4203", floor: "42nd Floor (Penthouse Level)", bhk: "3BHK", area: "2,040 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹215,000", maintenance: "₹16,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower T3-704", floor: "7th Floor", bhk: "3BHK", area: "2,040 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹215,000", maintenance: "₹16,000 Monthly", status: "Furnished by Sandane" },
      { tower: "Tower T1-1008", floor: "10th Floor", bhk: "2BHK", area: "1,261 sq.ft.", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹190,000", maintenance: "₹16,000 Monthly", status: "Furnished by Sandane" }
    ],
    whyChooseTitle: "Why M3M Heights with Sandane Homes",
    whyChooseItems: [
      { title: "Direct High-Street Retail Access", text: "Walk downstairs into M3M 65th Avenue featuring fine restaurants, cafes, supermarkets, and wellness centers." },
      { title: "Sky-High Balconies (Up to 42nd Floor)", text: "Spectacular panoramic skyline views from high-rise floors including our 42nd floor 3BHK residence." },
      { title: "100% Sandane Serviced Hospitality", text: "Daily housekeeping, laundry coordination, high-speed fiber internet, and immediate maintenance response." }
    ],
    commuteTable: [
      { destination: "Golf Course Extension Road", time: "2 minutes drive" },
      { destination: "Worldmark Gurgaon", time: "4 minutes drive" },
      { destination: "Sector 55-56 Metro Station", time: "8 minutes drive" },
      { destination: "DLF Cyber City", time: "16 minutes drive" },
      { destination: "IGI Airport New Delhi", time: "28 minutes drive" }
    ],
    inclusions: [
      "Urban high-rise 2BHK and 3BHK residences up to the 42nd floor",
      "Fully furnished with executive living room, ergonomic study desk, and king-size beds",
      "Equipped kitchen with refrigerator, microwave, gas hob, and complete crockery set",
      "Daily housekeeping, garbage disposal, and twice-weekly fresh linen change",
      "Dedicated covered parking space and 100% backup electricity",
      "Full B2B corporate billing with GST input compliance"
    ],
    faqs: [
      { question: "What is the starting rent for M3M Heights through Sandane Homes?", answer: "2BHK units start at ₹190,000/month and 3BHK units start at ₹215,000/month." },
      { question: "Is M3M Heights connected to retail stores?", answer: "Yes, M3M Heights sits directly above M3M 65th Avenue with instant elevator access to dining and retail." }
    ],
    related: [
      { text: "M3M Golfestate Sector 65", link: "/m3m-golfestate-sector-65-gurgaon" },
      { text: "Emaar Digi Homes Sector 62", link: "/emaar-digi-homes-sector-62-gurgaon" },
      { text: "Conscient Hines Elevate Sector 58", link: "/elevate-hines-sector-58-gurgaon" }
    ]
  },
  {
    slug: "m3m-golfestate-sector-65-gurgaon",
    metaTitle: "M3M Golfestate Sector 65 Gurgaon | Luxury Golf Serviced Residences | Sandane Homes",
    metaDescription: "Ultra-luxury 3BHK+Study serviced residence at M3M Golfestate, Sector 65 Gurgaon. 3,235 sq.ft., 9-hole executive golf course view, managed by Sandane Homes.",
    canonical: "https://www.sandanehomes.com/m3m-golfestate-sector-65-gurgaon",
    h1: "M3M Golfestate, Sector 65, Golf Course Ext Road Gurgaon",
    subtitle: "Palatial 3BHK+Study (3,235 sq.ft.) Golf-View Serviced Residence Managed by Sandane Homes",
    intro: "M3M Golfestate in Sector 65 is Gurugram's crown jewel of golf resort residential living. Spanning over 75 acres around a 9-hole executive golf course, Golfestate features private lift lobbies, massive sundeck balconies overlooking manicured greens, and resort-grade amenities. Residences by Sandane Homes operates a palatial 3BHK + Study luxury serviced apartment (3,235 sq.ft.) on the 9th floor of Tower 9. Designed for C-suite directors, diplomats, and multinational expats, this property delivers white-glove hospitality, daily housekeeping, and 5-star corporate living.",
    propertyType: "Ultra-Luxury Golf Resort Condominium",
    location: "Sector 65, Gurgaon (5 mins to Golf Course Ext Road)",
    access: "5 mins to Golf Course Ext Road corridor",
    buildingAge: "8 Years / Flagship Luxury Resort",
    clubhouse: "₹57,000 Quarterly Resort Clubhouse Access",
    servicesIncluded: "Maintenance, Reserved Parking, Daily Housekeeping, Periodic Maintenance, Golf Concierge",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Tower T9-906b", floor: "9th Floor", bhk: "3BHK + Study", area: "3,235 sq.ft.", furnishing: "Fully Furnished Luxury Decor", monthlyRent: "₹270,000", maintenance: "₹60,000 Quarterly", status: "Ready to Move" }
    ],
    whyChooseTitle: "Why M3M Golfestate with Sandane Homes",
    whyChooseItems: [
      { title: "Direct 9-Hole Golf Course Views", text: "Expansive private balconies with sweeping views of the lush golf greens, water bodies, and landscaped gardens." },
      { title: "Palatial 3,235 Sq.Ft. Living Space", text: "Enormous living and dining salons, dedicated private study/office, walk-in closets, and jacuzzi bathrooms." },
      { title: "World-Class Golf Clubhouse", text: "Access to private golf academy, temperature-controlled swimming pools, tennis courts, and fine dining restaurants." },
      { title: "Expatriate C-Suite Community", text: "The primary address of choice for foreign country heads, automotive CEOs, and multinational leadership teams." }
    ],
    commuteTable: [
      { destination: "Golf Course Extension Road", time: "2 minutes drive" },
      { destination: "Worldmark Gurgaon Sector 65", time: "3 minutes drive" },
      { destination: "Sector 55-56 Metro Station", time: "8 minutes drive" },
      { destination: "DLF Cyber City", time: "16 minutes drive" },
      { destination: "IGI Airport New Delhi", time: "28 minutes drive" }
    ],
    inclusions: [
      "Expansive 3,235 sq.ft. 3BHK + Study layout with private elevator landing",
      "Bespoke Italian furniture, imported hardwood dining set, and plush king-size beds",
      "Gourmet modular kitchen with built-in oven, dishwasher, wine chiller, and full tableware",
      "Daily hotel-grade housekeeping and linen services by trained hospitality staff",
      "Dedicated high-speed 300 Mbps fiber Wi-Fi and smart UHD television screens",
      "Two reserved covered basement parking slots and 24/7 security with CCTV surveillance",
      "Corporate master lease agreement with full GST tax invoice"
    ],
    faqs: [
      { question: "What is the floor area and rent for M3M Golfestate with Sandane Homes?", answer: "Our unit (T9-906b) offers 3,235 sq.ft. of ultra-luxury 3BHK+Study living at ₹270,000/month." },
      { question: "Does this apartment overlook the golf course?", answer: "Yes, Tower 9 offers direct, uninterrupted panoramic views of the 9-hole executive golf course." }
    ],
    related: [
      { text: "M3M Heights Sector 65", link: "/m3m-heights-sector-65-gurgaon" },
      { text: "Conscient Hines Elevate Sector 58", link: "/elevate-hines-sector-58-gurgaon" },
      { text: "DLF Park Place Sector 54", link: "/dlf-park-place-sector-54-gurgaon" }
    ]
  },
  {
    slug: "green-meadows-sector-27-gurgaon",
    metaTitle: "Green Meadows Sector 27 Gurgaon | 4BHK Serviced Builder Floor | Sandane Homes",
    metaDescription: "Spacious 4BHK luxury serviced builder floor (2,230 sq.ft.) at Green Meadows, Sector 27 Gurgaon near Huda City Centre. Managed by Sandane Homes with full housekeeping.",
    canonical: "https://www.sandanehomes.com/green-meadows-sector-27-gurgaon",
    h1: "Green Meadows, Sector 27, Gurgaon",
    subtitle: "Expansive 4BHK Luxury Serviced Builder Floor (2,230 sq.ft.) Near HUDA City Centre Metro",
    intro: "Green Meadows in Sector 27 is an exclusive, tranquil residential enclave in the heart of Gurugram. Located walking distance to HUDA City Centre (Millennium City Centre) Metro Station, Sector 27 provides quick transit to DLF Cyber City, MG Road, and Fortis Memorial Research Institute. Residences by Sandane Homes operates a fully furnished, standalone 4BHK luxury builder floor (Unit 6822, 2nd Floor, 2,230 sq.ft.) featuring private lift access, spacious living salons, daily housekeeping, and full corporate servicing.",
    propertyType: "Independent Luxury Builder Floor",
    location: "Sector 27, Gurgaon (Close to Huda City Centre Metro)",
    access: "Walking distance to Huda City Centre (Millennium City Centre) Metro",
    buildingAge: "3 Years (Modern Construction)",
    clubhouse: "Private Independent Living",
    servicesIncluded: "Maintenance, Reserved Parking, Daily Housekeeping, Periodic Maintenance, 24/7 Security",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Floor Unit 6822", floor: "2nd Floor", bhk: "4BHK", area: "2,230 sq.ft.", furnishing: "Fully Furnished", monthlyRent: "₹245,000", maintenance: "₹6,500 Quarterly", status: "Ready to Move" }
    ],
    whyChooseTitle: "Why Green Meadows Sector 27 with Sandane Homes",
    whyChooseItems: [
      { title: "Prime Sector 27 Central Location", text: "Minutes from Galleria Market, Cross Point Mall, and Millennium City Centre Metro." },
      { title: "Complete Independent Privacy", text: "Entire 2nd floor is your private residence with dedicated elevator landing and private balconies." },
      { title: "4 Large Master Bedrooms", text: "Ideal for foreign expat families, senior corporate directors, or shared enterprise project teams." }
    ],
    commuteTable: [
      { destination: "HUDA City Centre Metro Station", time: "3 minutes drive / 8 mins walk" },
      { destination: "Galleria Market & Cross Point Mall", time: "4 minutes drive" },
      { destination: "DLF Cyber City & Cyber Hub", time: "10 minutes drive" },
      { destination: "Fortis Memorial Research Institute", time: "3 minutes drive" },
      { destination: "IGI Airport New Delhi", time: "22 minutes drive" }
    ],
    inclusions: [
      "Generous 2,230 sq.ft. 4BHK independent floor layout with 4 attached bathrooms",
      "Fully furnished living room, dining area, and plush bedrooms with king-size beds",
      "Full modular kitchen with refrigerator, microwave, chimney, and cooking utensils",
      "Daily housekeeping, waste management, and twice-weekly linen replacement",
      "300 Mbps high-speed Wi-Fi and power backup for work-from-home reliability",
      "Reserved parking slot and corporate GST master billing"
    ],
    faqs: [
      { question: "Where is Green Meadows located in Gurgaon?", answer: "Green Meadows is situated in Sector 27, close to Huda City Centre Metro and Galleria Market." },
      { question: "What is the configuration of the unit at Green Meadows?", answer: "It is an expansive 4BHK (2,230 sq.ft.) on the 2nd floor, fully furnished by Sandane Homes." }
    ],
    related: [
      { text: "Sushant Lok Block A Sector 27", link: "/sushant-lok-block-a-sector-27-gurgaon" },
      { text: "Sushant Lok Block B Sector 27", link: "/sushant-lok-block-b-sector-27-gurgaon" },
      { text: "DLF Phase 4 Sector 27", link: "/dlf-phase-4-sector-27-gurgaon" }
    ]
  },
  {
    slug: "sushant-lok-block-a-sector-27-gurgaon",
    metaTitle: "Sushant Lok Block A Sector 27 Gurgaon | 4BHK Serviced Floor | Sandane Homes",
    metaDescription: "Spacious 4BHK serviced builder floor (300 sq.yd.) in Sushant Lok Block A, Sector 27 Gurgaon near Huda City Centre. Managed by Sandane Homes with full expat services.",
    canonical: "https://www.sandanehomes.com/sushant-lok-block-a-sector-27-gurgaon",
    h1: "Sushant Lok Block A, Sector 27, Gurgaon",
    subtitle: "Spacious 4BHK Luxury Serviced Builder Floor (300 sq.yd.) by Sandane Homes — Near Metro",
    intro: "Sushant Lok Block A in Sector 27 is one of Gurugram's most well-established and green residential neighborhoods. Positioned minutes from Huda City Centre Metro Station and adjacent to DLF Phase 4, Sushant Lok Block A offers tree-lined streets, quiet surroundings, and instant access to premier markets. Residences by Sandane Homes manages a grand 4BHK serviced builder floor (Unit A-877B, 1st Floor, 300 sq.yd.), customized with turnkey modern furnishings, high-speed fiber internet, and full hotel services.",
    propertyType: "Luxury Independent Builder Floor",
    location: "Sector 27, Gurgaon (Close to Huda City Centre Metro)",
    access: "Close to Huda City Centre Metro Station & Galleria Market",
    buildingAge: "2+ Years (Modern Construction)",
    clubhouse: "Private Independent Floor",
    servicesIncluded: "Maintenance, Parking, Daily Housekeeping, Periodic Maintenance, 24/7 Concierge",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Floor Unit A-877B", floor: "1st Floor", bhk: "4BHK", area: "300 sq.yd. (~2,700 sq.ft.)", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹245,000", maintenance: "₹6,500 Quarterly", status: "Furnished by Sandane" }
    ],
    whyChooseTitle: "Why Sushant Lok Block A with Sandane Homes",
    whyChooseItems: [
      { title: "Central Gurugram Hub", text: "Immediate connectivity to Golf Course Road, MG Road, and Delhi via NH-48." },
      { title: "Massive 300 Sq.Yd. Floor Plan", text: "Four spacious bedrooms, private sit-out balconies, and expansive dining room." },
      { title: "Complete Sandane Serviced Hospitality", text: "Daily housekeeping, dedicated maintenance staff, and 24/7 corporate concierge support." }
    ],
    commuteTable: [
      { destination: "Huda City Centre Metro Station", time: "4 minutes drive" },
      { destination: "Galleria Market", time: "5 minutes drive" },
      { destination: "One Horizon Center", time: "8 minutes drive" },
      { destination: "DLF Cyber City", time: "12 minutes drive" }
    ],
    inclusions: [
      "Palatial 4BHK independent floor (300 sq.yd.) with 4 ensuite bathrooms",
      "Full turnkey furnishings by Sandane Homes with plush beds and executive desk",
      "Equipped kitchen with cooktop, microwave, refrigerator, and dinnerware",
      "Daily housekeeping and periodic deep cleaning",
      "300 Mbps Wi-Fi and 100% power backup",
      "Reserved parking slot and corporate GST billing"
    ],
    faqs: [
      { question: "What is the monthly rent for Sushant Lok Block A through Sandane Homes?", answer: "Our 4BHK (300 sq.yd.) residence is available at ₹245,000/month including housekeeping and management." }
    ],
    related: [
      { text: "Sushant Lok Block B Sector 27", link: "/sushant-lok-block-b-sector-27-gurgaon" },
      { text: "Green Meadows Sector 27", link: "/green-meadows-sector-27-gurgaon" },
      { text: "DLF Phase 4 Sector 27", link: "/dlf-phase-4-sector-27-gurgaon" }
    ]
  },
  {
    slug: "sushant-lok-block-b-sector-27-gurgaon",
    metaTitle: "Sushant Lok Block B Sector 27 Gurgaon | 4BHK Serviced Floor | Sandane Homes",
    metaDescription: "Luxury 4BHK serviced builder floor (300 sq.yd.) in Sushant Lok Block B, Sector 27 Gurgaon near Huda City Centre Metro. Managed by Sandane Homes with full housekeeping.",
    canonical: "https://www.sandanehomes.com/sushant-lok-block-b-sector-27-gurgaon",
    h1: "Sushant Lok Block B, Sector 27, Gurgaon",
    subtitle: "High-End 4BHK Serviced Builder Floor (300 sq.yd.) by Sandane Homes — Near Metro",
    intro: "Sushant Lok Block B in Sector 27 is a sought-after executive enclave situated right near Huda City Centre Metro Station and Max Super Speciality Hospital. Offering quiet residential charm combined with unbeatable urban transit convenience, Sushant Lok Block B is ideal for expat leaders and relocating corporate families. Residences by Sandane Homes operates a luxury 4BHK serviced builder floor (Unit B-782, 1st Floor, 300 sq.yd.) complete with custom furnishings, daily housekeeping, and 5-star hospitality.",
    propertyType: "Luxury Independent Builder Floor",
    location: "Sector 27, Gurgaon (Close to Huda City Centre Metro)",
    access: "Close to Huda City Centre Metro Station & Max Hospital",
    buildingAge: "2+ Years (Modern Construction)",
    clubhouse: "Private Independent Floor",
    servicesIncluded: "Maintenance, Parking, Daily Housekeeping, Periodic Maintenance, 24/7 Concierge",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Floor Unit B-782", floor: "1st Floor", bhk: "4BHK", area: "300 sq.yd. (~2,700 sq.ft.)", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹260,000", maintenance: "₹6,500 Quarterly", status: "Furnished by Sandane" }
    ],
    whyChooseTitle: "Why Sushant Lok Block B with Sandane Homes",
    whyChooseItems: [
      { title: "Walk to Millennium City Centre Metro", text: "Effortless access to the Delhi Metro Yellow Line network." },
      { title: "Generous 300 Sq.Yd. Layout", text: "Ample room for relaxation, home office setups, and family living." },
      { title: "Hotel-Grade Care", text: "Daily housekeeping, fresh linens, and proactive maintenance." }
    ],
    commuteTable: [
      { destination: "Huda City Centre Metro Station", time: "3 minutes drive" },
      { destination: "Galleria Market", time: "5 minutes drive" },
      { destination: "DLF Cyber City", time: "12 minutes drive" },
      { destination: "IGI Airport New Delhi", time: "25 minutes drive" }
    ],
    inclusions: [
      "Large 4BHK independent floor (300 sq.yd.) on the 1st floor",
      "Full turnkey interior furnishing by Sandane Homes",
      "Complete modular kitchen with cookware and appliances",
      "Daily professional housekeeping and linen servicing",
      "300 Mbps Wi-Fi and 100% power backup",
      "Corporate GST invoicing and FRRO assistance"
    ],
    faqs: [
      { question: "What is the monthly rent for Sushant Lok Block B through Sandane Homes?", answer: "Our 4BHK unit at Sushant Lok Block B is available at ₹260,000/month." }
    ],
    related: [
      { text: "Sushant Lok Block A Sector 27", link: "/sushant-lok-block-a-sector-27-gurgaon" },
      { text: "Green Meadows Sector 27", link: "/green-meadows-sector-27-gurgaon" },
      { text: "Green Avenue Sector 27", link: "/green-avenue-sector-27-gurgaon" }
    ]
  },
  {
    slug: "dlf-phase-4-sector-27-gurgaon",
    metaTitle: "DLF Phase 4 Sector 27 Gurgaon | 3BHK Serviced Builder Floor | Sandane Homes",
    metaDescription: "Spacious 3BHK serviced builder floor (360 sq.yd.) in DLF Phase 4 / Sector 27 Gurgaon near Galleria Market. Managed by Sandane Homes with full corporate housekeeping.",
    canonical: "https://www.sandanehomes.com/dlf-phase-4-sector-27-gurgaon",
    h1: "DLF Phase 4, Sector 27, Gurgaon",
    subtitle: "Expansive 3BHK Luxury Serviced Builder Floor (360 sq.yd.) by Sandane Homes",
    intro: "DLF Phase 4 in Sector 27 is universally recognized as one of the most elite, high-demand residential sectors in Gurugram. Home to the iconic Galleria Market, Supermart, and top international schools, DLF Phase 4 combines tree-canopied avenues with world-class retail and metro connectivity. Residences by Sandane Homes operates a sprawling 3BHK luxury serviced builder floor (Unit 5107, 4th Floor, 360 sq.yd.) featuring soaring views, high ceilings, custom furnishings, daily housekeeping, and 24/7 concierge support.",
    propertyType: "Luxury Independent Builder Floor",
    location: "Sector 27 / DLF Phase 4, Gurgaon",
    access: "Close to Huda City Centre Metro Station & Galleria Market",
    buildingAge: "2+ Years (Modern Construction)",
    clubhouse: "Private Independent Living",
    servicesIncluded: "Maintenance, Parking, Daily Housekeeping, Periodic Maintenance, 24/7 Security",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Floor Unit 5107", floor: "4th Floor", bhk: "3BHK", area: "360 sq.yd. (~3,200 sq.ft.)", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹260,000", maintenance: "₹7,000 Monthly", status: "Furnished by Sandane" }
    ],
    whyChooseTitle: "Why DLF Phase 4 with Sandane Homes",
    whyChooseItems: [
      { title: "The Galleria Market Lifestyle", text: "Walk or take a 2-minute drive to Galleria Market's premier cafes, bakeries, and boutiques." },
      { title: "Enormous 360 Sq.Yd. Floor Plan", text: "Massive 3,200 sq.ft. usable area with huge living and dining rooms." },
      { title: "Top-Floor Privacy & Balconies", text: "4th-floor peaceful residence with abundant natural light and skyline breeze." }
    ],
    commuteTable: [
      { destination: "Galleria Market", time: "2 minutes drive" },
      { destination: "Huda City Centre Metro Station", time: "4 minutes drive" },
      { destination: "DLF Cyber City & Cyber Hub", time: "10 minutes drive" },
      { destination: "One Horizon Center Golf Course Road", time: "6 minutes drive" }
    ],
    inclusions: [
      "Huge 360 sq.yd. 3BHK independent floor layout with attached bathrooms",
      "Full turnkey designer furnishing by Sandane Homes",
      "Fully loaded kitchen with cooktop, microwave, refrigerator, and crockery",
      "Daily professional housekeeping and fresh linen service",
      "300 Mbps high-speed Wi-Fi and 100% DG power backup",
      "Reserved parking slot and corporate B2B GST master billing"
    ],
    faqs: [
      { question: "What is the monthly rent for DLF Phase 4 through Sandane Homes?", answer: "Our 360 sq.yd. 3BHK floor (Unit 5107) is available at ₹260,000/month." }
    ],
    related: [
      { text: "Green Avenue Sector 27", link: "/green-avenue-sector-27-gurgaon" },
      { text: "Green Meadows Sector 27", link: "/green-meadows-sector-27-gurgaon" },
      { text: "DLF Park Place Sector 54", link: "/dlf-park-place-sector-54-gurgaon" }
    ]
  },
  {
    slug: "green-avenue-sector-27-gurgaon",
    metaTitle: "Green Avenue Sector 27 Gurgaon | 3BHK Serviced Builder Floor | Sandane Homes",
    metaDescription: "Spacious 3BHK serviced builder floor (270 sq.yd.) at Green Avenue, Sector 27 Gurgaon near Huda City Centre. Managed by Sandane Homes with full hotel services.",
    canonical: "https://www.sandanehomes.com/green-avenue-sector-27-gurgaon",
    h1: "Green Avenue, Sector 27, Gurgaon",
    subtitle: "Charming 3BHK Serviced Builder Floor (270 sq.yd.) by Sandane Homes — Near Metro",
    intro: "Green Avenue in Sector 27 is a peaceful, gated enclave located moments from HUDA City Centre Metro Station and DLF Phase 4. Ideal for corporate assignees and expat professionals looking for an independent floor with dedicated service and zero community congestion. Residences by Sandane Homes manages a premium 3BHK serviced builder floor (Unit 5917, 1st Floor, 270 sq.yd.) featuring bright interiors, full kitchen amenities, daily housekeeping, and seamless corporate leasing.",
    propertyType: "Luxury Independent Builder Floor",
    location: "Sector 27, Gurgaon (Close to Huda City Centre Metro)",
    access: "Close to Huda City Centre Metro Station",
    buildingAge: "2+ Years (Modern Construction)",
    clubhouse: "Private Independent Living",
    servicesIncluded: "Maintenance, Parking, Daily Housekeeping, Periodic Maintenance, 24/7 Security",
    depositTerms: "2 Months Security Deposit | 1 Month Advance",
    availableUnits: [
      { tower: "Floor Unit 5917", floor: "1st Floor", bhk: "3BHK", area: "270 sq.yd. (~2,400 sq.ft.)", furnishing: "Turnkey Furnished by Sandane", monthlyRent: "₹230,000", maintenance: "₹7,000 Monthly", status: "Furnished by Sandane" }
    ],
    whyChooseTitle: "Why Green Avenue Sector 27 with Sandane Homes",
    whyChooseItems: [
      { title: "Central Metro Connectivity", text: "Effortless 3-minute transit to Millennium City Centre (Huda City Centre) Metro." },
      { title: "Spacious 270 Sq.Yd. Layout", text: "Three large bedrooms, private balcony, and separate dining space." },
      { title: "Full Turnkey Servicing", text: "Daily housekeeping, 300 Mbps Wi-Fi, and 24/7 support by Sandane Homes." }
    ],
    commuteTable: [
      { destination: "Huda City Centre Metro Station", time: "3 minutes drive" },
      { destination: "Galleria Market", time: "5 minutes drive" },
      { destination: "DLF Cyber City", time: "12 minutes drive" },
      { destination: "IGI Airport New Delhi", time: "25 minutes drive" }
    ],
    inclusions: [
      "Spacious 270 sq.yd. 3BHK independent floor on the 1st floor",
      "Turnkey furnishings with comfortable bedding, sofa suite, and executive workspace",
      "Full modular kitchen with refrigerator, microwave, and cooking utensils",
      "Daily housekeeping and regular linen change",
      "300 Mbps Wi-Fi and 100% DG electricity backup",
      "Corporate GST invoicing and foreign national Form C registration support"
    ],
    faqs: [
      { question: "What is the monthly rent for Green Avenue through Sandane Homes?", answer: "Our 3BHK residence at Green Avenue is available at ₹230,000/month." }
    ],
    related: [
      { text: "DLF Phase 4 Sector 27", link: "/dlf-phase-4-sector-27-gurgaon" },
      { text: "Green Meadows Sector 27", link: "/green-meadows-sector-27-gurgaon" },
      { text: "Sushant Lok Block B Sector 27", link: "/sushant-lok-block-b-sector-27-gurgaon" }
    ]
  }
];

// Read existing landingPages and append new ones without duplicates
const pagesJsonStr = rawContent.substring(rawContent.indexOf('['), rawContent.lastIndexOf(']') + 1);
let existingPages = eval(pagesJsonStr);
const existingSlugs = new Set(existingPages.map(p => p.slug));

let addedCount = 0;
gurugramProperties.forEach(prop => {
  if (!existingSlugs.has(prop.slug)) {
    existingPages.push(prop);
    addedCount++;
  }
});

console.log(`Added ${addedCount} new Gurugram property landing pages.`);

const newFileContent = `// ─────────────────────────────────────────────────────────────
//  SANDANE HOMES — Landing Pages Data
//  Add or edit landing page content here.
// ─────────────────────────────────────────────────────────────

export const landingPages = ${JSON.stringify(existingPages, null, 4)};

export const getLandingPage = (slug) => landingPages.find(p => p.slug === slug) || null;
`;

fs.writeFileSync(targetFile, newFileContent, 'utf8');
console.log(`Successfully updated ${targetFile} with total ${existingPages.length} landing pages!`);
