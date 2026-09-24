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
import koreanBreakfast from '../../assets/korean_breakfast.png';

const PHONE = '919711722273';

const faqs = [
  {
    q: 'Which Korean company employees have you served in Gurgaon?',
    a: 'We have successfully housed Korean corporate assignees from Samsung Electronics India, Samsung R&D Institute, Hyundai Motor India, Kia India, LG Electronics, and their major Tier-1 Korean vendors. Our Korea Desk is experienced in working with Korean MNC HR departments and relocation agencies in Seoul.'
  },
  {
    q: 'Are there Korean grocery stores and restaurants near your Gurgaon apartments?',
    a: 'Yes. The DLF Phase 4 and Golf Course Road areas have access to supermarkets stocking Korean essentials. Additionally, the Noida-Gurgaon corridor has authentic Korean restaurants and Korean BBQ spots. We can advise you on the nearest grocery options to your specific apartment.'
  },
  {
    q: 'How far are Samsung and Hyundai offices from your Gurgaon apartments?',
    a: 'The Samsung R&D Institute is in Sector 18 Noida (approximately 35–45 minutes by car). Hyundai India headquarters is in Gurugram Sector 32. DLF Phase 4 apartments are typically 15–20 minutes from Hyundai offices. We can match you to the most strategically located property for your specific commute.'
  },
  {
    q: 'Do you provide FRRO Form C and foreigner registration support for Korean nationals?',
    a: 'Yes. Our concierge team handles Form C filing within 24 hours of your check-in, which is mandatory for Korean nationals on long-term visas (Business Visa, Employment Visa, or Project Visa). We coordinate all documentation with your company HR team.'
  },
  {
    q: 'Can your company manage corporate bulk bookings for 5–20 Korean employees arriving together?',
    a: 'Yes. We specialize in corporate bulk relocations. We can arrange simultaneous move-ins, coordinated airport pickups, and separate B2B invoices per employee or a consolidated company invoice. Contact B2B@sandanehomes.com for a customized group housing proposal.'
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

export default function GurugramKoreanExpatHousing() {
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sandanehomes.com/' },
      { '@type': 'ListItem', position: 2, name: 'Gurugram Corporate Housing', item: 'https://www.sandanehomes.com/gurugram-corporate-housing' },
      { '@type': 'ListItem', position: 3, name: 'Korean Expat Housing Gurugram', item: 'https://www.sandanehomes.com/gurugram/korean-expat-housing' }
    ]
  };
  const apartmentSchema = {
    '@context': 'https://schema.org', '@type': 'ApartmentComplex',
    name: 'Sandane Homes — Korean Expat Housing Gurugram (Gurgaon)',
    description: 'Premium fully furnished serviced apartments for Korean expats in Gurugram (Gurgaon). Near Samsung, Hyundai & LG offices. Korean amenities, FRRO support & B2B billing. 한국인 주재원 아파트.',
    url: 'https://www.sandanehomes.com/gurugram/korean-expat-housing',
    telephone: '+919711722273',
    address: { '@type': 'PostalAddress', addressLocality: 'Gurugram', addressRegion: 'Haryana', addressCountry: 'IN' },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Daily Housekeeping', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Korean Amenities', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'FRRO Form C Registration', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'B2B Corporate Billing', value: true },
    ]
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };
  const hreflang = [
    { lang: 'en', href: 'https://www.sandanehomes.com/gurugram/korean-expat-housing' },
    { lang: 'ko', href: 'https://www.sandanehomes.com/gurugram/korean-expat-housing' },
    { lang: 'x-default', href: 'https://www.sandanehomes.com/gurugram/korean-expat-housing' }
  ];

  return (
    <div className="sandane-homes-page">
      <SEO
        title="Korean Expat Housing in Gurugram (Gurgaon) | 한국인 주재원 아파트 | Sandane Homes"
        description="Premium serviced apartments for Korean expats in Gurugram (Gurgaon). Near Samsung R&D, Hyundai & LG. Korean amenities, FRRO Form C, B2B corporate billing. 삼성, 현대 주재원을 위한 고급 서비스 아파트."
        canonical="https://www.sandanehomes.com/gurugram/korean-expat-housing"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={[apartmentSchema, faqSchema, breadcrumb]}
        lang="ko"
        hreflang={hreflang}
      />
      <Header showTopBar={false} />

      {/* HERO */}
      <div style={{ position: 'relative', minHeight: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '120px 20px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${imgRoom3})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,25,20,0.72) 0%, rgba(10,25,20,0.94) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '960px' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
            <Link to="/gurugram-corporate-housing" style={{ color: 'rgba(197,165,114,0.8)', fontSize: '13px', textDecoration: 'none' }}>Gurugram Housing</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>›</span>
            <span style={{ color: '#C5A572', fontSize: '13px', fontWeight: '600' }}>Korean Expat Housing</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(197,165,114,0.15)', border: '1px solid rgba(197,165,114,0.5)', borderRadius: '30px', padding: '7px 20px', color: '#C5A572', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '24px' }}>
            🇰🇷&nbsp; Korean Expat Housing · 한국인 주재원 주택
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(30px, 5vw, 58px)', color: '#fff', margin: '0 auto 16px', lineHeight: '1.1', maxWidth: '900px' }}>
            Korean Expat Housing in<br />
            <span style={{ color: '#C5A572' }}>Gurugram (Gurgaon)</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#E6CFA1', maxWidth: '740px', margin: '0 auto 12px', lineHeight: '1.8' }}>
            삼성, 현대, LG 주재원을 위한 프리미엄 서비스 아파트
          </p>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#D0C5B0', maxWidth: '740px', margin: '0 auto 36px', lineHeight: '1.8' }}>
            Tailored serviced apartments for Samsung, Hyundai & LG assignees in Gurgaon. Korean amenities, FRRO Form C support, and direct B2B invoicing to your India subsidiary.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              View Apartments / 아파트 보기 <FaArrowRight />
            </Link>
            <a href={`https://wa.me/${PHONE}?text=안녕하세요. 구르가온의 한국인 주재원 주택에 대해 문의드립니다.`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#25D366', color: '#fff', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ backgroundColor: '#F7F4EF', padding: '90px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>한국인을 위해 설계됨</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3vw, 38px)', color: '#1A3C34', margin: '0 0 24px', lineHeight: '1.25' }}>
              Built for Korean Professionals in Gurugram
            </h2>
            <p style={{ color: '#555', fontSize: '17px', lineHeight: '1.9', marginBottom: '28px' }}>
              Sandane Homes has built a dedicated program for Korean corporate assignees in Gurgaon. We understand the importance of kimchi refrigerators, Korean TV channels, familiar food options, and a community of fellow Korean residents in the same building.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                'Kimchi refrigerators & Korean kitchen setup available',
                'Near Samsung R&D (Sector 129 Noida) & Hyundai HQ',
                'FRRO Form C filing within 24 hours of arrival',
                'Korean grocery sourcing assistance & delivery guidance',
                'B2B invoicing to Korean MNC India subsidiaries',
                'Bulk relocation support — 5 to 50+ employees',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <FaCheckCircle size={16} color="#C5A572" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ color: '#444', fontSize: '16px' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ borderRadius: '14px', overflow: 'hidden', height: '185px', gridColumn: '1 / -1' }}>
              <img src={koreanBreakfast} alt="Korean breakfast options at Sandane Homes Gurugram apartments" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {[imgRoom1, imgRoom2].map((img, i) => (
              <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', height: '165px' }}>
                <img src={img} alt={`Korean expat apartment Gurugram ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KOREAN LANGUAGE SECTION */}
      <div style={{ backgroundColor: '#1A3C34', padding: '90px 20px', color: '#fff' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '16px' }}>한국어 안내</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', color: '#fff', margin: '0 0 32px', lineHeight: '1.2' }}>
            구르가온 한국인 주재원을 위한<br />프리미엄 서비스 아파트
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '2', color: '#D0C5B0', marginBottom: '24px' }}>
            삼성, 현대, LG 및 협력사 주재원 분들을 위해 Sandane Homes는 구르가온(구루그람)에서 최고급 서비스 아파트를 제공하고 있습니다. 김치냉장고, 한국식 조리기구, FRRO 등록 지원 및 법인 직접 청구 서비스를 제공합니다.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '2', color: '#D0C5B0', marginBottom: '32px' }}>
            단기 출장부터 장기 주재까지 맞춤형 법인 계약을 제공합니다. 문의사항은 WhatsApp으로 언제든지 연락 주세요.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '15px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              아파트 보기 <FaArrowRight />
            </Link>
            <a href={`https://wa.me/${PHONE}?text=안녕하세요. 구르가온의 한국인 주재원 아파트에 대해 문의드립니다.`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#25D366', color: '#fff', padding: '15px 32px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              <FaWhatsapp size={20} /> 카카오 / WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '90px 20px', backgroundColor: '#F7F4EF' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#1A3C34', margin: '0 0 48px', textAlign: 'center' }}>자주 묻는 질문 — FAQ</h2>
          <div style={{ borderTop: '1px solid #E8E0D0' }}>{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'linear-gradient(135deg, #0F1F1A 0%, #1A3C34 100%)', padding: '90px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 46px)', margin: '0 0 18px' }}>
          Book Your Gurugram Korean Expat Apartment
        </h2>
        <p style={{ color: '#D0C5B0', fontSize: '17px', maxWidth: '560px', margin: '0 auto 40px', lineHeight: '1.8' }}>
          Our Korea Desk confirms availability and sends quotations within 2 hours.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 40px', borderRadius: '40px', textDecoration: 'none', fontSize: '17px', fontWeight: '700' }}>View Units <FaArrowRight /></Link>
          <a href={`https://wa.me/${PHONE}?text=안녕하세요. 구르가온 주재원 아파트를 문의합니다.`} target="_blank" rel="noopener noreferrer"
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
