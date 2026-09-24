import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import {
  FaWhatsapp, FaArrowRight, FaShieldAlt, FaWifi, FaUtensils,
  FaCar, FaBuilding, FaChevronDown, FaChevronUp, FaStar, FaCheckCircle,
  FaMapMarkerAlt, FaPhone, FaEnvelope
} from 'react-icons/fa';
import imgLivingRoom from '../../assets/livingroom.jpeg';
import imgFurnished from '../../assets/IMG_6221.jpg';
import imgCorporate from '../../assets/IMG_6094.jpg';
import imgLongStay from '../../assets/IMG_0586.jpg';
import imgBuildingHero from '../../assets/building-partner-hero.jpg';
import imgResidences from '../../assets/residences_living_editorial.png';
import imgRoom1 from '../../assets/IMG_7254.jpg';
import imgRoom2 from '../../assets/IMG_7255.jpg';
import imgRoom3 from '../../assets/IMG_7256.jpg';
import imgRoom4 from '../../assets/IMG_7257.jpg';

const PHONE = '919711722273';

const faqs = [
  {
    q: 'What types of serviced apartments do you offer in Gurgaon?',
    a: 'We offer fully furnished 1BHK, 2BHK, 3BHK, and 4BHK serviced apartments across prime Gurgaon locations including DLF Phase 4, Golf Course Road, and Sushant Lok. All apartments include daily 5-star housekeeping, high-speed 300 Mbps Wi-Fi, modular kitchens, and round-the-clock power backup.'
  },
  {
    q: 'Do you provide corporate B2B billing and GST invoices?',
    a: 'Yes. We specialize in corporate housing and provide seamless B2B billing. We issue itemized GST-compliant invoices directly to your company or Indian subsidiary, eliminating the need for personal reimbursements. Our billing aligns with corporate travel expense policies.'
  },
  {
    q: 'Are your Gurgaon apartments suitable for Japanese and Korean expats?',
    a: 'Absolutely. We have dedicated Japanese and Korean expat housing programs with tailored amenities — rice cookers, Japanese breakfast options, proximity to Asian grocery stores, FRRO Form C registration within 24 hours, and English-speaking concierge staff. We have served teams from Toyota, Samsung, Hyundai, and other multinationals.'
  },
  {
    q: 'What is the minimum stay duration in your Gurgaon serviced apartments?',
    a: 'We offer stays starting from 7 nights, with special discounted rates available for monthly (30+ days), quarterly (90+ days), and annual corporate contracts. Long-stay clients enjoy priority support, dedicated account managers, and zero surge pricing.'
  },
  {
    q: 'How quickly can I move in?',
    a: 'In most cases, move-in can be arranged within 24 to 48 hours of confirming your booking. For corporate pre-booked blocks or large team relocations, we can coordinate simultaneous check-ins with airport pickups.'
  }
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderBottom: '1px solid #E8E0D0', padding: '22px 0', cursor: 'pointer' }}
      onClick={() => setOpen(o => !o)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '17px', color: '#1A3C34', margin: 0, fontWeight: '600', paddingRight: '20px', lineHeight: 1.45 }}>{q}</h3>
        <div style={{ color: '#C5A572', flexShrink: 0 }}>{open ? <FaChevronUp /> : <FaChevronDown />}</div>
      </div>
      {open && <div style={{ marginTop: '14px', color: '#555', fontSize: '16px', lineHeight: '1.9' }}>{a}</div>}
    </div>
  );
};

const neighborhoodPages = [
  {
    title: 'DLF Phase 4',
    subtitle: 'Sector 27 · Quiet Tree-Lined Luxury',
    desc: 'Wide avenues, independent floors & premium gated societies — steps from Golf Club & MG Road metro.',
    img: imgRoom1,
    link: '/gurugram/dlf-phase-4',
    badge: 'Most Popular'
  },
  {
    title: 'Golf Course Road',
    subtitle: 'Sectors 42–54 · Financial District',
    desc: 'Walk to Horizon Center, DLF Cyber City & top fine-dining. The apex of Gurgaon corporate living.',
    img: imgLivingRoom,
    link: '/gurugram/golf-course-road',
    badge: 'Premium'
  },
  {
    title: 'Sushant Lok',
    subtitle: 'Sector 27–28 · Residential & Connected',
    desc: 'Quiet residential enclave with direct metro access, Galleria Market, and established expat community.',
    img: imgFurnished,
    link: '/gurugram/sushant-lok',
    badge: 'Expat Favourite'
  },
  {
    title: 'Japanese Expat Housing',
    subtitle: 'Pan-Gurugram · Tailored for Japan Assignees',
    desc: 'Dedicated Japanese amenities, bathtubs, FRRO Form C, and corporate leasing direct to your Japan HQ.',
    img: imgRoom2,
    link: '/gurugram/japanese-expat-housing',
    badge: '🇯🇵 Japanese'
  },
  {
    title: 'Korean Expat Housing',
    subtitle: 'Pan-Gurugram · Samsung & Hyundai Vendors',
    desc: 'Korean TV channels, kimchi refrigerators, proximity to Korean marts, and direct B2B invoicing.',
    img: imgRoom3,
    link: '/gurugram/korean-expat-housing',
    badge: '🇰🇷 Korean'
  }
];

