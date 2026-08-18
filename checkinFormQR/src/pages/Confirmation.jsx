import { useLocation, useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { registrationId, guestName } = location.state || {};

  if (!registrationId) {
    navigate('/', { replace: true });
    return null;
  }

  return (
    <div className="confirmation-wrapper">
      {/* Luxury Brand Header */}
      <header className="site-header" style={{ width: '100%', position: 'static' }}>
        <div className="site-header__content">
          <div className="site-header__logo-wrap">
            <img
              src="/logo.png"
              alt="Sandane Homes Logo"
              className="site-header__logo-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="site-header__text-wrap">
            <p className="label-caps site-header__eyebrow">Hotel Guest Check-In & Registration</p>
            <h1 className="site-header__brand">SANDANE HOMES</h1>
            <div className="site-header__stars">★ ★ ★ ★ ★</div>
          </div>
        </div>
        <div className="site-header__accent-line" />
      </header>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-8) var(--space-4)', width: '100%' }}>
        <div className="confirmation-card">
          {/* Success Icon */}
          <div className="confirmation-card__check">✓</div>

          {/* Title */}
          <h1 className="confirmation-card__title">Registration Complete</h1>
          <p className="confirmation-card__subtitle">
            {guestName ? `Thank you, ${guestName.split(' ')[0]}.` : 'Thank you.'} Your guest registration with{' '}
            <strong>Sandane Homes</strong> has been successfully received. Our Guest Relations team will
            assist you with your stay.
          </p>

          {/* Registration ID */}
          <div className="reg-id-box">
            <p className="reg-id-box__label">Your Registration ID</p>
            <p className="reg-id-box__value">{registrationId}</p>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '8px' }}>
              Please save this ID for reference during your stay.
            </p>
          </div>

          {/* What's Next */}
          <div
            style={{
              background: 'var(--color-bg-warm)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-5)',
              marginBottom: 'var(--space-6)',
              textAlign: 'left',
            }}
          >
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold-muted)', marginBottom: '12px' }}>
              What happens next
            </p>
            {[
              { icon: '🔍', text: 'Our team will verify your registration and ID document.' },
              { icon: '🛎️', text: 'Guest Relations will contact you if any information is needed.' },
              { icon: '🏨', text: "You'll be checked in to your room upon arrival." },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: i < 2 ? '10px' : 0 }}>
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>{item.icon}</span>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <p className="contact-info__label">For Assistance</p>
            <p className="contact-info__brand">Sandane Homes — Guest Relations</p>
            <div className="contact-info__phones">
              <a href="tel:+919289615804" className="contact-info__phone">+91 92896 15804</a>
              <a href="tel:+917974173863" className="contact-info__phone">+91 79741 73863</a>
            </div>
          </div>
        </div>
      </div>

      <footer style={{
        textAlign: 'center',
        padding: 'var(--space-6)',
        color: 'var(--color-text-muted)',
        fontSize: 'var(--text-xs)',
      }}>
        © {new Date().getFullYear()} Sandane Homes. All rights reserved.
      </footer>
    </div>
  );
}
