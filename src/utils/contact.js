// One source for the site's contact numbers.
// WhatsApp (guests, companies and owners) goes to +91 88262 69690.
// +91 97117 22273 is used only where it is labelled as a phone/call number.

export const WHATSAPP_NUMBER = '918826269690';
export const WHATSAPP_DISPLAY = '+91 88262 69690';
export const CALL_NUMBER = '919711722273';
export const CALL_DISPLAY = '+91 97117 22273';

export const whatsappUrl = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// Page name for pre-filled WhatsApp messages, e.g. "Serviced Apartments in Gurgaon".
export const currentPageName = () => {
  if (typeof document === 'undefined') return '';
  const title = (document.title || '').split('|')[0].trim();
  return title || window.location.pathname;
};

// On a laptop or desktop a tel: link often opens nothing, so the click feels dead.
// After a "Call" click there, show the number in a small notice and copy it.
// The link itself still runs, so FaceTime / Phone Link users can still call.
export const showCallHelp = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return;
  if (window.matchMedia('(pointer: coarse)').matches) return; // phones dial directly

  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(CALL_DISPLAY).catch(() => {});
      copied = true;
    }
  } catch { /* ignore */ }

  const old = document.getElementById('call-help-toast');
  if (old) old.remove();
  const toast = document.createElement('div');
  toast.id = 'call-help-toast';
  toast.setAttribute('role', 'status');
  toast.innerHTML =
    `<strong style="display:block;font-size:18px;letter-spacing:.5px;margin-bottom:4px">${CALL_DISPLAY}</strong>` +
    `<span>Call us on this number from your phone${copied ? ' (copied)' : ''}, or WhatsApp ${WHATSAPP_DISPLAY}.</span>`;
  Object.assign(toast.style, {
    position: 'fixed', left: '50%', bottom: '28px', transform: 'translateX(-50%)',
    zIndex: '100000', background: '#2E2119', color: '#FFF3E0', padding: '14px 22px',
    borderRadius: '14px', boxShadow: '0 18px 40px -12px rgba(0,0,0,.45)',
    fontFamily: 'inherit', fontSize: '14px', lineHeight: '1.45', textAlign: 'center',
    maxWidth: 'calc(100vw - 32px)', transition: 'opacity .3s ease', opacity: '1',
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; }, 6000);
  setTimeout(() => toast.remove(), 6400);
};
