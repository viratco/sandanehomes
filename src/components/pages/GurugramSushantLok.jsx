import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import { FaWhatsapp, FaArrowRight, FaChevronDown, FaChevronUp, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding } from 'react-icons/fa';
import imgLivingRoom from '../../assets/livingroom.jpeg';
import imgRoom1 from '../../assets/IMG_7254.jpg';
import imgRoom2 from '../../assets/IMG_7255.jpg';
import imgRoom3 from '../../assets/IMG_7256.jpg';
import imgRoom4 from '../../assets/IMG_7257.jpg';
import imgFurnished from '../../assets/IMG_6221.jpg';
import imgCorporate from '../../assets/IMG_6094.jpg';
import imgBuilding from '../../assets/building-partner-hero.jpg';

const PHONE = '919711722273';

const faqs = [
  {
    q: 'Why do expat families prefer Sushant Lok 1 in Gurgaon?',
    a: 'Sushant Lok 1 is one of Gurgaon\'s most established and community-rich residential enclaves. It features wide leafy avenues, a low population density, and high security. Residents can walk to Galleria Market, a major expat hub with international supermarkets, restaurants, and cafes. The area is served by the MG Road and Iffco Chowk Metro stations, and commuting to Cyber City takes just 10–15 minutes.'
  },
  {
    q: 'Are the Sushant Lok apartments in an apartment complex or independent floors?',
    a: 'Our Sushant Lok portfolio includes both premium gated apartment complexes and select independent builder floors in Block A and B. Independent floors offer more privacy and a larger garden terrace. Exact property type and building details are confirmed upon booking inquiry.'
  },
  {
    q: 'Is Sushant Lok a safe area for single women expats?',
    a: 'Sushant Lok 1 is consistently rated as one of the safest residential zones in the entire Delhi NCR. All our properties are in gated premises with 24/7 security guards, CCTV coverage, and intercom systems. The area is well-lit and has an active, established resident community.'
  },
  {
    q: 'What is the commute time from Sushant Lok to major tech parks?',
    a: 'Commute from Sushant Lok to DLF Cyber City is typically 10–14 minutes by car. Golf Course Road (Sectors 42–54) is 8–12 minutes. Udyog Vihar is 12–18 minutes. The MG Road Yellow Line Metro provides rapid access to Delhi and connects to the rest of the city seamlessly.'
  }
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E8E0D0', padding: '22px 0', cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '17px', color: '#1A3C34', margin: 0, fontWeight: '600', paddingRight: '20px', lineHeight: 1.45 }}>{q}</h3>
        <div style={{ color: '#C5A572', flexShrink: 0 }}>{open ? <FaChevronUp /> : <FaChevronDown />}</div>
      </div>
      {open && <div style={{ marginTop: '14px', color: '#555', fontSize: '16px', lineHeight: '1.9' }}>{a}</div>}
    </div>
  );
};

