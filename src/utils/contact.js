// One source for the site's contact numbers.
// WhatsApp (guests, companies and owners) goes to +91 88262 69690.
// +91 97117 22273 is used only where it is labelled as a phone/call number,
// and for KakaoTalk (Korean guests) and LINE (Japanese guests).

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

// Small notice at the bottom of the screen (used for call and messenger help).
const showToast = (html, ms) => {
  const old = document.getElementById('call-help-toast');
  if (old) old.remove();
  const toast = document.createElement('div');
  toast.id = 'call-help-toast';
  toast.setAttribute('role', 'status');
  toast.innerHTML = html;
  Object.assign(toast.style, {
    position: 'fixed', left: '50%', bottom: '28px', transform: 'translateX(-50%)',
    zIndex: '100000', background: '#2E2119', color: '#FFF3E0', padding: '14px 22px',
    borderRadius: '14px', boxShadow: '0 18px 40px -12px rgba(0,0,0,.45)',
    fontFamily: 'inherit', fontSize: '14px', lineHeight: '1.45', textAlign: 'center',
    width: 'max-content', maxWidth: 'min(400px, calc(100vw - 32px))', boxSizing: 'border-box', transition: 'opacity .3s ease', opacity: '1',
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; }, ms);
  setTimeout(() => toast.remove(), ms + 400);
};

const copyText = (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(() => {});
      return true;
    }
  } catch { /* ignore */ }
  return false;
};

// On a laptop or desktop a tel: link often opens nothing, so the click feels dead.
// After a "Call" click there, show the number in a small notice and copy it.
// The link itself still runs, so FaceTime / Phone Link users can still call.
export const showCallHelp = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return;
  if (window.matchMedia('(pointer: coarse)').matches) return; // phones dial directly

  const copied = copyText(CALL_DISPLAY);

  showToast(
    `<strong style="display:block;font-size:18px;letter-spacing:.5px;margin-bottom:4px">${CALL_DISPLAY}</strong>` +
    `<span>Call us on this number from your phone${copied ? ' (copied)' : ''}, or WhatsApp ${WHATSAPP_DISPLAY}.</span>`,
    6000,
  );
};

// KakaoTalk and LINE have no link that opens a chat with a phone number, so the
// button copies the number and says how to add us. On phones it also offers to
// open the app (LINE straight to its "Add friends" screen).
const MESSENGERS = {
  kakao: {
    name: 'KakaoTalk',
    how: 'In KakaoTalk: Friends → Add friend → add by phone number.',
    local: '카카오톡 → 친구 추가 → 연락처로 추가',
    open: 'kakaotalk://',
  },
  line: {
    name: 'LINE',
    how: 'In LINE: Add friends → Search → Phone number.',
    local: 'LINE → 友だち追加 → 検索 → 電話番号',
    open: 'https://line.me/R/nv/addFriends',
  },
};

export const MESSENGER_DISPLAY = CALL_DISPLAY;

export const showMessengerHelp = (app) => {
  if (typeof window === 'undefined') return;
  const m = MESSENGERS[app];
  if (!m) return;
  const copied = copyText(MESSENGER_DISPLAY);
  const onPhone = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  showToast(
    `<span style="display:block;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#E8C796;margin-bottom:2px">${m.name}</span>` +
    `<strong style="display:block;font-size:18px;letter-spacing:.5px;margin-bottom:4px;white-space:nowrap">${MESSENGER_DISPLAY}${copied ? ' <span style="font-size:12px;font-weight:500;color:#E8C796">(copied)</span>' : ''}</strong>` +
    `<span style="display:block">${m.how}</span>` +
    `<span style="display:block;margin-top:2px;color:#E8C796">${m.local}</span>` +
    (onPhone
      ? `<a href="${m.open}" style="display:inline-block;margin-top:10px;padding:8px 18px;border-radius:30px;background:#FFF3E0;color:#2E2119;font-weight:700;text-decoration:none">Open ${m.name}</a>`
      : ''),
    12000,
  );
};
