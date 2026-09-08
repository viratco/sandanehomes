import React, { useState } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import {
  FaBuilding, FaHandshake, FaChartLine, FaShieldAlt, FaKey,
  FaCheckCircle, FaPercentage, FaTools, FaWhatsapp, FaArrowRight,
  FaFileContract, FaRegSmile, FaCrown, FaStar, FaQuoteLeft,
  FaHome, FaBriefcase, FaUserCheck, FaCog, FaMoneyBillWave, FaHeadset,
  FaChevronDown, FaChevronUp, FaMapMarkerAlt
} from 'react-icons/fa';
import './SandaneHomes.css';

import heroImg from '../../assets/residences_living_editorial.png';
import livingImg from '../../assets/livingroom.jpeg';
import interiorImg from '../../assets/abstract_luxury_interior.png';

const GurugramHomeOwnersPartner = () => {
  const [bhk, setBhk] = useState('3BHK');
  const [society, setSociety] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Golf Course Road');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sandane Homes Partner Desk! I am a Gurugram Apartment Owner interested in partnering.\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*BHK Config:* ${bhk}\n` +
      `*Locality:* ${locality}\n` +
      `*Society Name:* ${society}\n` +
      `*Notes:* ${message}`;

    window.open(`https://wa.me/919711722273?text=${encodeURIComponent(text)}`, '_blank');
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "Why should Gurugram apartment owners choose managed leasing over traditional renting?",
      a: "Traditional renting in Gurugram carries 1-2 months of annual vacancy losses, late payments, tenant damage, and constant repair calls. Sandane Homes pays guaranteed rent on the 1st of every month, handles 100% of maintenance and housekeeping, and leases exclusively to MNC expat executives."
    },
    {
      q: "Which Gurugram societies and sectors do you acquire apartments in?",
      a: "We actively acquire 2BHK, 3BHK, 4BHK apartments and luxury penthouses along Golf Course Road, DLF Phase 1-5, Cyber City corridor, Golf Course Extension, Sohna Road, MG Road, and Sushant Lok."
    },
    {
      q: "Who pays for maintenance and daily cleaning?",
      a: "Sandane Homes covers 100% of daily housekeeping, linen services, plumbing, electrical, and appliance upkeep at zero additional cost to the home owner."
    },
    {
      q: "What profile of corporate tenants will live in my Gurugram flat?",
      a: "Your flat is occupied exclusively by corporate professionals, Japanese & Korean expatriates, and MNC executives working at Cyber City, One Horizon Center, and surrounding multinational hubs."
    }
  ];

  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Gurugram Home Owner Property Management & Monetization — Sandane Homes",
      "provider": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" },
      "description": "Monetize your Gurugram apartment or flat with Sandane Homes. Guaranteed fixed monthly rent, 100% free maintenance, and verified corporate MNC expat tenants.",
      "areaServed": "Gurugram, Haryana, India"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  return (
    <div className="catarina-services sandane-homes-page" style={{ backgroundColor: '#F4F0EB', minHeight: '100vh', overflowX: 'hidden' }}>
      <SEO
        title="Gurugram Home Owners Partnership | Monetize Your Apartment — Sandane Homes"
        description="Gurugram apartment & flat owners: earn guaranteed monthly rent or high profit-sharing with zero hassle. Sandane Homes manages your flat as a premium corporate expat residence."
        canonical="https://www.sandanehomes.com/partner/gurugram-home-owners"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={pageSchema}
      />

      <Header showTopBar={false} />

      {/* Hero Section */}
      <div className="editorial-container" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="editorial-title-bg">
          <h1>Gurugram</h1>
          <h1>HomeOwners</h1>
        </div>

        <div className="editorial-left-col">
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
            <img src={livingImg} alt="Gurugram Luxury Apartment" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'rgba(28, 45, 66, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '8px 18px',
              borderRadius: '20px',
              color: '#C5A572',
              fontSize: '12px',
              fontWeight: '700',
              border: '1px solid rgba(197,165,114,0.3)'
            }}>
              <FaHome /> GURUGRAM HOME OWNER PROGRAM
            </div>
          </div>

          <div className="editorial-left-text" style={{ marginTop: '-60px', position: 'relative', zIndex: 3 }}>
            <div className="editorial-glass-card" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid #E5DFD5' }}>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#4A463F', fontFamily: 'Georgia, serif', margin: 0 }}>
                Transform your vacant or underperforming Gurugram flat into a <i>high-yield corporate residence</i> for Japanese, Korean &amp; MNC executives.
              </p>
            </div>
          </div>
        </div>

        <div className="editorial-right-col" style={{ paddingLeft: '20px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(139, 115, 85, 0.1)',
            border: '1px solid #8B7355',
            color: '#8B7355',
            padding: '6px 18px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '20px'
          }}>
            <FaMapMarkerAlt /> GURUGRAM APARTMENTS &amp; FLATS
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 4.5vw, 50px)',
            lineHeight: '1.15',
            color: '#111111',
            marginBottom: '24px',
            fontWeight: '600'
          }}>
            Earn Guaranteed Monthly Rent From Your Gurugram Apartment
          </h1>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#555555',
            marginBottom: '32px',
            fontFamily: 'Georgia, serif'
          }}>
            No more late payments, tenant damage, or vacancy gaps. <strong>Residences by Sandane Homes</strong> master-leases your 2BHK, 3BHK, or 4BHK apartment in Golf Course Road, Cyber City, or DLF phases, paying you predictable monthly income with 100% free housekeeping and maintenance.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> Guaranteed Rent on the 1st
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> Japanese &amp; MNC Expat Guests
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> 100% Free Housekeeping &amp; Care
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> Zero Vacancy &amp; Default Risk
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#valuation-form"
              style={{
                backgroundColor: '#1C2D42',
                color: '#FFFFFF',
                padding: '16px 36px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '1px',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(28,45,66,0.25)'
              }}
            >
              MONETIZE MY FLAT &rarr;
            </a>

            <a
              href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20am%20a%20Gurugram%20home%20owner%20interested%20in%20partnering."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                padding: '16px 30px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '1px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <FaWhatsapp size={18} /> WHATSAPP DIRECT
            </a>
          </div>
        </div>
      </div>

      {/* Target Sectors in Gurugram */}
      <section style={{ backgroundColor: '#FAF8F5', padding: '70px 20px', borderTop: '1px solid #E8E2D9', borderBottom: '1px solid #E8E2D9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#8B7355', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>PRIME LOCATIONS</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#111', marginTop: '10px', marginBottom: '30px' }}>
            Gurugram Hubs We Are Currently Acquiring In
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#FFF', padding: '24px', borderRadius: '12px', border: '1px solid #EAE4DC' }}>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', margin: '0 0 8px 0', color: '#111' }}>Golf Course Road</h4>
              <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>DLF Phase 5, Aralias, Magnolias, Pinnacle, Horizon Center corridor.</p>
            </div>
            <div style={{ background: '#FFF', padding: '24px', borderRadius: '12px', border: '1px solid #EAE4DC' }}>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', margin: '0 0 8px 0', color: '#111' }}>Cyber City &amp; DLF Phase 1-3</h4>
              <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Cyber Hub proximity, Sushant Lok, MG Road executive apartments.</p>
            </div>
            <div style={{ background: '#FFF', padding: '24px', borderRadius: '12px', border: '1px solid #EAE4DC' }}>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', margin: '0 0 8px 0', color: '#111' }}>Golf Course Extension &amp; Sohna Rd</h4>
              <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Sectors 56, 57, 65, 66 gated societies &amp; luxury penthouses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation Form */}
      <section id="valuation-form" style={{ padding: '90px 20px', backgroundColor: '#F4F0EB' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: 'clamp(30px, 5vw, 60px)',
            boxShadow: '0 15px 45px rgba(0,0,0,0.06)',
            border: '1px solid #E4DDD3'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ color: '#8B7355', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>FREE GURUGRAM FLAT EVALUATION</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#111111', marginTop: '8px' }}>
                Get Guaranteed Revenue Proposal
              </h2>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(37, 211, 102, 0.08)', borderRadius: '14px' }}>
                <FaCheckCircle size={48} color="#25D366" />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', margin: '16px 0 8px 0' }}>Proposal Requested!</h3>
                <p style={{ fontSize: '14px', color: '#555' }}>We have received your Gurugram apartment details and will connect via WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Your Name *</label>
                    <input type="text" required placeholder="e.g. Vikram Mehta" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Phone / WhatsApp *</label>
                    <input type="tel" required placeholder="e.g. +91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Apartment Config *</label>
                    <select value={bhk} onChange={(e) => setBhk(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }}>
                      <option value="2BHK">2BHK Apartment</option>
                      <option value="3BHK">3BHK Apartment</option>
                      <option value="4BHK">4BHK Luxury Flat</option>
                      <option value="Penthouse/Villa">Penthouse / Luxury Villa</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Locality Sector *</label>
                    <select value={locality} onChange={(e) => setLocality(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }}>
                      <option value="Golf Course Road">Golf Course Road</option>
                      <option value="DLF Phase 1-5">DLF Phase 1-5 / Cyber City</option>
                      <option value="Golf Course Extension">Golf Course Extension Road</option>
                      <option value="Sohna Road / MG Road">Sohna Road / MG Road</option>
                      <option value="Sushant Lok / Sector 43/52">Sushant Lok / Sector 43/52</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Society Name</label>
                  <input type="text" placeholder="e.g. DLF Park Place / Central Park / Pinnacle" value={society} onChange={(e) => setSociety(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }} />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Additional Details</label>
                  <textarea rows={3} placeholder="Furnishing status, current rent, preferred lease model..." value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }} />
                </div>

                <button type="submit" style={{ width: '100%', backgroundColor: '#1C2D42', color: '#FFF', padding: '18px', borderRadius: '30px', fontWeight: '700', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <FaWhatsapp size={20} color="#25D366" /> GET GUARANTEED LEASE PROPOSAL
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FAF8F5', borderTop: '1px solid #E8E2D9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', textAlign: 'center', marginBottom: '40px' }}>Gurugram Home Owner FAQs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} style={{ backgroundColor: '#FFF', borderRadius: '12px', border: '1px solid #E4DDD3', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaqIndex(isOpen ? null : idx)} style={{ width: '100%', padding: '20px 24px', backgroundColor: 'transparent', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
                    <span>{faq.q}</span>
                    {isOpen ? <FaChevronUp color="#8B7355" /> : <FaChevronDown color="#8B7355" />}
                  </button>
                  {isOpen && <div style={{ padding: '0 24px 20px', fontSize: '14px', color: '#555', fontFamily: 'Georgia, serif' }}>{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GurugramHomeOwnersPartner;
