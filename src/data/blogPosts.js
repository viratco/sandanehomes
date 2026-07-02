// ─────────────────────────────────────────────────────────────
//  SANDANE HOMES — Blog Posts
//  Add or edit posts here. The URL will be /blog/<slug>
// ─────────────────────────────────────────────────────────────

export const blogPosts = [
    {
        slug: "why-greater-noida-is-best-for-expats",
        title: "Why Greater Noida Is the Best City for Expats in 2025",
        subtitle: "Clean roads, green societies, and world-class connectivity — here's why multinational professionals keep choosing Greater Noida.",
        category: "Expat Life",
        date: "June 28, 2025",
        readTime: "6 min read",
        author: "Sandane Homes Team",
        // Use a CSS gradient string OR an image URL string
        coverImage: "/blog/covers/living-room.jpg",
        coverGradient: "linear-gradient(135deg, #1A3C34 0%, #2d6b5e 60%, #C5A572 100%)",
        excerpt: "Greater Noida has quietly become one of the top destinations for expat professionals in the Delhi NCR. Here's what makes it stand apart from the rest.",
        // Content blocks — supported types:
        //   paragraph { text }
        //   heading { text }            subheading { text }
        //   list { items: [] }          orderedList { items: [] }
        //   quote { text, attribution } note { text }  (highlighted tip box)
        //   image { src, caption }
        content: [
            { type: "paragraph", text: "Over the last decade, Greater Noida has transformed from a largely undeveloped township into one of the most liveable cities in North India — and expat professionals from Japan, South Korea, Europe, and Southeast Asia have noticed." },
            { type: "heading", text: "Planned Infrastructure Unlike Anywhere Else in NCR" },
            { type: "paragraph", text: "Greater Noida was built with wide roads, dedicated green belts, and separated industrial, residential, and commercial zones. For expat professionals commuting to Honda, Yamaha, or any Yamuna Expressway cluster, the daily drive is a genuinely calm experience." },
            { type: "heading", text: "Premium Gated Societies" },
            { type: "paragraph", text: "Jaypee Greens, Ansal Golf Links, and Godrej Golf Link are not just complexes — they are self-contained communities with golf courses, international schools nearby, clubhouses, and 24/7 gated security. These are the environments Korean and Japanese expats are accustomed to at home." },
            { type: "quote", text: "The thing that surprised me most was how quiet and safe it is here. My family back in Seoul was nervous about India — until they visited.", attribution: "— Korean resident at Ansal Golf Links" },
            { type: "heading", text: "Growing International Community" },
            { type: "paragraph", text: "As Honda, Yamaha, Samsung vendors, and Korean/Japanese EPC firms have established a presence along the Yamuna Expressway, so too has the expat community grown. Korean marts, Asian grocery stores, and authentic restaurants are now readily accessible." },
        ],
        tags: ["Greater Noida", "Expat Life", "Relocation", "Corporate Housing"]
    },
    {
        slug: "furnished-vs-unfurnished-apartments-expats",
        title: "Furnished vs. Unfurnished: What Expats Must Know",
        subtitle: "The real cost of an 'unfurnished' apartment is almost never what it seems on paper.",
        category: "Housing Guide",
        date: "June 14, 2025",
        readTime: "5 min read",
        author: "Sandane Homes Team",
        coverImage: "/blog/covers/kitchen.jpg",
        coverGradient: "linear-gradient(135deg, #2c1810 0%, #8B7355 60%, #C5A572 100%)",
        excerpt: "When relocating internationally, the choice between furnished and unfurnished touches your budget, your time, and your sanity. Here's the full picture.",
        content: [
            { type: "paragraph", text: "One of the most common mistakes expat professionals make is opting for an unfurnished apartment because the monthly rent appears lower on paper. This guide gives you the real numbers." },
            { type: "heading", text: "The True Cost of Going Unfurnished" },
            { type: "paragraph", text: "An unfurnished apartment in Greater Noida might rent for ₹40,000–₹60,000/month. A comparable fully furnished serviced apartment runs ₹70,000–₹1,20,000. On the surface the savings look significant. But consider what's missing:" },
            { type: "list", items: ["Beds, mattresses, and bedding (₹30,000–₹80,000)", "Sofa, dining table, chairs (₹50,000–₹1,50,000)", "Refrigerator, washing machine, microwave (₹40,000–₹90,000)", "Kitchen utensils and cookware (₹10,000–₹25,000)", "Curtains, rugs, lights (₹20,000–₹50,000)", "Wi-Fi setup + 2–3 week connection wait"] },
            { type: "paragraph", text: "The 'cheaper' unfurnished apartment typically costs ₹1.5L–₹4L in setup costs — before accounting for the loss when you sell it all on departure." },
            { type: "heading", text: "The Serviced Apartment Advantage" },
            { type: "paragraph", text: "Sandane Homes apartments are move-in ready on Day 1. You arrive with your suitcase. Everything works. For corporate HR teams managing multiple relocations, it eliminates administrative chaos and fits neatly into standard billing processes." },
            { type: "quote", text: "We tried the unfurnished route first. Three months later, we moved into Sandane Homes. We wish we had done it from the start.", attribution: "— Japanese professional, Honda India assignment" },
        ],
        tags: ["Housing Guide", "Furnished Apartments", "Expat Tips", "Corporate Housing"]
    },
    {
        slug: "frro-registration-guide-expats-india",
        title: "FRRO Registration in India: A Plain-English Guide",
        subtitle: "Navigating India's foreign registration requirements doesn't have to be stressful.",
        category: "Legal & Admin",
        date: "May 30, 2025",
        readTime: "7 min read",
        author: "Sandane Homes Team",
        coverImage: "/blog/covers/hallway-mirror.jpg",
        coverGradient: "linear-gradient(135deg, #1a1a2e 0%, #1A3C34 60%, #2d6b5e 100%)",
        excerpt: "Every expat staying in India for more than 180 days must register with the FRRO. Here's our step-by-step guide to making it painless.",
        content: [
            { type: "paragraph", text: "The Foreigners Regional Registration Office (FRRO) registration is one of the first administrative hurdles expat professionals face after arriving in India. This guide is based on helping hundreds of Korean, Japanese, and European expats complete it smoothly." },
            { type: "heading", text: "Who Needs to Register?" },
            { type: "paragraph", text: "Any foreign national staying more than 180 days on a long-term visa (Employment, Business, Student, X visa) must register within 14 days of arrival." },
            { type: "heading", text: "What You Will Need" },
            { type: "list", items: ["Valid passport with visa", "Arrival / Port of Entry stamp", "Proof of address (tenancy agreement)", "4 passport-size photographs", "Employment letter from your company", "Company HR letter confirming India posting", "Utility bill or tenancy agreement in landlord's name"] },
            { type: "heading", text: "The Online Process (e-FRRO)" },
            { type: "paragraph", text: "India has moved the FRRO process online via indianfrro.gov.in. Create an account, fill in your details, upload documents, and attend your appointment. Common errors: wrong file formats, mismatched info, missing HR letter." },
            { type: "heading", text: "How Sandane Homes Helps" },
            { type: "paragraph", text: "We provide your tenancy agreement in the exact FRRO-required format and guide you through each step. We can connect you with local liaison services for in-person support if needed." },
            { type: "quote", text: "I was very stressed about FRRO — I'd heard horror stories. The Sandane team made it completely painless.", attribution: "— Korean resident, Samsung assignment" },
        ],
        tags: ["FRRO", "Legal", "India Visa", "Expat Admin", "Greater Noida"]
    },
];

export const getBlogPost = (slug) => blogPosts.find(p => p.slug === slug) || null;
export const getRelatedPosts = (slug, count = 3) => blogPosts.filter(p => p.slug !== slug).slice(0, count);
