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
