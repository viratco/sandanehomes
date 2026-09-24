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
    q: 'Is Greater Noida safe for Japanese expatriates and families?',
    a: 'Yes. And for those working in Gurgaon, many Japanese expat families prefer living in the quieter Greater Noida or select Gurgaon zones like DLF Phase 4 and Sushant Lok. Gurgaon properties we provide are situated in secure, gated high-rises with 24/7 security, CCTV, and intercom systems. Japanese communities are well-established in the Delhi NCR corridor.'
  },
  {
    q: 'Which companies\' Japanese employees do you currently serve in Gurgaon?',
    a: 'We have served Japanese assignees from Honda, Yamaha, Denso, Toyota Kirloskar, NTT Data, Fujitsu India, Mitsubishi Electric, and their Tier-1 vendors. Our Japan desk operates in English and we have basic Japanese-language communication support available.'
  },
  {
    q: 'Do you provide FRRO Form C registration support for Japanese nationals?',
    a: 'Yes. Form C filing is mandatory within 14 days of arrival for any foreign national on a long-term visa. Our concierge team assists Japanese expats with FRRO registration documents, online portal submissions, and coordination with company HR departments.'
  },
  {
    q: 'Can you accommodate Japanese dietary requirements?',
    a: 'Our fully equipped modular kitchens include rice cookers, induction cooktops with temperature control, and large refrigerators. Our team can assist with sourcing Japanese groceries from nearby Asian marts, and advise on authentic Japanese restaurants in Gurgaon (Sector 18 Noida area is also close). We can arrange Japanese breakfast options upon request.'
  },
  {
    q: 'Do you offer B2B corporate leases directly to Japanese company subsidiaries in India?',
    a: 'Absolutely. We are experienced in working with Japanese MNC HR and finance teams. We issue GST-compliant invoices to your Indian subsidiary (e.g., Honda India Pvt Ltd, NTT Data Solutions India) and can accommodate multi-unit bookings for entire project teams arriving simultaneously.'
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

export default function GurugramJapaneseExpatHousing() {
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sandanehomes.com/' },
      { '@type': 'ListItem', position: 2, name: 'Gurugram Corporate Housing', item: 'https://www.sandanehomes.com/gurugram-corporate-housing' },
      { '@type': 'ListItem', position: 3, name: 'Japanese Expat Housing Gurugram', item: 'https://www.sandanehomes.com/gurugram/japanese-expat-housing' }
    ]
  };
  const apartmentSchema = {
    '@context': 'https://schema.org', '@type': 'ApartmentComplex',
    name: 'Sandane Homes — Japanese Expat Housing Gurugram (Gurgaon)',
    description: 'Premium fully furnished serviced apartments for Japanese expats in Gurugram (Gurgaon). Near Honda, Toyota, NTT Data, Fujitsu & Yamaha offices. FRRO support, B2B billing, Japanese amenities.',
    url: 'https://www.sandanehomes.com/gurugram/japanese-expat-housing',
    telephone: '+919711722273',
    address: { '@type': 'PostalAddress', addressLocality: 'Gurugram', addressRegion: 'Haryana', addressCountry: 'IN' },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Daily Housekeeping', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Japanese Breakfast Options', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'FRRO Form C Registration', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'B2B Corporate Billing', value: true },
    ]
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };
  const hreflang = [
    { lang: 'en', href: 'https://www.sandanehomes.com/gurugram/japanese-expat-housing' },
    { lang: 'ja', href: 'https://www.sandanehomes.com/gurugram/japanese-expat-housing' },
    { lang: 'x-default', href: 'https://www.sandanehomes.com/gurugram/japanese-expat-housing' }
  ];

  return (
    <div className="sandane-homes-page">
      <SEO
        title="Japanese Expat Housing in Gurugram (Gurgaon) | 日本人向けサービスアパートメント | Sandane"
        description="Premium serviced apartments for Japanese expats in Gurugram (Gurgaon). Near Honda, Toyota, NTT Data & DLF Cyber City. FRRO Form C support, Japanese amenities, B2B corporate billing. 日本人駐在員向け高級住宅."
        canonical="https://www.sandanehomes.com/gurugram/japanese-expat-housing"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={[apartmentSchema, faqSchema, breadcrumb]}
        lang="ja"
        hreflang={hreflang}
      />
      <Header showTopBar={false} />

      {/* HERO */}
      <div style={{ position: 'relative', minHeight: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '120px 20px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${imgRoom2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,25,20,0.72) 0%, rgba(10,25,20,0.94) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '960px' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
            <Link to="/gurugram-corporate-housing" style={{ color: 'rgba(197,165,114,0.8)', fontSize: '13px', textDecoration: 'none' }}>Gurugram Housing</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>›</span>
            <span style={{ color: '#C5A572', fontSize: '13px', fontWeight: '600' }}>Japanese Expat Housing</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(197,165,114,0.15)', border: '1px solid rgba(197,165,114,0.5)', borderRadius: '30px', padding: '7px 20px', color: '#C5A572', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '24px' }}>
            🇯🇵&nbsp; Japanese Expat Housing · 日本人向け住宅
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(30px, 5vw, 58px)', color: '#fff', margin: '0 auto 16px', lineHeight: '1.1', maxWidth: '900px' }}>
            Japanese Expat Housing in<br />
            <span style={{ color: '#C5A572' }}>Gurugram (Gurgaon)</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#E6CFA1', maxWidth: '740px', margin: '0 auto 12px', lineHeight: '1.8' }}>
            グルガオンの日本人駐在員向け高級サービスアパートメント
          </p>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#D0C5B0', maxWidth: '740px', margin: '0 auto 36px', lineHeight: '1.8' }}>
            Tailored serviced apartments for Honda, Toyota, NTT Data, Fujitsu & Yamaha assignees. Japanese amenities, FRRO support, and direct B2B invoicing to your India subsidiary.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              View Apartments / 物件を見る <FaArrowRight />
            </Link>
            <a href={`https://wa.me/${PHONE}?text=こんにちは。グルガオンの日本人向けサービスアパートメントを探しています。`} target="_blank" rel="noopener noreferrer"
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
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>日本人のために設計</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3vw, 38px)', color: '#1A3C34', margin: '0 0 24px', lineHeight: '1.25' }}>
              Built for Japanese Professionals in Gurugram
            </h2>
            <p style={{ color: '#555', fontSize: '17px', lineHeight: '1.9', marginBottom: '28px' }}>
              Japanese assignees in Gurgaon have precise expectations — immaculate cleanliness, quiet environments, reliable infrastructure, and culturally familiar amenities. Sandane Homes delivers all of this with warm, professional service across DLF Phase 4, Golf Course Road, and Sushant Lok.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                'Rice cookers, Japanese breakfast options & kitchen setup',
                'FRRO Form C registration within 24 hours of check-in',
                'Quiet, secure gated communities — safe for families',
                'Near Honda, Toyota, NTT Data & DLF Cyber City offices',
                'Direct B2B invoicing to your Japan/India subsidiary',
                'English-speaking dedicated concierge & account manager',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <FaCheckCircle size={16} color="#C5A572" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ color: '#444', fontSize: '16px' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[imgRoom1, imgRoom3, imgLivingRoom, imgRoom4].map((img, i) => (
              <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', height: '185px' }}>
                <img src={img} alt={`Japanese expat apartment Gurugram ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* JAPANESE LANGUAGE SECTION */}
      <div style={{ backgroundColor: '#1A3C34', padding: '90px 20px', color: '#fff' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '16px' }}>日本語でのご案内</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#fff', margin: '0 0 32px', lineHeight: '1.2' }}>
            グルガオン日本人駐在員向け<br />プレミアム・サービスアパートメント
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '2', color: '#D0C5B0', marginBottom: '24px' }}>
            ホンダ、トヨタ、NTTデータ、富士通インドなどにご勤務される日本人駐在員の皆様へ。Sandane Homesはグルガオン（グルグラム）にて最高水準の安全性、清潔さ、そして日本人に親しみやすいアメニティを備えた高級サービスアパートメントをご提供しております。
          </p>
          <p style={{ fontSize: '17px', lineHeight: '2', color: '#D0C5B0', marginBottom: '32px' }}>
            炊飯器完備、日本式朝食対応、FRRO登録サポート、法人直接請求に対応しております。お気軽にWhatsAppにてお問い合わせください。
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '15px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              物件一覧を見る <FaArrowRight />
            </Link>
            <a href={`https://wa.me/${PHONE}?text=こんにちは。グルガオンの日本人向けサービスアパートメントについて詳細をお聞かせください。`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#25D366', color: '#fff', padding: '15px 32px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              <FaWhatsapp size={20} /> WhatsAppでお問い合わせ
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '90px 20px', backgroundColor: '#F7F4EF' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#1A3C34', margin: '0 0 48px', textAlign: 'center' }}>よくある質問 — FAQ</h2>
          <div style={{ borderTop: '1px solid #E8E0D0' }}>{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'linear-gradient(135deg, #0F1F1A 0%, #1A3C34 100%)', padding: '90px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 46px)', margin: '0 0 18px' }}>
          Start Your Gurugram Assignment Right
        </h2>
        <p style={{ color: '#D0C5B0', fontSize: '17px', maxWidth: '560px', margin: '0 auto 40px', lineHeight: '1.8' }}>
          Contact our Japan Desk today. Availability confirmed within 2 hours.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 40px', borderRadius: '40px', textDecoration: 'none', fontSize: '17px', fontWeight: '700' }}>View Units <FaArrowRight /></Link>
          <a href={`https://wa.me/${PHONE}?text=こんにちは。グルガオンの日本人向けサービスアパートメントを探しています。`} target="_blank" rel="noopener noreferrer"
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
