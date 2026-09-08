import React, { useState } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import {
  FaBuilding, FaHandshake, FaChartLine, FaShieldAlt, FaKey,
  FaCheckCircle, FaPercentage, FaTools, FaWhatsapp, FaArrowRight,
  FaFileContract, FaRegSmile, FaCrown, FaStar, FaQuoteLeft,
  FaHome, FaBriefcase, FaUserCheck, FaCog, FaMoneyBillWave, FaHeadset,
  FaChevronDown, FaChevronUp, FaCity, FaBuildingUser, FaSliders, FaLocationDot,
  FaCircleCheck, FaXmark
} from 'react-icons/fa6';
import './SandaneHomes.css';

import buildingHeroImg from '../../assets/building-partner-hero.jpg';
import interiorImg from '../../assets/abstract_luxury_interior.png';

const GurugramBuildingOwnersPartner = () => {
  const [totalUnits, setTotalUnits] = useState('15-30 Units');
  const [buildingType, setBuildingType] = useState('Full Apartment Tower');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Golf Course Road / Cyber City');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sandane Homes Corporate Master Lease Desk! I am a Gurugram Building Owner proposing an asset for master lease.\n\n` +
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
      q: "How does a full building master lease work with Sandane Homes?",
      a: "Sandane Homes executes a 3 to 9 year institutional master lease contract for your entire building or tower. We issue one single consolidated monthly payment directly to your account on the 1st of every month, taking over 100% of building operations and tenant management."
    },
    {
      q: "Will Sandane Homes convert the building into a corporate hotel residence?",
      a: "Yes. We take full operational control, furnish/upgrade units to 5-star executive standards, setup 24/7 reception and housekeeping, and position the building as a premier Sandane Homes corporate residence for Japanese & Korean expats."
    },
    {
      q: "Who assumes building security, maintenance, and facility repairs?",
      a: "Sandane Homes manages 100% of property operations, facility upkeep, daily housekeeping, security staff, lift maintenance, and utility administration at zero cost to the building owner."
    },
    {
      q: "What building sizes and locations do you master-lease in Gurugram?",
      a: "We actively lease standalone residential towers, builder floor blocks, and commercial guest houses with 10 to 50+ units near Cyber City, Golf Course Road, MG Road, Sohna Road, and Golf Course Extension."
    }
  ];

  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Gurugram Building & Tower Master Lease Program — Sandane Homes",
      "provider": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" },
      "description": "Master-lease your entire residential tower or builder floor block in Gurugram to Sandane Homes. Single master check, 3-9 year contracts, zero vacancy risk, full corporate hotel conversion.",
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
        title="Gurugram Building & Tower Master Lease | Sandane Homes Institutional Partnership"
        description="Master-lease your residential building or builder block in Gurugram to Sandane Homes. Single master check, 3-9 year contracts, zero vacancy risk, full corporate hotel conversion."
        canonical="https://www.sandanehomes.com/partner/gurugram-building-owners"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={pageSchema}
      />

      <Header showTopBar={false} />

      {/* ── B2B CORPORATE EXECUTIVE HERO BANNER ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1C2D42 50%, #0F172A 100%)',
        padding: '130px 20px 90px',
        borderBottom: '1px solid rgba(197,165,114,0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Background Radial Glow */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(197, 165, 114, 0.08) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Hero Text Column */}
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
              <FaBuildingUser /> INSTITUTIONAL BUILDING MASTER LEASE
            </span>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(34px, 4vw, 54px)',
              lineHeight: '1.15',
              color: '#FFFFFF',
              marginBottom: '24px',
              fontWeight: '600',
              letterSpacing: '-0.5px'
            }}>
              Master-Lease Your Entire Building in Gurugram
            </h1>

            <p style={{
              fontSize: '17px',
              lineHeight: '1.7',
              color: '#94A3B8',
              marginBottom: '32px',
              fontWeight: '400'
            }}>
              Stop managing dozens of individual renters. <strong>Sandane Homes</strong> master-leases your entire residential tower or builder block (10 to 50+ units) under a single master lease contract — delivering guaranteed 1st-of-month payouts for 3 to 9 years with zero vacancy risk.
            </p>

            {/* Quick Corporate Value Bullet Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0', fontSize: '14px', fontWeight: '600' }}>
                <FaCircleCheck color="#C5A572" size={18} /> 1 Master Contract (No Multi-Tenant Hassle)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0', fontSize: '14px', fontWeight: '600' }}>
                <FaCircleCheck color="#C5A572" size={18} /> 3 to 9 Year Guaranteed Payouts
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0', fontSize: '14px', fontWeight: '600' }}>
                <FaCircleCheck color="#C5A572" size={18} /> Turnkey Corporate Hotel Conversion
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0', fontSize: '14px', fontWeight: '600' }}>
                <FaCircleCheck color="#C5A572" size={18} /> 0% Vacancy &amp; Collection Loss
              </div>
            </div>

            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <a
                href="#corporate-building-form"
                style={{
                  backgroundColor: '#C5A572',
                  color: '#0F172A',
                  padding: '16px 36px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(197, 165, 114, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                PROPOSE YOUR BUILDING <FaArrowRight size={13} />
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
                  boxShadow: '0 8px 25px rgba(37,211,102,0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <FaWhatsapp size={18} /> WHATSAPP MASTER LEASE DESK
              </a>
            </div>
          </div>

          {/* Right Hero Image Card Frame */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(197, 165, 114, 0.3)',
              borderRadius: '20px',
              padding: '16px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              position: 'relative'
            }}>
              <img
                src={buildingHeroImg}
                alt="Gurugram Residential Building Master Lease"
                style={{ width: '100%', height: '520px', objectFit: 'cover', borderRadius: '14px' }}
              />

              {/* Floating Executive Badge */}
              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                right: '30px',
                background: 'rgba(15, 23, 42, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(197, 165, 114, 0.4)',
                borderRadius: '14px',
                padding: '20px 24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>INSTITUTIONAL MASTER LEASE</span>
                  <span style={{ background: '#C5A572', color: '#0F172A', padding: '3px 10px', borderRadius: '10px', fontSize: '11px', fontWeight: '800' }}>GUARANTEED</span>
                </div>
                <h4 style={{ color: '#FFFFFF', margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>Full Residential Building Acquisition</h4>
                <p style={{ color: '#94A3B8', margin: 0, fontSize: '13px' }}>Gurugram • Cyber City • Golf Course Road • DLF Corridor</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── METRICS BAR (Institutional Financial Highlights) ── */}
      <section style={{ backgroundColor: '#1E293B', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '45px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', textAlign: 'center' }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>1 Master Check</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Consolidated Monthly Payout</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>3 – 9 Years</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Guaranteed Master Lease Term</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>100% Zero</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Building Vacancy Risk</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>Japanese &amp; MNC</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Corporate Expat Stays</p>
          </div>
        </div>
      </section>

      {/* ── B2B COMPARISON MATRIX: TRADITIONAL VS MASTER LEASE ── */}
      <section style={{ padding: '90px 20px', backgroundColor: '#0F172A' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>FINANCIAL COMPARISON</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', color: '#FFFFFF', marginTop: '10px', marginBottom: '16px' }}>
              Multi-Tenant Leasing vs. Sandane Master Lease
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.7' }}>
              Comparing the operational burden and financial performance of managing individual renters versus a single institutional master lease.
            </p>
          </div>

          {/* Comparison Table */}
          <div style={{ backgroundColor: '#1E293B', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr', padding: '20px 24px', backgroundColor: '#162032', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: '700', fontSize: '14px', letterSpacing: '1px' }}>
              <div style={{ color: '#94A3B8' }}>FEATURE / METRIC</div>
              <div style={{ color: '#EF4444' }}>TRADITIONAL RENTING</div>
              <div style={{ color: '#C5A572' }}>SANDANE MASTER LEASE</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr', padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '14px' }}>
              <div style={{ color: '#FFFFFF', fontWeight: '600' }}>Tenant Contracts</div>
              <div style={{ color: '#94A3B8' }}>30+ individual renters to manage</div>
              <div style={{ color: '#C5A572', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}><FaCircleCheck /> 1 Master Lease Contract</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr', padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '14px' }}>
              <div style={{ color: '#FFFFFF', fontWeight: '600' }}>Monthly Rent Payout</div>
              <div style={{ color: '#94A3B8' }}>Multiple payment delays &amp; follow-ups</div>
              <div style={{ color: '#C5A572', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}><FaCircleCheck /> Guaranteed on the 1st</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr', padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '14px' }}>
              <div style={{ color: '#FFFFFF', fontWeight: '600' }}>Vacancy Risk</div>
              <div style={{ color: '#94A3B8' }}>High (1-2 months per unit/yr)</div>
              <div style={{ color: '#C5A572', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}><FaCircleCheck /> 0% Vacancy Loss</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr', padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '14px' }}>
              <div style={{ color: '#FFFFFF', fontWeight: '600' }}>Building Operations</div>
              <div style={{ color: '#94A3B8' }}>Owner handles repairs &amp; complaints</div>
              <div style={{ color: '#C5A572', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}><FaCircleCheck /> 100% Sandane Management</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr', padding: '18px 24px', fontSize: '14px' }}>
              <div style={{ color: '#FFFFFF', fontWeight: '600' }}>Building Asset Valuation</div>
              <div style={{ color: '#94A3B8' }}>Standard residential wear &amp; tear</div>
              <div style={{ color: '#C5A572', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}><FaCircleCheck /> 5-Star Hotel Conversion</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL PROPOSAL FORM SECTION ── */}
      <section id="corporate-building-form" style={{ padding: '90px 20px', backgroundColor: '#1E293B', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#0F172A',
            borderRadius: '20px',
            padding: 'clamp(30px, 5vw, 60px)',
            border: '1px solid rgba(197, 165, 114, 0.3)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>B2B MASTER LEASE INQUIRY</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#FFFFFF', marginTop: '8px', marginBottom: '12px' }}>
                Propose Your Gurugram Building
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '14px' }}>
                Submit your building details below. Our corporate acquisition desk will evaluate your property and issue a formal master lease term sheet within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(37, 211, 102, 0.08)', border: '1px solid #25D366', borderRadius: '14px' }}>
                <FaCircleCheck size={48} color="#25D366" />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', margin: '16px 0 8px 0', color: '#FFF' }}>Building Proposal Submitted!</h3>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>Our corporate master lease team will review your asset and reach out via WhatsApp / Email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#C5A572', marginBottom: '8px' }}>Owner / Developer Name *</label>
                    <input type="text" required placeholder="e.g. Sameer Kapoor" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1E293B', color: '#FFF', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#C5A572', marginBottom: '8px' }}>Phone / WhatsApp *</label>
                    <input type="tel" required placeholder="e.g. +91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1E293B', color: '#FFF', outline: 'none' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#C5A572', marginBottom: '8px' }}>Asset Category *</label>
                    <select value={buildingType} onChange={(e) => setBuildingType(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1E293B', color: '#FFF', outline: 'none' }}>
                      <option value="Full Apartment Tower">Full Residential Apartment Tower</option>
                      <option value="Builder Floor Block">Entire Builder Floor Block (4-8 Floors)</option>
                      <option value="Commercial Guest House">Commercial Guest House / Hotel Property</option>
                      <option value="Co-living Tower">Co-living / Extended Stay Tower</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#C5A572', marginBottom: '8px' }}>Total Units Count *</label>
                    <select value={totalUnits} onChange={(e) => setTotalUnits(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1E293B', color: '#FFF', outline: 'none' }}>
                      <option value="10-20 Units">10 – 20 Units</option>
                      <option value="21-40 Units">21 – 40 Units</option>
                      <option value="41-80 Units">41 – 80 Units</option>
                      <option value="80+ Units">80+ Large Residential Complex</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#C5A572', marginBottom: '8px' }}>Building Location / Sector in Gurugram</label>
                  <input type="text" placeholder="e.g. Golf Course Road / DLF Cyber City / MG Road / Sohna Road" value={locality} onChange={(e) => setLocality(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1E293B', color: '#FFF', outline: 'none' }} />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#C5A572', marginBottom: '8px' }}>Additional Building Details</label>
                  <textarea rows={3} placeholder="Current occupancy, elevator status, parking capacity, readiness date..." value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1E293B', color: '#FFF', outline: 'none' }} />
                </div>

                <button type="submit" style={{
                  width: '100%',
                  backgroundColor: '#C5A572',
                  color: '#0F172A',
                  padding: '18px',
                  borderRadius: '30px',
                  fontSize: '15px',
                  fontWeight: '800',
                  letterSpacing: '1.5px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(197, 165, 114, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}>
                  <FaWhatsapp size={20} color="#0F172A" /> SUBMIT BUILDING PROPOSAL VIA WHATSAPP
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '80px 20px', backgroundColor: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', textAlign: 'center', marginBottom: '40px', color: '#FFF' }}>Building Master Lease FAQs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} style={{ backgroundColor: '#1E293B', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
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

export default GurugramBuildingOwnersPartner;
