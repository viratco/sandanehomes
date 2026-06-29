import React, { useState } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import heroBg from '../../assets/e8cd7b2a-95fc-418d-9ca2-357008d2aa61.JPG'; // Using existing hero image
import './SandaneHomes.css';
import { FaCouch, FaBroom, FaBolt, FaCalendarAlt, FaMapMarkerAlt, FaFileInvoiceDollar, FaWhatsapp, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
    {
        question: "What is included in a Residencies by Sandane Homes serviced apartment?",
        answer: "Our luxury serviced apartments are fully furnished and equipped with premium furniture, high-quality bed and bath linens, and a fully functional kitchen with all necessary utensils. The monthly rent includes all utilities such as high-speed Wi-Fi (up to 300 Mbps), electricity with 100% power backup, and water. You also receive daily professional housekeeping services and maintenance support, ensuring a completely hassle-free living experience."
    },
    {
        question: "How long can I stay at a serviced apartment in Greater Noida?",
        answer: "We offer highly flexible stay durations tailored to meet the varying needs of corporate professionals and expats. You can choose to stay with us on a weekly, monthly, or long-term basis, depending on your project timeline or relocation plans. Our long-term leases are particularly popular among international assignees looking for stable, comfortable housing without the rigid constraints of traditional rental agreements."
    },
    {
        question: "Are these apartments suitable for Korean and Japanese expats?",
        answer: "Yes, absolutely. We have extensive experience hosting Korean and Japanese expats and deeply understand their specific preferences for cleanliness, safety, and modern amenities. Our properties feature high-end appliances, rigorous daily housekeeping standards, and secure environments located in premium societies. We strive to provide a living standard that meets and exceeds international expectations, making you feel right at home."
    },
    {
        question: "Where exactly are the serviced apartments located in Greater Noida?",
        answer: "Our premium serviced apartments are strategically located in the most sought-after and secure neighborhoods in Greater Noida. You can find our properties in high-end societies such as Jaypee Greens, Ansal Golf Links, Godrej Golf Link, and DLF. These prime locations offer excellent connectivity to the Yamuna Expressway, major multinational corporate offices, and the India Expo Mart."
    },
    {
        question: "How do I book a luxury serviced apartment in Greater Noida?",
        answer: "Booking a serviced apartment with us is a straightforward and seamless process. You can easily initiate a booking inquiry by clicking the 'WhatsApp Us' button on our website to speak directly with our reservation team. Alternatively, you can email or call us with your requirements, and our team will guide you through the available options, arrange property viewings, and handle all the paperwork."
    },
    {
        question: "Do you offer corporate billing for HR teams?",
        answer: "Yes, we provide comprehensive corporate billing solutions designed to simplify the relocation process for HR departments. We offer direct invoicing to your company, clear itemized billing, and dedicated account management for corporate bookings. This ensures a smooth and efficient housing setup for your employees without them having to worry about managing complex rental payments."
    },
    {
        question: "What is the difference between a serviced apartment and a hotel in Greater Noida?",
        answer: "While both offer premium amenities and daily housekeeping, a serviced apartment provides significantly more space, privacy, and the feeling of a real home. Serviced apartments include a fully equipped private kitchen and separate living areas, making them much more comfortable for long-term stays. They offer the luxury and convenience of a hotel, but with the practical functionality and relaxed environment of a private residential apartment."
    },
    {
        question: "Are utilities and WiFi included in the rent?",
        answer: "Yes, all essential utilities are completely included in your rental package to ensure a zero-setup experience. This includes unlimited high-speed Wi-Fi, electricity usage, hot and cold water supply, and comprehensive property maintenance. We also provide 100% power backup, so you never have to worry about power outages or setting up separate utility accounts."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{
            borderBottom: '1px solid #e0e0e0',
            padding: '20px 0',
            cursor: 'pointer'
        }} onClick={() => setIsOpen(!isOpen)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '18px', color: '#1A3C34', margin: 0, fontWeight: '600', paddingRight: '20px' }}>{question}</h3>
                <div style={{ color: '#1A3C34' }}>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>
            {isOpen && (
                <div style={{ marginTop: '15px', color: '#555', fontSize: '16px', lineHeight: '1.8' }}>
                    {answer}
                </div>
            )}
        </div>
    );
};

