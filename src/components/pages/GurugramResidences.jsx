import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import GurugramResidencesSection from '../GurugramResidencesSection';
import { FaWhatsapp, FaArrowRight, FaChevronDown, FaChevronUp, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import imgHero from '../../assets/livingroom.jpeg';
import { gurugramResidences, gurugramHubFaqs, gurugramItemListSchema, GURUGRAM_HUB_PATH } from '../../data/gurugramResidences';

const PHONE = '919711722273';
const HUB_URL = `https://www.sandanehomes.com${GURUGRAM_HUB_PATH}`;

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

const th = { padding: '14px 16px', textAlign: 'left', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', color: '#C5A572', borderBottom: '2px solid #E8E0D0', whiteSpace: 'nowrap' };
const td = { padding: '16px', borderBottom: '1px solid #EEE7DB', fontSize: '15px', color: '#444', verticalAlign: 'top' };

export default function GurugramResidences() {
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sandanehomes.com/' },
      { '@type': 'ListItem', position: 2, name: 'Residences by Sandane Homes', item: 'https://www.sandanehomes.com/residences' },
      { '@type': 'ListItem', position: 3, name: 'Gurgaon', item: HUB_URL },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: gurugramHubFaqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <div className="sandane-homes-page">
      <SEO
        title="Serviced Apartments in Gurgaon | Residences by Sandane Homes (Gurugram)"
        description="Residences by Sandane Homes in Gurgaon: fully furnished 3BHK & 4BHK serviced apartments at Conscient Hines Elevate (Sector 58), Green Meadows & Sushant Lok (Sector 27). Daily housekeeping, GST invoicing, expat support."
        canonical={HUB_URL}
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={[gurugramItemListSchema(), faqSchema, breadcrumb]}
      />
      <Header showTopBar={false} />

      {/* HERO */}
      <div style={{ position: 'relative', minHeight: '78vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '120px 20px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${imgHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,25,20,0.7) 0%, rgba(10,25,20,0.94) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '940px' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', fontSize: '13px' }}>
            <Link to="/residences" style={{ color: 'rgba(197,165,114,0.8)', textDecoration: 'none' }}>Residences</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <span style={{ color: '#C5A572', fontWeight: '600' }}>Gurgaon</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(197,165,114,0.15)', border: '1px solid rgba(197,165,114,0.5)', borderRadius: '30px', padding: '7px 20px', color: '#C5A572', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '24px' }}>
            <FaMapMarkerAlt size={11} /> Sector 27 · Sector 58 · Gurugram
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5.5vw, 62px)', color: '#fff', margin: '0 auto 20px', lineHeight: '1.1', maxWidth: '880px' }}>
            Serviced Apartments in Gurgaon<br />
            <span style={{ color: '#C5A572' }}>Residences by Sandane Homes</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#D0C5B0', maxWidth: '720px', margin: '0 auto 36px', lineHeight: '1.8' }}>
            {gurugramResidences.length} fully serviced 3BHK and 4BHK homes on Golf Course Extension Road and near HUDA City Centre — run by our own team for expats, relocating families and corporate guests.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#gurugram-residences-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '16px 36px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              See the Residences <FaArrowRight />
            </a>
            <a href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20am%20looking%20for%20a%20serviced%20apartment%20in%20Gurgaon.`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', backgroundColor: '#25D366', color: '#fff', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <GurugramResidencesSection
        title="Our Gurgaon Residences"
        intro="Each home is furnished and run by Sandane Homes — the same team handles your booking, housekeeping and maintenance from move-in to move-out."
        showHubLink={false}
      />

      {/* COMPARISON */}
      <div style={{ backgroundColor: '#fff', padding: '90px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#1A3C34', margin: '0 0 12px', textAlign: 'center' }}>Compare at a Glance</h2>
          <p style={{ color: '#555', fontSize: '16px', textAlign: 'center', margin: '0 0 40px' }}>Pick by commute, space and lifestyle.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '720px' }}>
              <thead>
                <tr><th style={th}>Residence</th><th style={th}>Type</th><th style={th}>Size</th><th style={th}>Nearest metro</th><th style={th}>To Cyber City</th></tr>
              </thead>
              <tbody>
                {gurugramResidences.map((r) => (
                  <tr key={r.slug}>
                    <td style={td}><Link to={`/${r.slug}`} style={{ color: '#1A3C34', fontWeight: '700', textDecoration: 'none' }}>{r.name}</Link><br /><span style={{ fontSize: '13px', color: '#8B7355' }}>{r.sector}, {r.neighbourhood}</span></td>
                    <td style={td}>{r.configuration}<br /><span style={{ fontSize: '13px', color: '#8B7355' }}>{r.propertyType}</span></td>
                    <td style={td}>{r.size}</td>
                    <td style={td}>{r.metro}</td>
                    <td style={td}>{r.cyberCity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* WHY / FOR COMPANIES */}
      <div style={{ backgroundColor: '#F7F4EF', padding: '90px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          <div>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>Included in Every Stay</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#1A3C34', margin: '0 0 24px', lineHeight: '1.25' }}>Hotel Service, Home Space</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Fully furnished with kitchen, linen and kitchenware',
                'Daily housekeeping; linen changed twice a week',
                '300 Mbps Wi-Fi and 100% power backup',
                'Maintenance and repairs handled by our team',
                'Reserved parking',
              ].map((p) => (
                <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <FaCheckCircle size={16} color="#C5A572" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ color: '#444', fontSize: '16px' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', marginBottom: '14px' }}>For Companies & HR Teams</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#1A3C34', margin: '0 0 24px', lineHeight: '1.25' }}>Corporate Housing in Gurgaon</h2>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.9', margin: '0 0 18px' }}>
              We lease directly to companies with monthly GST invoices, and look after relocating staff from arrival: airport pickup, FRRO registration support and a single point of contact for your HR or general-affairs team.
            </p>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.9', margin: '0 0 24px' }}>
              Housing staff from Japan or Korea? See our <Link to="/gurugram/japanese-expat-housing" style={{ color: '#1A3C34', fontWeight: '600' }}>Japanese expat housing in Gurugram</Link> and <Link to="/gurugram/korean-expat-housing" style={{ color: '#1A3C34', fontWeight: '600' }}>Korean expat housing in Gurugram</Link> guides.
            </p>
            <Link to="/gurugram-corporate-housing" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1A3C34', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none' }}>
              Gurugram corporate housing <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* OWNERS */}
      <div style={{ backgroundColor: '#1A3C34', padding: '70px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.2vw, 34px)', color: '#fff', margin: '0 0 14px' }}>Own a Flat in Gurugram?</h2>
          <p style={{ color: '#D0C5B0', fontSize: '17px', lineHeight: '1.8', margin: '0 0 30px' }}>
            Sandane Homes furnishes, rents and manages apartments and builder floors for owners across Gurgaon — with corporate tenants and no day-to-day work for you.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/partner/gurugram-home-owners" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#C5A572', color: '#1A3C34', padding: '14px 30px', borderRadius: '40px', textDecoration: 'none', fontSize: '15px', fontWeight: '700' }}>For Home Owners <FaArrowRight size={12} /></Link>
            <Link to="/partner/gurugram-building-owners" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #C5A572', color: '#C5A572', padding: '14px 30px', borderRadius: '40px', textDecoration: 'none', fontSize: '15px', fontWeight: '700' }}>For Building Owners <FaArrowRight size={12} /></Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '90px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#1A3C34', margin: '0 0 48px', textAlign: 'center' }}>FAQs — Serviced Apartments in Gurgaon</h2>
          <div style={{ borderTop: '1px solid #E8E0D0' }}>{gurugramHubFaqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'linear-gradient(135deg, #0F1F1A 0%, #1A3C34 100%)', padding: '90px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 46px)', margin: '0 0 18px' }}>Check Availability in Gurgaon</h2>
        <p style={{ color: '#D0C5B0', fontSize: '17px', maxWidth: '560px', margin: '0 auto 40px', lineHeight: '1.8' }}>Tell us your move-in date, team size and office location — we will suggest the best fit.</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
          <a href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20want%20to%20check%20availability%20for%20a%20serviced%20apartment%20in%20Gurgaon.`} target="_blank" rel="noopener noreferrer"
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
