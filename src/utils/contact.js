// One source for the site's contact numbers.
// WhatsApp (guests, companies and owners) goes to +91 88262 69690.
// +91 97117 22273 is used only where it is labelled as a phone/call number.
// KakaoTalk (Korean guests) and LINE (Japanese guests) open our profile chat links.

// Opens a chat with Sandane Homes in LINE (from the owner's LINE QR code).
export const LINE_URL = 'https://line.me/ti/p/hrUpm82UQu';
// Opens a chat with Sandane Homes in KakaoTalk (from the owner's KakaoTalk QR code).
export const KAKAO_URL = 'https://qr.kakao.com/talk/c2qbkrfJEP2YU5LqoffN7IeOuWU-';

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

// Small notice at the bottom of the screen (used for call and KakaoTalk help).
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

// Kakao's chat link only opens the app on an iPhone/iPad or Android phone; on a
// computer Kakao sends it to kakaocorp.com. There we show our KakaoTalk QR code
// to scan with the phone instead. Returns true when the link should not be followed.
export const showKakaoHelp = () => {
  if (typeof window === 'undefined') return false;
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent || '')) return false;
  showToast(
    `<button type="button" aria-label="Close" onclick="this.parentNode.remove()" style="position:absolute;top:6px;right:10px;background:none;border:0;color:#E8C796;font-size:20px;line-height:1;cursor:pointer">×</button>` +
    `<span style="display:block;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#E8C796;margin-bottom:8px">KakaoTalk</span>` +
    `<img src="/images/kakao-qr.png" alt="Sandane Homes KakaoTalk QR code" width="160" height="160" style="display:block;margin:0 auto 10px;padding:8px;background:#fff;border-radius:10px">` +
    `<span style="display:block">Scan with KakaoTalk on your phone to chat with us.</span>` +
    `<span style="display:block;margin-top:2px;color:#E8C796">휴대폰 카카오톡으로 QR 코드를 스캔해 주세요.</span>`,
    30000,
  );
  return true;
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
