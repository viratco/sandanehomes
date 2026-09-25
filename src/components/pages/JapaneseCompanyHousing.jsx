import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import { FaWhatsapp, FaArrowRight, FaChevronDown, FaChevronUp, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBuilding, FaShieldAlt } from 'react-icons/fa';
import { getJapaneseCompanyBySlug } from '../../data/japaneseCompanies';

import imgLivingRoom from '../../assets/livingroom.jpeg';
import imgRoom1 from '../../assets/IMG_7254.jpg';
import imgRoom2 from '../../assets/IMG_7255.jpg';
import imgRoom3 from '../../assets/IMG_7256.jpg';
import imgRoom4 from '../../assets/IMG_7257.jpg';
import imgCorporate from '../../assets/IMG_6094.jpg';

const PHONE = '919711722273';

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

export default function JapaneseCompanyHousing({ slug: propSlug }) {
  const { slug: paramSlug } = useParams();
  const slug = propSlug || paramSlug;
  const company = getJapaneseCompanyBySlug(slug);

  if (!company) {
    return (
      <div style={{ padding: '120px 20px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <Header showTopBar={false} />
        <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#1A3C34', fontSize: '36px', marginTop: '40px' }}>Company Page Not Found</h1>
        <p style={{ color: '#666', margin: '20px 0 30px' }}>The requested company housing page could not be located.</p>
        <Link to="/gurugram/japanese-expat-housing" style={{ display: 'inline-block', backgroundColor: '#1A3C34', color: 'white', padding: '12px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>
          Back to Japanese Expat Housing
        </Link>
        <Footer />
      </div>
    );
  }

  const isGurgaon = company.city.toLowerCase().includes('gurugram') || company.city.toLowerCase().includes('gurgaon');
  const parentUrl = isGurgaon ? 'https://www.sandanehomes.com/gurugram/japanese-expat-housing' : 'https://www.sandanehomes.com/japanese-expat-housing-delhi-ncr';
  const parentName = isGurgaon ? 'Gurugram Japanese Expat Housing' : 'Japanese Expat Housing Delhi NCR';

  const canonicalUrl = `https://www.sandanehomes.com/${company.slug}`;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sandanehomes.com/' },
      { '@type': 'ListItem', position: 2, name: parentName, item: parentUrl },
      { '@type': 'ListItem', position: 3, name: `${company.shortName} Expat Housing`, item: canonicalUrl }
    ]
  };

  const apartmentSchema = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: `Sandane Homes — Serviced Housing for ${company.companyName}`,
    description: company.metaDescription,
    url: canonicalUrl,
    telephone: `+${PHONE}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.city,
      addressRegion: isGurgaon ? 'Haryana' : 'Uttar Pradesh',
      addressCountry: 'IN'
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Daily Housekeeping', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Japanese Breakfast Options', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'FRRO Form C Registration', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'B2B Corporate Invoicing', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Private Chauffeur Fleet', value: true }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: company.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  const hreflang = [
    { lang: 'en', href: canonicalUrl },
    { lang: 'ja', href: canonicalUrl },
    { lang: 'x-default', href: canonicalUrl }
  ];

  const waText = encodeURIComponent(`こんにちは。${company.companyName}（${company.city}）勤務の者です。日本人向けサービスアパートメントの空室状況と詳細を教えてください。`);

  return (
    <div className="sandane-homes-page">
      <SEO
        title={company.metaTitle}
        description={company.metaDescription}
        canonical={canonicalUrl}
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={[apartmentSchema, faqSchema, breadcrumb]}
        lang="ja"
        hreflang={hreflang}
      />
      <Header showTopBar={false} />

      {/* HERO SECTION */}
      <div style={{ position: 'relative', minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '130px 20px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${imgRoom2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,25,20,0.76) 0%, rgba(10,25,20,0.95) 100%)' }} />
        
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '960px' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', marginBottom: '22px', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'rgba(197,165,114,0.8)', fontSize: '13px', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>›</span>
            <Link to={isGurgaon ? "/gurugram-corporate-housing" : "/serviced-apartments-greater-noida"} style={{ color: 'rgba(197,165,114,0.8)', fontSize: '13px', textDecoration: 'none' }}>
              {isGurgaon ? "Gurugram" : "Noida Corridor"}
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>›</span>
            <span style={{ color: '#C5A572', fontSize: '13px', fontWeight: '600' }}>{company.shortName} Housing</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(197,165,114,0.18)', border: '1px solid rgba(197,165,114,0.6)', borderRadius: '30px', padding: '7px 22px', color: '#C5A572', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '24px' }}>
            {company.heroTag}
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4.8vw, 54px)', color: '#fff', margin: '0 auto 16px', lineHeight: '1.18', maxWidth: '920px' }}>
            {company.h1}
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', color: '#E6CFA1', maxWidth: '780px', margin: '0 auto 14px', lineHeight: '1.6', fontWeight: '500' }}>
            {company.japaneseH1}
          </p>

          <p style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', color: '#D0C5B0', maxWidth: '760px', margin: '0 auto 36px', lineHeight: '1.8' }}>
            {company.leadText}
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              View Apartments / 物件を見る <FaArrowRight />
            </Link>
            <a href={`https://wa.me/${PHONE}?text=${waText}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#25D366', color: '#fff', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* QUICK SPECIFICATIONS BAR */}
      <div style={{ backgroundColor: '#FAF8F5', padding: '32px 20px', borderBottom: '1px solid #E8E0D0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          <div style={{ backgroundColor: '#fff', padding: '18px 20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #ECE7DE' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C5A572', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              <FaMapMarkerAlt /> Office & Plant
            </div>
            <div style={{ color: '#1A3C34', fontSize: '14px', fontWeight: '600', lineHeight: '1.5' }}>
              {company.officeLocation}
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '18px 20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #ECE7DE' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C5A572', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              <FaClock /> Daily Commute
            </div>
            <div style={{ color: '#1A3C34', fontSize: '14px', fontWeight: '600', lineHeight: '1.5' }}>
              {company.commuteTime}
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '18px 20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #ECE7DE' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C5A572', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              <FaBuilding /> Recommended Enclaves
            </div>
            <div style={{ color: '#1A3C34', fontSize: '14px', fontWeight: '600', lineHeight: '1.5' }}>
              {company.recommendedSocieties}
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '18px 20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #ECE7DE' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C5A572', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              <FaShieldAlt /> Corporate Billing
            </div>
            <div style={{ color: '#1A3C34', fontSize: '14px', fontWeight: '600', lineHeight: '1.5' }}>
              Direct B2B GST Invoicing to {company.shortName}
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE SECTION */}
      <div style={{ backgroundColor: '#F7F4EF', padding: '90px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>日本品質のホスピタリティ</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.2vw, 38px)', color: '#1A3C34', margin: '0 0 24px', lineHeight: '1.25' }}>
              {company.whyChooseTitle}
            </h2>
            <p style={{ color: '#555', fontSize: '17px', lineHeight: '1.9', marginBottom: '28px' }}>
              Serving Japanese multinational executives requires meticulous attention to cleanliness, absolute reliability in daily utilities, and seamless administrative support. Sandane Homes provides a dedicated Japan desk assisting {company.shortName} assignees from arrival to checkout.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '32px' }}>
              {company.highlights.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <FaCheckCircle size={18} color="#C5A572" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px' }}>
              <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1A3C34', fontWeight: '700', textDecoration: 'none', borderBottom: '2px solid #C5A572', paddingBottom: '4px' }}>
                Explore Verified Apartment Inventory <FaArrowRight size={13} color="#C5A572" />
              </Link>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {[imgRoom1, imgRoom3, imgLivingRoom, imgRoom4].map((img, i) => (
              <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', height: '190px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
                <img src={img} alt={`${company.companyName} serviced apartment ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* JAPANESE LANGUAGE EXPAT SECTION */}
      <div style={{ backgroundColor: '#1A3C34', padding: '95px 20px', color: '#fff' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '16px' }}>日本語でのご案内</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.6vw, 42px)', color: '#fff', margin: '0 0 28px', lineHeight: '1.25' }}>
            {company.japaneseName}の皆様へ<br />安心と信頼のサービスアパートメント
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '2.1', color: '#D0C5B0', marginBottom: '22px' }}>
            {company.japaneseIntro}
          </p>
          <p style={{ fontSize: '16px', lineHeight: '2', color: '#B8AFA0', marginBottom: '36px' }}>
            炊飯器・高速Wi-Fi・浄水器・24時間発電バックアップ完備。FRRO（外国人登録）Form C発行サポートおよびインド法人向けB2B税務請求書（GST Invoice）発行に完全対応しております。日本人スタッフおよび英語対応コンシェルジュがスムーズにご案内いたします。
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '15px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              物件一覧を見る <FaArrowRight />
            </Link>
            <a href={`https://wa.me/${PHONE}?text=${waText}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#25D366', color: '#fff', padding: '15px 32px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              <FaWhatsapp size={20} /> WhatsAppでお問い合わせ
            </a>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div style={{ padding: '95px 20px', backgroundColor: '#F7F4EF' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '12px', textAlign: 'center' }}>よくある質問</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#1A3C34', margin: '0 0 48px', textAlign: 'center' }}>
            Frequently Asked Questions — {company.shortName} Housing
          </h2>
          <div style={{ borderTop: '1px solid #E8E0D0' }}>
            {company.faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </div>

      {/* FINAL CORPORATE CTA */}
      <div style={{ background: 'linear-gradient(135deg, #0F1F1A 0%, #1A3C34 100%)', padding: '95px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 46px)', margin: '0 0 18px' }}>
          Reserve Executive Accommodation for {company.shortName}
        </h2>
        <p style={{ color: '#D0C5B0', fontSize: '17px', maxWidth: '620px', margin: '0 auto 40px', lineHeight: '1.8' }}>
          Connect with our Corporate Japan Desk. We respond to corporate booking inquiries and requests for proposals within 2 hours.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '34px' }}>
          <Link to="/residences" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 40px', borderRadius: '40px', textDecoration: 'none', fontSize: '17px', fontWeight: '700' }}>
            View Units <FaArrowRight />
          </Link>
          <a href={`https://wa.me/${PHONE}?text=${waText}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#25D366', color: '#fff', padding: '16px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '17px', fontWeight: '700' }}>
            <FaWhatsapp size={22} /> WhatsApp Concierge
          </a>
        </div>
        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="tel:+919711722273" style={{ color: '#C5A572', textDecoration: 'none', fontSize: '15px', display: 'flex', gap: '7px', alignItems: 'center' }}>
            <FaPhone size={13} /> +91 97117 22273
          </a>
          <a href="mailto:B2B@sandanehomes.com" style={{ color: '#C5A572', textDecoration: 'none', fontSize: '15px', display: 'flex', gap: '7px', alignItems: 'center' }}>
            <FaEnvelope size={13} /> B2B@sandanehomes.com
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