const amenities = [
  { icon: <FaBuilding size={26} color="#C5A572" />, title: 'Fully Furnished', desc: 'Designer furniture, smart TVs & Italian marble finishes.' },
  { icon: <FaUtensils size={26} color="#C5A572" />, title: 'Modular Kitchen', desc: 'Induction, microwave, refrigerator & RO water.' },
  { icon: <FaWifi size={26} color="#C5A572" />, title: '300 Mbps Wi-Fi', desc: 'Dedicated private fibre internet in every unit.' },
  { icon: <FaShieldAlt size={26} color="#C5A572" />, title: '24/7 Security', desc: 'Biometric access, CCTV & manned security gates.' },
  { icon: <FaStar size={26} color="#C5A572" />, title: 'Daily Housekeeping', desc: '5-star linen changes, sanitization & maintenance.' },
  { icon: <FaCar size={26} color="#C5A572" />, title: 'Parking & Transfers', desc: 'Covered parking & private airport cab coordination.' },
];

export default function GurgaonCorporateHousing() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sandanehomes.com/' },
      { '@type': 'ListItem', position: 2, name: 'Gurugram Corporate Housing', item: 'https://www.sandanehomes.com/gurugram-corporate-housing' }
    ]
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Sandane Homes — Gurugram Corporate Housing',
    url: 'https://www.sandanehomes.com/gurugram-corporate-housing',
    telephone: '+919711722273',
    email: 'B2B@sandanehomes.com',
    description: 'Premium fully furnished serviced apartments and corporate housing in Gurugram (Gurgaon). Serving DLF Phase 4, Golf Course Road, Sushant Lok, and expat communities from Japan and Korea.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    },
    areaServed: ['Gurugram', 'Gurgaon', 'DLF Phase 4', 'Golf Course Road', 'Sushant Lok', 'Cyber City'],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Daily Housekeeping', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'High-Speed WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Modular Kitchen', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24/7 Power Backup', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'FRRO Registration Support', value: true },
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <div className="sandane-homes-page">
      <SEO
        title="Gurugram Corporate Housing & Serviced Apartments | Sandane Homes"
        description="Premium fully furnished serviced apartments in Gurugram (Gurgaon) — DLF Phase 4, Golf Course Road & Sushant Lok. B2B corporate leasing, Japanese & Korean expat housing, daily housekeeping & 300 Mbps WiFi."
        canonical="https://www.sandanehomes.com/gurugram-corporate-housing"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={[businessSchema, faqSchema, breadcrumbSchema]}
      />

      <Header showTopBar={false} />

      {/* ── HERO ── */}
      <div style={{
        position: 'relative',
        minHeight: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        padding: '120px 20px 80px',
      }}>
        {/* Background image with parallax-like overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${imgBuildingHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,25,20,0.75) 0%, rgba(10,25,20,0.88) 60%, rgba(10,25,20,0.98) 100%)'
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1100px', margin: '0 auto' }}>
          {/* Location pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(197,165,114,0.15)',
            border: '1px solid rgba(197,165,114,0.5)',
            backdropFilter: 'blur(12px)',
            borderRadius: '30px', padding: '8px 22px',
            color: '#C5A572', fontSize: '13px', letterSpacing: '2.5px',
            textTransform: 'uppercase', fontWeight: '700', marginBottom: '28px'
          }}>
            <FaMapMarkerAlt size={12} /> Gurugram (Gurgaon) · Haryana
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 6vw, 68px)',
            color: '#FFFFFF',
            margin: '0 auto 24px',
            lineHeight: '1.1',
            fontWeight: '700',
            maxWidth: '950px',
            letterSpacing: '-0.5px'
          }}>
            Gurugram Corporate Housing
            <span style={{ display: 'block', color: '#C5A572' }}>& Serviced Apartments</span>
          </h1>

          <p style={{
            fontSize: 'clamp(17px, 2.2vw, 21px)',
            color: '#D0C5B0',
            maxWidth: '780px',
            margin: '0 auto 16px',
            lineHeight: '1.75'
          }}>
            Fully furnished executive residences in Gurgaon's most prestigious addresses — 
            DLF Phase 4, Golf Course Road & Sushant Lok. Built for Fortune 500 professionals, 
            Japanese & Korean expats, and multinational relocation teams.
          </p>

          {/* Trust signals */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '12px',
            justifyContent: 'center', margin: '28px 0 40px'
          }}>
            {['300 Mbps Wi-Fi', 'Daily 5★ Housekeeping', 'B2B GST Billing', 'FRRO Support', 'Flexible Duration'].map(t => (
              <span key={t} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '20px', padding: '6px 16px',
                color: '#E8E0D0', fontSize: '13px', fontWeight: '500'
              }}>
                <FaCheckCircle size={11} color="#C5A572" /> {t}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/residences" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#C5A572', color: '#1A3C34',
              padding: '17px 38px', borderRadius: '40px',
              textDecoration: 'none', fontSize: '17px', fontWeight: '700',
              boxShadow: '0 6px 28px rgba(197,165,114,0.45)',
              transition: 'all 0.3s'
            }}
              onMouseOver={e => { e.currentTarget.style.backgroundColor = '#fff'; }}
              onMouseOut={e => { e.currentTarget.style.backgroundColor = '#C5A572'; }}
            >
              View Available Units <FaArrowRight />
            </Link>
            <a href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20need%20corporate%20housing%20in%20Gurugram.`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#25D366', color: '#fff',
                padding: '17px 34px', borderRadius: '40px',
                textDecoration: 'none', fontSize: '17px', fontWeight: '700',
                transition: 'transform 0.3s'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <FaWhatsapp size={22} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '30px', left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '12px', letterSpacing: '2px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'
        }}>
          <span style={{ textTransform: 'uppercase' }}>Explore Below</span>
          <FaChevronDown style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </div>

      {/* ── NEIGHBOURHOOD PAGES GRID ── */}
      <div style={{ backgroundColor: '#F7F4EF', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>
              Browse by Location
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#1A3C34', margin: '0 auto', maxWidth: '700px', lineHeight: '1.25' }}>
              Choose Your Gurgaon Neighbourhood
            </h2>
            <p style={{ color: '#666', marginTop: '16px', fontSize: '17px', maxWidth: '600px', margin: '16px auto 0', lineHeight: '1.7' }}>
              Each location page has real apartment photos, neighbourhood guides, and direct booking options.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '28px' }}>
            {neighborhoodPages.map((n, i) => (
              <Link
                key={i}
                to={n.link}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div style={{
                  borderRadius: '20px', overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  backgroundColor: '#fff',
                  transition: 'transform 0.35s, box-shadow 0.35s',
                  cursor: 'pointer'
                }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.16)'; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <img
                      src={n.img}
                      alt={`${n.title} serviced apartments in Gurgaon`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    {/* Badge */}
                    <div style={{
                      position: 'absolute', top: '16px', left: '16px',
                      backgroundColor: '#C5A572', color: '#1A3C34',
                      padding: '5px 14px', borderRadius: '20px',
                      fontSize: '12px', fontWeight: '700',
                      letterSpacing: '0.5px'
                    }}>{n.badge}</div>
                    {/* Gradient */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(26,60,52,0.3) 0%, transparent 60%)' }} />
                  </div>
                  {/* Content */}
                  <div style={{ padding: '28px 28px 32px' }}>
                    <p style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 8px' }}>{n.subtitle}</p>
                    <h3 style={{ fontSize: '22px', color: '#1A3C34', margin: '0 0 12px', fontWeight: '700', fontFamily: 'Playfair Display, serif' }}>{n.title}</h3>
                    <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', margin: '0 0 20px' }}>{n.desc}</p>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      color: '#1A3C34', fontWeight: '700', fontSize: '15px'
                    }}>
                      Explore Location <FaArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── AMENITIES GRID ── */}
      <div style={{ padding: '100px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>What's Included</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: '#1A3C34', margin: '0 auto', maxWidth: '700px' }}>
              Every Apartment, Every Stay — The Full Package
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {amenities.map((a, i) => (
              <div key={i} style={{
                padding: '36px 28px',
                border: '1px solid #EEE9E0',
                borderRadius: '16px',
                transition: 'box-shadow 0.3s, transform 0.3s',
                backgroundColor: '#FAFAF8'
              }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(197,165,114,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ marginBottom: '18px' }}>{a.icon}</div>
                <h3 style={{ fontSize: '18px', color: '#1A3C34', margin: '0 0 10px', fontWeight: '700' }}>{a.title}</h3>
                <p style={{ color: '#777', fontSize: '15px', lineHeight: '1.65', margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PHOTO GALLERY ── */}
      <div style={{ padding: '0 0 100px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>Real Apartments</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#1A3C34', margin: 0 }}>Inside Your Gurgaon Residence</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 260px)', gap: '12px', borderRadius: '20px', overflow: 'hidden' }}>
            {[imgRoom4, imgLivingRoom, imgRoom2, imgRoom3].map((img, i) => (
              <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
                <img src={img} alt={`Gurugram serviced apartment interior ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link to="/residences" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: '#1A3C34', fontWeight: '700', fontSize: '15px',
              textDecoration: 'none', borderBottom: '2px solid #C5A572', paddingBottom: '2px'
            }}>
              View Full Residences Portfolio <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── DARK BANNER — WHY SANDANE ── */}
      <div style={{ backgroundColor: '#1A3C34', padding: '100px 20px', color: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '16px' }}>Why Us</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#fff', margin: '0 0 24px', lineHeight: '1.2' }}>
              Gurgaon's Most Trusted Corporate Residences
            </h2>
            <p style={{ color: '#D0C5B0', fontSize: '17px', lineHeight: '1.9', margin: '0 0 32px' }}>
              We have successfully housed senior executives from Toyota, Samsung, Hyundai, and Fortune 500 
              multinationals in Gurgaon. Every apartment runs on one transparent monthly rate — 
              housekeeping, utilities, Wi-Fi, and maintenance all included. No hidden costs. No broker fees. 
              No security deposit headaches.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Zero broker fees — direct booking with Sandane Homes',
                'Flexible duration — 7 nights to 5+ year master leases',
                'Single GST invoice for all utilities & services',
                'Dedicated account manager for corporate HR teams',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <FaCheckCircle size={18} color="#C5A572" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: '#E8E0D0', fontSize: '16px', lineHeight: '1.6' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(197,165,114,0.2)' }}>
              <div style={{ fontSize: '44px', fontFamily: 'Playfair Display, serif', color: '#C5A572', fontWeight: '700' }}>400+</div>
              <div style={{ color: '#D0C5B0', fontSize: '15px', marginTop: '8px' }}>Corporate executives housed in Gurugram</div>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(197,165,114,0.2)' }}>
              <div style={{ fontSize: '44px', fontFamily: 'Playfair Display, serif', color: '#C5A572', fontWeight: '700' }}>24 hrs</div>
              <div style={{ color: '#D0C5B0', fontSize: '15px', marginTop: '8px' }}>Typical time from inquiry to confirmed booking</div>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(197,165,114,0.2)' }}>
              <div style={{ fontSize: '44px', fontFamily: 'Playfair Display, serif', color: '#C5A572', fontWeight: '700' }}>3–9 yr</div>
              <div style={{ color: '#D0C5B0', fontSize: '15px', marginTop: '8px' }}>Corporate master lease terms available</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{ padding: '100px 20px', backgroundColor: '#F7F4EF' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>Common Questions</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 3.5vw, 40px)', color: '#1A3C34', margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ borderTop: '1px solid #E8E0D0' }}>
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0F1F1A 0%, #1A3C34 100%)',
        padding: '110px 20px', textAlign: 'center', color: '#fff'
      }}>
        <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '18px' }}>Get Started Today</p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(30px, 5vw, 52px)', margin: '0 auto 20px', maxWidth: '800px', lineHeight: '1.15' }}>
          Your Perfect Gurgaon Residence Awaits
        </h2>
        <p style={{ fontSize: '18px', color: '#D0C5B0', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.8' }}>
          Whether it's a 1-week project stay or a 3-year expat assignment, we have the right apartment in the right neighbourhood — ready for you.
        </p>
        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
          <Link to="/residences" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            backgroundColor: '#C5A572', color: '#1A3C34',
            padding: '18px 44px', borderRadius: '40px',
            textDecoration: 'none', fontSize: '18px', fontWeight: '700',
            boxShadow: '0 6px 28px rgba(197,165,114,0.45)'
          }}>
            View Residences <FaArrowRight />
          </Link>
          <a href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20need%20corporate%20housing%20in%20Gurugram%20Gurgaon.`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#25D366', color: '#fff',
              padding: '18px 40px', borderRadius: '40px',
              textDecoration: 'none', fontSize: '18px', fontWeight: '700'
            }}>
            <FaWhatsapp size={24} /> WhatsApp Us
          </a>
        </div>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="tel:+919711722273" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#C5A572', textDecoration: 'none', fontSize: '16px' }}>
            <FaPhone size={14} /> +91 97117 22273
          </a>
          <a href="mailto:B2B@sandanehomes.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#C5A572', textDecoration: 'none', fontSize: '16px' }}>
            <FaEnvelope size={14} /> B2B@sandanehomes.com
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
