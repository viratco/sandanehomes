import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaCircleCheck, FaEnvelope } from 'react-icons/fa6';
import './HrUpdatesSignup.css';

// "Planning ahead" signup for HR / admin teams who don't need a home yet.
// Visitors who need a home now use the Residences popup; this band only collects
// a work email for the monthly note on which homes are free.
// Signups arrive in the same inbox as popup enquiries (FormSubmit), and also go to
// the "HR monthly list" Google Sheet (scripts/hr-updates-sheet.gs), which keeps the
// list and emails each new subscriber a thank-you from our Gmail.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/residencesbysandanehomes@gmail.com';
// The Sheet's Apps Script web app URL (ends in /exec).
const SHEET_WEBHOOK = import.meta.env.VITE_HR_UPDATES_WEBHOOK
  || 'https://script.google.com/macros/s/AKfycbzXLBDQQ84mT-qzHpJsJEBMnR0C2oEHt8h2EGwRIQnyWtNfh4YWoHm789P3rMxYAfJcpg/exec';
const DONE_KEY = 'hr_updates_signed_up';

const track = (name, params = {}) => {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') window.gtag('event', name, { page_path: window.location.pathname, ...params });
  if (typeof window.clarity === 'function') window.clarity('event', name);
};

// The Residences hero renders it twice (under the centre photo, and below the hero
// on tablets); `id` keeps their field ids apart and `className` picks which shows.
const HrUpdatesSignup = ({ id = 'hru', className = '' }) => {
  const [email, setEmail] = useState('');
  const [trap, setTrap] = useState(''); // honeypot for bots
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [error, setError] = useState('');
  const [hidden, setHidden] = useState(false);

  // Someone who already signed up on this browser doesn't see it again.
  useEffect(() => {
    try { if (localStorage.getItem(DONE_KEY) === '1') setHidden(true); } catch { /* storage blocked */ }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (trap) return;
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('Please enter a valid email address.');
      return;
    }
    setStatus('sending');
    if (SHEET_WEBHOOK) {
      // no-cors + text/plain avoids a CORS preflight to Apps Script; the response is opaque.
      fetch(SHEET_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ email: value, page: window.location.href }),
      }).catch(() => {});
    }
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `HR monthly updates signup: ${value}`,
          _template: 'table',
          _captcha: 'false',
          enquiry_type: 'HR monthly availability updates (not looking yet)',
          email: value,
          page: window.location.href,
          message: `Add to the monthly availability list: ${value}\nSigned up on: ${window.location.href}`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error('send failed');
      setStatus('done');
      track('hr_updates_signup');
      try { localStorage.setItem(DONE_KEY, '1'); } catch { /* storage blocked */ }
    } catch {
      setStatus('error');
      setError('That didn’t go through. Please try again, or WhatsApp us on +91 88262 69690.');
    }
  };

  if (hidden) return null;

  return (
    <section className={`hru ${className}`.trim()} aria-labelledby={`${id}-title`}>
      <div className="hru-inner">
        <div className="hru-copy">
          <span className="hru-eyebrow">For HR &amp; admin teams</span>
          <h2 id={`${id}-title`} className="hru-title">Not looking right now? <em>Get a short monthly note on which of our homes are free.</em></h2>
        </div>

        {status === 'done' ? (
          <p className="hru-done" role="status">
            <FaCircleCheck aria-hidden="true" /> You’re on the list. Our next note reaches you at the start of the month.
          </p>
        ) : (
          <form className="hru-form" onSubmit={submit} noValidate>
            <label htmlFor={`${id}-email`} className="hru-sr">Work email</label>
            <div className="hru-field">
              <FaEnvelope aria-hidden="true" />
              <input
                id={`${id}-email`}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'sending'}
              />
            </div>
            <input type="text" name="website" value={trap} onChange={(e) => setTrap(e.target.value)} className="hru-trap" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button type="submit" className="hru-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Adding you…' : <>Keep me updated <FaArrowRight aria-hidden="true" /></>}
            </button>
            <p className="hru-note">
              {error ? <span className="hru-error" role="alert">{error}</span> : 'One email a month. Unsubscribe anytime.'}
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default HrUpdatesSignup;
