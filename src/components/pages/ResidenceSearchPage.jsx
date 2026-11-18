import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight, FaCheck, FaPhone, FaTrainSubway, FaBuilding, FaRulerCombined, FaBed } from 'react-icons/fa6';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import EntireHomeStrip from '../EntireHomeStrip';
import ResidencesLeadPopup, { openResidencesEnquiry } from '../ResidencesLeadPopup';
import { getResidenceSearchPage } from '../../data/residenceSearchPages';
import { gurugramResidences, residenceSqftLabel, GURUGRAM_SIZE_LABEL } from '../../data/gurugramResidences';
import { residenceSearchSchemas } from '../../utils/residenceSearchSchemas';
import { whatsappUrl, CALL_NUMBER, CALL_DISPLAY, showCallHelp } from '../../utils/contact';
import imgElevate from '../../assets/gurugram-elevate-sector-58.webp';
import imgGreenMeadows from '../../assets/gurugram-green-meadows-sector-27.webp';
import imgSushantLokB from '../../assets/gurugram-sushant-lok-block-b.webp';
import imgGreaterNoida from '../../assets/e8cd7b2a-95fc-418d-9ca2-357008d2aa61.JPG';
import './ResidenceSearchPage.css';

const BASE_URL = 'https://www.sandanehomes.com';

const HOME_PHOTOS = {
  'elevate-hines-sector-58-gurgaon': imgElevate,
  'green-meadows-sector-27-gurgaon': imgGreenMeadows,
  'sushant-lok-block-b-sector-27-gurgaon': imgSushantLokB,
};

const GREATER_NOIDA_AREAS = [
  { name: 'Jaypee Greens', href: '/serviced-apartments-jaypee-greens', text: 'Golf-course township with villas and large apartments' },
  { name: 'Ansal Golf Links', href: '/serviced-apartments-ansal-golf-links', text: 'Quiet, spacious gated community' },
  { name: 'Godrej Golf Link', href: '/serviced-apartments-godrej-golf-link', text: 'Modern gated homes around a golf course' },
];

const STEPS = ['Tell us the dates, how many people and where they will work', 'We share the homes that fit', 'Move in, and we look after the home for the whole stay'];

const heroPhoto = (page) => {
  if (page.city === 'greater-noida') return imgGreaterNoida;
  const first = page.homes?.[0] || 'green-meadows-sector-27-gurgaon';
  return HOME_PHOTOS[first] || imgGreenMeadows;
};

const GurugramHomes = ({ slugs }) => {
  const homes = (slugs || gurugramResidences.map((r) => r.slug))
    .map((s) => gurugramResidences.find((r) => r.slug === s))
    .filter(Boolean);
  return (
    <div className="rsp-homes">
      {homes.map((r) => (
        <Link key={r.slug} to={`/${r.slug}`} className="rsp-home">
          <div className="rsp-home-img">
            <img src={HOME_PHOTOS[r.slug]} alt={`${r.name}, ${r.sector}, Gurgaon: a home run by Residences by Sandane Homes`} loading="lazy" />
          </div>
          <div className="rsp-home-body">
            <span className="rsp-home-sector">{r.sector} · {r.neighbourhood}</span>
            <h3>{r.name}</h3>
            <ul>
              <li><FaBed aria-hidden="true" /> {r.configuration}</li>
              <li><FaRulerCombined aria-hidden="true" /> {residenceSqftLabel(r)}</li>
              <li><FaTrainSubway aria-hidden="true" /> {r.metro}</li>
              <li><FaBuilding aria-hidden="true" /> Cyber City · {r.cyberCity}</li>
            </ul>
            <span className="rsp-home-link">See this home <FaArrowRight aria-hidden="true" /></span>
          </div>
        </Link>
      ))}
    </div>
  );
};

const GreaterNoidaHomes = () => (
  <div className="rsp-areas">
    {GREATER_NOIDA_AREAS.map((a) => (
      <Link key={a.href} to={a.href} className="rsp-area">
        <h3>{a.name}</h3>
        <p>{a.text}</p>
        <span className="rsp-home-link">Homes in {a.name} <FaArrowRight aria-hidden="true" /></span>
      </Link>
    ))}
  </div>
);

