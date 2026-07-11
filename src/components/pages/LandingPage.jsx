import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import { getLandingPage } from '../../data/landingPages';
import { FaWhatsapp, FaArrowRight, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import './SandaneHomes.css'; // Leverage existing premium styles

const LandingPage = ({ slug: propSlug }) => {
    // Can support either prop injection or URL params
    const { slug: paramSlug } = useParams();
    const slug = propSlug || paramSlug;
    const page = getLandingPage(slug);

    if (!page) {
        return (
            <div className="not-found-page" style={{ padding: '100px 20px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
                <Header showTopBar={false} />
                <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#1A3C34', fontSize: '36px', marginTop: '50px' }}>Page Not Found</h1>
                <p style={{ color: '#555', margin: '20px 0 30px' }}>The requested landing page could not be located.</p>
                <Link to="/" style={{ display: 'inline-block', backgroundColor: '#1A3C34', color: 'white', padding: '12px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Back to Home</Link>
                <Footer />
            </div>
        );
    }

    const PHONE = "919711722273";

    // Setup SEO schemas dynamically based on content
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        "name": page.h1,
        "description": page.metaDescription,
        "url": page.canonical,
        "telephone": `+${PHONE}`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Greater Noida",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
        }
    };

    const faqSchema = page.faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": page.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    const schemas = faqSchema ? [organizationSchema, faqSchema] : [organizationSchema];

    return (
        <div className="sandane-homes-page">
            <SEO
                title={page.metaTitle}
                description={page.metaDescription}
                canonical={page.canonical}
                ogImage="https://www.sandanehomes.com/residences-og.jpg"
                schema={schemas}
            />
            <Header showTopBar={false} />

            {/* Split Hero Section */}
            <div className="sandane-hero-split" style={{ backgroundColor: '#FAF8F5' }}>
                <div className="sandane-hero-text" style={{ padding: '80px 10%' }}>
                    <span style={{ color: '#C5A572', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>
                        Premium Serviced Residences
                    </span>
                    <h1 className="sandane-hero-title" style={{ fontSize: '38px', color: '#1A3C34', fontFamily: 'Playfair Display, serif', lineHeight: '1.25', marginBottom: '20px' }}>
                        {page.h1}
                    </h1>
                    <p style={{ fontSize: '18px', color: '#8B7355', fontStyle: 'italic', marginBottom: '30px', fontFamily: 'Playfair Display, serif' }}>
                        {page.subtitle}
                    </p>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a
                            href={`https://wa.me/${PHONE}?text=Hello%20Sandane%20Homes%2C%20I%20am%20interested%20in%20serviced%20apartments%20at%20${page.slug}`}
                            target="_blank" rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#1A3C34', color: 'white', padding: '14px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}
                        >
                            <FaWhatsapp size={20} /> WhatsApp Inquiry
                        </a>
                        <a
                            href={`mailto:residencesbysandanehomes@gmail.com?subject=Inquiry%20for%20${page.h1}`}
                            className="btn-secondary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'transparent', color: '#1A3C34', border: '2px solid #1A3C34', padding: '12px 26px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}
                        >
                            <FaEnvelope size={16} /> Email Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <div style={{ padding: '80px 10%', backgroundColor: '#ffffff', borderTop: '1px solid #eee' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <p style={{ fontSize: '17px', lineHeight: '1.85', color: '#444', fontFamily: 'Montserrat, sans-serif' }}>
                        {page.intro}
                    </p>
                </div>
            </div>

            {/* Why Choose Section */}
            {page.whyChooseItems && (
                <div style={{ padding: '80px 10%', backgroundColor: '#FAF8F5', borderTop: '1px solid #eee' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '30px', color: '#1A3C34', fontFamily: 'Playfair Display, serif', marginBottom: '50px', textAlign: 'center' }}>
                            {page.whyChooseTitle}
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            {page.whyChooseItems.map((item, i) => (
                                <div key={i} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                                    <h3 style={{ fontSize: '19px', color: '#1A3C34', fontFamily: 'Playfair Display, serif', marginBottom: '15px', fontWeight: '600' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', fontFamily: 'Montserrat, sans-serif' }}>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Commute Times Table */}
            {page.commuteTable && (
                <div style={{ padding: '80px 10%', backgroundColor: '#ffffff', borderTop: '1px solid #eee' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '30px', color: '#1A3C34', fontFamily: 'Playfair Display, serif', marginBottom: '40px', textAlign: 'center' }}>
                            Commute Details & Travel Times
                        </h2>
                        <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #eee' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'Montserrat, sans-serif' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#1A3C34', color: 'white' }}>
                                        <th style={{ padding: '16px 20px', fontWeight: '600', fontSize: '15px' }}>Destination</th>
                                        <th style={{ padding: '16px 20px', fontWeight: '600', fontSize: '15px' }}>Drive Time / Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {page.commuteTable.map((row, i) => (
                                        <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#FAF8F5' : '#ffffff', borderBottom: '1px solid #eee' }}>
                                            <td style={{ padding: '16px 20px', fontSize: '15px', color: '#333', fontWeight: '500' }}>{row.destination}</td>
                                            <td style={{ padding: '16px 20px', fontSize: '15px', color: '#555' }}>{row.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Inclusions / What's Included */}
            <div style={{ padding: '80px 10%', backgroundColor: '#FAF8F5', borderTop: '1px solid #eee' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '30px', color: '#1A3C34', fontFamily: 'Playfair Display, serif', marginBottom: '40px', textAlign: 'center' }}>
                        What's Included
                    </h2>
                    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', listStyle: 'none', padding: 0 }}>
                        {page.inclusions.map((inc, i) => (
                            <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '15px', color: '#444', lineHeight: '1.5', fontFamily: 'Montserrat, sans-serif' }}>
                                <span style={{ color: '#C5A572', fontWeight: 'bold' }}>✓</span>
                                <span>{inc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* FAQs Accordion */}
            {page.faqs && (
                <div style={{ padding: '80px 10%', backgroundColor: '#ffffff', borderTop: '1px solid #eee' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '30px', color: '#1A3C34', fontFamily: 'Playfair Display, serif', marginBottom: '40px', textAlign: 'center' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {page.faqs.map((faq, i) => {
                                const [isOpen, setIsOpen] = React.useState(false);
                                return (
                                    <div key={i} style={{ borderBottom: '1px solid #e0e0e0', padding: '22px 0', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <h3 style={{ fontSize: '17px', color: '#1A3C34', margin: 0, fontWeight: '600', paddingRight: '20px', fontFamily: 'Playfair Display, serif', lineHeight: 1.4 }}>
                                                {faq.question}
                                            </h3>
                                            <span style={{ color: '#1A3C34', fontSize: '18px' }}>{isOpen ? '−' : '+'}</span>
                                        </div>
                                        {isOpen && (
                                            <div style={{ marginTop: '14px', color: '#555', fontSize: '15px', lineHeight: '1.8', fontFamily: 'Montserrat, sans-serif' }}>
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Call-To-Action (Footer Link) */}
            <div style={{ padding: '80px 10%', backgroundColor: '#1A3C34', color: 'white', textAlign: 'center' }}>
                <h2 style={{ fontSize: '32px', fontFamily: 'Playfair Display, serif', marginBottom: '20px' }}>Book Your Serviced Residence</h2>
                <p style={{ fontSize: '17px', maxWidth: '600px', margin: '0 auto 35px', fontFamily: 'Montserrat, sans-serif', color: '#ddd' }}>
                    Speak directly with our reservation managers via WhatsApp or Email to check current availability and coordinate corporate leasing.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href={`https://wa.me/${PHONE}?text=Hello%20Sandane%20Homes%2C%20I%20am%20interested%20in%20booking%20at%20${page.slug}`}
                        target="_blank" rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#25D366', color: 'white', padding: '16px 36px', borderRadius: '35px', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', transition: 'transform 0.2s' }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <FaWhatsapp size={22} /> WhatsApp Booking Support
                    </a>
                </div>
            </div>

            {/* Related Pages Links */}
            {page.related && (
                <div style={{ padding: '40px 10%', backgroundColor: '#FAF8F5', borderTop: '1px solid #eee', textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap', fontFamily: 'Montserrat, sans-serif', fontSize: '14px' }}>
                        <span style={{ color: '#8B7355', fontWeight: 'bold' }}>Related Guides:</span>
                        {page.related.map((rel, i) => (
                            <Link key={i} to={rel.link} style={{ color: '#1A3C34', textDecoration: 'underline', fontWeight: '500' }}>
                                {rel.text}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default LandingPage;
