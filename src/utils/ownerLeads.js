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
 * action: 'form_submit' | 'call_click' | 'whatsapp_click' | 'cta_click'
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
 * Records owner clicks as owner events and returns a cleanup function:
 * - call (tel:) and WhatsApp links: anywhere on owner pages (`onOwnerPage`), and elsewhere
 *   only inside an element marked `data-owner-source` (e.g. owner CTAs on blog posts);
 * - links to /partner pages inside a `data-owner-source` element, as 'cta_click'.
 * The source is the nearest `data-owner-source`, else 'floating_button' / 'page_link'.
 */
export const listenForOwnerContactClicks = ({ onOwnerPage = true } = {}) => {
  const onClick = (event) => {
    const link = event.target.closest && event.target.closest('a[href^="tel:"], a[href*="wa.me/"], a[href^="/partner"]');
    if (!link) return;
    const scope = link.closest('[data-owner-source]');
    const href = link.getAttribute('href');
    const isPartnerLink = href.startsWith('/partner');
    if (!scope && (isPartnerLink || !onOwnerPage)) return;
    const source = scope?.dataset.ownerSource
      || (link.classList.contains('whatsapp-float') ? 'floating_button' : 'page_link');
    const action = isPartnerLink ? 'cta_click' : href.startsWith('tel:') ? 'call_click' : 'whatsapp_click';
    trackOwnerEvent(action, { form: source });
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