const ServicedApartmentsGreaterNoida = () => {
    const PHONE = "919711722273"; // Using the phone number from other pages
    
    const apartmentComplexSchema = {
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        "name": "Residencies by Sandane Homes — Greater Noida",
        "description": "Fully furnished luxury serviced apartments in Greater Noida for expats and corporate professionals.",
        "url": "https://www.sandanehomes.com/serviced-apartments-greater-noida",
        "telephone": "+919711722273",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Greater Noida",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
        },
        "amenityFeature": [
            {"@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "WiFi", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "Fully Furnished", "value": true},
            {"@type": "LocationFeatureSpecification", "name": "Kitchen", "value": true}
        ]
    };

    // FAQ Schema Generation
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    // Breadcrumb Schema Generation
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.sandanehomes.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Residencies",
                "item": "https://www.sandanehomes.com/residences"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Serviced Apartments Greater Noida",
                "item": "https://www.sandanehomes.com/serviced-apartments-greater-noida"
            }
        ]
    };

    const seoProps = {
        title: "Luxury Serviced Apartments Greater Noida | Sandane Homes",
        description: "Fully furnished luxury serviced apartments in Greater Noida for expats & professionals. Daily housekeeping and utilities included. Just arrive.",
        canonical: "https://www.sandanehomes.com/serviced-apartments-greater-noida",
        ogImage: "https://www.sandanehomes.com/residences-og.jpg",
        schema: [apartmentComplexSchema, faqSchema, breadcrumbSchema]
    };

    const inclusions = [
        { icon: <FaCouch size={30} color="#1A3C34" />, title: "Fully furnished", desc: "Premium furniture, linens, kitchen essentials" },
        { icon: <FaBroom size={30} color="#1A3C34" />, title: "Daily housekeeping", desc: "Professional cleaning every day" },
        { icon: <FaBolt size={30} color="#1A3C34" />, title: "All utilities included", desc: "WiFi, electricity, water, maintenance" },
        { icon: <FaCalendarAlt size={30} color="#1A3C34" />, title: "Flexible stay duration", desc: "Weekly, monthly, or long-term" },
        { icon: <FaMapMarkerAlt size={30} color="#1A3C34" />, title: "Prime locations", desc: "DLF, Jaypee Greens, Godrej Golf Link, Ansal Golf Links" },
        { icon: <FaFileInvoiceDollar size={30} color="#1A3C34" />, title: "Corporate billing", desc: "Direct invoicing for HR teams" }
    ];

    return (
        <div className="catarina-services sandane-homes-page">
            <SEO {...seoProps} />
            
            <Header showTopBar={false} />

            {/* Section 1 - Hero */}
            <div className="catarina-hero" style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '120px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: -1
                }}></div>
                <h1 className="catarina-title" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '48px', lineHeight: '1.2' }}>
                    Luxury Serviced Apartments in Greater Noida
                </h1>
                <p className="catarina-subtitle" style={{ fontSize: '24px', maxWidth: '800px', margin: '20px auto 40px auto', letterSpacing: '1px', textTransform: 'none' }}>
                    Fully furnished. Daily housekeeping. Everything handled. Just arrive.
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer" style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        backgroundColor: '#25D366', color: 'white',
                        padding: '15px 30px', borderRadius: '30px',
                        textDecoration: 'none', fontSize: '18px', fontWeight: 'bold',
                        transition: 'transform 0.3s'
                    }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        <FaWhatsapp size={24} /> WhatsApp Us
                    </a>
                    <a href="/residences" style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        backgroundColor: 'transparent', color: 'white',
                        border: '2px solid white',
                        padding: '15px 30px', borderRadius: '30px',
                        textDecoration: 'none', fontSize: '18px', fontWeight: 'bold',
                        transition: 'background-color 0.3s, color 0.3s'
                    }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#111'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; }}>
                        View Properties <FaArrowRight />
                    </a>
                </div>
            </div>

            {/* Section 2 - Introduction paragraph */}
            <div className="catarina-section" style={{ backgroundColor: '#f9f9f9', padding: '80px 20px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: '#444', fontSize: '18px', lineHeight: '1.9' }}>
                    <p>
                        Finding the right long-term accommodation when relocating to a new country can be challenging. At <a href="/" style={{ color: '#1A3C34', fontWeight: 'bold' }}>Sandane Homes</a>, our premium <strong>serviced apartments Greater Noida</strong> are designed specifically to solve this problem for expats, corporate professionals, and international assignees. We provide a seamless living experience where everything is taken care of from the moment you step through the door. 
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        Unlike standard rentals that require you to buy furniture, set up Wi-Fi, and manage utility bills, our <strong>furnished apartments Greater Noida</strong> come completely equipped. You get premium furniture, a fully stocked kitchen, and all essential electronics. Our key selling point is a zero-setup philosophy—your home is ready from day one. Whether you are looking for short-term project accommodation or long-term <strong>corporate housing Greater Noida</strong>, <a href="/residences" style={{ color: '#1A3C34', fontWeight: 'bold' }}>Residencies by Sandane Homes</a> offers the perfect blend of hotel-like luxury and residential privacy. Discover the ultimate <strong>expat accommodation Greater Noida</strong> where you can simply arrive, unpack, and instantly feel at home.
                    </p>
                </div>
            </div>

            {/* Section 3 - What's included */}
            <div className="catarina-section" style={{ padding: '80px 20px' }}>
                <h2 className="section-title" style={{ color: '#1A3C34', marginBottom: '60px' }}>What's Included</h2>
                <div style={{
                    maxWidth: '1200px', margin: '0 auto',
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'
                }}>
                    {inclusions.map((item, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white', padding: '40px 30px',
                            borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            textAlign: 'center', transition: 'transform 0.3s'
                        }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ marginBottom: '20px' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '20px', color: '#111', marginBottom: '15px' }}>{item.title}</h3>
                            <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 4 - Who is this for */}
            <div className="catarina-section" style={{ backgroundColor: '#1A3C34', color: 'white', padding: '80px 20px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '36px', marginBottom: '40px', fontFamily: 'Playfair Display, serif' }}>Who Is This For?</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.9', opacity: 0.9 }}>
                        Our luxury serviced apartments in Greater Noida are meticulously tailored for international professionals and corporate teams relocating to the region. We specialize in providing premium housing solutions for Korean expats and Japanese expats, ensuring that cultural preferences for cleanliness, security, and modern amenities are exceeded. Additionally, our properties are a preferred choice for British and American professionals seeking high-end, hassle-free living standards.
                    </p>
                    <p style={{ fontSize: '18px', lineHeight: '1.9', opacity: 0.9, marginTop: '20px' }}>
                        Strategically located, our apartments offer incredibly convenient commutes to major multinational corporations and industrial hubs. If you work at Honda India, Yamaha Motor India, or the surrounding Yamuna Expressway corridor companies, you will find our locations ideal for minimizing daily travel time. We also cater extensively to corporate HR teams looking to house their top-tier talent in secure, luxurious, and fully managed environments.
                    </p>
                </div>
            </div>

            {/* Section 5 - Location context */}
            <div className="catarina-section" style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: '#444' }}>
                    <h2 className="section-title" style={{ color: '#1A3C34', marginBottom: '30px' }}>Location Context</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.9' }}>
                        Location is everything when choosing your new home. Our properties are situated in the most prestigious and secure neighborhoods of Greater Noida, including the lush surroundings of Jaypee Greens and the premium residential enclaves of Ansal Golf Links. These areas offer tranquil, green environments while keeping you highly connected to the city's commercial centers. With easy access to the Yamuna Expressway, commuting to major MNC offices, tech parks, and industrial zones is fast and stress-free. If you are attending or organizing events, our <strong>serviced apartments near India Expo Mart</strong> provide unparalleled convenience, placing you just minutes away from the venue.
                    </p>
                </div>
            </div>

            {/* Section 6 - FAQ section */}
            <div className="catarina-section" style={{ padding: '80px 20px' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ color: '#1A3C34', marginBottom: '50px' }}>Frequently Asked Questions</h2>
                    <div style={{ borderTop: '1px solid #e0e0e0' }}>
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 7 - Final CTA banner */}
            <div className="catarina-section" style={{
                background: 'linear-gradient(135deg, #1A3C34 0%, #0d1e1a 100%)',
                padding: '100px 20px',
                textAlign: 'center',
                color: 'white'
            }}>
                <h2 style={{ fontSize: '42px', marginBottom: '20px', fontFamily: 'Playfair Display, serif' }}>Ready to make Greater Noida home?</h2>
                <p style={{ fontSize: '20px', opacity: 0.9, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
                    Talk to us today. Your apartment will be ready before you land.
                </p>
                <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    backgroundColor: '#25D366', color: 'white',
                    padding: '18px 40px', borderRadius: '40px',
                    textDecoration: 'none', fontSize: '20px', fontWeight: 'bold',
                    transition: 'transform 0.3s'
                }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <FaWhatsapp size={28} /> WhatsApp Us Now
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default ServicedApartmentsGreaterNoida;
