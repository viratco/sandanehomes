// Property-owner (supply side) lead tracking and delivery.
// Kept separate from guest booking conversions (`ads_conversion_Purchase_1`) so owner
// leads can be counted, reported and optimised on their own.

export const OWNER_PHONE = '919711722273';
export const OWNER_PHONE_DISPLAY = '+91 97117 22273';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/residencesbysandanehomes@gmail.com';

// Optional second copy of every owner lead, e.g. a Google Apps Script web app that appends
// a row to a Google Sheet (see scripts/owner-leads-sheet.gs). Set in Vercel env vars.
const SHEET_WEBHOOK = import.meta.env.VITE_OWNER_LEAD_WEBHOOK;

// Optional Google Ads conversion for owner leads, as 'AW-18351401616/<label>'. Create a
// separate "Owner lead" conversion action in Google Ads and paste its send_to value here.
const OWNER_ADS_SEND_TO = '';

export const isOwnerPath = (pathname = '') =>
  /^\/(partner|partner-with-us|partner-form|property-partner)(\/|$)/i.test(pathname);

/**
 * action: 'form_submit' | 'call_click' | 'whatsapp_click'
 * form_submit is sent as GA4's recommended `generate_lead` event.
 */
export const trackOwnerEvent = (action, params = {}) => {
  if (typeof window === 'undefined') return;
  const eventParams = { lead_type: 'property_owner', page_path: window.location.pathname, ...params };
  if (typeof window.gtag === 'function') {
    window.gtag('event', action === 'form_submit' ? 'generate_lead' : `owner_${action}`, eventParams);
    if (action === 'form_submit' && OWNER_ADS_SEND_TO) {
      window.gtag('event', 'conversion', { send_to: OWNER_ADS_SEND_TO });
    }
  }
  if (typeof window.clarity === 'function') {
    window.clarity('event', `owner_${action}`);
  }
};

/**
 * On owner pages, records every click on a call (tel:) or WhatsApp link as an owner event,
 * including links added to owner pages later. The source comes from the nearest
 * `data-owner-source` attribute, else 'floating_button' / 'page_link'.
 * Returns a cleanup function.
 */
export const listenForOwnerContactClicks = () => {
  const onClick = (event) => {
    const link = event.target.closest && event.target.closest('a[href^="tel:"], a[href*="wa.me/"]');
    if (!link) return;
    const source = link.closest('[data-owner-source]')?.dataset.ownerSource
      || (link.classList.contains('whatsapp-float') ? 'floating_button' : 'page_link');
    trackOwnerEvent(link.getAttribute('href').startsWith('tel:') ? 'call_click' : 'whatsapp_click', { form: source });
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
};

/**
 * Sends an owner lead to the acquisitions inbox (and the optional Sheet webhook), then
 * fires the owner-lead event. Resolves to true only when FormSubmit confirms delivery.
 */
export const submitOwnerLead = async (fields, { form, city, property_type } = {}) => {
  const payload = {
    ...fields,
    'Page': typeof window !== 'undefined' ? window.location.pathname : '',
    'Submission Timestamp': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  if (SHEET_WEBHOOK) {
    // no-cors + text/plain avoids a CORS preflight to Apps Script; the response is opaque.
    fetch(SHEET_WEBHOOK, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }

  let delivered = false;
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _captcha: 'false', _template: 'table', ...payload }),
    });
    const data = await response.json().catch(() => ({}));
    delivered = response.ok && String(data.success) === 'true';
  } catch (error) {
    console.error('Owner lead submission failed:', error);
  }

  // The prefilled WhatsApp message has already opened, so this is a lead either way;
  // `delivered` shows whether the email copy also arrived.
  trackOwnerEvent('form_submit', { form, city, property_type, delivered });
  return delivered;
};
