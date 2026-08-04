// ─────────────────────────────────────────────────────────────
//  SANDANE HOMES — Automated Blog Generator Script
//  Automatically generates and publishes SEO blog posts for all hotels
// ─────────────────────────────────────────────────────────────
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Hotel Naming Rules:
// - CoCo House: STRICTLY "CoCo House" ONLY. NEVER append "by Sandane Homes" or "/ Sandane Homes".
// - Other Hotels: "by Sandane Homes" (e.g. "Amaaltash by Sandane Homes", "Residences by Sandane Homes").

const TOPIC_TEMPLATES = [
    {
        hotel: 'CoCo House',
        slugPrefix: 'coco-house',
        category: 'Event Stays',
        redirect: '/coco-house',
        topics: [
            {
                title: "CoCo House: Premier Exhibition Hotel for Trade Fair Exhibitors Near India Expo Mart",
                metaTitle: "CoCo House | Premier Exhibition Hotel Near India Expo Mart",
                metaDescription: "Book CoCo House in Greater Noida — 8 mins from India Expo Mart with twin rooms, single GST bill, 300 Mbps WiFi & 24/7 express dining.",
                subtitle: "Top boutique stay tailored for exhibition booth crews, project managers, and trade fair vendors.",
                excerpt: "Book CoCo House in Greater Noida — 8 mins from India Expo Mart with twin rooms, single GST bill, 300 Mbps WiFi & 24/7 express dining.",
                tags: ["CoCo House", "Exhibition Hotel Expo Mart", "Boutique Hotel Greater Noida"]
            }
        ]
    },
    {
        hotel: 'Amaaltash by Sandane Homes',
        slugPrefix: 'amaaltash-by-sandane-homes',
        category: 'Boutique Stays',
        redirect: '/amaaltash',
        topics: [
            {
                title: "Amaaltash by Sandane Homes: Serene Executive Stays in Ansal Golf Links-1 Greater Noida",
                metaTitle: "Amaaltash by Sandane Homes | Executive Stays Ansal Golf Links",
                metaDescription: "Experience executive hospitality at Amaaltash by Sandane Homes in Ansal Golf Links-1. Quiet rooms with kitchenette, 300 Mbps WiFi & GST billing.",
                subtitle: "Peaceful boutique rooms with kitchenette amenities near Knowledge Park & India Expo Mart.",
                excerpt: "Experience executive hospitality at Amaaltash by Sandane Homes in Ansal Golf Links-1. Quiet rooms with kitchenette, 300 Mbps WiFi & GST billing.",
                tags: ["Amaaltash by Sandane Homes", "Ansal Golf Links Stay", "Executive Hotel Greater Noida"]
            }
        ]
    },
    {
        hotel: 'The Glam by Sandane Homes',
        slugPrefix: 'the-glam-by-sandane-homes',
        category: 'Boutique Stays',
        redirect: '/glam',
        topics: [
            {
                title: "The Glam by Sandane Homes: Luxury Boutique Suites Near Noida Airport Corridor",
                metaTitle: "The Glam by Sandane Homes | Luxury Boutique Suites Noida Airport Corridor",
                metaDescription: "Book luxury suites at The Glam by Sandane Homes near Jewar Noida International Airport corridor. Designer interiors, high-speed WiFi & GST invoicing.",
                subtitle: "Elegantly designed luxury suites for corporate travelers and flight transit guests.",
                excerpt: "Book luxury suites at The Glam by Sandane Homes near Jewar Noida International Airport corridor. Designer interiors, high-speed WiFi & GST invoicing.",
                tags: ["The Glam by Sandane Homes", "Noida Airport Corridor Hotel", "Luxury Boutique Stay"]
            }
        ]
    },
    {
        hotel: 'Residences by Sandane Homes',
        slugPrefix: 'residences-by-sandane-homes',
        category: 'Expat Housing',
        redirect: '/residences',
        topics: [
            {
                title: "Residences by Sandane Homes: Luxury 2BHK & 3BHK Serviced Apartments in Greater Noida",
                metaTitle: "Residences by Sandane Homes | Luxury 2BHK 3BHK Serviced Apartments",
                metaDescription: "Book luxury 2BHK & 3BHK serviced apartments at Residences by Sandane Homes in Ansal Golf Links-1. Turnkey expat housing with 24/7 security & 300 Mbps WiFi.",
                subtitle: "Fully managed corporate and expat family residences inside gated Ansal Golf Links-1.",
                excerpt: "Book luxury 2BHK & 3BHK serviced apartments at Residences by Sandane Homes in Ansal Golf Links-1. Turnkey expat housing with 24/7 security & 300 Mbps WiFi.",
                tags: ["Residences by Sandane Homes", "Expat Housing Greater Noida", "Serviced Apartments"]
            }
        ]
    }
];

