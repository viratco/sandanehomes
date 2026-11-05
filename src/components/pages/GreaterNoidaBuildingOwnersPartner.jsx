import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import PartnerApplicationForm from '../PartnerApplicationForm';
import {
  FaBuilding, FaHandshake, FaChartLine, FaShieldAlt, FaKey,
  FaCheckCircle, FaPercentage, FaTools, FaWhatsapp, FaArrowRight,
  FaFileContract, FaRegSmile, FaCrown, FaStar, FaQuoteLeft,
  FaHome, FaBriefcase, FaUserCheck, FaCog, FaMoneyBillWave, FaHeadset,
  FaChevronDown, FaChevronUp, FaCity, FaMapMarkerAlt
} from 'react-icons/fa';
import './SandaneHomes.css';

import buildingHeroImg from '../../assets/building-partner-hero.jpg';

const GreaterNoidaBuildingOwnersPartner = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      q: "How does Sandane Homes solve seasonal occupancy for Greater Noida building owners?",
      a: "Many Greater Noida hotels and guest houses only see occupancy during India Expo Mart trade fairs. Sandane Homes solves this by blending trade fair delegations with long-stay Japanese, Korean, and European corporate engineering teams working in Surajpur, Ecotech, and along the Yamuna Expressway. Under our Master Lease, you receive 100% guaranteed monthly rent 365 days a year, regardless of exhibition calendars."
    },
    {
      q: "Can Sandane Homes take over an unbranded guest house or hostel building?",
      a: "Yes. We specialize in converting standalone guest houses, budget hotels, or residential blocks into premium corporate apart-hotels branded under Sandane Homes. We coordinate necessary interior upgrades, setup 24/7 reception, and install high-speed enterprise broadband."
    },
    {
      q: "What areas in Greater Noida and along the Yamuna Expressway are eligible?",
      a: "We actively lease buildings of 10 to 50+ units near Pari Chowk, Alpha 1 & 2, Knowledge Park 1, 2 & 3, Ansal Golf Links, Jaypee Greens, Surajpur Industrial Area, Ecotech clusters, and along the Yamuna Expressway towards Noida International Airport Jewar."
    },
    {
      q: "What is the typical master lease contract duration?",
      a: "We execute institutional master leases ranging from 3 to 9 years with formal registered agreements, built-in escalation clauses, and direct single-check payments on the 1st of every month."
    },
    {
      q: "Who pays for daily housekeeping, security guards, and property maintenance?",
      a: "Sandane Homes assumes 100% of operational overhead. Our in-house hospitality team provides daily housekeeping, 24/7 security personnel, linen management, lift upkeep, and MEP servicing at zero cost to the property owner."
    }
  ];

  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Greater Noida Building & Guest House Master Lease Program — Sandane Homes",
      "provider": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" },
      "description": "Master-lease your standalone building, residential tower, or commercial guest house in Greater Noida & Yamuna Expressway to Sandane Homes. Guaranteed monthly master check, 3-9 year contracts, zero vacancy risk.",
      "areaServed": ["Greater Noida", "Pari Chowk", "Knowledge Park", "Yamuna Expressway", "Noida International Airport"]
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
        title="Greater Noida Building & Guest House Master Lease | Sandane Homes"
        description="Master-lease your building, tower, or guest house in Greater Noida, Pari Chowk, Knowledge Park & Yamuna Expressway to Sandane Homes. Single master rent check, 3-9 year contracts, zero vacancy risk."
        canonical="https://www.sandanehomes.com/partner/greater-noida-building-owners"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={pageSchema}
      />

      <Header showTopBar={false} />

      {/* ── HERO BANNER ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #16382C 50%, #0F172A 100%)',
        padding: '120px 20px 80px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(197, 165, 114, 0.25)'
      }}>
        {/* Watermark */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          textAlign: 'center',
          pointerEvents: 'none',
          opacity: 0.03,
          userSelect: 'none',
          lineHeight: '0.9'
        }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(60px, 12vw, 160px)', fontWeight: 'bold', color: '#FFF', display: 'block' }}>
            GREATER NOIDA
          </span>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))', gap: '50px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(37, 211, 102, 0.15)',
              border: '1px solid #25D366',
              color: '#25D366',
              padding: '6px 18px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '22px'
            }}>
              <FaBuilding /> GREATER NOIDA &amp; YAMUNA EXPRESSWAY MASTER LEASE PROGRAM
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              lineHeight: '1.15',
              color: '#FFFFFF',
              marginBottom: '20px',
              fontWeight: '600'
            }}>
              Monetize Your Greater Noida Building.
              <span style={{ display: 'block', color: '#C5A572', fontStyle: 'italic', marginTop: '6px' }}>
                We Manage It As A Corporate Hotel.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              lineHeight: '1.75',
              color: '#CBD5E1',
              maxWidth: '560px',
              marginBottom: '32px'
            }}>
              Own a standalone residential building, guest house, or hotel tower near Pari Chowk, Knowledge Park, India Expo Mart, or along the Yamuna Expressway? Sandane Homes executes <strong>3 to 9 year Master Leases</strong>, transforming your property into a high-demand corporate serviced residence with 100% guaranteed monthly payouts.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#greater-noida-building-form"
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
                href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20own%20a%20building%20in%20Greater%20Noida%20and%20am%20interested%20in%20a%20Master%20Lease%20proposal."
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
                <FaWhatsapp size={18} /> WHATSAPP VALUATION (+91 97117 22273)
              </a>
            </div>
          </div>

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
                alt="Greater Noida Building Master Lease"
                style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '14px' }}
              />

              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                right: '30px',
                background: 'rgba(15, 23, 42, 0.94)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(197, 165, 114, 0.4)',
                borderRadius: '14px',
                padding: '20px 24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#25D366', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>GREATER NOIDA LEASING</span>
                  <span style={{ background: '#25D366', color: '#0F172A', padding: '3px 10px', borderRadius: '10px', fontSize: '11px', fontWeight: '800' }}>3-9 YEARS</span>
                </div>
                <h4 style={{ color: '#FFFFFF', margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>Full Building &amp; Guest House Conversion</h4>
                <p style={{ color: '#94A3B8', margin: 0, fontSize: '13px' }}>Pari Chowk • Knowledge Park • India Expo Mart • Yamuna Expressway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS BAR ── */}
      <section style={{ backgroundColor: '#1E293B', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '45px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', textAlign: 'center' }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>1 Master Check</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>On 1st of Every Month</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>365 Days</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Guaranteed Non-Stop Yield</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>₹0 Expenses</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Free Maintenance &amp; Staff</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>Jewar Corridor</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>High Corporate Demand</p>
          </div>
        </div>
      </section>

      {/* ── LOCAL GREATER NOIDA ADVANTAGES ── */}
      <section style={{ padding: '90px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px' }}>
          <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>THE LOCAL ADVANTAGE</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', color: '#FFFFFF', marginTop: '10px' }}>
            Why Greater Noida Building Owners Master-Lease to Sandane Homes
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.7', marginTop: '14px' }}>
            Greater Noida is home to world-class expressways, the expanding industrial belt of Surajpur &amp; Ecotech, and the upcoming Jewar International Airport. Here is why partnering with Sandane Homes maximizes your asset's income.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '30px' }}>
          <div style={{ background: '#1E293B', padding: '36px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <FaMoneyBillWave size={36} color="#C5A572" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#FFF', margin: '0 0 12px 0' }}>Ends Exhibition-Only Reliance</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>
              Stop relying solely on India Expo Mart dates. Sandane Homes supplies your building with constant corporate long-stay engineering delegations and expat managers from Samsung, LG, Honda, and Yamuna Expressway industrial parks.
            </p>
          </div>

          <div style={{ background: '#1E293B', padding: '36px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <FaCrown size={36} color="#C5A572" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#FFF', margin: '0 0 12px 0' }}>Proven Local Operational Excellence</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>
              We already successfully manage flagship hospitality properties across Greater Noida, including <strong>CoCo House</strong>, <strong>The Glam by Sandane Homes</strong>, <strong>Amaaltash by Sandane Homes</strong>, and <strong>Residences by Sandane Homes</strong>.
            </p>
          </div>

          <div style={{ background: '#1E293B', padding: '36px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <FaShieldAlt size={36} color="#C5A572" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#FFF', margin: '0 0 12px 0' }}>100% Free Upkeep &amp; Generator Care</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>
              Heavy power backup and MEP infrastructure maintenance is fully borne by Sandane Homes. We keep lifts, DG sets, and plumbing in pristine operational condition at our own cost.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE FORM SECTION ── */}
      <div id="greater-noida-building-form" style={{ backgroundColor: '#0B132B', padding: '70px 0 90px', borderTop: '1px solid rgba(197, 165, 114, 0.25)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', marginBottom: '20px', padding: '0 20px' }}>
          <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>GREATER NOIDA LEASING DESK</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', color: '#FFFFFF', marginTop: '6px' }}>
            Submit Your Greater Noida Building
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '640px', margin: '10px auto 0' }}>
            Share basic information about your property. Our acquisitions director will conduct a confidential site inspection and present an institutional Master Lease proposal within 24 to 48 hours.
          </p>
        </div>

        <PartnerApplicationForm
          id="gn-building-partner-form"
          defaultCity="Greater Noida"
          defaultApartmentType="5bhk_plus"
          title="Greater Noida Building Master Lease Proposal"
          subtitle="Provide your building specifications below. Our senior acquisitions desk will review your asset and present a guaranteed rental proposal within 24 hours."
          tag="CONFIDENTIAL GREATER NOIDA EVALUATION"
        />
      </div>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section style={{ padding: '90px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>GREATER NOIDA LANDLORD FAQS</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', color: '#FFFFFF', marginTop: '8px' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: '#1E293B',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '18px',
                    gap: '16px'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <FaChevronUp color="#C5A572" size={16} /> : <FaChevronDown color="#C5A572" size={16} />}
                </button>
                {isOpen && (
                  <div style={{ padding: '0 28px 24px', color: '#CBD5E1', fontSize: '14.5px', lineHeight: '1.7', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FOOTER CALLOUT ── */}
      <section style={{ backgroundColor: '#1E293B', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', color: '#FFF', marginBottom: '14px' }}>
            Schedule an On-Site Valuation in Greater Noida
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '15px', marginBottom: '28px' }}>
            Our operations team conducts confidential building inspections across Greater Noida and Yamuna Expressway within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20would%20like%20to%20schedule%20a%20site%20inspection%20for%20my%20Greater%20Noida%20building."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#FFF',
                padding: '16px 36px',
                borderRadius: '30px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px'
              }}
            >
              <FaWhatsapp size={20} /> WHATSAPP ACQUISITIONS (+91 97117 22273)
            </a>
            <a
              href="tel:+919711722273"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#FFF',
                padding: '16px 32px',
                borderRadius: '30px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              📞 CALL DIRECT: +91 97117 22273
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GreaterNoidaBuildingOwnersPartner;
