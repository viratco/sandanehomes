import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import {
  FaBuilding, FaHandshake, FaChartLine, FaShieldAlt, FaKey,
  FaCheckCircle, FaPercentage, FaTools, FaWhatsapp, FaArrowRight,
  FaFileContract, FaRegSmile, FaCrown, FaStar, FaQuoteLeft,
  FaHome, FaBriefcase, FaUserCheck, FaCog, FaMoneyBillWave, FaHeadset,
  FaChevronDown, FaChevronUp, FaQuestionCircle
} from 'react-icons/fa';
import './SandaneHomes.css';

import heroImg from '../../assets/residences_living_editorial.png';
import facadeImg from '../../assets/building-partner-hero.jpg';
import interiorImg from '../../assets/abstract_luxury_interior.png';
import livingImg from '../../assets/livingroom.jpeg';

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
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sandane Homes Partner Team! I am interested in partnering to monetize my property.\n\n` +
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

  const partnerFaqs = [
    {
      q: "How does the guaranteed fixed lease model work?",
      a: "Sandane Homes signs a multi-year master lease contract with you (3 to 9 years). We deposit a guaranteed fixed monthly rent directly into your bank account on the 1st of every month without fail, regardless of whether your property is occupied or vacant."
    },
    {
      q: "What profile of tenants will be staying in my property?",
      a: "Your property is leased exclusively to verified corporate professionals, Japanese & Korean expatriate managers, and visiting technical specialists on official assignments in Greater Noida, Noida, and Gurugram. All guests are company-vetted with background checks."
    },
    {
      q: "Who pays for daily housekeeping, maintenance, and repairs?",
      a: "Sandane Homes assumes 100% of operational responsibility. Our in-house hospitality team provides daily 5-star housekeeping and handles plumbing, electrical, and appliance repairs at zero additional expense to you."
    },
    {
      q: "Can I partner an entire residential building or tower?",
      a: "Yes! We specialize in acquiring full standalone residential towers and builder blocks (10 to 50+ units) across Greater Noida, Noida, Yamuna Expressway, and Gurugram, transforming the entire asset into a branded Sandane Homes serviced residence."
    },
    {
      q: "How does Sandane Homes perform compared to traditional single-tenant renting?",
      a: "Traditional renting causes 1-2 months of vacancy losses every year, late payments, tenant damage, and constant repair calls. Sandane Homes eliminates vacancy risk, guarantees payouts on the 1st of every month, provides free maintenance, and returns your property in showroom condition."
    },
    {
      q: "Which locations in Delhi NCR are eligible for partnership?",
      a: "We currently acquire properties in Greater Noida (Ansal Golf Links, Jaypee Greens, Godrej Golf Link, Knowledge Park), Noida Expressway, Yamuna Expressway (YEIDA / Noida International Airport corridor), and Gurugram (Golf Course Road, Cyber City, MG Road corridor)."
    }
  ];

  const partnerSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sandane Homes Partner Program — Property Monetization & Managed Leasing",
      "provider": {
        "@type": "Organization",
        "name": "Sandane Homes",
        "url": "https://www.sandanehomes.com"
      },
      "description": "Monetize your apartments, luxury flats, or full residential buildings with Sandane Homes. Guaranteed fixed monthly revenue or high profit-sharing model backed by corporate expat stays in Greater Noida, Noida, and Gurugram.",
      "areaServed": ["Greater Noida", "Noida", "Gurugram", "Yamuna Expressway", "Delhi NCR"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": partnerFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sandanehomes.com/" },
        { "@type": "ListItem", "position": 2, "name": "Partner With Us", "item": "https://www.sandanehomes.com/partner-with-us" }
      ]
    }
  ];

  return (
    <div className="catarina-services sandane-homes-page" style={{ backgroundColor: '#F4F0EB', minHeight: '100vh', overflowX: 'hidden' }}>
      <SEO
        title="Partner With Us | Monetize Your Apartments & Buildings — Sandane Homes"
        description="Partner your apartments, flats, or entire residential buildings with Sandane Homes. High guaranteed monthly revenue, 100% property maintenance, and corporate MNC guest management in Greater Noida, Noida & Gurugram."
        canonical="https://www.sandanehomes.com/partner-with-us"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={partnerSchema}
      />

      <Header showTopBar={false} />

      {/* ── EDITORIAL HERO SECTION ("Bel Sognatore" Sandane Signature Style) ── */}
      <div className="editorial-container" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        {/* Large Typography Background Watermark */}
        <div className="editorial-title-bg">
          <h1>Partner</h1>
          <h1>Monetize</h1>
        </div>

        {/* Left Column (Hero Image + Overlapping Glass Card) */}
        <div className="editorial-left-col">
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
            <img src={heroImg} alt="Luxury Managed Residence" className="residences-clickable-photo" style={{ width: '100%', height: '520px', objectFit: 'cover' }} />
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
              letterSpacing: '1px',
              border: '1px solid rgba(197,165,114,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <FaCrown /> PROPERTY MONETIZATION PROGRAM
            </div>
          </div>
          
          <div className="editorial-left-text" style={{ marginTop: '-60px', position: 'relative', zIndex: 3 }}>
            <div className="editorial-glass-card" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid #E5DFD5', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' }}>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#4A463F', fontFamily: 'Georgia, serif', margin: 0 }}>
                Transform your vacant or underperforming apartments into <i>high-yield corporate residences</i> leased exclusively to Japanese, Korean &amp; MNC executives.
              </p>
            </div>
            
            <p className="editorial-subtext" style={{ color: '#8B7355', fontWeight: '600', letterSpacing: '1px' }}>
              \\ GUARANTEED LEASE • REVENUE SHARE • 100% MAINTENANCE
            </p>
          </div>
        </div>

        {/* Right Column (Hero Headings & Direct CTAs) */}
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
            <FaHandshake /> FOR PROPERTY OWNERS &amp; BUILDING DEVELOPERS
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(34px, 4.5vw, 54px)',
            lineHeight: '1.15',
            color: '#111111',
            marginBottom: '24px',
            fontWeight: '600'
          }}>
            Unlock Maximum Yield for Your Apartments &amp; Buildings
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#555555',
            marginBottom: '32px',
            fontFamily: 'Georgia, serif'
          }}>
            Whether you own a single luxury flat, multiple society apartments, or an entire standalone residential building in <strong>Greater Noida, Noida, or Gurugram</strong> — Sandane Homes manages your asset with 5-star hospitality standards, paying you guaranteed predictable income without the hassle of traditional renting.
          </p>

          {/* Quick Features List */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> Guaranteed 1st-of-month Payouts
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> Verified Japanese &amp; MNC Guests
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> 100% Free Maintenance &amp; Care
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111', fontWeight: '600', fontSize: '14px' }}>
              <FaCheckCircle color="#8B7355" size={18} /> Zero Vacancy &amp; Default Risk
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#partner-form"
              style={{
                backgroundColor: '#1C2D42',
                color: '#FFFFFF',
                padding: '16px 36px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '1px',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(28,45,66,0.25)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              MONETIZE PROPERTY <FaArrowRight size={13} />
            </a>

            <a
              href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20want%20to%20discuss%20a%20property%20partnership%20for%20my%20apartments/building."
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
                boxShadow: '0 8px 25px rgba(37,211,102,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <FaWhatsapp size={18} /> WHATSAPP PARTNER DESK
            </a>
          </div>
        </div>
      </div>

      {/* ── KEY PERFORMANCE METRICS BAR ── */}
      <section style={{ backgroundColor: '#FAF8F5', borderTop: '1px solid #E8E2D9', borderBottom: '1px solid #E8E2D9', padding: '50px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', textAlign: 'center' }}>
          <div style={{ padding: '20px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #EAE4DC', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#8B7355', margin: '0 0 6px 0', fontWeight: '700' }}>100%</h3>
            <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', color: '#111111', textTransform: 'uppercase', margin: 0 }}>Guaranteed Lease &amp; Zero Default</p>
            <span style={{ fontSize: '12px', color: '#777', display: 'block', marginTop: '4px' }}>Rent paid on the 1st of every month</span>
          </div>

          <div style={{ padding: '20px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #EAE4DC', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#8B7355', margin: '0 0 6px 0', fontWeight: '700' }}>30% – 50%</h3>
            <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', color: '#111111', textTransform: 'uppercase', margin: 0 }}>Higher Annual Yield</p>
            <span style={{ fontSize: '12px', color: '#777', display: 'block', marginTop: '4px' }}>Compared to conventional long leases</span>
          </div>

          <div style={{ padding: '20px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #EAE4DC', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#8B7355', margin: '0 0 6px 0', fontWeight: '700' }}>ZERO</h3>
            <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', color: '#111111', textTransform: 'uppercase', margin: 0 }}>Maintenance &amp; Tenant Hassle</p>
            <span style={{ fontSize: '12px', color: '#777', display: 'block', marginTop: '4px' }}>Free repairs, deep cleaning &amp; upkeep</span>
          </div>

          <div style={{ padding: '20px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #EAE4DC', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#8B7355', margin: '0 0 6px 0', fontWeight: '700' }}>MNC</h3>
            <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', color: '#111111', textTransform: 'uppercase', margin: 0 }}>Japanese &amp; Korean Expats</p>
            <span style={{ fontSize: '12px', color: '#777', display: 'block', marginTop: '4px' }}>High-grade executive corporate clients</span>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP MODELS SECTION (Dark Navy Contrast Luxury Section) ── */}
      <section style={{ backgroundColor: '#1C2D42', color: '#FFFFFF', padding: '90px 20px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>FLEXIBLE ENGAGEMENT MODELS</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: '#FFFFFF', marginTop: '10px', marginBottom: '16px' }}>
              Choose How You Want to Monetize
            </h2>
            <p style={{ fontSize: '15px', color: '#C3D0DF', lineHeight: '1.7', fontFamily: 'Georgia, serif' }}>
              We tailor our agreement to match your financial goals — whether you prefer steady guaranteed fixed income or shared revenue upside.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {/* Model 1 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(197, 165, 114, 0.3)',
              borderRadius: '16px',
              padding: '40px 30px',
              backdropFilter: 'blur(10px)',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                top: '-15px',
                right: '30px',
                background: '#C5A572',
                color: '#0F172A',
                padding: '4px 14px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1px'
              }}>MOST POPULAR</span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <FaFileContract size={28} color="#C5A572" />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: 0 }}>Guaranteed Fixed Lease</h3>
              </div>

              <p style={{ color: '#E0E6ED', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
                Receive a <strong>fixed monthly lease payout</strong> deposited to your bank account every 1st of the month, regardless of occupancy status.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '14px', color: '#D1DCE5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#C5A572" /> 100% Fixed monthly income guaranteed
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '14px', color: '#D1DCE5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#C5A572" /> Multi-year contract options (3 to 9 years)
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '14px', color: '#D1DCE5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#C5A572" /> Sandane Homes bears 100% vacancy risk
                </li>
                <li style={{ padding: '8px 0', fontSize: '14px', color: '#D1DCE5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#C5A572" /> Complete operational &amp; repair coverage
                </li>
              </ul>

              <a href="#partner-form" style={{
                display: 'block',
                textAlign: 'center',
                backgroundColor: '#C5A572',
                color: '#0F172A',
                padding: '14px',
                borderRadius: '30px',
                fontWeight: '700',
                fontSize: '13px',
                letterSpacing: '1px',
                textDecoration: 'none'
              }}>SELECT FIXED LEASE MODEL</a>
            </div>

            {/* Model 2 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '16px',
              padding: '40px 30px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <FaChartLine size={28} color="#C5A572" />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFFFFF', margin: 0 }}>Revenue Sharing Partner</h3>
              </div>

              <p style={{ color: '#E0E6ED', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
                Earn a high percentage share of monthly gross revenue generated from corporate expat stays, maximizing peak market yields.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '14px', color: '#D1DCE5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#C5A572" /> Higher upside earnings (30% to 50% extra yield)
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '14px', color: '#D1DCE5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#C5A572" /> Monthly transparent financial statement
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '14px', color: '#D1DCE5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#C5A572" /> Full hospitality management &amp; corporate booking desk
                </li>
                <li style={{ padding: '8px 0', fontSize: '14px', color: '#D1DCE5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#C5A572" /> 5-Star housekeeping &amp; maintenance included
                </li>
              </ul>

              <a href="#partner-form" style={{
                display: 'block',
                textAlign: 'center',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: '30px',
                fontWeight: '700',
                fontSize: '13px',
                letterSpacing: '1px',
                textDecoration: 'none'
              }}>SELECT REVENUE SHARE MODEL</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASSETS PORTFOLIO WE MONETIZE ── */}
      <section style={{ padding: '90px 20px', backgroundColor: '#F4F0EB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <span style={{ color: '#8B7355', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>TARGET PROPERTIES</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: '#111111', marginTop: '10px' }}>
              Properties We Are Currently Acquiring
            </h2>
            <p style={{ fontSize: '15px', color: '#555555', fontFamily: 'Georgia, serif' }}>
              We partner across key commercial hubs in Greater Noida (Ansal Golf Links, Jaypee Greens, Godrej Golf Link), Noida Expressway &amp; Gurugram.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {/* Card 1 */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E6E0D6', boxShadow: '0 10px 25px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
              <img src={facadeImg} alt="Full Building Partnership" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1px', color: '#8B7355', textTransform: 'uppercase' }}>HIGH YIELD PORTFOLIO</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#111', margin: '8px 0 12px 0' }}>Full Residential Towers &amp; Blocks</h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                    Entire standalone apartment buildings or builder floors (10 to 50+ units). Master lease your tower under one consolidated agreement.
                  </p>
                </div>
                <Link to="/partner/gurugram-building-owners" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#8B7355',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  textDecoration: 'none'
                }}>
                  FOR GURUGRAM BUILDING OWNERS &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E6E0D6', boxShadow: '0 10px 25px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
              <img src={livingImg} alt="Society Flat Partnership" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1px', color: '#8B7355', textTransform: 'uppercase' }}>GATED SOCIETIES</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#111', margin: '8px 0 12px 0' }}>2BHK, 3BHK &amp; 4BHK Apartments</h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                    Individual or multiple flats inside high-end gated societies (Jaypee Greens, Ansal Golf Links, Godrej, ATS, Central Park, DLF).
                  </p>
                </div>
                <Link to="/partner/gurugram-home-owners" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#8B7355',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  textDecoration: 'none'
                }}>
                  FOR GURUGRAM HOME OWNERS &rarr;
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E6E0D6', boxShadow: '0 10px 25px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
              <img src={interiorImg} alt="Luxury Villa Partnership" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1px', color: '#8B7355', textTransform: 'uppercase' }}>PREMIUM ASSETS</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#111', margin: '8px 0 12px 0' }}>Luxury Villas &amp; Executive Suites</h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                    High-end luxury villas and penthouses leased to CXOs, country managers, and senior Japanese / Korean expatriate directors.
                  </p>
                </div>
                <a href="#partner-form" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#8B7355',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  textDecoration: 'none'
                }}>
                  GET VILLA EVALUATION &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OWNER BENEFITS GRID ── */}
      <section style={{ backgroundColor: '#FAF8F5', borderTop: '1px solid #E8E2D9', borderBottom: '1px solid #E8E2D9', padding: '90px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
            <span style={{ color: '#8B7355', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>WHY PARTNER WITH US</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: '#111111', marginTop: '10px' }}>
              Total Peace of Mind for Property Owners
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '12px', border: '1px solid #EAE4DC' }}>
              <FaHome size={32} color="#8B7355" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#111', margin: '0 0 10px 0' }}>Daily Professional Housekeeping</h4>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: 0 }}>Your property is deep cleaned daily with 5-star linen care, keeping it in showroom condition at all times.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '12px', border: '1px solid #EAE4DC' }}>
              <FaUserCheck size={32} color="#8B7355" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#111', margin: '0 0 10px 0' }}>Verified Corporate MNC Tenants</h4>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: 0 }}>No unvetted walk-in guests. Stays are arranged directly for Japanese &amp; Korean engineers and MNC executives.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '12px', border: '1px solid #EAE4DC' }}>
              <FaCog size={32} color="#8B7355" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#111', margin: '0 0 10px 0' }}>100% Free Maintenance &amp; Repairs</h4>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: 0 }}>Plumbing, electrical, appliance servicing, and minor repairs are handled entirely by Sandane Homes at no cost to you.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '12px', border: '1px solid #EAE4DC' }}>
              <FaMoneyBillWave size={32} color="#8B7355" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#111', margin: '0 0 10px 0' }}>Guaranteed Monthly Payouts</h4>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: 0 }}>Never chase rent again. Direct bank transfers delivered on the 1st of every month without fail.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '12px', border: '1px solid #EAE4DC' }}>
              <FaShieldAlt size={32} color="#8B7355" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#111', margin: '0 0 10px 0' }}>Zero Wear &amp; Tear Protection</h4>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: 0 }}>We maintain your asset to the highest luxury hospitality standard, returning your property in immaculate condition.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '12px', border: '1px solid #EAE4DC' }}>
              <FaHeadset size={32} color="#8B7355" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#111', margin: '0 0 10px 0' }}>Dedicated Account Manager</h4>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: 0 }}>You get a direct dedicated relationship manager for instant updates, agreement renewals, and financial reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE EVALUATION & INQUIRY FORM ── */}
      <section id="partner-form" style={{ padding: '90px 20px', backgroundColor: '#F4F0EB' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: ' clamp(30px, 5vw, 60px)',
            boxShadow: '0 15px 45px rgba(0,0,0,0.06)',
            border: '1px solid #E4DDD3'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ color: '#8B7355', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>GET A FREE PROPERTY EVALUATION</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#111111', marginTop: '8px', marginBottom: '12px' }}>
                Monetize Your Property With Sandane Homes
              </h2>
              <p style={{ fontSize: '14px', color: '#666', fontFamily: 'Georgia, serif' }}>
                Fill in your property details below. Our partner acquisition desk will analyze your asset and present a guaranteed revenue proposal within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: 'rgba(37, 211, 102, 0.08)',
                border: '1px solid #25D366',
                borderRadius: '14px'
              }}>
                <FaCheckCircle size={48} color="#25D366" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#111', margin: '0 0 10px 0' }}>Thank You! Request Sent</h3>
                <p style={{ fontSize: '14px', color: '#555', margin: 0 }}>
                  We have forwarded your property details to our WhatsApp partner desk. We will reach out to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #DDD', fontSize: '14px', outline: 'none', backgroundColor: '#FAF8F5' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #DDD', fontSize: '14px', outline: 'none', backgroundColor: '#FAF8F5' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. rajesh@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #DDD', fontSize: '14px', outline: 'none', backgroundColor: '#FAF8F5' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>City Location *</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #DDD', fontSize: '14px', outline: 'none', backgroundColor: '#FAF8F5' }}
                    >
                      <option value="Greater Noida">Greater Noida</option>
                      <option value="Noida">Noida / Noida Expressway</option>
                      <option value="Gurugram">Gurugram (Golf Course / Cyber City)</option>
                      <option value="Yamuna Expressway">Yamuna Expressway / YEIDA</option>
                      <option value="Delhi NCR">Other Delhi NCR</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Property Category *</label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #DDD', fontSize: '14px', outline: 'none', backgroundColor: '#FAF8F5' }}
                    >
                      <option value="Full Building">Entire Residential Building / Tower</option>
                      <option value="Gated Society Flat">Gated Society Apartment (2/3/4 BHK)</option>
                      <option value="Luxury Villa">Luxury Villa / Independent House</option>
                      <option value="Multiple Units">Multiple Flats (3+ Units)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Units Count / Config</label>
                    <select
                      value={unitsCount}
                      onChange={(e) => setUnitsCount(e.target.value)}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #DDD', fontSize: '14px', outline: 'none', backgroundColor: '#FAF8F5' }}
                    >
                      <option value="1 Unit (2BHK/3BHK)">1 Apartment (2BHK / 3BHK)</option>
                      <option value="2-5 Units">2 – 5 Apartments</option>
                      <option value="6-15 Units">6 – 15 Apartments</option>
                      <option value="Full Building (15+ Units)">Full Tower / Building (15+ Units)</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Society Name / Specific Locality</label>
                  <input
                    type="text"
                    placeholder="e.g. Jaypee Greens / Ansal Golf Link-1 / Golf Course Road Sector 54"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #DDD', fontSize: '14px', outline: 'none', backgroundColor: '#FAF8F5' }}
                  />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Additional Details / Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Furnishing state, current rental status, or preferred payout structure..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #DDD', fontSize: '14px', outline: 'none', backgroundColor: '#FAF8F5', resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#1C2D42',
                    color: '#FFFFFF',
                    padding: '18px',
                    borderRadius: '30px',
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '1.5px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(28,45,66,0.3)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <FaWhatsapp size={20} color="#25D366" /> SUBMIT &amp; CONNECT VIA WHATSAPP
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (SEO Rich Snippets) ── */}
      <section style={{ padding: '90px 20px', backgroundColor: '#FAF8F5', borderTop: '1px solid #E8E2D9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#8B7355', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>PROPERTY OWNER FAQS</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 40px)', color: '#111111', marginTop: '8px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '15px', color: '#666', fontFamily: 'Georgia, serif' }}>
              Everything you need to know about partnering your property asset with Sandane Homes.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {partnerFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #E4DDD3',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: isOpen ? '0 8px 25px rgba(0,0,0,0.05)' : 'none'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '22px 26px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#111111',
                      fontFamily: 'Playfair Display, serif'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <FaChevronUp color="#8B7355" /> : <FaChevronDown color="#8B7355" />}
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 26px 22px',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      color: '#555555',
                      borderTop: '1px solid #FAF8F5',
                      fontFamily: 'Georgia, serif'
                    }}>
                      {faq.a}
                    </div>
                  )}
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

export default PartnershipPage;
