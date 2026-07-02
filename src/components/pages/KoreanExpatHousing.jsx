import React, { useState } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import heroBg from '../../assets/e8cd7b2a-95fc-418d-9ca2-357008d2aa61.JPG';
import './SandaneHomes.css';
import {
    FaChevronDown, FaChevronUp, FaWhatsapp, FaArrowRight,
    FaShieldAlt, FaWifi, FaUtensils, FaCar, FaBuilding, FaLeaf
} from 'react-icons/fa';

/* ─────────────────────────────── FAQ DATA ─────────────────────────────── */
const faqs = [
    {
        question: "Is Greater Noida safe for Korean families?",
        answer: "Absolutely. Greater Noida is one of the safest cities in Delhi NCR. Our properties are located inside gated premium societies such as Jaypee Greens, Ansal Golf Links, and Godrej Golf Link — all of which have 24/7 CCTV surveillance, security guards at every gate, and intercom systems. These societies are known for their quiet, disciplined environments with very low crime rates, making them ideal for Korean families, including those with children attending international schools nearby."
    },
    {
        question: "How far is the apartment from Samsung R&D Noida and LG offices?",
        answer: "Our serviced apartments in Greater Noida are approximately 25–35 minutes by car from the Samsung R&D campus in Noida Sector 129 and the LG Electronics India office in Noida. With the Yamuna Expressway and Noida-Greater Noida Expressway providing direct, uncongested connectivity, the commute is smooth even during peak hours. Many of our Korean residents working at Samsung and LG use this route daily."
    },
    {
        question: "Are there Korean grocery stores or restaurants near the apartments?",
        answer: "Yes — and this is a significant advantage. There is a well-stocked Korean mart (Korean grocery store) in the Greater Noida / Noida corridor where you can find Korean staples: ramyeon, kimchi, gochujang, doenjang, Korean instant noodles, and packaged goods. Several Korean and Asian restaurants have also opened in the Sector 18 Noida area and near the India Expo Mart, offering authentic Korean BBQ and comfort food from home."
    },
    {
        question: "Do you assist Korean expats with FRRO (Foreigners Regional Registration Office) registration?",
        answer: "Yes, our concierge team actively helps Korean expats navigate the FRRO registration process, which is mandatory within 14 days of arriving in India on a long-term visa. We guide you on the required documents, accompany you if needed, and coordinate with your company's HR team to ensure the process is completed on time. We have helped dozens of Korean nationals complete FRRO registration smoothly since 2022."
    },
    {
        question: "Is the apartment suitable for a Korean professional relocating alone?",
        answer: "Very much so. Our studio and 1BHK serviced apartments are popular among Korean single professionals at Samsung, LG, and other MNCs. They are fully furnished with all modern appliances, a fully-equipped kitchen so you can cook Korean meals at home, high-speed fiber Wi-Fi, and daily housekeeping. Everything is set up from day one — you arrive with your suitcase and you are home."
    },
    {
        question: "Can corporate HR teams book in bulk for a group of Korean employees?",
        answer: "Yes. We offer dedicated corporate housing packages for Korean multinationals and their HR teams. We handle direct company invoicing, multiple simultaneous move-ins, airport pickup coordination, and a dedicated account manager. Companies like Samsung, LG, Hyundai vendors, and Korean EPC firms have used our corporate housing solutions for smooth multi-person relocations to the NCR."
    },
    {
        question: "What is the distance from the apartment to Indira Gandhi International Airport (Delhi)?",
        answer: "From our Greater Noida properties, IGI Airport is approximately 50–65 minutes via the NH 48 expressway — a fast, well-maintained highway with minimal traffic on early morning international departure timings. For frequent international travel, many of our Korean residents find this commute very manageable, and we can arrange reliable airport cab services at your request."
    },
    {
        question: "Do the apartments have a washing machine and kitchen for cooking Korean food?",
        answer: "Yes. Every serviced apartment comes with a fully equipped modern kitchen including a gas hob, microwave, refrigerator, and all cooking utensils. A washing machine and dryer are standard in each unit. You can cook kimchi jjigae, japchae, or any Korean dish you like — the kitchen is exactly as complete as what you are used to at home."
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
const KoreanExpatHousing = () => {
    const PHONE = "919711722273";

    /* ── SCHEMA.ORG ── */
    const apartmentSchema = {
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        "name": "Sandane Homes — Korean Expat Housing Delhi NCR",
        "description": "Premium fully furnished serviced apartments for Korean expats in Greater Noida and Delhi NCR. Near Samsung R&D, LG, and Hyundai offices.",
        "url": "https://www.sandanehomes.com/korean-expat-housing-delhi-ncr",
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
            { "@type": "ListItem", "position": 2, "name": "Korean Expat Housing Delhi NCR", "item": "https://www.sandanehomes.com/korean-expat-housing-delhi-ncr" }
        ]
    };

    const hreflang = [
        { lang: "en", href: "https://www.sandanehomes.com/korean-expat-housing-delhi-ncr" },
        { lang: "ko", href: "https://www.sandanehomes.com/korean-expat-housing-delhi-ncr" },
        { lang: "x-default", href: "https://www.sandanehomes.com/korean-expat-housing-delhi-ncr" }
    ];

    const highlights = [
        { icon: <FaShieldAlt size={28} color="#1A3C34" />, title: "24/7 Gated Security", desc: "CCTV, security guards, intercom — premium safe societies" },
        { icon: <FaWifi size={28} color="#1A3C34" />, title: "300 Mbps Fiber WiFi", desc: "Stable internet for video calls to Seoul, any hour" },
        { icon: <FaUtensils size={28} color="#1A3C34" />, title: "Full Kitchen", desc: "Cook Korean food at home — gas hob, fridge, all utensils" },
        { icon: <FaCar size={28} color="#1A3C34" />, title: "Easy MNC Commute", desc: "25–35 min to Samsung R&D, LG, and Noida tech corridors" },
        { icon: <FaBuilding size={28} color="#1A3C34" />, title: "Corporate Billing", desc: "Direct invoicing to your Korean company's HR team" },
        { icon: <FaLeaf size={28} color="#1A3C34" />, title: "Quiet Green Societies", desc: "Jaypee Greens, Ansal Golf Links — peaceful residential zones" }
    ];

    return (
        <div className="catarina-services sandane-homes-page">
            <SEO
                title="Korean Expat Housing in Delhi NCR | Serviced Apartments near Samsung, LG | Sandane"
                description="Premium serviced apartments for Korean expats in Greater Noida & Delhi NCR. Near Samsung R&D, LG Electronics, Korean mart. FRRO help, corporate billing, daily housekeeping. 한국인 주재원 아파트."
                canonical="https://www.sandanehomes.com/korean-expat-housing-delhi-ncr"
                ogImage="https://www.sandanehomes.com/residences-og.jpg"
                lang="ko"
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
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)' }} />

                {/* Korean badge */}
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
                    🇰🇷 &nbsp; Korean Expat Housing • 한국인 주재원 전용
                </div>

                <h1 className="catarina-title" style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto', fontSize: '52px', lineHeight: '1.15' }}>
                    Korean Expat Housing in Delhi NCR
                </h1>
                <p style={{ position: 'relative', zIndex: 2, fontSize: '20px', color: '#E6CFA1', maxWidth: '750px', margin: '20px auto 10px', lineHeight: '1.7', fontWeight: '500' }}>
                    Premium serviced apartments near Samsung R&D, LG Electronics &amp; the Korean community in Greater Noida
                </p>
                {/* Korean language tagline */}
                <p className="catarina-lang-text" style={{ position: 'relative', zIndex: 2, fontSize: '18px', maxWidth: '650px', margin: '10px auto 40px' }}>
                    그레이터 노이다의 프리미엄 서비스 아파트 — 삼성, LG, 현대 근무자를 위한 최적의 주거 공간
                </p>

                <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a
                        href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20am%20a%20Korean%20expat%20looking%20for%20housing%20in%20Greater%20Noida`}
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
                        <FaWhatsapp size={22} /> WhatsApp Us / 카카오 문의
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
                        Relocating to India as a Korean expat is a significant transition. Whether you are joining <strong>Samsung R&D India</strong> in Noida Sector 129, the <strong>LG Electronics India</strong> office, a <strong>Hyundai</strong> vendor firm along the Yamuna Expressway, or a Korean EPC company managing an infrastructure project in Delhi NCR — finding the right home that matches Korean standards of cleanliness, safety, and modern living is non-negotiable.
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        At <a href="/" style={{ color: '#1A3C34', fontWeight: '700' }}>Sandane Homes</a>, we have built our <strong>Korean expat housing in Delhi NCR</strong> specifically around what Korean professionals and their families genuinely need. Our <strong>serviced apartments in Greater Noida</strong> are located inside gated premium societies — <strong>Jaypee Greens, Ansal Golf Links, and Godrej Golf Link</strong> — known for their green surroundings, quiet residential atmosphere, and high-security infrastructure. These are not generic rentals. They are fully managed homes where you arrive, unpack, and everything works.
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        We understand that Korean expats have specific expectations that most Indian landlords and serviced apartment operators simply do not appreciate. The housekeeping must be meticulous and thorough — not a surface wipe. The kitchen must have a gas hob, a proper refrigerator, and all utensils you need to cook <em>doenjang jjigae</em> or <em>japchae</em> on a Tuesday evening. The WiFi must be robust enough for a video call with your family in Seoul without buffering. Our properties meet every one of these standards.
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        <strong>Proximity to the Korean community</strong> is also a real advantage of our location. Greater Noida and the Noida corridor host a growing Korean expat population, and there are Korean marts and Asian grocery stores in the area stocking Korean staples — ramyeon, gochujang, doenjang, kimchi, and packaged foods from home. Several Korean and Asian restaurants have opened nearby, so you are never far from a bowl of <em>sundubu jjigae</em> or authentic Korean BBQ.
                    </p>
                    <p style={{ marginBottom: '0' }}>
                        Our corporate housing team works directly with <strong>HR departments at Korean multinational companies</strong> and their Indian subsidiaries. We offer direct company invoicing, expedited setup, FRRO registration guidance, and airport pickup on arrival. From the moment your assignment begins to the day you hand back your keys, every aspect of your housing is handled. This is what <strong>Korean expat accommodation in Greater Noida</strong> should look and feel like.
                    </p>
                </div>
            </div>

            {/* ── SECTION 2 — HIGHLIGHTS GRID ── */}
            <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <p className="section-subtitle">Why Korean Expats Choose Us</p>
                    <h2 className="section-title" style={{ color: '#1A3C34' }}>Everything You Need, Ready on Day One</h2>
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

            {/* ── SECTION 3 — KOREAN LANGUAGE SECTION ── */}
            <div style={{
                backgroundColor: '#1A3C34',
                padding: '90px 20px', color: 'white'
            }}>
                <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{
                        fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase',
                        color: '#C5A572', fontWeight: '700', marginBottom: '16px'
                    }}>
                        한국어 안내
                    </p>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', marginBottom: '40px', lineHeight: '1.25' }}>
                        한국인 주재원을 위한 프리미엄 서비스 아파트
                    </h2>
                    <p style={{ fontSize: '17px', lineHeight: '2', color: '#E0E0E0', marginBottom: '24px' }}>
                        삼성 R&D 노이다, LG 전자 인도, 현대 협력사, 또는 델리 NCR 지역의 한국계 기업에서 근무하시는 주재원 여러분을 위해 Sandane Homes는 그레이터 노이다에 최고급 서비스 아파트를 제공합니다. 자이피 그린스(Jaypee Greens), 안살 골프 링크스(Ansal Golf Links) 등 프리미엄 게이티드 소사이어티 내에 위치한 저희 아파트는 한국의 주거 기준에 맞춘 청결함, 안전, 그리고 현대적인 편의시설을 갖추고 있습니다.
                    </p>
                    <p style={{ fontSize: '17px', lineHeight: '2', color: '#E0E0E0', marginBottom: '24px' }}>
                        모든 아파트는 완전 가구 완비, 일일 하우스키핑, 고속 WiFi(최대 300Mbps), 전기·수도 포함, 그리고 한국 음식을 조리할 수 있는 완전한 주방으로 구성되어 있습니다. 삼성 R&D 캠퍼스까지는 자동차로 약 25~35분 거리이며, 노이다-그레이터 노이다 고속도로를 통해 편리하게 통근하실 수 있습니다. 인근에는 한국 식료품점과 아시안 레스토랑도 있어 고국의 맛을 느끼실 수 있습니다.
                    </p>
                    <p style={{ fontSize: '17px', lineHeight: '2', color: '#E0E0E0', marginBottom: '40px' }}>
                        저희 팀은 FRRO 등록 지원, 공항 픽업, 법인 직접 청구(HR 팀 대상), 그리고 입주 전 아파트 완비 서비스를 제공합니다. 인도 도착 전 WhatsApp으로 문의하시면 한국어 담당자가 상세히 안내해 드리겠습니다. 짐만 들고 오세요 — 나머지는 저희가 다 준비해 드립니다.
                    </p>
                    <a
                        href={`https://wa.me/${PHONE}?text=안녕하세요%2C%20그레이터%20노이다%20주재원%20숙소%20문의드립니다`}
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
                        <FaWhatsapp size={22} /> 한국어로 문의하기 (WhatsApp)
                    </a>
                </div>
            </div>


            {/* ── SECTION 5 — FAQ ── */}
            <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                    <p className="section-subtitle" style={{ textAlign: 'center' }}>자주 묻는 질문 / FAQ</p>
                    <h2 className="section-title" style={{ color: '#1A3C34', textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <div style={{ borderTop: '1px solid #e0e0e0' }}>
                        {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
                    </div>
                </div>
            </div>

            {/* ── SECTION 6 — FINAL CTA ── */}
            <div style={{
                backgroundColor: '#1A3C34',
                padding: '100px 20px', textAlign: 'center', color: 'white'
            }}>
                <h2 style={{ fontSize: '42px', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>
                    Ready to make Greater Noida home?
                </h2>
                <p style={{ fontSize: '19px', color: '#C5A572', marginBottom: '12px' }}>
                    그레이터 노이다에서 편안한 한국인의 집을 찾으셨나요?
                </p>
                <p style={{ fontSize: '17px', color: '#E0E0E0', marginBottom: '44px', maxWidth: '560px', margin: '0 auto 44px' }}>
                    Message us on WhatsApp — our team responds within minutes, in English or Korean.
                </p>
                <a
                    href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20am%20a%20Korean%20expat%20interested%20in%20housing%20near%20Samsung%20R%26D%20Greater%20Noida`}
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

export default KoreanExpatHousing;
