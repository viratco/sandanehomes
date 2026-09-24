import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import {
  FaWhatsapp, FaArrowRight, FaChevronDown, FaChevronUp,
  FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding
} from 'react-icons/fa';
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
    q: 'Which specific societies and towers are your DLF Phase 4 apartments in?',
    a: 'Our DLF Phase 4 (Sector 27–28) portfolio includes apartments in select premium gated societies and independent builder floors along quiet DLF Phase 4 lanes. Exact building and unit details are shared upon confirmed booking. Properties are verified for security, power backup, and high-speed fibre connectivity.'
  },
  {
    q: 'How close is DLF Phase 4 to DLF Cyber City and Golf Course Road?',
    a: 'DLF Phase 4 is approximately 8–12 minutes by car to DLF Cyber City Phase 2 and Cyber Hub via the DLF internal roads. Golf Course Road (Sector 42–54) is a 10–15 minute drive. The area also provides quick access to Galleria Market and MG Road Metro Station.'
  },
  {
    q: 'Are your DLF Phase 4 apartments family-friendly?',
    a: 'Yes. DLF Phase 4 is one of the most established, quiet residential zones in Gurgaon. The area features wide tree-lined roads, parks, quality schools nearby (GD Goenka, DPS), and a well-established community. We regularly host families of Japanese and Korean executives here.'
  },
  {
    q: 'What is your minimum stay period for DLF Phase 4?',
    a: 'We offer stays from 7 nights. Monthly (30+ day) and quarterly (90+ day) corporate rates are significantly discounted. Annual master leases are available for multi-national HR mobility teams.'
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

export default function GurugramDLFPhase4() {
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sandanehomes.com/' },
      { '@type': 'ListItem', position: 2, name: 'Gurugram Corporate Housing', item: 'https://www.sandanehomes.com/gurugram-corporate-housing' },
      { '@type': 'ListItem', position: 3, name: 'DLF Phase 4 Gurgaon Serviced Apartments', item: 'https://www.sandanehomes.com/gurugram/dlf-phase-4' }
    ]
  };
  const apartmentSchema = {
    '@context': 'https://schema.org', '@type': 'ApartmentComplex',
    name: 'Sandane Homes — DLF Phase 4 Gurgaon Serviced Apartments',
    description: 'Fully furnished luxury serviced apartments in DLF Phase 4 (Sector 27-28) Gurgaon. Ideal for corporate executives, Japanese expats and multinational assignees.',
    url: 'https://www.sandanehomes.com/gurugram/dlf-phase-4',
    telephone: '+919711722273',
    address: { '@type': 'PostalAddress', streetAddress: 'DLF Phase 4', addressLocality: 'Gurugram', addressRegion: 'Haryana', addressCountry: 'IN' },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Daily Housekeeping', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'High-Speed WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Modular Kitchen', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24/7 Power Backup', value: true },
    ]
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };

  return (
    <div className="sandane-homes-page">
      <SEO
        title="Serviced Apartments in DLF Phase 4 Gurgaon | Sector 27 Corporate Stays | Sandane Homes"
        description="Luxury serviced apartments in DLF Phase 4, Sector 27 Gurgaon. Fully furnished 2BHK & 3BHK units with daily housekeeping, 300 Mbps WiFi & direct B2B corporate billing. Near DLF Cyber City & Golf Course Road."
        canonical="https://www.sandanehomes.com/gurugram/dlf-phase-4"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={[apartmentSchema, faqSchema, breadcrumb]}
      />
      <Header showTopBar={false} />

      {/* HERO */}
      <div style={{ position: 'relative', minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '120px 20px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${imgRoom4})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,25,20,0.7) 0%, rgba(10,25,20,0.92) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
            <Link to="/gurugram-corporate-housing" style={{ color: 'rgba(197,165,114,0.8)', fontSize: '13px', textDecoration: 'none' }}>Gurugram Housing</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>›</span>
            <span style={{ color: '#C5A572', fontSize: '13px', fontWeight: '600' }}>DLF Phase 4</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(197,165,114,0.15)', border: '1px solid rgba(197,165,114,0.5)', borderRadius: '30px', padding: '7px 20px', color: '#C5A572', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '24px' }}>
            <FaMapMarkerAlt size={11} /> Sector 27 · DLF Phase 4 · Gurgaon
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5.5vw, 62px)', color: '#fff', margin: '0 auto 20px', lineHeight: '1.1', maxWidth: '850px' }}>
            Serviced Apartments in<br />
            <span style={{ color: '#C5A572' }}>DLF Phase 4, Gurgaon</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#D0C5B0', maxWidth: '700px', margin: '0 auto 36px', lineHeight: '1.8' }}>
            Quiet, tree-lined luxury in one of Gurgaon's most established residential zones. Fully furnished 2BHK & 3BHK suites, 10 minutes from DLF Cyber City.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              View Apartments <FaArrowRight />
            </Link>
            <a href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20need%20a%20serviced%20apartment%20in%20DLF%20Phase%204%20Gurgaon.`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#25D366', color: '#fff', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* WHY DLF PHASE 4 */}
      <div style={{ backgroundColor: '#F7F4EF', padding: '90px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>Why This Location</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#1A3C34', margin: '0 0 24px', lineHeight: '1.25' }}>
              DLF Phase 4 — Gurgaon's Most Coveted Residential Address
            </h2>
            <p style={{ color: '#555', fontSize: '17px', lineHeight: '1.9', marginBottom: '28px' }}>
              DLF Phase 4 in Sector 27 is lined with mature trees and wide avenues, making it the most peaceful large-format residential zone in Gurgaon. It is home to senior executives, diplomatic families, and established expat communities from Japan, Korea, and Europe.
            </p>
            <p style={{ color: '#555', fontSize: '17px', lineHeight: '1.9', marginBottom: '32px' }}>
              From here, commuting to DLF Cyber City takes under 12 minutes without traffic signals. Galleria Market, a major expat grocery hub, is a 5-minute walk. The MG Road Metro station provides direct access to Delhi.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                '8–12 min drive to DLF Cyber City & Cyber Hub',
                '5 min walk to Galleria Market & premium dining',
                'Adjacent to MG Road Metro for central Delhi access',
                'Renowned schools within 2 km (DPS, GD Goenka)',
                'Safe, quiet community favored by expat families',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <FaCheckCircle size={16} color="#C5A572" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ color: '#444', fontSize: '16px' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[imgRoom1, imgLivingRoom, imgRoom2, imgFurnished].map((img, i) => (
              <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', height: '185px' }}>
                <img src={img} alt={`DLF Phase 4 Gurgaon serviced apartment ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* APARTMENT SPECS */}
      <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>What's Included</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#1A3C34', margin: 0 }}>Every Apartment in DLF Phase 4</h2>
        </div>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            { t: 'Fully Furnished', d: 'Designer beds, sofas, dining table, 65" smart TV & wardrobe storage.' },
            { t: 'Modular Kitchen', d: 'Induction stove, microwave, refrigerator, RO water & all cookware.' },
            { t: '300 Mbps Wi-Fi', d: 'Dedicated private optical fibre — no shared hotel bandwidth.' },
            { t: 'Daily Housekeeping', d: '5-star linen change, floor sanitization & laundry assistance.' },
            { t: '24/7 Power Backup', d: 'Full DG generator backup with no power cut interruptions.' },
            { t: 'B2B GST Invoice', d: 'Compliant itemized invoice directly to your company.' },
          ].map((c, i) => (
            <div key={i} style={{ padding: '28px 24px', border: '1px solid #EEE9E0', borderRadius: '14px', backgroundColor: '#FAFAF8' }}>
              <FaBuilding size={22} color="#C5A572" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '17px', color: '#1A3C34', margin: '0 0 10px', fontWeight: '700' }}>{c.t}</h3>
              <p style={{ color: '#777', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '90px 20px', backgroundColor: '#F7F4EF' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#1A3C34', margin: '0 0 48px', textAlign: 'center' }}>FAQs — DLF Phase 4 Gurgaon</h2>
          <div style={{ borderTop: '1px solid #E8E0D0' }}>{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'linear-gradient(135deg, #0F1F1A 0%, #1A3C34 100%)', padding: '90px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 46px)', margin: '0 0 18px' }}>Reserve Your DLF Phase 4 Suite</h2>
        <p style={{ color: '#D0C5B0', fontSize: '17px', maxWidth: '560px', margin: '0 auto 40px', lineHeight: '1.8' }}>
          Speak directly with our corporate housing team. We confirm availability within 2 hours.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 40px', borderRadius: '40px', textDecoration: 'none', fontSize: '17px', fontWeight: '700' }}>
            View Units <FaArrowRight />
          </Link>
          <a href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20want%20a%20serviced%20apartment%20in%20DLF%20Phase%204%20Gurgaon.`} target="_blank" rel="noopener noreferrer"
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
