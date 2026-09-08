import React, { useState } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import {
  FaBuilding, FaHandshake, FaChartLine, FaShieldAlt, FaKey,
  FaCheckCircle, FaPercentage, FaTools, FaWhatsapp, FaArrowRight,
  FaFileContract, FaRegSmile, FaCrown
} from 'react-icons/fa';
import './SandaneHomes.css';

const PartnershipPage = () => {
  const [propertyType, setPropertyType] = useState('Full Building');
  const [unitsCount, setUnitsCount] = useState('10-25 Units');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Greater Noida');
  const [locality, setLocality] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sandane Homes Partner Team! I am interested in partnering with you to monetize my property.\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Property Type:* ${propertyType}\n` +
      `*Units/Flats:* ${unitsCount}\n` +
      `*Location:* ${locality}, ${city}\n` +
      `*Notes:* ${message}`;

    window.open(`https://wa.me/919711722273?text=${encodeURIComponent(text)}`, '_blank');
    setFormSubmitted(true);
  };

  const partnerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sandane Homes Partner Program — Property Monetization & Management",
    "provider": {
      "@type": "Organization",
      "name": "Sandane Homes",
      "url": "https://www.sandanehomes.com"
    },
    "description": "Monetize your apartments, luxury flats, or full residential buildings with Sandane Homes. Guaranteed fixed monthly revenue or high profit-sharing model backed by corporate expat stays in Greater Noida, Noida, and Gurugram.",
    "areaServed": ["Greater Noida", "Noida", "Gurugram", "Delhi NCR"]
  };

  return (
    <div className="catarina-services sandane-homes-page" style={{ backgroundColor: '#FAF8F5', minHeight: '100vh' }}>
      <SEO
        title="Partner With Us | Monetize Your Apartments & Buildings — Sandane Homes"
        description="Partner your apartments, flats, or entire residential buildings with Sandane Homes. High guaranteed monthly revenue, 100% property maintenance, and corporate MNC guest management in Greater Noida, Noida & Gurugram."
        canonical="https://www.sandanehomes.com/partner-with-us"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={partnerSchema}
      />

      <Header showTopBar={false} />

      {/* ── HERO BANNER ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1C2D42 0%, #0F172A 60%, #1A3C34 100%)',
        color: '#FFFFFF',
        padding: '120px 20px 100px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Subtle Decorative Backdrop Elements */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,165,114,0.15) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(197, 165, 114, 0.15)',
            border: '1px solid #C5A572',
            color: '#C5A572',
            padding: '8px 20px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '24px'
          }}>
            <FaHandshake /> PROPERTY PARTNERSHIP PROGRAM
          </span>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: '1.15',
            color: '#FFFFFF',
            marginBottom: '24px',
            fontWeight: '600'
          }}>
            Unlock High Guaranteed Revenue for Your Apartments &amp; Buildings
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#E0E6ED',
            lineHeight: '1.7',
            maxWidth: '750px',
            margin: '0 auto 40px',
            fontWeight: '300'
          }}>
            Partner your standalone flats, gated apartments, or entire residential towers with <strong>Sandane Homes</strong>. We transform your asset into high-yield luxury corporate serviced residences leased by Japanese, Korean &amp; MNC executives across Greater Noida, Noida &amp; Gurugram.
          </p>

          <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#partner-form"
              style={{
                backgroundColor: '#C5A572',
                color: '#0F172A',
                padding: '16px 36px',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 6px 25px rgba(197, 165, 114, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              List Your Property Now &rarr;
            </a>

            <a
              href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20want%20to%20discuss%20a%20property%20partnership%20for%20my%20apartments/building."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#FFFFFF',
                padding: '16px 36px',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <FaWhatsapp color="#25D366" size={20} /> Speak with Partner Desk
            </a>
          </div>
        </div>
      </section>

      {/* ── KEY METRICS / STATS BAR ── */}
      <section style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EAE5DF',
        padding: '30px 20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          textAlign: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '32px', fontFamily: 'Playfair Display, serif', color: '#1A3C34', margin: 0 }}>100%</h3>
            <p style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px' }}>Guaranteed Rent &amp; Zero Default</p>
          </div>
          <div>
            <h3 style={{ fontSize: '32px', fontFamily: 'Playfair Display, serif', color: '#1A3C34', margin: 0 }}>30% – 50%</h3>
            <p style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px' }}>Higher Yield Than Regular Lease</p>
          </div>
          <div>
            <h3 style={{ fontSize: '32px', fontFamily: 'Playfair Display, serif', color: '#1A3C34', margin: 0 }}>Zero</h3>
            <p style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px' }}>Maintenance &amp; Tenant Hassles</p>
          </div>
          <div>
            <h3 style={{ fontSize: '32px', fontFamily: 'Playfair Display, serif', color: '#1A3C34', margin: 0 }}>Corporate</h3>
            <p style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px' }}>Japanese &amp; MNC Expat Guests</p>
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER WITH US (PROPOSITION) ── */}
      <section style={{ padding: '90px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '12px', color: '#C5A572', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '700' }}>
            Why Property Owners Choose Sandane
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#1C2D42', margin: '12px 0 16px' }}>
            Turn Your Property Into a High-Yield Luxury Asset
          </h2>
          <p style={{ color: '#666', fontSize: '17px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
            Whether you own individual luxury apartments, multiple units in a society, or an entire standalone residential building, we handle design, furnishing, operations, and corporate tenanting.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {/* Card 1 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '40px 30px',
            border: '1px solid #EAE5DF',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '14px',
              backgroundColor: 'rgba(26,60,52,0.08)', color: '#1A3C34',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '26px', marginBottom: '24px'
            }}>
              <FaChartLine />
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#1C2D42', marginBottom: '14px' }}>
              Guaranteed High Fixed Revenue or Revenue-Share
            </h3>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.7' }}>
              Enjoy predictable, premium monthly income with guaranteed fixed rents or opt for our high-upside corporate revenue share model backed by long-stay Japanese expat contracts.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '40px 30px',
            border: '1px solid #EAE5DF',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '14px',
              backgroundColor: 'rgba(197,165,114,0.15)', color: '#C5A572',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '26px', marginBottom: '24px'
            }}>
              <FaCrown />
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#1C2D42', marginBottom: '14px' }}>
              5-Star Upkeep &amp; Interior Transformation
            </h3>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.7' }}>
              We upgrade and maintain your property to Japanese expat luxury standards. Daily professional housekeeping, preventive plumbing/electrical maintenance, and pristine care.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '40px 30px',
            border: '1px solid #EAE5DF',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '14px',
              backgroundColor: 'rgba(26,60,52,0.08)', color: '#1A3C34',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '26px', marginBottom: '24px'
            }}>
              <FaShieldAlt />
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#1C2D42', marginBottom: '14px' }}>
              Verified MNC Corporate Tenants Only
            </h3>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.7' }}>
              No tenant dispute risks or wear-and-tear damage. Your property will host verified Japanese, Korean, and multinational enterprise directors, country heads, and auditors.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROPERTY TYPES WE PARTNER WITH ── */}
      <section style={{ backgroundColor: '#1C2D42', color: '#FFFFFF', padding: '90px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', color: '#C5A572', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '700' }}>
            Asset Portfolio
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#FFFFFF', margin: '14px 0 20px' }}>
            Properties We Are Looking For
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '16px', maxWidth: '650px', margin: '0 auto 50px', lineHeight: '1.7' }}>
            We are actively expanding our portfolio across Greater Noida, Noida, Yamuna Expressway corridor, and Gurugram.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            textAlign: 'left'
          }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px 28px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <FaBuilding size={32} color="#C5A572" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', color: '#FFF', fontFamily: 'Playfair Display, serif', marginBottom: '10px' }}>Entire Buildings &amp; Towers</h3>
              <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6' }}>
                Standalone residential buildings, boutique guest house structures, or residential blocks (10 to 50+ flats). Master long-term leases with fixed returns.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px 28px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <FaKey size={32} color="#C5A572" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', color: '#FFF', fontFamily: 'Playfair Display, serif', marginBottom: '10px' }}>Gated Society Apartments</h3>
              <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6' }}>
                Fully furnished or unfurnished 2BHK, 3BHK &amp; 4BHK apartments in premium societies (Ansal Golf Links, Jaypee Greens, DLF, Emaar, M3M, etc.).
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px 28px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <FaCrown size={32} color="#C5A572" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', color: '#FFF', fontFamily: 'Playfair Display, serif', marginBottom: '10px' }}>Luxury Villas &amp; Penthouses</h3>
              <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6' }}>
                High-end independent villas, duplexes, and penthouses suitable for CXOs, country heads, and foreign corporate delegations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP FORM SECTION ── */}
      <section id="partner-form" style={{ padding: '90px 20px', maxWidth: '850px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '50px 40px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
          border: '1px solid #EAE5DF'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', color: '#C5A572', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '800' }}>
              Instant Property Evaluation
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#1C2D42', margin: '10px 0 12px' }}>
              Partner Your Property With Sandane Homes
            </h2>
            <p style={{ color: '#666', fontSize: '15px' }}>
              Fill in your property details below and our asset acquisition team will reach out within 2 hours with an estimated revenue proposal.
            </p>
          </div>

          {formSubmitted ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              backgroundColor: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '14px',
              color: '#166534'
            }}>
              <FaCheckCircle size={48} color="#22C55E" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '24px', fontFamily: 'Playfair Display, serif', marginBottom: '10px' }}>Thank You for Your Submission!</h3>
              <p style={{ fontSize: '15px', color: '#15803D' }}>
                We have opened WhatsApp to connect you directly with our Partner Acquisition Director.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px' }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px' }}>Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px' }}>Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px' }}>Property Location (City) *</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                      width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none', backgroundColor: '#FFF'
                    }}
                  >
                    <option value="Greater Noida">Greater Noida</option>
                    <option value="Noida">Noida</option>
                    <option value="Yamuna Expressway / YEIDA">Yamuna Expressway / YEIDA</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px' }}>Property Type *</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    style={{
                      width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none', backgroundColor: '#FFF'
                    }}
                  >
                    <option value="Full Building / Tower">Full Standalone Building / Tower</option>
                    <option value="Multiple Flats in Society">Multiple Flats in Gated Society</option>
                    <option value="Single Luxury Apartment">Single Luxury Apartment (2/3/4 BHK)</option>
                    <option value="Independent Villa">Independent Villa / Penthouse</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px' }}>Locality / Society Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ansal Golf Links, Jaypee Greens, DLF Phase 5"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    style={{
                      width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', display: 'block', marginBottom: '8px' }}>Additional Property Details</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about total area, furnishing status, floor number, expected rent, etc."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none', resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '18px',
                  backgroundColor: '#1A3C34',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(26,60,52,0.2)',
                  transition: 'all 0.3s ease',
                  marginTop: '10px'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#C5A572'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1A3C34'}
              >
                Submit Property for Partner Evaluation &rarr;
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnershipPage;
