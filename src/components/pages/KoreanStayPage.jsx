import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import { FaWhatsapp, FaPhoneAlt, FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa';
import { getKoreanStayPage, stayPath } from '../../data/koreanStays';
import { whatsappUrl, CALL_NUMBER, CALL_DISPLAY } from '../../utils/contact';

import guestHouseImg from '../../assets/sandane-night-hero.jpg';
import breakfastImg from '../../assets/korean_breakfast.png';
import apartmentImg from '../../assets/residences-hero-center.jpg';

const BASE_URL = 'https://www.sandanehomes.com';
const IMAGES = { guestHouse: guestHouseImg, breakfast: breakfastImg, apartment: apartmentImg };
const LANG_LABELS = { en: 'English', ko: '한국어' };

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E8E0D0', padding: '20px 0' }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
      >
        <h3 style={{ fontSize: '17px', color: '#1A3C34', margin: 0, fontWeight: '600', paddingRight: '20px', lineHeight: 1.45 }}>{q}</h3>
        <span style={{ color: '#C5A572', flexShrink: 0 }}>{open ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      {open && <p style={{ marginTop: '14px', marginBottom: 0, color: '#555', fontSize: '16px', lineHeight: '1.85' }}>{a}</p>}
    </div>
  );
};

/**
 * Korean-stay service page (guest house / apartments) in one language.
 * Content lives in src/data/koreanStays.js.
 */
export default function KoreanStayPage({ slug, lang }) {
  const page = getKoreanStayPage(slug);
  const t = page.content[lang];
  const canonical = `${BASE_URL}${stayPath(page.slug, lang)}`;
  const waUrl = whatsappUrl(t.whatsappText);

  const hreflang = [
    ...page.langs.map((l) => ({ lang: l, href: `${BASE_URL}${stayPath(page.slug, l)}` })),
    { lang: 'x-default', href: `${BASE_URL}${stayPath(page.slug, 'en')}` },
  ];
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: t.h1, item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  const trackGuestLead = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'ads_conversion_Purchase_1', {});
    }
  };

  const sectionTitle = { fontFamily: 'Playfair Display, serif', color: '#1A3C34', fontSize: 'clamp(24px, 3.6vw, 30px)', margin: '0 0 18px' };
  const bodyText = { color: '#444', fontSize: '17px', lineHeight: '1.85', margin: 0 };
  const card = { background: '#fff', borderRadius: '18px', padding: '34px clamp(22px, 4vw, 34px)', border: '1px solid #E8E0D0' };
  const buttons = (dark) => (
    <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <a href={waUrl} target="_blank" rel="noopener noreferrer" onClick={trackGuestLead}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#25D366', color: '#fff', padding: '15px 30px', borderRadius: '40px', fontWeight: '700', textDecoration: 'none' }}>
        <FaWhatsapp size={20} /> {t.whatsapp}
      </a>
      <a href={`tel:+${CALL_NUMBER}`}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: dark ? '#C5A572' : '#1A3C34', color: dark ? '#1A3C34' : '#fff', padding: '15px 30px', borderRadius: '40px', fontWeight: '700', textDecoration: 'none' }}>
        <FaPhoneAlt size={15} /> {t.call} {CALL_DISPLAY}
      </a>
    </div>
  );

  return (
    <div lang={lang} style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#FAF8F5' }}>
      <SEO title={t.metaTitle} description={t.metaDescription} canonical={canonical} lang={lang} hreflang={hreflang} schema={schema} />
      <Header showTopBar={false} />

      {/* ── HERO ── */}
      <section style={{
        padding: '170px 20px 90px', textAlign: 'center', color: '#fff',
        backgroundImage: `linear-gradient(rgba(10,25,22,0.70), rgba(10,25,22,0.82)), url(${IMAGES[page.image]})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <span style={{ color: '#C5A572', fontSize: '13px', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: '700' }}>{t.eyebrow}</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(30px, 5.2vw, 50px)', lineHeight: 1.22, margin: '16px 0 22px' }}>{t.h1}</h1>
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#E5E1D8', margin: '0 auto 34px', maxWidth: '740px' }}>{t.intro}</p>
          {buttons(true)}
          <p style={{ marginTop: '28px', fontSize: '14px', color: '#C9C2B4' }}>
            {page.langs.filter((l) => l !== lang).map((l) => (
              <Link key={l} to={stayPath(page.slug, l)} hrefLang={l} lang={l} style={{ color: '#C5A572', fontWeight: '600' }}>{LANG_LABELS[l]}</Link>
            ))}
          </p>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <section style={{ padding: '70px 20px 30px' }}>
        <div style={{ maxWidth: '940px', margin: '0 auto', display: 'grid', gap: '26px' }}>
          {t.sections.map((sec) => (
            <div key={sec.title} style={{ ...card, display: 'grid', gap: '26px', gridTemplateColumns: sec.image ? 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' : '1fr', alignItems: 'center' }}>
              <div>
                <h2 style={sectionTitle}>{sec.title}</h2>
                {sec.text && <p style={bodyText} dangerouslySetInnerHTML={{ __html: sec.text }} />}
                {sec.items && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
                    {sec.items.map((item) => (
                      <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '16px', lineHeight: 1.7, color: '#444' }}>
                        <FaCheckCircle color="#C5A572" style={{ marginTop: '5px', flexShrink: 0 }} /> {item}
                      </li>
                    ))}
                  </ul>
                )}
                {sec.steps && (
                  <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '16px', counterReset: 'step' }}>
                    {sec.steps.map((step, i) => (
                      <li key={step} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', fontSize: '16px', lineHeight: 1.7, color: '#444' }}>
                        <span style={{ flexShrink: 0, width: '30px', height: '30px', borderRadius: '50%', background: '#1A3C34', color: '#C5A572', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                        <span style={{ paddingTop: '3px' }}>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              {sec.image && (
                <img src={IMAGES[sec.image]} alt={sec.title} loading="lazy" style={{ width: '100%', height: '100%', minHeight: '240px', maxHeight: '360px', objectFit: 'cover', borderRadius: '14px' }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '50px 20px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={sectionTitle}>FAQ</h2>
          {t.faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '70px 20px', textAlign: 'center', backgroundColor: '#F1EBE2' }}>
        <h2 style={{ ...sectionTitle, marginBottom: '12px' }}>{t.ctaTitle}</h2>
        <p style={{ ...bodyText, maxWidth: '620px', margin: '0 auto 28px' }}>{t.ctaText}</p>
        {buttons(false)}
      </section>

      {/* ── RELATED COMPANY PAGES ── */}
      <section style={{ padding: '60px 20px 80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ ...sectionTitle, fontSize: '22px' }}>{t.relatedTitle}</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {t.related.map((r) => (
              <li key={r.path}>
                <Link to={r.path} style={{ display: 'inline-block', padding: '10px 18px', borderRadius: '30px', border: '1px solid #D5C7B5', background: '#fff', color: '#1A3C34', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