export default function ResidenceSearchPage({ slug }) {
  const page = getResidenceSearchPage(slug);
  if (!page) return null;

  const canonical = `${BASE_URL}${page.canonicalPath || `/${page.slug}`}`;
  const showGurugram = page.city === 'gurugram' || page.city === 'ncr';
  const showGreaterNoida = page.city === 'greater-noida' || page.city === 'ncr';
  const waText = `Hello Sandane Homes, I found your page "${page.h1}" and would like to know which homes are available.`;
  const stripCity = page.city === 'greater-noida' ? 'Greater Noida' : page.city === 'gurugram' ? 'Gurugram' : 'Gurugram & Greater Noida';
  const stripSize = page.city === 'gurugram' ? GURUGRAM_SIZE_LABEL : page.city === 'greater-noida' ? '2,700–3,500 sq ft' : null;

  return (
    <div className="sandane-homes-page rsp-page">
      <SEO
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={canonical}
        ogImage={`${BASE_URL}/residences-og.jpg`}
        schema={residenceSearchSchemas(page, BASE_URL)}
      />
      <Header showTopBar={false} />

      <section className="rsp-hero">
        <div className="rsp-hero-bg" style={{ backgroundImage: `url(${heroPhoto(page)})` }} aria-hidden="true" />
        <div className="rsp-hero-inner">
          <nav className="rsp-crumbs" aria-label="Breadcrumb">
            <Link to="/residences">Residences</Link>
            {page.city === 'gurugram' && (<><span>›</span><Link to="/residences/gurgaon">Gurgaon</Link></>)}
            {page.city === 'greater-noida' && (<><span>›</span><Link to="/serviced-apartments-greater-noida">Greater Noida</Link></>)}
          </nav>
          <span className="rsp-eyebrow">{page.eyebrow}</span>
          <h1>{page.h1}</h1>
          <p className="rsp-lead">{page.lead}</p>
          <div className="rsp-cta">
            <button type="button" className="rsp-btn rsp-btn-gold" onClick={openResidencesEnquiry}>
              Ask which homes are free <FaArrowRight aria-hidden="true" />
            </button>
            <a className="rsp-btn rsp-btn-wa" href={whatsappUrl(waText)} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <EntireHomeStrip size={stripSize} bedrooms="3–4 bedrooms" city={stripCity} />

      <div className="rsp-sections">
        {page.sections.map((s) => (
          <section key={s.heading} className="rsp-section">
            <h2>{s.heading}</h2>
            {(s.paragraphs || []).map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            {s.points && (
              <ul className="rsp-points">
                {s.points.map((pt) => <li key={pt}><FaCheck aria-hidden="true" /> {pt}</li>)}
              </ul>
            )}
          </section>
        ))}
      </div>

      <section className="rsp-band">
        <div className="rsp-band-inner">
          <h2>{page.city === 'greater-noida' ? 'Our homes in Greater Noida' : page.city === 'ncr' ? 'Our homes in Gurgaon and Greater Noida' : 'Our homes in Gurgaon'}</h2>
          {showGurugram && <GurugramHomes slugs={page.homes} />}
          {page.city === 'ncr' && <h3 className="rsp-band-sub">Greater Noida</h3>}
          {showGreaterNoida && <GreaterNoidaHomes />}
          {showGurugram && <p className="rsp-band-note">Photos show homes we have already delivered to guests.</p>}
        </div>
      </section>

      <section className="rsp-steps-wrap">
        <h2>How it works</h2>
        <ol className="rsp-steps">
          {STEPS.map((t, i) => (<li key={t}><span>{i + 1}</span>{t}</li>))}
        </ol>
      </section>

      {page.faqs?.length > 0 && (
        <section className="rsp-faq">
          <h2>Questions people ask</h2>
          {page.faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      )}

      {page.related?.length > 0 && (
        <section className="rsp-related">
          <h2>Related</h2>
          <ul>
            {page.related.map((r) => (
              <li key={r.href}><Link to={r.href}>{r.text} <FaArrowRight aria-hidden="true" /></Link></li>
            ))}
          </ul>
        </section>
      )}

      <section className="rsp-final">
        <h2>Tell us who is coming, and when</h2>
        <p>Free advice, no commitment. We reply with the homes that fit your dates.</p>
        <div className="rsp-cta">
          <button type="button" className="rsp-btn rsp-btn-gold" onClick={openResidencesEnquiry}>
            Send an enquiry <FaArrowRight aria-hidden="true" />
          </button>
          <a className="rsp-btn rsp-btn-wa" href={whatsappUrl(waText)} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp aria-hidden="true" /> WhatsApp
          </a>
          <a className="rsp-btn rsp-btn-line" href={`tel:+${CALL_NUMBER}`} onClick={showCallHelp}>
            <FaPhone aria-hidden="true" /> {CALL_DISPLAY}
          </a>
        </div>
      </section>

      <Footer />
      <ResidencesLeadPopup />
    </div>
  );
}
