import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import PartnerApplicationForm from '../PartnerApplicationForm';
import {
  FaHandshake, FaFileContract, FaBuilding, FaCheckCircle, FaWhatsapp,
  FaPhoneAlt, FaShieldAlt, FaChartLine, FaInfoCircle, FaStar,
  FaHome, FaChevronDown, FaChevronUp, FaArrowRight, FaCrown, FaUserCheck
} from 'react-icons/fa';

const PartnerApplicationPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const partnerFaqs = [
    {
      q: "How does Sandane Homes decide between the Partner (Revenue Share) and Leasing (Subleasing) model?",
      a: "Our team reviews your property's micro-location, building condition, furnishing level, and corporate demand. We then determine whether the property is best suited for a fixed corporate sublease or a performance-linked revenue partnership."
    },
    {
      q: "When do I receive rent or revenue payouts?",
      a: "For Corporate Subleasing agreements, monthly rent is transferred to your bank account as per the agreed schedule in the lease. For Revenue Partnership properties, revenue payouts along with monthly statements are settled on an agreed monthly date."
    },
    {
      q: "Who takes care of property repairs, maintenance, and daily cleaning?",
      a: "Sandane Homes manages routine housekeeping, linen care, and coordinates regular minor upkeep (basic plumbing, electrical checks, AC servicing) to keep the apartment in good, well-maintained condition for guests."
    },
    {
      q: "Who will stay in my apartment or building?",
      a: "Our residences cater to corporate executives, business travelers, and expatriates. All guest check-ins follow identity verification, and foreign guests undergo standard Form C / FRRO documentation."
    },
    {
      q: "Can I partner if my apartment is unfurnished or semi-furnished?",
      a: "Yes. Sandane Homes can evaluate properties in semi-furnished or bare-shell condition and discuss furnishing assistance or leasing options depending on location and layout."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAF8F5', minHeight: '100vh' }}>
      <SEO
        title="Property Partner & Master Lease Application | Sandane Homes"
        description="Apply to partner with Sandane Homes or lease your 1 BHK, 2 BHK, 3 BHK, 4 BHK, 5 BHK, or 5 BHK+ property. Compare Partner vs Corporate Subleasing models and submit your property for evaluation."
        canonical="https://www.sandanehomes.com/partner/apply"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
      />

      <Header showTopBar={false} />

      {/* ── HERO HEADER ── */}
      <section style={{
        backgroundColor: '#1C2D42',
        color: '#FFFFFF',
        padding: '120px 20px 70px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Watermark */}
        <div style={{
          position: 'absolute',
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          textAlign: 'center',
          pointerEvents: 'none',
          opacity: 0.04,
          userSelect: 'none',
          lineHeight: '0.9'
        }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(60px, 12vw, 160px)', fontWeight: 'bold', color: '#FFF', display: 'block' }}>
            PARTNER • LEASE
          </span>
        </div>

        <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(197, 165, 114, 0.15)',
            border: '1px solid #C5A572',
            color: '#C5A572',
            padding: '6px 18px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '22px'
          }}>
            <FaHandshake /> PROPERTY MONETIZATION & MASTER LEASE PROGRAM
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            lineHeight: '1.18',
            color: '#FFFFFF',
            marginBottom: '20px',
            fontWeight: '600'
          }}>
            Partner With Sandane Homes
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            lineHeight: '1.75',
            color: '#C3D0DF',
            maxWidth: '740px',
            margin: '0 auto 30px',
            fontFamily: 'Georgia, serif'
          }}>
            Monetize your 1 BHK, 2 BHK, 3 BHK, 4 BHK, 5 BHK, or 5 BHK+ property. We manage quality residential assets as corporate serviced residences for corporate professionals and expatriates across Gurugram, Noida, and Greater Noida.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#application-form"
              style={{
                backgroundColor: '#C5A572',
                color: '#1C2D42',
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '1px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(197, 165, 114, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              FILL PARTNER FORM <FaArrowRight size={12} />
            </a>
            <a
              href="#application-form"
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '1px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FaWhatsapp size={16} /> CONNECT ON WHATSAPP (QUICK FORM)
            </a>
          </div>
        </div>
      </section>

      {/* ── TWO CARDS: PARTNER VS LEASING ── */}
      <section style={{ padding: '70px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span style={{ color: '#8B7355', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
            OUR TWO ONBOARDING MODELS
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#111111', marginTop: '8px', marginBottom: '12px' }}>
            Choose Your Engagement Pathway
          </h2>
          <p style={{ fontSize: '14.5px', color: '#666', lineHeight: '1.6', fontFamily: 'Georgia, serif' }}>
            We operate two distinct asset monetization structures designed around owner cashflow preferences.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '28px',
          alignItems: 'stretch',
          marginBottom: '36px'
        }}>
          {/* CARD 1: PARTNER */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '18px',
            padding: '36px 30px',
            border: '2px solid #C5A572',
            boxShadow: '0 12px 35px rgba(197, 165, 114, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '-13px',
              right: '26px',
              background: '#C5A572',
              color: '#1C2D42',
              padding: '4px 14px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '1px'
            }}>
              MODEL 1: PARTNERSHIP
            </span>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(197, 165, 114, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8B7355'
                }}>
                  <FaChartLine size={24} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#111', margin: 0 }}>
                    Partner
                  </h3>
                  <span style={{ fontSize: '12px', color: '#8B7355', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Revenue Share / Co-Hosting
                  </span>
                </div>
              </div>

              <div style={{
                background: '#FAF8F5',
                padding: '14px 18px',
                borderRadius: '10px',
                marginBottom: '20px',
                borderLeft: '3px solid #C5A572'
              }}>
                <span style={{ fontSize: '12px', color: '#777', textTransform: 'uppercase', fontWeight: '700' }}>Revenue Model:</span>
                <p style={{ fontSize: '18px', fontWeight: '800', color: '#111', margin: '4px 0 0' }}>
                  Shared Revenue Model
                </p>
                <span style={{ fontSize: '12px', color: '#555' }}>Monthly payouts linked to property performance</span>
              </div>

              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.65', marginBottom: '22px' }}>
                A collaborative hosting model where monthly earnings are based on actual guest occupancy. Sandane Homes manages guest bookings, daily housekeeping, and property care while sharing the proceeds transparently.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #F0ECE4', fontSize: '13.5px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#8B7355" size={15} style={{ flexShrink: 0 }} /> Professional corporate and expat guest hosting
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #F0ECE4', fontSize: '13.5px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#8B7355" size={15} style={{ flexShrink: 0 }} /> Regular housekeeping and linen maintenance
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #F0ECE4', fontSize: '13.5px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#8B7355" size={15} style={{ flexShrink: 0 }} /> Clear monthly revenue &amp; occupancy statements
                </li>
                <li style={{ padding: '8px 0', fontSize: '13.5px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#8B7355" size={15} style={{ flexShrink: 0 }} /> Routine maintenance and minor repairs coordination
                </li>
              </ul>
            </div>

            <div style={{
              fontSize: '12px',
              color: '#8B7355',
              fontWeight: '700',
              textAlign: 'center',
              padding: '8px',
              background: 'rgba(197, 165, 114, 0.1)',
              borderRadius: '8px'
            }}>
              Suitable for luxury apartments &amp; society suites
            </div>
          </div>

          {/* CARD 2: LEASING */}
          <div style={{
            backgroundColor: '#1C2D42',
            color: '#FFFFFF',
            borderRadius: '18px',
            padding: '36px 30px',
            border: '2px solid #334A65',
            boxShadow: '0 12px 35px rgba(28, 45, 66, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '-13px',
              right: '26px',
              background: '#25D366',
              color: '#FFFFFF',
              padding: '4px 14px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '1px'
            }}>
              MODEL 2: LEASING
            </span>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C5A572'
                }}>
                  <FaFileContract size={24} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFF', margin: 0 }}>
                    Leasing
                  </h3>
                  <span style={{ fontSize: '12px', color: '#C5A572', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Corporate Subleasing / Master Lease
                  </span>
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.06)',
                padding: '14px 18px',
                borderRadius: '10px',
                marginBottom: '20px',
                borderLeft: '3px solid #25D366'
              }}>
                <span style={{ fontSize: '12px', color: '#B3C3D4', textTransform: 'uppercase', fontWeight: '700' }}>Rental Model:</span>
                <p style={{ fontSize: '18px', fontWeight: '800', color: '#FFF', margin: '4px 0 0' }}>
                  Fixed Monthly Rent
                </p>
                <span style={{ fontSize: '12px', color: '#C3D0DF' }}>Predictable monthly rent under signed lease terms</span>
              </div>

              <p style={{ fontSize: '14px', color: '#D1DCE5', lineHeight: '1.65', marginBottom: '22px' }}>
                Sandane Homes signs a corporate lease agreement directly with the property owner. You receive steady monthly rent as agreed in the contract, while our team handles subleasing, guest management, and day-to-day operations.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '13.5px', color: '#E0E6ED', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#25D366" size={15} style={{ flexShrink: 0 }} /> Multi-year lease agreements (terms mutually agreed)
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '13.5px', color: '#E0E6ED', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#25D366" size={15} style={{ flexShrink: 0 }} /> Sandane Homes manages guest tenancies &amp; operations
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '13.5px', color: '#E0E6ED', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#25D366" size={15} style={{ flexShrink: 0 }} /> Direct bank transfer of agreed monthly rent
                </li>
                <li style={{ padding: '8px 0', fontSize: '13.5px', color: '#E0E6ED', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#25D366" size={15} style={{ flexShrink: 0 }} /> Regular upkeep &amp; property returned in agreed condition
                </li>
              </ul>
            </div>

            <div style={{
              fontSize: '12px',
              color: '#C5A572',
              fontWeight: '700',
              textAlign: 'center',
              padding: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px'
            }}>
              Suitable for entire floors, standalone buildings &amp; stable rent seekers
            </div>
          </div>
        </div>

        {/* ── MANDATORY COMPANY POLICY NOTICE BOX ── */}
        <div style={{
          background: 'linear-gradient(135deg, #FFF9F0 0%, #FDF4E6 100%)',
          border: '1.5px solid #E6CA9E',
          borderRadius: '16px',
          padding: '24px 28px',
          display: 'flex',
          gap: '18px',
          alignItems: 'flex-start',
          boxShadow: '0 6px 20px rgba(139, 115, 85, 0.08)'
        }}>
          <div style={{
            color: '#8B7355',
            fontSize: '22px',
            marginTop: '2px',
            flexShrink: 0
          }}>
            <FaInfoCircle />
          </div>
          <div>
            <h4 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '17px',
              color: '#1C2D42',
              margin: '0 0 6px 0',
              fontWeight: '700'
            }}>
              Important Decision Policy: Model Allocation Decided by Sandane Homes
            </h4>
            <p style={{
              fontSize: '14px',
              color: '#5C4A33',
              lineHeight: '1.65',
              margin: 0,
              fontFamily: 'Georgia, serif'
            }}>
              Please note that while property owners can indicate their preference in the form below, <strong>the definitive determination of whether a property is onboarded under the Revenue Partnership model or the Corporate Subleasing (Master Lease) agreement is evaluated and solely decided by Sandane Homes</strong>.
              Our asset review committee analyzes specific parameters—including the micro-location (Gurugram, Greater Noida, Noida), society tier, inventory volume (single flat vs. full floor or tower), furnishing specification, and active multinational expat demand—to recommend and approve the most viable structure for your property.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE PARTNER FORM SECTION ── */}
      <PartnerApplicationForm id="application-form" />

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section style={{ backgroundColor: '#FAF8F5', borderTop: '1px solid #E8E2D9', padding: '70px 20px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#8B7355', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#111', marginTop: '6px' }}>
              Everything Property Owners Need to Know
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {partnerFaqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #EAE4DC',
                  overflow: 'hidden'
                }}
              >
                <div
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <h4 style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#1C2D42',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {faq.q}
                  </h4>
                  <span style={{ color: '#8B7355', marginLeft: '12px' }}>
                    {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                {openFaq === i && (
                  <div style={{
                    padding: '0 24px 22px',
                    fontSize: '14px',
                    color: '#555',
                    lineHeight: '1.7',
                    borderTop: '1px solid #F4EFEA',
                    paddingTop: '16px',
                    fontFamily: 'Georgia, serif'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '50px',
            textAlign: 'center',
            padding: '30px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #EAE4DC'
          }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#111', margin: '0 0 8px 0' }}>
              Prefer to speak to an acquisition manager right now?
            </h3>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
              Call our acquisitions desk or send pictures of your apartment directly over WhatsApp.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="tel:+919711722273"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#1C2D42',
                  color: '#FFFFFF',
                  padding: '12px 26px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '700'
                }}
              >
                <FaPhoneAlt size={13} /> +91 97117 22273
              </a>
              <a
                href="#application-form"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '12px 26px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '700'
                }}
              >
                <FaWhatsapp size={16} /> SHARE DETAILS ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerApplicationPage;
