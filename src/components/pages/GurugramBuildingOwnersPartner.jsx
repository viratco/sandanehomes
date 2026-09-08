import React, { useState } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import {
  FaBuilding, FaHandshake, FaChartLine, FaShieldAlt, FaKey,
  FaCheckCircle, FaPercentage, FaTools, FaWhatsapp, FaArrowRight,
  FaFileContract, FaRegSmile, FaCrown, FaStar, FaQuoteLeft,
  FaHome, FaBriefcase, FaUserCheck, FaCog, FaMoneyBillWave, FaHeadset,
  FaChevronDown, FaChevronUp, FaCity
} from 'react-icons/fa';
import './SandaneHomes.css';

import buildingHeroImg from '../../assets/building-partner-hero.jpg';
import facadeImg from '../../assets/building-partner-hero.jpg';
import interiorImg from '../../assets/abstract_luxury_interior.png';

const GurugramBuildingOwnersPartner = () => {
  const [totalUnits, setTotalUnits] = useState('15-30 Units');
  const [buildingType, setBuildingType] = useState('Full Apartment Tower');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Cyber City Corridor');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sandane Homes Master Lease Team! I am a Gurugram Building/Tower Owner interested in a master lease.\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Asset Category:* ${buildingType}\n` +
      `*Total Units:* ${totalUnits}\n` +
      `*Locality:* ${locality}\n` +
      `*Notes:* ${message}`;

    window.open(`https://wa.me/919711722273?text=${encodeURIComponent(text)}`, '_blank');
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "How does a full building master lease work with Sandane Homes in Gurugram?",
      a: "Sandane Homes signs a long-term master lease agreement for your entire residential tower or builder block (3 to 9 years). We pay a single consolidated master lease payment directly to your account every month, eliminating multi-tenant collection hassle and individual unit vacancies."
    },
    {
      q: "Will Sandane Homes convert the entire building into a branded serviced residence?",
      a: "Yes. We take full operational control, furnish/upgrade units to 5-star executive standards, set up 24/7 reception and housekeeping, and position the building as a premier Sandane Homes corporate residence for Japanese & Korean expats."
    },
    {
      q: "Who assumes building operations, security, and maintenance?",
      a: "Sandane Homes manages 100% of property operations, facility maintenance, daily housekeeping, security supervision, and utility management at zero cost to the building owner."
    },
    {
      q: "What building sizes and locations do you master-lease in Gurugram?",
      a: "We actively lease standalone residential buildings, builder floor blocks, and executive towers with 10 to 50+ units near Cyber City, Golf Course Road, MG Road, Sohna Road, and Golf Course Extension."
    }
  ];

  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Gurugram Building & Tower Master Lease Program — Sandane Homes",
      "provider": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" },
      "description": "Master-lease your entire residential tower or builder floor block in Gurugram to Sandane Homes. Long-term guaranteed payouts, turnkey corporate hotel management.",
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
        title="Gurugram Building & Tower Master Lease | Sandane Homes Partnership"
        description="Master-lease your residential building or builder block in Gurugram to Sandane Homes. Single master check, 3-9 year contracts, zero vacancy risk, full corporate hotel conversion."
        canonical="https://www.sandanehomes.com/partner/gurugram-building-owners"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={pageSchema}
      />

      <Header showTopBar={false} />

      {/* Hero Section */}
      <div className="editorial-container" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="editorial-title-bg">
          <h1>Building</h1>
          <h1>MasterLease</h1>
        </div>

        <div className="editorial-left-col">
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
            <img src={facadeImg} alt="Gurugram Building Master Lease" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
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
              <FaCity /> FULL BUILDING MASTER LEASE
            </div>
          </div>

          <div className="editorial-left-text" style={{ marginTop: '-60px', position: 'relative', zIndex: 3 }}>
            <div className="editorial-glass-card" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid #E5DFD5' }}>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#4A463F', fontFamily: 'Georgia, serif', margin: 0 }}>
                Convert your entire residential tower into a <i>branded Sandane Homes corporate residence</i> with a single master tenant and guaranteed monthly revenue.
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
            <FaBuilding /> FOR GURUGRAM BUILDING OWNERS &amp; DEVELOPERS
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 4.5vw, 50px)',
            lineHeight: '1.15',
            color: '#111111',
            marginBottom: '24px',
            fontWeight: '600'
          }}>
            Master-Lease Your Entire Gurugram Building to Sandane Homes
          </h1>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#555555',
            marginBottom: '32px',
            fontFamily: 'Georgia, serif'
          }}>
            Stop managing dozens of individual renters. <strong>Sandane Homes</strong> master-leases your entire residential tower or builder block (10 to 50+ units) in Gurugram, issuing one single guaranteed master payment on the 1st of every month under a long-term 3 to 9 year agreement.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> Single Master Tenant Contract
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> 3 to 9 Year Guaranteed Terms
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> Turnkey Hotel Conversion
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> 0% Vacancy &amp; Collection Risk
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#building-valuation-form"
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
              PROPOSE YOUR BUILDING &rarr;
            </a>

            <a
              href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20am%20a%20Gurugram%20building%20owner%20interested%20in%20a%20master%20lease."
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
              <FaWhatsapp size={18} /> WHATSAPP MASTER LEASE DESK
            </a>
          </div>
        </div>
      </div>

      {/* Building Owner Benefits */}
      <section style={{ backgroundColor: '#1C2D42', color: '#FFFFFF', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>WHY BUILDING OWNERS CHOOSE US</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#FFF', marginTop: '10px', marginBottom: '50px' }}>
            The Institutional Master Lease Advantage
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', textAlign: 'left' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '14px', border: '1px solid rgba(197,165,114,0.2)' }}>
              <FaFileContract size={32} color="#C5A572" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', margin: '0 0 10px 0', color: '#FFF' }}>1 Contract Instead of 30+</h4>
              <p style={{ fontSize: '14px', color: '#C3D0DF', lineHeight: '1.6', margin: 0 }}>Replace 30 individual tenant agreements, background checks, and rent collection calls with one master institutional lease.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '14px', border: '1px solid rgba(197,165,114,0.2)' }}>
              <FaCrown size={32} color="#C5A572" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', margin: '0 0 10px 0', color: '#FFF' }}>Brand Capital Appreciation</h4>
              <p style={{ fontSize: '14px', color: '#C3D0DF', lineHeight: '1.6', margin: 0 }}>We elevate your building into a high-end Japanese &amp; MNC expat hotel residence, significantly boosting your asset value.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '14px', border: '1px solid rgba(197,165,114,0.2)' }}>
              <FaTools size={32} color="#C5A572" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', margin: '0 0 10px 0', color: '#FFF' }}>Complete Property Facility Care</h4>
              <p style={{ fontSize: '14px', color: '#C3D0DF', lineHeight: '1.6', margin: 0 }}>From lift maintenance to lobby reception, security supervision, and daily housekeeping, Sandane Homes runs everything.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Propose Form */}
      <section id="building-valuation-form" style={{ padding: '90px 20px', backgroundColor: '#F4F0EB' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: 'clamp(30px, 5vw, 60px)',
            boxShadow: '0 15px 45px rgba(0,0,0,0.06)',
            border: '1px solid #E4DDD3'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ color: '#8B7355', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>GURUGRAM BUILDING MASTER LEASE EVALUATION</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#111111', marginTop: '8px' }}>
                Propose Your Building For Master Lease
              </h2>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(37, 211, 102, 0.08)', borderRadius: '14px' }}>
                <FaCheckCircle size={48} color="#25D366" />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', margin: '16px 0 8px 0' }}>Building Proposal Received!</h3>
                <p style={{ fontSize: '14px', color: '#555' }}>Our commercial acquisition team will evaluate your Gurugram building and connect with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Owner / Developer Name *</label>
                    <input type="text" required placeholder="e.g. Sameer Kapoor" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Phone / WhatsApp *</label>
                    <input type="tel" required placeholder="e.g. +91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Asset Category *</label>
                    <select value={buildingType} onChange={(e) => setBuildingType(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }}>
                      <option value="Full Apartment Tower">Full Residential Apartment Tower</option>
                      <option value="Builder Floor Block">Entire Builder Floor Block (4-8 Floors)</option>
                      <option value="Commercial Guest House">Commercial Guest House / Hotel Property</option>
                      <option value="Co-living Tower">Co-living / Student Housing Tower</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Total Units Count *</label>
                    <select value={totalUnits} onChange={(e) => setTotalUnits(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }}>
                      <option value="10-20 Units">10 – 20 Units</option>
                      <option value="21-40 Units">21 – 40 Units</option>
                      <option value="41-80 Units">41 – 80 Units</option>
                      <option value="80+ Units">80+ Large Residential Complex</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Building Address / Gurugram Locality</label>
                  <input type="text" placeholder="e.g. Sector 54 Golf Course Road / DLF Phase 3 / MG Road" value={locality} onChange={(e) => setLocality(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }} />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Building Details / Completion Status</label>
                  <textarea rows={3} placeholder="Current occupancy, completion state, parking availability..." value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#FAF8F5' }} />
                </div>

                <button type="submit" style={{ width: '100%', backgroundColor: '#1C2D42', color: '#FFF', padding: '18px', borderRadius: '30px', fontWeight: '700', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <FaWhatsapp size={20} color="#25D366" /> SUBMIT BUILDING PROPOSAL VIA WHATSAPP
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Building FAQs */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FAF8F5', borderTop: '1px solid #E8E2D9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', textAlign: 'center', marginBottom: '40px' }}>Building Master Lease FAQs</h2>
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

export default GurugramBuildingOwnersPartner;
