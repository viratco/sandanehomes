import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link
                        to="/residences"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            backgroundColor: '#C5A572', color: '#1A3C34',
                            padding: '16px 36px', borderRadius: '30px',
                            textDecoration: 'none', fontSize: '17px', fontWeight: 'bold',
                            boxShadow: '0 4px 20px rgba(197,165,114,0.4)',
                            transition: 'all 0.3s'
                        }}
                        onMouseOver={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#1A3C34'; }}
                        onMouseOut={e => { e.currentTarget.style.backgroundColor = '#C5A572'; e.currentTarget.style.color = '#1A3C34'; }}
                    >
                        Explore Luxury Residences <FaArrowRight />
                    </Link>
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
                </div>
            </div>

            {/* ── SECTION 1 — MAIN COPY ── */}
            <div style={{ backgroundColor: '#f9f9f9', padding: '90px 20px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', color: '#444', fontSize: '18px', lineHeight: '1.95' }}>
                    <p style={{ marginBottom: '28px' }}>
                        Relocating to Delhi NCR as a South Korean expatriate comes with unique priorities — securing housing in a safe, gated community, staying within a manageable commute of major corporate hubs like Samsung R&amp;D (Sector 129 Noida) and LG Electronics, and having access to familiar Korean amenities.
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        At <a href="/" style={{ color: '#1A3C34', fontWeight: '700' }}>Sandane Homes</a>, we offer premium <strong>Korean expat housing in Greater Noida</strong> designed specifically to meet these expectations. Located within secure, gated societies like <strong>Jaypee Greens</strong>, <strong>Ansal Golf Links</strong>, and <strong>Godrej Golf Link</strong>, our serviced apartments provide peace of mind, high security, and exceptional comfort for Korean families and individual corporate assignees.
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        Every apartment features a fully equipped kitchen (ideal for preparing Korean food at home), high-speed Wi-Fi, daily housekeeping by trained staff, 100% power backup, and dedicated support for mandatory FRRO address registration — allowing your relocation to be completely hassle-free from day one.
                    </p>
                    <p style={{ marginBottom: '28px' }}>
                        We partner directly with Korean multinationals (Samsung, LG, Hyundai vendors, EPC companies) and their HR departments to provide direct corporate invoicing and flexible short- or long-term lease terms.
                    </p>

                    {/* MID-PAGE BANNER BUTTON */}
                    <div style={{
                        marginTop: '40px', backgroundColor: '#1A3C34', borderRadius: '16px',
                        padding: '36px 30px', textAlign: 'center', color: '#fff',
                        boxShadow: '0 10px 30px rgba(26,60,52,0.15)'
                    }}>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#C5A572', margin: '0 0 12px' }}>
                            View Our Korean Expat Residences
                        </h3>
                        <p style={{ fontSize: '15px', color: '#E0E0E0', margin: '0 0 24px' }}>
                            Browse photos, floor plans, and amenities of our Korean-friendly serviced suites in Greater Noida.
                        </p>
                        <Link
                            to="/residences"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                backgroundColor: '#C5A572', color: '#1A3C34',
                                padding: '14px 32px', borderRadius: '30px',
                                textDecoration: 'none', fontSize: '16px', fontWeight: 'bold',
                                transition: 'all 0.3s'
                            }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#1A3C34'; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#C5A572'; e.currentTarget.style.color = '#1A3C34'; }}
                        >
                            Explore Available Residences <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── SECTION 2 — HIGHLIGHTS GRID ── */}
            <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <p className="section-subtitle">Tailored Expat Lifestyle</p>
                    <h2 className="section-title" style={{ color: '#1A3C34' }}>Why Korean Professionals Choose Sandane Homes</h2>
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
                        삼성 R&amp;D 센터, LG전자, 현대 협력사 등 인도 노이다 및 그레이터 노이다 지역에 근무하시는 한국인 주재원 및 가족 여러분을 환영합니다. Sandane Homes는 최고 수준의 보안과 청결, 편의시설을 갖춘 고급 레지던스를 제공합니다.
                    </p>
                    <p style={{ fontSize: '17px', lineHeight: '2', color: '#E0E0E0', marginBottom: '24px' }}>
                        Jaypee Greens, Ansal Golf Links 등 최고의 게이티드 단지 내 위치하여 24시간 철저한 경비와 CCTV 시스템으로 안전하며, 한식 조리가 가능한 풀옵션 주방, 고속 인터넷, 100% 비상 발전 시스템, 일일 하우스키핑 서비스를 제공합니다.
                    </p>
                    <p style={{ fontSize: '17px', lineHeight: '2', color: '#E0E0E0', marginBottom: '40px' }}>
                        또한 법인 계약 및 직구 청구, 거주지 증명 및 FRRO 등록 서류 지원 등 인사 담당자 및 주재원분들의 편의를 위한 모든 행정 절차를 완벽하게 지원해 드립니다. 자세한 문의는 카카오톡/WhatsApp으로 언제든지 연락 주시기 바랍니다.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link
                            to="/residences"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                backgroundColor: '#C5A572', color: '#1A3C34',
                                padding: '16px 36px', borderRadius: '30px',
                                textDecoration: 'none', fontSize: '17px', fontWeight: 'bold',
                                transition: 'transform 0.3s'
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            레지던스 목록 보기 / View Residences &rarr;
                        </Link>
                        <a
                            href={`https://wa.me/${PHONE}?text=안녕하세요.%20그레이터%20노이다%20한국인%20레지던스%20문의드립니다.`}
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
                            <FaWhatsapp size={22} /> 카카오 / WhatsApp 문의
                        </a>
                    </div>
                </div>
            </div>


            {/* ── SECTION 5 — FAQ ── */}
            <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                    <p className="section-subtitle" style={{ textAlign: 'center' }}>자주 묻는 질문</p>
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
                    Your Home Base in Greater Noida.
                </h2>
                <p style={{ fontSize: '19px', color: '#C5A572', marginBottom: '12px' }}>
                    안전하고 편안한 인도 주재원 생활, Sandane Homes가 함께합니다.
                </p>
                <p style={{ fontSize: '17px', color: '#E0E0E0', marginBottom: '44px', maxWidth: '560px', margin: '0 auto 44px' }}>
                    Message us on WhatsApp — our team responds within minutes, in English or Korean.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link
                        to="/residences"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '12px',
                            backgroundColor: '#C5A572', color: '#1A3C34',
                            padding: '18px 44px', borderRadius: '40px',
                            textDecoration: 'none', fontSize: '19px', fontWeight: 'bold',
                            boxShadow: '0 4px 20px rgba(197,165,114,0.4)',
                            transition: 'transform 0.3s'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Browse All Residences <FaArrowRight />
                    </Link>
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
            </div>

            <Footer />
        </div>
    );
};

export default KoreanExpatHousing;
