import React, { useState } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import heroBg from '../../assets/hero-bg.webp';
import './SandaneHomes.css';
import {
    FaChevronDown, FaChevronUp, FaWhatsapp, FaArrowRight,
    FaShieldAlt, FaWifi, FaUtensils, FaCar, FaBuilding, FaLeaf
} from 'react-icons/fa';

/* ─────────────────────────────── FAQ DATA ─────────────────────────────── */
const faqs = [
    {
        question: "Is Greater Noida safe for Chinese expats and their families?",
        answer: "Yes. Greater Noida is one of the most secure and well-planned cities in the Delhi NCR region. Our serviced apartments are located inside premier gated communities — Jaypee Greens, Ansal Golf Links, and Godrej Golf Link — all featuring 24/7 CCTV surveillance, professional security staff at every gate, and strict visitor entry protocols. These societies are known for their quiet, disciplined environments, making them an ideal home for Chinese professionals and families, including those with children attending international schools in the vicinity."
    },
    {
        question: "How far are the apartments from the India Expo Mart, Greater Noida?",
        answer: "Our serviced apartments in Jaypee Greens and Ansal Golf Links are approximately 10–20 minutes by road from the India Expo Mart, Greater Noida — the largest exhibition and convention venue in the region. For Chinese business delegations attending trade fairs, industry exhibitions, or corporate events at the Expo Mart, staying with us eliminates long daily commutes and airport hotel costs. We offer flexible short-stay packages specifically designed for exhibition visitors."
    },
    {
        question: "Can I cook Chinese food in the apartment?",
        answer: "Absolutely. Every Sandane Homes serviced apartment comes with a fully equipped, modern kitchen complete with a gas stove (suitable for wok cooking), large-capacity refrigerator, microwave oven, water purifier, and all essential cooking utensils. Many of our Chinese guests prepare their own meals — from stir-fries to noodles and dumplings — which is a significant comfort factor during longer project-based or corporate stays. We can also arrange for grocery shopping assistance if required."
    },
    {
        question: "Do you assist Chinese nationals with FRRO registration in Noida/Greater Noida?",
        answer: "Yes. FRRO (Foreigners Regional Registration Office) registration is mandatory for Chinese nationals on Employment, Business, or Project visas and must be completed within 14 days of arrival in India. Our dedicated concierge team provides full FRRO support: we prepare your landlord confirmation letter, provide a copy of the registered lease agreement, electricity bill, and property documents — all formatted to meet e-FRRO portal requirements — within 24 hours of your check-in. We have a 100% acceptance rate on FRRO documentation for our residents."
    },
    {
        question: "Do you offer WeChat support for Chinese guests?",
        answer: "Yes. We understand that Chinese professionals rely on WeChat for daily communication. Our team is available on both WeChat and WhatsApp for all inquiries, booking confirmations, check-in coordination, and ongoing support throughout your stay. You can reach us in Chinese or English. For group bookings by Chinese companies, we assign a single dedicated account manager who can be reached directly on WeChat."
    },
    {
        question: "What is the commute time from the apartment to Yamuna Expressway industrial zones?",
        answer: "Our Greater Noida properties are exceptionally well-placed for Chinese engineers and project managers working at manufacturing facilities or project sites along the Yamuna Expressway industrial corridor. The commute typically ranges from 15 to 30 minutes depending on the specific facility location. The Yamuna Expressway itself is a wide, high-speed road with minimal traffic compared to central Delhi, making the daily drive significantly less stressful."
    },
    {
        question: "Can your team handle group bookings for Chinese project teams of 5–15 people?",
        answer: "Yes, this is one of our specialties. Chinese EPC firms, engineering contractors, and manufacturing companies often deploy teams of 5–15 people to Greater Noida for multi-month assignments. We offer dedicated corporate housing packages with multiple simultaneous apartment units within the same gated society, a single consolidated monthly invoice in INR, one dedicated account manager, coordinated airport pickups, and group orientation support. We have managed group relocations for Chinese companies in the infrastructure, electronics, and solar energy sectors."
    },
    {
        question: "How far is the apartment from Indira Gandhi International Airport (Delhi)?",
        answer: "From our Greater Noida properties, Indira Gandhi International Airport (IGI Airport, Delhi) is approximately 55–65 minutes by road via the Yamuna Expressway — a fast, well-maintained highway. For Chinese professionals who travel back to China frequently, this commute is smooth and reliable. We can arrange dedicated airport cab services at your request, with early morning and late-night availability to suit international flight schedules."
    }
];

