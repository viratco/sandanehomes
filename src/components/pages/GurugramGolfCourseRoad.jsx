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
import imgCorporate from '../../assets/IMG_6094.jpg';

const PHONE = '919711722273';

const faqs = [
  {
    q: 'Are your Golf Course Road apartments truly within walking distance of Horizon Center?',
    a: 'Yes. Several of our Golf Course Road serviced apartments in the DLF Phase 5 / Sector 53-54 zone are within a 5 to 10 minute walk of One Horizon Center and Two Horizon Center, which house Apple, Samsung Electronics, American Express, and Blackstone offices. We can confirm exact proximity for each specific unit upon inquiry.'
  },
  {
    q: 'What business parks and office complexes are accessible from Golf Course Road?',
    a: 'From Golf Course Road, you have rapid access to One Horizon Center, Two Horizon Center, Central Plaza, DLF Plaza Tower, Emaar Capital Tower, and Sector 53-54 Rapid Metro. By car, DLF Cyber City Phase 2 is 10 minutes away. The entire Gurugram financial corridor is within 15 minutes.'
  },
  {
    q: 'What fine dining options are near your Golf Course Road apartments?',
    a: "Golf Course Road is Gurgaon's premier dining strip. Within 5 minutes of our apartments you have Town Hall, Hahn's Kitchen, Whisky Samba, Artusi Ristorante, Bo Tai, and numerous rooftop bars and coffee houses. The Rapid Metro connects you to Cyber Hub Gurgaon in under 10 minutes for even more options."
  },
  {
    q: 'What is the pricing structure for monthly stays on Golf Course Road?',
    a: 'Monthly corporate rates for Golf Course Road serviced apartments vary based on apartment size (2BHK, 3BHK, 4BHK) and specific building. All rates are fully inclusive of housekeeping, utilities, Wi-Fi, and parking. Contact our team for a customized corporate quotation within 2 hours.'
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

export default function GurugramGolfCourseRoad() {
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sandanehomes.com/' },
      { '@type': 'ListItem', position: 2, name: 'Gurugram Corporate Housing', item: 'https://www.sandanehomes.com/gurugram-corporate-housing' },
      { '@type': 'ListItem', position: 3, name: 'Golf Course Road Gurgaon Serviced Apartments', item: 'https://www.sandanehomes.com/gurugram/golf-course-road' }
    ]
  };
  const apartmentSchema = {
    '@context': 'https://schema.org', '@type': 'ApartmentComplex',
    name: 'Sandane Homes — Golf Course Road Gurgaon Serviced Apartments',
    description: 'Luxury serviced apartments on Golf Course Road, DLF Phase 5 Gurgaon. Near One Horizon Center, Two Horizon Center & top corporate offices.',
    url: 'https://www.sandanehomes.com/gurugram/golf-course-road',
    telephone: '+919711722273',
    address: { '@type': 'PostalAddress', streetAddress: 'Golf Course Road, Sector 42-54', addressLocality: 'Gurugram', addressRegion: 'Haryana', addressCountry: 'IN' },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Daily Housekeeping', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'High-Speed WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Modular Kitchen', value: true },
    ]
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };

  return (
    <div className="sandane-homes-page">
      <SEO
        title="Luxury Serviced Apartments on Golf Course Road Gurgaon | Near Horizon Center | Sandane"
        description="Elite serviced apartments on Golf Course Road, DLF Phase 5 Gurgaon — steps from One Horizon Center, Apple, AMEX & Goldman Sachs offices. Fully furnished 2BHK/3BHK with 5-star housekeeping, 300 Mbps WiFi & B2B GST billing."
        canonical="https://www.sandanehomes.com/gurugram/golf-course-road"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={[apartmentSchema, faqSchema, breadcrumb]}
      />
      <Header showTopBar={false} />

      {/* HERO */}
      <div style={{ position: 'relative', minHeight: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '120px 20px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${imgLivingRoom})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,25,20,0.72) 0%, rgba(10,25,20,0.94) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '940px' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
            <Link to="/gurugram-corporate-housing" style={{ color: 'rgba(197,165,114,0.8)', fontSize: '13px', textDecoration: 'none' }}>Gurugram Housing</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>›</span>
            <span style={{ color: '#C5A572', fontSize: '13px', fontWeight: '600' }}>Golf Course Road</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(197,165,114,0.15)', border: '1px solid rgba(197,165,114,0.5)', borderRadius: '30px', padding: '7px 20px', color: '#C5A572', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '24px' }}>
            <FaMapMarkerAlt size={11} /> Sectors 42–54 · DLF Phase 5 · Gurgaon
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5.5vw, 62px)', color: '#fff', margin: '0 auto 20px', lineHeight: '1.1', maxWidth: '880px' }}>
            Serviced Apartments on<br />
            <span style={{ color: '#C5A572' }}>Golf Course Road, Gurgaon</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#D0C5B0', maxWidth: '720px', margin: '0 auto 36px', lineHeight: '1.8' }}>
            Walk to One Horizon Center, world-class dining, and the Rapid Metro. The apex of Gurgaon's corporate residential belt.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              View Apartments <FaArrowRight />
            </Link>
            <a href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20need%20a%20serviced%20apartment%20on%20Golf%20Course%20Road%20Gurgaon.`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#25D366', color: '#fff', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* WHY GOLF COURSE ROAD */}
      <div style={{ backgroundColor: '#F7F4EF', padding: '90px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>Why Golf Course Road</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#1A3C34', margin: '0 0 24px', lineHeight: '1.25' }}>
              Gurgaon's Premier Financial & Lifestyle Corridor
            </h2>
            <p style={{ color: '#555', fontSize: '17px', lineHeight: '1.9', marginBottom: '24px' }}>
              Golf Course Road (Sectors 42 through 54) is Gurgaon's most prestigious corporate boulevard. Fortune 500 companies — Apple, Samsung, AMEX, Goldman Sachs, Blackstone, Bain — have their India headquarters along this 14-km stretch. For senior executives and management consultants, living here means a zero-commute existence.
            </p>
            <p style={{ color: '#555', fontSize: '17px', lineHeight: '1.9', marginBottom: '32px' }}>
              The social infrastructure rivals any business district in Asia: Michelin-rated restaurants, rooftop bars, wine lounges, premium salons, and some of India's finest supermarkets are all within a 10-minute walk.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Walk to One Horizon Center, Two Horizon Center & Central Plaza',
                'Direct Rapid Metro to DLF Cyber Hub in under 10 min',
                'Gurgaon\'s top restaurant strip — Town Hall, Whisky Samba, Artusi',
                'Sector 53-54 & Golf Course Road Rapid Metro on doorstep',
                '15 min to IGI Airport Terminal 3 via NH-48',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <FaCheckCircle size={16} color="#C5A572" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ color: '#444', fontSize: '16px' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[imgRoom2, imgRoom3, imgRoom4, imgCorporate].map((img, i) => (
              <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', height: '190px' }}>
                <img src={img} alt={`Golf Course Road Gurgaon serviced apartment ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#1A3C34', margin: 0 }}>What's Inside Every Apartment</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Luxury Interiors', d: 'Italian marble floors, designer furniture & 65" 4K smart TV.' },
              { t: 'Full Modular Kitchen', d: 'Induction, microwave, French-door refrigerator & RO water.' },
              { t: 'Executive Work Desk', d: 'Ergonomic chair, dual-monitor setup compatible & 300 Mbps Wi-Fi.' },
              { t: 'Daily 5★ Housekeeping', d: 'Hotel-grade linen change, bathroom sanitization & restocking.' },
              { t: 'Covered Parking', d: 'Reserved basement car parking included in all suites.' },
              { t: 'B2B Corporate Billing', d: 'Itemized monthly GST invoice sent directly to your company.' },
            ].map((c, i) => (
              <div key={i} style={{ padding: '28px 24px', border: '1px solid #EEE9E0', borderRadius: '14px', backgroundColor: '#FAFAF8' }}>
                <FaBuilding size={22} color="#C5A572" style={{ marginBottom: '14px' }} />
                <h3 style={{ fontSize: '17px', color: '#1A3C34', margin: '0 0 10px', fontWeight: '700' }}>{c.t}</h3>
                <p style={{ color: '#777', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '90px 20px', backgroundColor: '#F7F4EF' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#1A3C34', margin: '0 0 48px', textAlign: 'center' }}>Golf Course Road — Common Questions</h2>
          <div style={{ borderTop: '1px solid #E8E0D0' }}>{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'linear-gradient(135deg, #0F1F1A 0%, #1A3C34 100%)', padding: '90px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 46px)', margin: '0 0 18px' }}>Reserve Your Golf Course Road Suite</h2>
        <p style={{ color: '#D0C5B0', fontSize: '17px', maxWidth: '560px', margin: '0 auto 40px', lineHeight: '1.8' }}>We confirm availability within 2 hours of your inquiry.</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 40px', borderRadius: '40px', textDecoration: 'none', fontSize: '17px', fontWeight: '700' }}>
            View Units <FaArrowRight />
          </Link>
          <a href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20want%20a%20Golf%20Course%20Road%20Gurgaon%20serviced%20apartment.`} target="_blank" rel="noopener noreferrer"
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
