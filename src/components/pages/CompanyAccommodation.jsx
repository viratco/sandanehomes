import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import { FaWhatsapp, FaPhoneAlt, FaChevronDown, FaChevronUp, FaCheckCircle, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import {
  greaterNoidaCompanies, getGreaterNoidaCompany, companyPath, COPY, LANG_LABELS,
} from '../../data/greaterNoidaCompanies';

import heroImg from '../../assets/sandane-night-facade.jpg';
import room1 from '../../assets/IMG_0586.jpg';
import room2 from '../../assets/IMG_0609.jpg';
import room3 from '../../assets/IMG_6108.jpg';

const BASE_URL = 'https://www.sandanehomes.com';
const PHONE = '919711722273';
const PHONE_DISPLAY = '+91 97117 22273';
const OPTION_IMAGES = [room1, room2, room3];

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
 * "Accommodation in Greater Noida" page for one company in one language.
 * Content lives in src/data/greaterNoidaCompanies.js.
 */
export default function CompanyAccommodation({ companyKey, lang }) {
  const company = getGreaterNoidaCompany(companyKey);
  const t = COPY[lang];
  const name = company.name[lang];
  const canonical = `${BASE_URL}${companyPath(company.key, lang)}`;
  const faqs = t.faqs(name);

  const hreflang = [
    ...company.langs.map((l) => ({ lang: l, href: `${BASE_URL}${companyPath(company.key, l)}` })),
    { lang: 'x-default', href: `${BASE_URL}${companyPath(company.key, 'en')}` },
  ];
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: t.h1(name), item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(t.whatsappText(name))}`;
  const trackGuestLead = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'ads_conversion_Purchase_1', {});
    }
  };

  const others = greaterNoidaCompanies.filter((c) => c.key !== company.key);
  const sectionTitle = { fontFamily: 'Playfair Display, serif', color: '#1A3C34', fontSize: 'clamp(26px, 4vw, 34px)', margin: '0 0 18px' };
  const bodyText = { color: '#444', fontSize: '17px', lineHeight: '1.85', margin: 0 };

  return (
    <div lang={lang} style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#FAF8F5' }}>
      <SEO
        title={t.metaTitle(name)}
        description={t.metaDescription(name)}
        canonical={canonical}
        lang={lang}
        hreflang={hreflang}
        schema={schema}
      />
      <Header showTopBar={false} />

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', padding: '170px 20px 90px', textAlign: 'center', color: '#fff',
        backgroundImage: `linear-gradient(rgba(10,25,22,0.72), rgba(10,25,22,0.82)), url(${heroImg})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span style={{ color: '#C5A572', fontSize: '13px', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: '700' }}>
            {t.eyebrow}
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5.5vw, 52px)', lineHeight: 1.2, margin: '16px 0 22px' }}>
            {t.h1(name)}
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#E5E1D8', margin: '0 auto 34px', maxWidth: '720px' }}>
            {t.intro(name)}
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={trackGuestLead}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#25D366', color: '#fff', padding: '15px 30px', borderRadius: '40px', fontWeight: '700', textDecoration: 'none' }}>
              <FaWhatsapp size={20} /> {t.whatsapp}
            </a>
            <a href={`tel:+${PHONE}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '15px 30px', borderRadius: '40px', fontWeight: '700', textDecoration: 'none' }}>
              <FaPhoneAlt size={15} /> {t.call} {PHONE_DISPLAY}
            </a>
          </div>
          {company.langs.length > 1 && (
            <p style={{ marginTop: '28px', fontSize: '14px', color: '#C9C2B4' }}>
              {t.languages}:{' '}
              {company.langs.filter((l) => l !== lang).map((l, i) => (
                <React.Fragment key={l}>
                  {i > 0 && ' · '}
                  <Link to={companyPath(company.key, l)} hrefLang={l} lang={l} style={{ color: '#C5A572', fontWeight: '600' }}>{LANG_LABELS[l]}</Link>
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
      </section>

      {/* ── COMPANY SITE + TEAMS ── */}
      <section style={{ padding: '80px 20px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '28px', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))' }}>
          <div style={{ background: '#fff', borderRadius: '18px', padding: '34px 30px', border: '1px solid #E8E0D0' }}>
            <h2 style={{ ...sectionTitle, fontSize: '24px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <FaMapMarkerAlt color="#C5A572" style={{ marginTop: '6px', flexShrink: 0 }} /> {company.siteTitle[lang]}
            </h2>
            <p style={bodyText}>{company.siteText[lang]}</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '18px', padding: '34px 30px', border: '1px solid #E8E0D0' }}>
            <h2 style={{ ...sectionTitle, fontSize: '24px' }}>{t.teamsTitle}</h2>
            <p style={bodyText}>{company.teamsText[lang]}</p>
          </div>
        </div>
      </section>

      {/* ── ACCOMMODATION OPTIONS ── */}
      <section style={{ padding: '50px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ ...sectionTitle, textAlign: 'center', marginBottom: '36px' }}>{t.optionsTitle}</h2>
          <div style={{ display: 'grid', gap: '26px', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}>
            {t.options.map((o, i) => (
              <div key={o.title} style={{ background: '#fff', borderRadius: '18px', overflow: 'hidden', border: '1px solid #E8E0D0', display: 'flex', flexDirection: 'column' }}>
                <img src={OPTION_IMAGES[i]} alt={o.title} loading="lazy" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', color: '#1A3C34', fontSize: '21px', margin: 0 }}>{o.title}</h3>
                  <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.75, margin: 0, flexGrow: 1 }}>{o.text}</p>
                  {o.links ? (
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.9 }}>
                      {o.links.map((h, j) => (
                        <React.Fragment key={h.path}>
                          {j > 0 && ' · '}
                          <Link to={h.path} style={{ color: '#1A3C34', fontWeight: '700' }}>{h.label}</Link>
                        </React.Fragment>
                      ))}
                    </p>
                  ) : (
                    <Link to={o.path} style={{ color: '#1A3C34', fontWeight: '700', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      {t.view} <FaArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUDED ── */}
      <section style={{ padding: '50px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#1A3C34', borderRadius: '20px', padding: '40px clamp(24px, 5vw, 50px)', color: '#fff' }}>
          <h2 style={{ ...sectionTitle, color: '#fff' }}>{t.includedTitle}</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '14px' }}>
            {t.included.map((item) => (
              <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '16px', lineHeight: 1.7, color: '#E5E1D8' }}>
                <FaCheckCircle color="#C5A572" style={{ marginTop: '5px', flexShrink: 0 }} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '50px 20px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={sectionTitle}>{t.faqTitle}</h2>
          {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '70px 20px', textAlign: 'center', backgroundColor: '#F1EBE2' }}>
        <h2 style={{ ...sectionTitle, marginBottom: '12px' }}>{t.ctaTitle}</h2>
        <p style={{ ...bodyText, maxWidth: '620px', margin: '0 auto 28px' }}>{t.ctaText}</p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={trackGuestLead}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#25D366', color: '#fff', padding: '15px 30px', borderRadius: '40px', fontWeight: '700', textDecoration: 'none' }}>
            <FaWhatsapp size={20} /> {t.whatsapp}
          </a>
          <a href={`tel:+${PHONE}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#1A3C34', color: '#fff', padding: '15px 30px', borderRadius: '40px', fontWeight: '700', textDecoration: 'none' }}>
            <FaPhoneAlt size={15} /> {t.call} {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* ── OTHER COMPANIES (same language where available) ── */}
      <section style={{ padding: '60px 20px 80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ ...sectionTitle, fontSize: '22px' }}>{t.otherTitle}</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {others.map((c) => {
              const l = c.langs.includes(lang) ? lang : 'en';
              return (
                <li key={c.key}>
                  <Link to={companyPath(c.key, l)} style={{ display: 'inline-block', padding: '10px 18px', borderRadius: '30px', border: '1px solid #D5C7B5', background: '#fff', color: '#1A3C34', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                    {c.name[l]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