/* ──────────────────────────── FAQ ACCORDION ──────────────────────────── */
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            style={{ borderBottom: '1px solid #e0e0e0', padding: '22px 0', cursor: 'pointer' }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '17px', color: '#1A3C34', margin: 0, fontWeight: '600', paddingRight: '20px', lineHeight: 1.4 }}>
                    {question}
                </h3>
                <div style={{ color: '#1A3C34', flexShrink: 0 }}>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>
            {isOpen && (
                <div style={{ marginTop: '14px', color: '#555', fontSize: '16px', lineHeight: '1.85' }}>
                    {answer}
                </div>
            )}
        </div>
    );
};

/* ──────────────────────────── MAIN COMPONENT ─────────────────────────── */
const ChineseExpatHousing = () => {
    const PHONE = "919711722273";

    const apartmentSchema = {
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        "name": "Sandane Homes — Chinese Expat Housing Greater Noida",
        "description": "Premium fully furnished serviced apartments for Chinese expats in Greater Noida. Near India Expo Mart, Yamuna Expressway industrial zones, and Greater Noida business hubs.",
        "url": "https://www.sandanehomes.com/chinese-expat-housing-greater-noida",
        "telephone": "+919711722273",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Greater Noida",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
        },
        "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "High-Speed WiFi", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Fully Furnished Kitchen with Gas Stove", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Power Backup", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Air Purifiers", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "FRRO Documentation Support", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "WeChat Support", "value": true }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sandanehomes.com/" },
            { "@type": "ListItem", "position": 2, "name": "Chinese Expat Housing Greater Noida", "item": "https://www.sandanehomes.com/chinese-expat-housing-greater-noida" }
        ]
    };

    const hreflang = [
        { lang: "en", href: "https://www.sandanehomes.com/chinese-expat-housing-greater-noida" },
        { lang: "zh", href: "https://www.sandanehomes.com/chinese-expat-housing-greater-noida" },
        { lang: "zh-CN", href: "https://www.sandanehomes.com/chinese-expat-housing-greater-noida" },
        { lang: "x-default", href: "https://www.sandanehomes.com/chinese-expat-housing-greater-noida" }
    ];

    const highlights = [
        { icon: <FaShieldAlt size={28} color="#1A3C34" />, title: "Premium Security", desc: "Gated communities with 24/7 CCTV, security staff, and strict visitor protocols." },
        { icon: <FaBuilding size={28} color="#1A3C34" />, title: "Air Purification", desc: "Air purifiers in every room — essential comfort for Chinese residents." },
        { icon: <FaUtensils size={28} color="#1A3C34" />, title: "Wok-Ready Kitchens", desc: "Gas stoves, large fridges, and all cooking essentials for Chinese home cooking." },
        { icon: <FaCar size={28} color="#1A3C34" />, title: "Expo Mart Proximity", desc: "10–20 minutes to India Expo Mart and major Yamuna Expressway industrial zones." },
        { icon: <FaWifi size={28} color="#1A3C34" />, title: "WeChat & WhatsApp Support", desc: "Our team is reachable in Chinese or English on WeChat and WhatsApp, 7 days a week." },
        { icon: <FaLeaf size={28} color="#1A3C34" />, title: "Peaceful Green Surroundings", desc: "Tranquil, low-pollution gated societies — a welcome contrast to India's busy cities." }
    ];

    return (
        <div className="catarina-services sandane-homes-page">
            <SEO
                title="Chinese Expat Housing Greater Noida | Serviced Apartments Near India Expo Mart | 大诺伊达中国外籍人士住房"
                description="Premium serviced apartments in Greater Noida for Chinese expats and business delegations. Near India Expo Mart. FRRO support, WeChat assistance, wok kitchen, air purifiers. 大诺伊达中国外籍人士高级服务公寓。"
                canonical="https://www.sandanehomes.com/chinese-expat-housing-greater-noida"
                ogImage="https://www.sandanehomes.com/residences-og.jpg"
                lang="zh"
                hreflang={hreflang}
                schema={[apartmentSchema, faqSchema, breadcrumbSchema]}
            />

            <Header showTopBar={false} />

            {/* ── HERO ── */}
            <div
                className="catarina-hero"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '120px 20px',
                    minHeight: '92vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.62)' }} />

                <div style={{
                    position: 'relative', zIndex: 2,
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '30px', padding: '8px 20px',
                    color: '#fff', fontSize: '14px', letterSpacing: '2px',
                    textTransform: 'uppercase', fontWeight: '600', marginBottom: '24px'
                }}>
                    🇨🇳 &nbsp; Chinese Expat Housing • 中国外籍人士住房
                </div>

                <h1 className="catarina-title" style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto', fontSize: '52px', lineHeight: '1.15' }}>
                    Chinese Expat Housing in Greater Noida
                </h1>
                <p style={{ position: 'relative', zIndex: 2, fontSize: '20px', color: '#E6CFA1', maxWidth: '800px', margin: '20px auto 10px', lineHeight: '1.7', fontWeight: '500' }}>
                    Premium, fully serviced apartments near the India Expo Mart, Yamuna Expressway industrial zones, and Greater Noida's major business hubs.
                </p>
                <p className="catarina-lang-text" style={{ position: 'relative', zIndex: 2, fontSize: '18px', maxWidth: '750px', margin: '10px auto 40px' }}>
                    为在印度大诺伊达工作的中国外籍专业人士提供安全、舒适的高级服务公寓。
                </p>

                <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a
                        href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20am%20a%20Chinese%20expat%20looking%20for%20housing%20in%20Greater%20Noida`}
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            backgroundColor: '#25D366', color: 'white',
                            padding: '16px 32px', borderRadius: '30px',
                            textDecoration: 'none', fontSize: '17px', fontWeight: 'bold',
                            transition: 'transform 0.3s'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <FaWhatsapp size={22} /> WhatsApp Us / 微信咨询
                    </a>
                    <a
                        href="/residences"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            backgroundColor: 'transparent', color: 'white',
                            border: '2px solid white', padding: '16px 32px', borderRadius: '30px',
                            textDecoration: 'none', fontSize: '17px', fontWeight: 'bold',
                            transition: 'all 0.3s'
                        }}
                        onMouseOver={e => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#111'; }}
                        onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; }}
                    >
                        View Properties <FaArrowRight />
                    </a>
                </div>
            </div>

            {/* ── SECTION 1 — MAIN COPY ── */}
            <div style={{ backgroundColor: '#f9f9f9', padding: '90px 20px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', color: '#444', fontSize: '18px', lineHeight: '1.95' }}>
                    <p style={{ marginBottom: '28px' }}>
                        Greater Noida is rapidly becoming one of North India's most strategically important destinations for Chinese business professionals, engineers, and trade representatives. With the <strong>India Expo Mart</strong> — one of Asia's largest and most active exhibition centers — attracting Chinese companies from electronics, solar energy, manufacturing, and infrastructure sectors, the need for premium, culturally sensitive accommodation has never been higher.
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        At <a href="/" style={{ color: '#1A3C34', fontWeight: '700' }}>Sandane Homes</a>, we have built deep experience hosting Chinese expat professionals and business delegations in <strong>Greater Noida</strong>. We understand that Chinese professionals have specific expectations — from access to a proper gas-stove kitchen for home cooking to reliable air purification, WeChat-accessible support, and seamless <strong>FRRO registration documentation</strong>. Our premium serviced apartments in <strong>Jaypee Greens</strong> and <strong>Ansal Golf Links</strong> are designed to meet every one of these expectations.
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        Unlike a business hotel near Pari Chowk or the Expo Mart, our serviced apartments offer a full residential experience: a spacious living area, a fully equipped private kitchen, high-speed fiber internet, daily professional housekeeping, and complete power backup. You arrive with your suitcase — everything else is ready and waiting.
                    </p>
                    <p style={{ marginBottom: '0' }}>
                        For Chinese companies deploying project teams, our <strong>corporate housing packages</strong> include direct company invoicing in INR, multiple simultaneous apartment units in the same gated society, one dedicated WeChat-accessible account manager, and full FRRO documentation support from day one. Discover what makes Sandane Homes the preferred choice for <strong>Chinese expat housing in Greater Noida</strong>.
                    </p>
                </div>
            </div>

            {/* ── SECTION 2 — HIGHLIGHTS GRID ── */}
            <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <p className="section-subtitle">Excellence in Hospitality</p>
                    <h2 className="section-title" style={{ color: '#1A3C34' }}>Designed for Chinese Professionals</h2>
                </div>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
                    {highlights.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: '#fafafa', padding: '38px 28px',
                                borderRadius: '14px', boxShadow: '0 8px 28px rgba(0,0,0,0.05)',
                                textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s',
                                border: '1px solid #f0f0f0'
                            }}
                            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; }}
                            onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.05)'; }}
                        >
                            <div style={{ marginBottom: '18px' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '19px', color: '#111', marginBottom: '12px', fontWeight: '700' }}>{item.title}</h3>
                            <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.65', margin: 0 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── SECTION 3 — CHINESE LANGUAGE SECTION ── */}
            <div style={{ backgroundColor: '#1A3C34', padding: '90px 20px', color: 'white' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{
                        fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase',
                        color: '#C5A572', fontWeight: '700', marginBottom: '16px'
                    }}>
                        中文服务介绍
                    </p>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', marginBottom: '40px', lineHeight: '1.25' }}>
                        专为在印度大诺伊达工作的中国外籍专业人士打造的高级服务公寓
                    </h2>
                    <p style={{ fontSize: '17px', lineHeight: '2', color: '#E0E0E0', marginBottom: '24px' }}>
                        Sandane Homes 为在印度大诺伊达（Greater Noida）工作和生活的中国外籍专业人士提供全套高级服务公寓。无论您是来参加印度博览城（India Expo Mart）的商业展览，还是在亚穆纳高速公路工业走廊负责工程项目，我们的公寓均能提供安全、舒适且完全配备齐全的居住环境。
                    </p>
                    <p style={{ fontSize: '17px', lineHeight: '2', color: '#E0E0E0', marginBottom: '24px' }}>
                        我们的服务公寓位于贾伊皮·格林斯（Jaypee Greens）和安萨尔高尔夫林克斯（Ansal Golf Links）等顶级封闭式社区内，配备24小时安保、中餐烹饪适用的燃气灶、高速光纤Wi-Fi、空气净化器及专业的每日家政服务。公寓全部精装修，拎包入住即可，无需自行采购家具或联系公用设施。
                    </p>
                    <p style={{ fontSize: '17px', lineHeight: '2', color: '#E0E0E0', marginBottom: '40px' }}>
                        我们的团队可通过微信（WeChat）和WhatsApp进行沟通，提供中英文双语支持。我们也提供完整的外国人登记处（FRRO）证件支持，帮助您在抵达印度后14天内顺利完成合规登记。如需了解更多或进行预订，请随时通过微信或WhatsApp联系我们。
                    </p>
                    <a
                        href={`https://wa.me/${PHONE}?text=您好，我是一位在大诺伊达工作的中国专业人士，希望了解您的服务公寓详情。`}
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            backgroundColor: '#25D366', color: 'white',
                            padding: '16px 36px', borderRadius: '30px',
                            textDecoration: 'none', fontSize: '17px', fontWeight: 'bold',
                            transition: 'transform 0.3s'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <FaWhatsapp size={22} /> 微信 / WhatsApp 咨询（支持中文）
                    </a>
                </div>
            </div>

            {/* ── SECTION 4 — DISTANCE GRID ── */}
            <div style={{ padding: '90px 20px', backgroundColor: '#f9f9f9' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <p className="section-subtitle">Strategic Location</p>
                        <h2 className="section-title" style={{ color: '#1A3C34' }}>Why Greater Noida for Chinese Expats?</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                        {[
                            { label: "India Expo Mart", value: "10–20 min", note: "Asia's premier exhibition venue — core destination for Chinese trade delegations" },
                            { label: "IGI Airport Delhi", value: "55–65 min", note: "Via Yamuna Expressway — fast access for frequent China-India travel" },
                            { label: "Yamuna Expressway Industrial", value: "15–30 min", note: "Electronics, auto components, and EPC project sites" },
                            { label: "Noida City Centre Metro", value: "20 min by car", note: "Access to Noida's commercial and tech hubs" },
                        ].map((item, i) => (
                            <div key={i} style={{
                                backgroundColor: '#fff', borderRadius: '12px', padding: '30px 24px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderTop: '3px solid #C5A572'
                            }}>
                                <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', color: '#C5A572', fontWeight: '700', marginBottom: '8px' }}>{item.label}</p>
                                <p style={{ fontSize: '26px', fontWeight: '800', color: '#1A3C34', marginBottom: '10px' }}>{item.value}</p>
                                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>{item.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── SECTION 5 — FAQ ── */}
            <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                    <p className="section-subtitle" style={{ textAlign: 'center' }}>常见问题</p>
                    <h2 className="section-title" style={{ color: '#1A3C34', textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <div style={{ borderTop: '1px solid #e0e0e0' }}>
                        {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
                    </div>
                </div>
            </div>

            {/* ── SECTION 6 — FINAL CTA ── */}
            <div style={{ backgroundColor: '#1A3C34', padding: '100px 20px', textAlign: 'center', color: 'white' }}>
                <h2 style={{ fontSize: '42px', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>
                    Your home away from home in Greater Noida.
                </h2>
                <p style={{ fontSize: '19px', color: '#C5A572', marginBottom: '12px' }}>
                    大诺伊达，您在印度的温馨家园。
                </p>
                <p style={{ fontSize: '17px', color: '#E0E0E0', marginBottom: '44px', maxWidth: '560px', margin: '0 auto 44px' }}>
                    Contact us today for same-day availability. Corporate packages and group bookings welcome.
                </p>
                <a
                    href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20am%20a%20Chinese%20expat%20interested%20in%20your%20serviced%20apartments%20in%20Greater%20Noida.`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '12px',
                        backgroundColor: '#25D366', color: 'white',
                        padding: '18px 44px', borderRadius: '40px',
                        textDecoration: 'none', fontSize: '19px', fontWeight: 'bold',
                        transition: 'transform 0.3s'
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <FaWhatsapp size={26} /> WhatsApp Us Now
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default ChineseExpatHousing;
