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
    const text = `Hi Sandane Homes Partner Desk! I am a Gurugram Apartment Owner proposing my flat.\n\n` +
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
    <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', minHeight: '100vh', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <SEO
        title="Gurugram Home Owners Partnership | Monetize Your Apartment — Sandane Homes"
        description="Gurugram apartment & flat owners: earn guaranteed monthly rent or high profit-sharing with zero hassle. Sandane Homes manages your flat as a premium corporate expat residence."
        canonical="https://www.sandanehomes.com/partner/gurugram-home-owners"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={pageSchema}
      />

      <Header showTopBar={false} />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1C2D42 50%, #0F172A 100%)',
        padding: '130px 20px 90px',
        borderBottom: '1px solid rgba(197,165,114,0.2)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          <div>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(197, 165, 114, 0.12)',
              border: '1px solid #C5A572',
              color: '#C5A572',
              padding: '6px 18px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '24px'
            }}>
              <FaHome /> GURUGRAM APARTMENT MONETIZATION
            </span>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(34px, 4vw, 52px)',
              lineHeight: '1.15',
              color: '#FFFFFF',
              marginBottom: '24px',
              fontWeight: '600'
            }}>
              Earn Guaranteed Monthly Rent From Your Gurugram Apartment
            </h1>

            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#94A3B8', marginBottom: '32px' }}>
              No more late payments, tenant damage, or vacancy gaps. <strong>Sandane Homes</strong> master-leases your 2BHK, 3BHK, or 4BHK apartment in Golf Course Road, Cyber City, or DLF phases — paying guaranteed 1st-of-month rent with 100% free housekeeping and maintenance.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0', fontSize: '14px', fontWeight: '600' }}>
                <FaCheckCircle color="#C5A572" size={18} /> Guaranteed Rent Paid on the 1st
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0', fontSize: '14px', fontWeight: '600' }}>
                <FaCheckCircle color="#C5A572" size={18} /> Verified Japanese &amp; MNC Expats
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0', fontSize: '14px', fontWeight: '600' }}>
                <FaCheckCircle color="#C5A572" size={18} /> 100% Free Housekeeping &amp; Care
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0', fontSize: '14px', fontWeight: '600' }}>
                <FaCheckCircle color="#C5A572" size={18} /> Zero Vacancy &amp; Default Risk
              </div>
            </div>

            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <a href="#home-valuation-form" style={{ backgroundColor: '#C5A572', color: '#0F172A', padding: '16px 36px', borderRadius: '30px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                MONETIZE MY FLAT <FaArrowRight size={13} />
              </a>
              <a href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20am%20a%20Gurugram%20home%20owner%20interested%20in%20partnering." target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: '#FFF', padding: '16px 30px', borderRadius: '30px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <FaWhatsapp size={18} /> WHATSAPP PARTNER DESK
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(197, 165, 114, 0.3)', borderRadius: '20px', padding: '16px' }}>
              <img src={livingImg} alt="Gurugram Corporate Residence" style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '14px' }} />
              <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', background: 'rgba(15, 23, 42, 0.92)', backdropFilter: 'blur(12px)', border: '1px solid rgba(197, 165, 114, 0.4)', borderRadius: '14px', padding: '20px 24px' }}>
                <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>GURUGRAM APARTMENT MONETIZATION</span>
                <h4 style={{ color: '#FFF', margin: '4px 0 0 0', fontSize: '16px' }}>2BHK, 3BHK, 4BHK &amp; Luxury Penthouses</h4>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Target Sectors */}
      <section style={{ backgroundColor: '#1E293B', padding: '70px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>PRIME LOCATIONS</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', color: '#FFF', marginTop: '10px', marginBottom: '35px' }}>
            Gurugram Sectors We Are Currently Acquiring Flats In
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', textAlign: 'left' }}>
            <div style={{ background: '#0F172A', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#C5A572', margin: '0 0 8px 0' }}>Golf Course Road</h4>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>DLF Phase 5, Aralias, Magnolias, Pinnacle, Horizon Center corridor.</p>
            </div>
            <div style={{ background: '#0F172A', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#C5A572', margin: '0 0 8px 0' }}>Cyber City &amp; DLF Phase 1-3</h4>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>Cyber Hub proximity, Sushant Lok, MG Road executive apartments.</p>
            </div>
            <div style={{ background: '#0F172A', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#C5A572', margin: '0 0 8px 0' }}>Golf Course Extension &amp; Sohna Rd</h4>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>Sectors 56, 57, 65, 66 gated societies &amp; luxury penthouses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Form */}
      <section id="home-valuation-form" style={{ padding: '90px 20px', backgroundColor: '#0F172A' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#1E293B', borderRadius: '20px', padding: 'clamp(30px, 5vw, 60px)', border: '1px solid rgba(197, 165, 114, 0.3)', boxShadow: '0 25px 50px rgba(0,0,0,0.4)' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>FREE GURUGRAM FLAT VALUATION</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#FFFFFF', marginTop: '8px' }}>
                Get Guaranteed Revenue Proposal
              </h2>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(37, 211, 102, 0.08)', border: '1px solid #25D366', borderRadius: '14px' }}>
                <FaCircleCheck size={48} color="#25D366" />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', margin: '16px 0 8px 0', color: '#FFF' }}>Proposal Requested!</h3>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>We have received your Gurugram apartment details and will connect via WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#C5A572', marginBottom: '8px' }}>Your Name *</label>
                    <input type="text" required placeholder="e.g. Vikram Mehta" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0F172A', color: '#FFF' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#C5A572', marginBottom: '8px' }}>Phone / WhatsApp *</label>
                    <input type="tel" required placeholder="e.g. +91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0F172A', color: '#FFF' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#C5A572', marginBottom: '8px' }}>Apartment Config *</label>
                    <select value={bhk} onChange={(e) => setBhk(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0F172A', color: '#FFF' }}>
                      <option value="2BHK">2BHK Apartment</option>
                      <option value="3BHK">3BHK Apartment</option>
                      <option value="4BHK">4BHK Luxury Flat</option>
                      <option value="Penthouse/Villa">Penthouse / Luxury Villa</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#C5A572', marginBottom: '8px' }}>Locality Sector *</label>
                    <select value={locality} onChange={(e) => setLocality(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0F172A', color: '#FFF' }}>
                      <option value="Golf Course Road">Golf Course Road</option>
                      <option value="DLF Phase 1-5">DLF Phase 1-5 / Cyber City</option>
                      <option value="Golf Course Extension">Golf Course Extension Road</option>
                      <option value="Sohna Road / MG Road">Sohna Road / MG Road</option>
                      <option value="Sushant Lok / Sector 43/52">Sushant Lok / Sector 43/52</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#C5A572', marginBottom: '8px' }}>Society Name</label>
                  <input type="text" placeholder="e.g. DLF Park Place / Central Park / Pinnacle" value={society} onChange={(e) => setSociety(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0F172A', color: '#FFF' }} />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#C5A572', marginBottom: '8px' }}>Additional Details</label>
                  <textarea rows={3} placeholder="Furnishing status, current rent, preferred lease model..." value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0F172A', color: '#FFF' }} />
                </div>

                <button type="submit" style={{ width: '100%', backgroundColor: '#C5A572', color: '#0F172A', padding: '18px', borderRadius: '30px', fontWeight: '800', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <FaWhatsapp size={20} color="#0F172A" /> GET GUARANTEED LEASE PROPOSAL
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '80px 20px', backgroundColor: '#1E293B', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', textAlign: 'center', marginBottom: '40px', color: '#FFF' }}>Gurugram Home Owner FAQs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} style={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaqIndex(isOpen ? null : idx)} style={{ width: '100%', padding: '20px 24px', backgroundColor: 'transparent', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'Playfair Display', serif", fontSize: '16px', fontWeight: '600', color: '#FFF', cursor: 'pointer' }}>
                    <span>{faq.q}</span>
                    {isOpen ? <FaChevronUp color="#C5A572" /> : <FaChevronDown color="#C5A572" />}
                  </button>
                  {isOpen && <div style={{ padding: '0 24px 20px', fontSize: '14px', color: '#94A3B8', lineHeight: '1.7' }}>{faq.a}</div>}
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
