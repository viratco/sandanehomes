import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowRight, FaTrain, FaBuilding } from 'react-icons/fa';
import { gurugramResidences, GURUGRAM_HUB_PATH } from '../data/gurugramResidences';
import imgElevate from '../assets/gurugram-elevate-sector-58.webp';
import imgGreenMeadows from '../assets/gurugram-green-meadows-sector-27.webp';
import imgSushantLok from '../assets/gurugram-sushant-lok-block-b.webp';

const IMAGES = {
  'elevate-hines-sector-58-gurgaon': imgElevate,
  'green-meadows-sector-27-gurgaon': imgGreenMeadows,
  'sushant-lok-block-b-sector-27-gurgaon': imgSushantLok,
};

export const GurugramResidenceCard = ({ r }) => (
  <article style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>
    <Link to={`/${r.slug}`} style={{ display: 'block', height: '220px', overflow: 'hidden' }}>
      <img
        src={IMAGES[r.slug]}
        alt={`${r.configuration} serviced apartment at ${r.name}, ${r.sector}, Gurgaon — Residences by Sandane Homes`}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Link>
    <div style={{ padding: '26px 24px 28px', display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'left' }}>
      <p style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#C5A572', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: '700', margin: '0 0 10px' }}>
        <FaMapMarkerAlt size={11} /> {r.sector}, Gurugram
      </p>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#1A3C34', margin: '0 0 6px', lineHeight: 1.25 }}>
        <Link to={`/${r.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{r.name}</Link>
      </h3>
      <p style={{ color: '#8B7355', fontSize: '15px', margin: '0 0 16px' }}>{r.configuration} · {r.size}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#555', lineHeight: 1.5 }}>
        <li style={{ display: 'flex', gap: '8px' }}><FaBuilding size={13} color="#C5A572" style={{ flexShrink: 0, marginTop: '3px' }} />{r.propertyType}</li>
        <li style={{ display: 'flex', gap: '8px' }}><FaTrain size={13} color="#C5A572" style={{ flexShrink: 0, marginTop: '3px' }} />{r.metro}</li>
      </ul>
      <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.7, margin: '0 0 22px', flex: 1 }}>{r.bestFor}.</p>
      <Link to={`/${r.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1A3C34', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textDecoration: 'none', textTransform: 'uppercase' }}>
        View residence <FaArrowRight size={12} />
      </Link>
    </div>
  </article>
);

const GurugramResidencesSection = ({
  title = 'Homes We Have Delivered in Gurugram',
  intro = 'We find, lease, furnish and manage homes on demand. These are homes we have delivered in Gurgaon, with daily housekeeping, 300 Mbps Wi-Fi, power backup and corporate GST invoicing; we look for new ones wherever your employees will work.',
  showHubLink = true,
  background = '#F7F4EF',
}) => (
  <section style={{ backgroundColor: background, padding: '90px 20px' }} aria-labelledby="gurugram-residences-title">
    <div style={{ maxWidth: '1150px', margin: '0 auto', textAlign: 'center' }}>
      <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '700', margin: '0 0 14px' }}>Gurgaon · Homes we have delivered</p>
      <h2 id="gurugram-residences-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#1A3C34', margin: '0 0 16px' }}>{title}</h2>
      <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.8, maxWidth: '720px', margin: '0 auto 50px' }}>{intro}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
        {gurugramResidences.map((r) => <GurugramResidenceCard key={r.slug} r={r} />)}
      </div>
      <p style={{ color: '#8B7355', fontSize: '14px', lineHeight: 1.6, fontStyle: 'italic', margin: '22px auto 0', maxWidth: '640px' }}>
        The photos above are of homes we have already delivered.
      </p>
      {showHubLink && (
        <Link to={GURUGRAM_HUB_PATH} style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', marginTop: '46px', backgroundColor: '#1A3C34', color: '#fff', padding: '15px 34px', borderRadius: '40px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', letterSpacing: '1.5px' }}>
          ALL SERVICED APARTMENTS IN GURGAON <FaArrowRight size={12} />
        </Link>
      )}
    </div>
  </section>
);

export default GurugramResidencesSection;
