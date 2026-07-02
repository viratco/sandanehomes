import React, { useState } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import heroBg from '../../assets/hero-bg.webp'; // Using a different background for variety, or could stick to e8cd7b2a-95fc-418d-9ca2-357008d2aa61.JPG
import './SandaneHomes.css';
import {
    FaChevronDown, FaChevronUp, FaWhatsapp, FaArrowRight,
    FaShieldAlt, FaWifi, FaUtensils, FaCar, FaBuilding, FaLeaf
} from 'react-icons/fa';

/* ─────────────────────────────── FAQ DATA ─────────────────────────────── */
const faqs = [
    {
        question: "Is Greater Noida safe for Japanese expatriates?",
        answer: "Yes, absolutely. Greater Noida is widely considered one of the most secure and well-planned cities in the Delhi NCR region. Our serviced apartments are situated within highly secure, premium gated communities like Jaypee Greens, Ansal Golf Links, and Godrej Golf Link. These societies feature 24/7 CCTV monitoring, strict entry/exit protocols, and professional security staff, ensuring a safe and peaceful environment for Japanese expats and their families."
    },
    {
        question: "How long is the commute to Honda and Yamaha plants from the apartments?",
        answer: "The commute from our Greater Noida apartments to the Honda Motorcycle and Scooter India (HMSI) plant and the India Yamaha Motor plant is extremely convenient. Depending on the exact location along the Yamuna Expressway or Surajpur industrial area, travel time typically ranges from 15 to 30 minutes. The wide, uncongested roads in Greater Noida make daily commuting significantly less stressful compared to living in central Delhi or Gurgaon."
    },
    {
        question: "Are the apartments equipped with bathtubs, which are important for Japanese residents?",
        answer: "We understand that a relaxing bath (ofuro) is a crucial part of daily life for many Japanese residents. While standard Indian apartments often only feature showers, several of our premium luxury units are equipped with deep-soaking bathtubs or can be customized upon long-term request. Additionally, all bathrooms feature high-end fixtures, reliable hot water, and meticulous cleanliness standards."
    },
    {
        question: "Do you provide corporate billing directly to our company in Japan or the Indian subsidiary?",
        answer: "Yes, we specialize in corporate housing and provide seamless corporate billing solutions. We can invoice your Indian subsidiary (e.g., Honda India, Yamaha Motor India, or their vendors) directly. This eliminates the hassle of personal reimbursements and ensures compliance with your company's HR and finance policies. We provide clear, itemized GST invoices."
    },
    {
        question: "What kind of kitchen facilities are provided?",
        answer: "Every serviced apartment features a fully equipped, modern kitchen. You will find a gas stove, microwave, large refrigerator, and all necessary cooking utensils, pots, and pans. This allows you to easily prepare traditional Japanese meals (washoku) at home. The kitchens are spacious, clean, and completely ready to use from the moment you move in."
    },
    {
        question: "How is the housekeeping service managed?",
        answer: "We provide daily professional housekeeping to maintain the highest standards of cleanliness and hygiene—a priority we know is essential for our Japanese guests. Our trained staff handles cleaning, dusting, floor washing, and garbage disposal. We also offer fresh bed linens and towels regularly, ensuring your apartment remains immaculate without any effort on your part."
    },
    {
        question: "Is it easy to access Japanese food and groceries?",
        answer: "While Greater Noida is quieter and more residential, accessing Japanese groceries is becoming easier. There are several Asian and Korean marts in the vicinity that stock basic Japanese staples like soy sauce, miso, and rice. For a wider selection, premium grocery delivery services bring fresh produce and imported Japanese goods directly to your door. The nearby Noida sector 18 and Delhi areas also host excellent authentic Japanese restaurants."
    },
    {
        question: "Do you offer support for FRRO registration?",
        answer: "Yes. Registering with the Foreigners Regional Registration Office (FRRO) is a mandatory requirement for Japanese expats staying long-term in India. Our dedicated concierge team has extensive experience assisting Japanese nationals with the paperwork and online processes required for smooth and timely FRRO registration, coordinating closely with your company's HR department."
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
const JapaneseExpatHousing = () => {
    const PHONE = "919711722273";

    /* ── SCHEMA.ORG ── */
    const apartmentSchema = {
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        "name": "Sandane Homes — Japanese Expat Housing Greater Noida",
        "description": "Premium fully furnished serviced apartments for Japanese expats in Greater Noida. Near Honda, Yamaha, and Yamuna Expressway industrial hubs.",
        "url": "https://www.sandanehomes.com/japanese-expat-housing-delhi-ncr",
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
            { "@type": "LocationFeatureSpecification", "name": "Fully Furnished Kitchen", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Power Backup", "value": true }
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
            { "@type": "ListItem", "position": 2, "name": "Japanese Expat Housing Greater Noida", "item": "https://www.sandanehomes.com/japanese-expat-housing-delhi-ncr" }
        ]
    };

    const hreflang = [
        { lang: "en", href: "https://www.sandanehomes.com/japanese-expat-housing-delhi-ncr" },
        { lang: "ja", href: "https://www.sandanehomes.com/japanese-expat-housing-delhi-ncr" },
        { lang: "x-default", href: "https://www.sandanehomes.com/japanese-expat-housing-delhi-ncr" }
    ];

    const highlights = [
        { icon: <FaShieldAlt size={28} color="#1A3C34" />, title: "Uncompromising Security", desc: "Gated communities with strict access control and 24/7 patrols." },
        { icon: <FaBuilding size={28} color="#1A3C34" />, title: "Immaculate Cleanliness", desc: "Rigorous daily housekeeping tailored to Japanese standards." },
        { icon: <FaUtensils size={28} color="#1A3C34" />, title: "Fully Equipped Kitchens", desc: "Spacious kitchens ready for preparing traditional Japanese meals." },
        { icon: <FaCar size={28} color="#1A3C34" />, title: "Strategic Location", desc: "Rapid commute to Honda, Yamaha, and Yamuna Expressway hubs." },
        { icon: <FaWifi size={28} color="#1A3C34" />, title: "Reliable Infrastructure", desc: "High-speed internet and 100% power backup, guaranteed." },
        { icon: <FaLeaf size={28} color="#1A3C34" />, title: "Tranquil Environment", desc: "Peaceful, green surroundings offering a respite from city noise." }
    ];

    return (
        <div className="catarina-services sandane-homes-page">
            <SEO
                title="Japanese Expat Housing Greater Noida | Near Honda, Yamaha | 日本人向け住宅"
                description="Premium serviced apartments in Greater Noida designed for Japanese expats. Close to Honda and Yamaha plants. Daily housekeeping, top security, fully furnished. 日本人向けサービスアパートメント."
                canonical="https://www.sandanehomes.com/japanese-expat-housing-delhi-ncr"
                ogImage="https://www.sandanehomes.com/residences-og.jpg"
                lang="ja"
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
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />

                {/* Japanese badge */}
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
                    🇯🇵 &nbsp; Japanese Expat Housing • 日本人向け高級住宅
                </div>

                <h1 className="catarina-title" style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto', fontSize: '52px', lineHeight: '1.15' }}>
                    Japanese Expat Housing in Greater Noida
                </h1>
                <p style={{ position: 'relative', zIndex: 2, fontSize: '20px', color: '#E6CFA1', maxWidth: '800px', margin: '20px auto 10px', lineHeight: '1.7', fontWeight: '500' }}>
                    Premium, fully serviced apartments perfectly located near Honda Motorcycle, Yamaha India, and major Yamuna Expressway industrial zones.
                </p>
                {/* Japanese language tagline */}
                <p className="catarina-lang-text" style={{ position: 'relative', zIndex: 2, fontSize: '18px', maxWidth: '750px', margin: '10px auto 40px' }}>
                    ホンダ、ヤマハ、その他の主要企業で働く日本人駐在員のための、安全で快適なプレミアム・サービスアパートメント。
                </p>

                <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a
                        href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20am%20a%20Japanese%20expat%20looking%20for%20housing%20in%20Greater%20Noida`}
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
                        <FaWhatsapp size={22} /> WhatsApp Us / お問い合わせ
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
                        Relocating to the Delhi NCR region for a professional assignment requires accommodation that offers peace of mind, uncompromised safety, and a high standard of living. For Japanese expatriates working at major manufacturing hubs like the <strong>Honda Motorcycle and Scooter India (HMSI)</strong> plant or the <strong>Yamaha Motor India</strong> facility, minimizing commute time while maximizing comfort is essential. 
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        At <a href="/" style={{ color: '#1A3C34', fontWeight: '700' }}>Sandane Homes</a>, we specialize in providing tailored <strong>Japanese expat housing in Greater Noida</strong>. We understand that Japanese professionals have precise expectations regarding cleanliness, security, and functional amenities. Our premium serviced apartments, located in top-tier gated societies such as <strong>Jaypee Greens</strong> and <strong>Ansal Golf Links</strong>, are designed to meet and exceed these exacting standards.
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        Unlike conventional rental apartments in India that require you to manage utility setups, purchase furniture, and hire separate domestic help, our <strong>serviced apartments for expats</strong> offer a completely frictionless "plug-and-play" experience. Every apartment comes fully furnished with modern aesthetics, a fully equipped kitchen complete with gas hobs and large refrigerators, high-speed fiber internet, and comprehensive daily housekeeping by trained professionals. We focus on the details, ensuring your home is a pristine sanctuary where you can truly relax after a demanding day at the plant.
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        The location of our properties in Greater Noida provides a strategic advantage. It offers a drastically reduced and smoother commute to the industrial sectors along the Yamuna Expressway and Surajpur compared to living in central Delhi or Gurgaon. Furthermore, the tranquil, green environment of our chosen societies provides a welcome contrast to the bustling city, offering a quiet, disciplined community atmosphere that our Japanese residents highly appreciate. 
                    </p>
                    <p style={{ marginBottom: '0' }}>
                        We are proud to partner directly with corporate HR teams from leading Japanese multinationals and their vendor networks. We streamline the entire relocation process, offering direct corporate invoicing, assistance with mandatory FRRO registration, and dedicated ongoing support. Discover the finest <strong>Japanese serviced apartments in Greater Noida</strong>, where luxury, safety, and convenience converge.
                    </p>
                </div>
            </div>

            {/* ── SECTION 2 — HIGHLIGHTS GRID ── */}
            <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <p className="section-subtitle">Excellence in Hospitality</p>
                    <h2 className="section-title" style={{ color: '#1A3C34' }}>Designed for Japanese Standards</h2>
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

            {/* ── SECTION 3 — JAPANESE LANGUAGE SECTION ── */}
            <div style={{
                background: 'linear-gradient(135deg, #1A3C34 0%, #0d1e1a 100%)',
                padding: '90px 20px', color: 'white'
            }}>
                <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{
                        fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase',
                        color: '#C5A572', fontWeight: '700', marginBottom: '16px'
                    }}>
                        日本語でのご案内
                    </p>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', marginBottom: '40px', lineHeight: '1.25' }}>
                        日本人駐在員向け プレミアム・サービスアパートメント
                    </h2>
                    <p style={{ fontSize: '17px', lineHeight: '2', opacity: 0.92, marginBottom: '24px' }}>
                        ホンダ（Honda Motorcycle and Scooter India）、ヤマハ（Yamaha Motor India）、および関連企業でご勤務される日本人駐在員の皆様へ。Sandane Homesは、グレーター・ノイダにおいて最高水準の安全性、清潔さ、そして快適さを備えた高級サービスアパートメントをご提供しております。
                    </p>
                    <p style={{ fontSize: '17px', lineHeight: '2', opacity: 0.92, marginBottom: '24px' }}>
                        当施設は、Jaypee GreensやAnsal Golf Linksといった厳重なセキュリティ管理がなされた高級住宅街の中に位置しており、日本のご家族でも安心して暮らすことができます。すべてのアパートメントには、モダンな家具、自炊に便利なフル設備のキッチン、高速Wi-Fi、そして日本人のお客様に高く評価されている徹底した毎日のハウスキーピングサービスが完備されています。面倒な光熱費の手続きや家具の購入は一切不要で、ご到着初日から快適な生活をスタートできます。
                    </p>
                    <p style={{ fontSize: '17px', lineHeight: '2', opacity: 0.92, marginBottom: '40px' }}>
                        工場への通勤も至便であり、デリー市内やグルガオンからの渋滞に悩まされることなく、毎日の通勤時間を大幅に短縮できます。また、法人契約、企業様への直接請求、外国人登録（FRRO）のサポートなど、人事ご担当者様および駐在員様の負担を軽減する包括的なサービスをご用意しております。詳細につきましては、WhatsAppにてお気軽にお問い合わせください。
                    </p>
                    <a
                        href={`https://wa.me/${PHONE}?text=こんにちは%E3%80%82グレーター・ノイダの日本人向けサービスアパートメントについて詳細を教えてください%E3%80%82`}
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
                        <FaWhatsapp size={22} /> WhatsAppでお問い合わせ (日本語可)
                    </a>
                </div>
            </div>

            {/* ── SECTION 4 — COMMUTE / LOCATION TABLE ── */}
            <div style={{ padding: '90px 20px', backgroundColor: '#f9f9f9' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <p className="section-subtitle">Convenient Connectivity</p>
                    <h2 className="section-title" style={{ color: '#1A3C34' }}>Proximity to Key Destinations</h2>
                    <p style={{ color: '#666', fontSize: '17px', lineHeight: '1.8', marginBottom: '50px' }}>
                        Located strategically in Greater Noida, our apartments offer quick access to major manufacturing hubs along the Yamuna Expressway and Surajpur, significantly cutting down daily travel time for our residents.
                    </p>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#1A3C34', color: 'white' }}>
                                    <th style={{ padding: '16px 20px', fontWeight: '700' }}>Destination</th>
                                    <th style={{ padding: '16px 20px', fontWeight: '700' }}>Distance</th>
                                    <th style={{ padding: '16px 20px', fontWeight: '700' }}>Approx. Drive Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Honda (HMSI) Plant, Surajpur", "~12 km", "20–25 min"],
                                    ["Yamaha Motor Plant, Surajpur", "~10 km", "15–20 min"],
                                    ["India Expo Mart, Greater Noida", "~8 km", "10–15 min"],
                                    ["Yamuna Expressway Industrial Area", "Varies", "15–30 min"],
                                    ["Sector 18, Noida (Shopping & Dining)", "~30 km", "35–45 min"],
                                    ["Indira Gandhi International Airport", "~55 km", "55–70 min"],
                                ].map(([dest, dist, time], i) => (
                                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f5f5f5', borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '14px 20px', color: '#333', fontWeight: '500' }}>{dest}</td>
                                        <td style={{ padding: '14px 20px', color: '#666' }}>{dist}</td>
                                        <td style={{ padding: '14px 20px', color: '#1A3C34', fontWeight: '700' }}>{time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* ── SECTION 5 — FAQ ── */}
            <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                    <p className="section-subtitle" style={{ textAlign: 'center' }}>よくあるご質問</p>
                    <h2 className="section-title" style={{ color: '#1A3C34', textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <div style={{ borderTop: '1px solid #e0e0e0' }}>
                        {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
                    </div>
                </div>
            </div>

            {/* ── SECTION 6 — FINAL CTA ── */}
            <div style={{
                background: 'linear-gradient(135deg, #1A3C34 0%, #0d1e1a 100%)',
                padding: '100px 20px', textAlign: 'center', color: 'white'
            }}>
                <h2 style={{ fontSize: '42px', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>
                    Experience uncompromising comfort.
                </h2>
                <p style={{ fontSize: '19px', color: '#E6CFA1', marginBottom: '12px' }}>
                    グレーター・ノイダでの快適な駐在生活をサポートいたします。
                </p>
                <p style={{ fontSize: '17px', opacity: 0.85, marginBottom: '44px', maxWidth: '560px', margin: '0 auto 44px' }}>
                    Contact us today to discuss your corporate housing needs. Our team is ready to assist you.
                </p>
                <a
                    href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20am%20a%20Japanese%20expat%20interested%20in%20your%20serviced%20apartments.`}
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

export default JapaneseExpatHousing;
