import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { OWNER_PHONE, OWNER_PHONE_DISPLAY } from '../utils/ownerLeads';

/**
 * Click-to-call / WhatsApp line for property-owner forms. With `deliveryFailed`, it also
 * tells the owner that the online copy of their details did not go through. Clicks are
 * tracked by OwnerClickTracker via `data-owner-source`.
 */
const OwnerContactLine = ({ dark = false, deliveryFailed = false, form }) => {
  const muted = dark ? '#94A3B8' : '#666';
  const accent = dark ? '#C5A572' : '#1A3C34';

  return (
    <div data-owner-source={form} style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px', color: muted, lineHeight: '1.7' }}>
      {deliveryFailed && (
        <p style={{
          margin: '0 auto 14px', maxWidth: '520px', padding: '12px 16px', borderRadius: '10px',
          background: dark ? 'rgba(234, 179, 8, 0.12)' : '#FFF8E6',
          border: '1px solid #EAB308', color: dark ? '#FDE68A' : '#7A5B00'
        }}>
          We couldn't confirm your details online. If WhatsApp didn't open with your details, please call or WhatsApp us directly so we don't miss your property.
        </p>
      )}
      Prefer to talk?{' '}
      <a
        href={`tel:+${OWNER_PHONE}`}
        style={{ color: accent, fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}
      >
        <FaPhoneAlt size={12} style={{ marginRight: '6px' }} />Call {OWNER_PHONE_DISPLAY}
      </a>
      {' · '}
      <a
        href={`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent('Hi Sandane Homes, I own a property and would like to discuss partnering with your team.')}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: accent, fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}
      >
        <FaWhatsapp size={14} style={{ marginRight: '6px' }} />WhatsApp
      </a>
    </div>
  );
};

export default OwnerContactLine;
