export default function Step5Declaration({ data, onChange, errors, isSubmitting }) {
  const { consentGiven } = data;

  return (
    <div>
      <div className="step-header">
        <p className="step-header__eyebrow">Step 5 of 5</p>
        <h2 className="step-header__title">Declaration & Submit</h2>
        <p className="step-header__desc">
          Please review and confirm the declaration before completing your registration.
        </p>
      </div>
      <div className="step-divider" />

      {/* Summary Banner */}
      <div
        style={{
          background: 'var(--color-card-warm)',
          border: '1.5px solid var(--color-gold-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-5)',
          marginBottom: 'var(--space-6)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-4)',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--color-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            flexShrink: 0,
          }}
        >
          ✓
        </div>
        <div>
          <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
            Almost done!
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
            Your information has been filled in. Please read and accept the declaration below to complete registration.
          </p>
        </div>
      </div>

      {/* Declaration Box */}
      <div className="declaration-box">
        <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px', fontSize: 'var(--text-sm)' }}>
          Guest Declaration
        </p>
        <p className="declaration-box__text">
          "I confirm that the information provided above is accurate and complete to the best of my knowledge,
          and that the identification document uploaded belongs to me. I consent to Sandane Homes collecting
          and securely processing this information for hotel registration, guest management, legal and compliance
          requirements, and related hospitality services. I understand that my government ID document will be
          stored securely and will only be accessed by authorised Sandane Homes personnel."
        </p>
      </div>

      {/* Privacy Policy */}
      <div className="privacy-banner" style={{ marginBottom: 'var(--space-5)' }}>
        <strong>Privacy Notice:</strong> We collect your personal information and government ID solely for hotel
        check-in and compliance purposes. Your data is stored securely and is not shared with third parties
        without your consent. For questions about your data, contact us at{' '}
        <a href="mailto:privacy@sandanehomes.com" style={{ color: 'var(--color-gold-dark)' }}>
          privacy@sandanehomes.com
        </a>.{' '}
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--color-gold-dark)', textDecoration: 'underline' }}
        >
          Read our Privacy Policy →
        </a>
      </div>

      {/* Consent Checkbox */}
      <div className="form-group">
        <label className="checkbox-group" htmlFor="consent-checkbox">
          <input
            id="consent-checkbox"
            type="checkbox"
            checked={consentGiven}
            onChange={e => onChange({ consentGiven: e.target.checked })}
          />
          <span className="checkbox-label">
            I agree to the above declaration and consent to Sandane Homes processing my personal
            information and government ID for the stated purposes, in accordance with the{' '}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </span>
        </label>
        {errors.consentGiven && (
          <p className="form-error" style={{ marginTop: '8px' }}>⚠ {errors.consentGiven}</p>
        )}
      </div>

      {/* Submit Button */}
      <div style={{ marginTop: 'var(--space-8)' }}>
        <button
          type="submit"
          className="btn btn-primary btn-full"
          disabled={isSubmitting}
          id="submit-registration-btn"
          style={{ fontSize: 'var(--text-md)', minHeight: '58px' }}
        >
          {isSubmitting ? (
            <>
              <div className="spinner" />
              Submitting Registration…
            </>
          ) : (
            <>
              <span>Complete Guest Registration</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </>
          )}
        </button>
        <p style={{
          textAlign: 'center',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          marginTop: 'var(--space-4)',
        }}>
          🔒 Secured by 256-bit encryption &nbsp;·&nbsp; Your data is protected
        </p>
      </div>
    </div>
  );
}