export default function GurugramSushantLok() {
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sandanehomes.com/' },
      { '@type': 'ListItem', position: 2, name: 'Gurugram Corporate Housing', item: 'https://www.sandanehomes.com/gurugram-corporate-housing' },
      { '@type': 'ListItem', position: 3, name: 'Sushant Lok Gurgaon Serviced Apartments', item: 'https://www.sandanehomes.com/gurugram/sushant-lok' }
    ]
  };
  const apartmentSchema = {
    '@context': 'https://schema.org', '@type': 'ApartmentComplex',
    name: 'Sandane Homes — Sushant Lok Gurgaon Serviced Apartments',
    description: 'Luxury serviced apartments in Sushant Lok 1 (Sector 27-28) Gurgaon. Quiet, safe residential enclave with Galleria Market & MG Road Metro proximity.',
    url: 'https://www.sandanehomes.com/gurugram/sushant-lok',
    telephone: '+919711722273',
    address: { '@type': 'PostalAddress', streetAddress: 'Sushant Lok 1, Sector 27-28', addressLocality: 'Gurugram', addressRegion: 'Haryana', addressCountry: 'IN' },
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };

  return (
    <div className="sandane-homes-page">
      <SEO
        title="Serviced Apartments in Sushant Lok Gurgaon | Sector 27-28 Expat Housing | Sandane"
        description="Premium serviced apartments in Sushant Lok 1 (Sector 27-28) Gurgaon. Safe, quiet residential enclave steps from Galleria Market & MG Road Metro. Fully furnished 2BHK/3BHK with daily housekeeping & B2B billing."
        canonical="https://www.sandanehomes.com/gurugram/sushant-lok"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={[apartmentSchema, faqSchema, breadcrumb]}
      />
      <Header showTopBar={false} />

      {/* HERO */}
      <div style={{ position: 'relative', minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '120px 20px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${imgFurnished})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,25,20,0.7) 0%, rgba(10,25,20,0.94) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '940px' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
            <Link to="/gurugram-corporate-housing" style={{ color: 'rgba(197,165,114,0.8)', fontSize: '13px', textDecoration: 'none' }}>Gurugram Housing</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>›</span>
            <span style={{ color: '#C5A572', fontSize: '13px', fontWeight: '600' }}>Sushant Lok</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(197,165,114,0.15)', border: '1px solid rgba(197,165,114,0.5)', borderRadius: '30px', padding: '7px 20px', color: '#C5A572', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '24px' }}>
            <FaMapMarkerAlt size={11} /> Sector 27–28 · Sushant Lok 1 · Gurgaon
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5.5vw, 62px)', color: '#fff', margin: '0 auto 20px', lineHeight: '1.1', maxWidth: '880px' }}>
            Serviced Apartments in<br />
            <span style={{ color: '#C5A572' }}>Sushant Lok, Gurgaon</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#D0C5B0', maxWidth: '720px', margin: '0 auto 36px', lineHeight: '1.8' }}>
            Quiet, leafy, and well-connected — Gurgaon's favourite address for expat families, senior executives, and long-stay corporate professionals.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              View Apartments <FaArrowRight />
            </Link>
            <a href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20need%20a%20serviced%20apartment%20in%20Sushant%20Lok%20Gurgaon.`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#25D366', color: '#fff', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ backgroundColor: '#F7F4EF', padding: '90px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>Why Sushant Lok</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#1A3C34', margin: '0 0 24px', lineHeight: '1.25' }}>
              Gurgaon's Best-Connected Expat Community
            </h2>
            <p style={{ color: '#555', fontSize: '17px', lineHeight: '1.9', marginBottom: '24px' }}>
              Sushant Lok 1 is Gurgaon's most balanced residential choice: peaceful enough for families yet supremely connected to every major corporate hub. The area is flanked by Galleria Market — an international-grade grocery, café, and dining strip — and served by MG Road and Iffco Chowk Metro stations on the Delhi Yellow Line.
            </p>
            <p style={{ color: '#555', fontSize: '17px', lineHeight: '1.9', marginBottom: '32px' }}>
              The expat community here is well-established. Japanese, Korean, European, and American executives have been living in Sushant Lok for over a decade, creating a familiar, international community atmosphere.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Walk to Galleria Market international grocery & dining',
                'MG Road Metro (Yellow Line) — direct to Delhi in 25 min',
                '10–14 min drive to DLF Cyber City & Golf Course Road',
                'Long-established expat community (Japan, Korea, Europe)',
                'Premier schools within 2 km (DPS, Heritage Xperiential)',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <FaCheckCircle size={16} color="#C5A572" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ color: '#444', fontSize: '16px' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[imgRoom1, imgRoom3, imgCorporate, imgRoom4].map((img, i) => (
              <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', height: '185px' }}>
                <img src={img} alt={`Sushant Lok Gurgaon serviced apartment ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#1A3C34', margin: '0 0 48px', textAlign: 'center' }}>FAQs — Sushant Lok Gurgaon</h2>
          <div style={{ borderTop: '1px solid #E8E0D0' }}>{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'linear-gradient(135deg, #0F1F1A 0%, #1A3C34 100%)', padding: '90px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 46px)', margin: '0 0 18px' }}>Reserve Your Sushant Lok Apartment</h2>
        <p style={{ color: '#D0C5B0', fontSize: '17px', maxWidth: '560px', margin: '0 auto 40px', lineHeight: '1.8' }}>Move-in ready in 24–48 hours. Corporate billing available.</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 40px', borderRadius: '40px', textDecoration: 'none', fontSize: '17px', fontWeight: '700' }}>View Units <FaArrowRight /></Link>
          <a href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20want%20a%20serviced%20apartment%20in%20Sushant%20Lok%20Gurgaon.`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#25D366', color: '#fff', padding: '16px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '17px', fontWeight: '700' }}>
            <FaWhatsapp size={22} /> WhatsApp
          </a>
        </div>
        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="tel:+919711722273" style={{ color: '#C5A572', textDecoration: 'none', fontSize: '15px', display: 'flex', gap: '6px', alignItems: 'center' }}><FaPhone size={13} /> +91 97117 22273</a>
          <a href="mailto:B2B@sandanehomes.com" style={{ color: '#C5A572', textDecoration: 'none', fontSize: '15px', display: 'flex', gap: '6px', alignItems: 'center' }}><FaEnvelope size={13} /> B2B@sandanehomes.com</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