export function autoGenerateBlogs() {
    console.log("🚀 Starting Automated Blog Generation for Sandane Homes...");

    const blogPostsPath = path.join(rootDir, 'src', 'data', 'blogPosts.js');
    let blogContent = fs.readFileSync(blogPostsPath, 'utf8');

    const generateSeoPath = path.join(rootDir, 'generate-seo.js');
    let seoContent = fs.readFileSync(generateSeoPath, 'utf8');

    const timestamp = Date.now();
    let postCountOffset = 0;

    const newPosts = [];
    const newSlugs = [];

    TOPIC_TEMPLATES.forEach((tpl) => {
        const topic = tpl.topics[0];
        const slug = `${tpl.slugPrefix}-auto-guide-${timestamp.toString().slice(-6)}`;
        newSlugs.push(slug);

        // Ensure date is in December 2026 so auto posts rank at the very top of /blog
        const futureDateObj = new Date(2026, 11, 25 - postCountOffset);
        const postDate = futureDateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        postCountOffset++;

        const postObj = `    {
        slug: "${slug}",
        title: "${topic.title}",
        metaTitle: "${topic.metaTitle}",
        metaDescription: "${topic.metaDescription}",
        subtitle: "${topic.subtitle}",
        category: "${tpl.category}",
        date: "${postDate}",
        readTime: "5 min read",
        author: "Sandane Homes Automation",
        coverImage: "/blog/covers/living-room.jpg",
        coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
        excerpt: "${topic.excerpt}",
        content: [
            { type: "paragraph", text: "${topic.metaDescription} Explore hospitality excellence with <a href='${tpl.redirect}'>${tpl.hotel}</a> in Greater Noida." },
            { type: "heading", text: "Key Highlights & Amenities" },
            { type: "list", items: [
                "<strong>Prime Location:</strong> Direct signal-free access to India Expo Mart, Knowledge Park, and major industrial centers.",
                "<strong>300 Mbps Fiber WiFi:</strong> High-bandwidth connectivity for business work and seamless streaming.",
                "<strong>Corporate Accounting:</strong> Single B2B GST master invoicing for easy expense consolidation.",
                "<strong>24/7 Concierge:</strong> Attentive hospitality team and round-the-clock security."
            ] },
            { type: "quote", text: "${tpl.hotel} | Greater Noida | +91 97117 22273 | sandanehomes.com${tpl.redirect}", attribution: "— Hospitality Excellence" },
            { type: "cta" }
        ],
        faqs: [
            { question: "How to book a stay at ${tpl.hotel}?", answer: "Book directly at sandanehomes.com${tpl.redirect} or call +91 97117 22273." },
            { question: "Is GST billing available?", answer: "Yes, complete B2B GST tax invoices are provided." }
        ],
        tags: ${JSON.stringify(topic.tags)}
    },`;

        newPosts.push(postObj);
    });

    // Inject new posts into blogPosts.js
    const insertIndex = blogContent.indexOf('export const blogPosts = [\n') + 'export const blogPosts = [\n'.length;
    blogContent = blogContent.slice(0, insertIndex) + newPosts.join('\n') + '\n' + blogContent.slice(insertIndex);
    fs.writeFileSync(blogPostsPath, blogContent, 'utf8');
    console.log(`✅ Appended ${newPosts.length} new automated blog posts to src/data/blogPosts.js`);

    // Inject new slugs into highPrioritySlugs in generate-seo.js
    const hpIndex = seoContent.indexOf('const highPrioritySlugs = [\n') + 'const highPrioritySlugs = [\n'.length;
    const slugLines = newSlugs.map(s => `  '${s}',`).join('\n') + '\n';
    seoContent = seoContent.slice(0, hpIndex) + slugLines + seoContent.slice(hpIndex);
    fs.writeFileSync(generateSeoPath, seoContent, 'utf8');
    console.log(`✅ Appended ${newSlugs.length} slugs to generate-seo.js`);

    // Run build
    console.log("🔨 Running npm run build...");
    execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });

    // Git commit & push
    console.log("📤 Committing and pushing updates...");
    execSync('git add . && git commit -m "Auto-generated new SEO blog posts for Sandane Homes portfolio" && git push origin main', { cwd: rootDir, stdio: 'inherit' });

    console.log("🎉 Automated blog generation complete!");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    autoGenerateBlogs();
}
