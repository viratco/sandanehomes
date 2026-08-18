import { VISIT_PURPOSES } from '../../utils/constants.js';

export default function Step4Purpose({ data, onChange, errors }) {
  const { visitPurpose, visitDetails } = data;

  return (
    <div>
      <div className="step-header">
        <p className="step-header__eyebrow">Step 4 of 5</p>
        <h2 className="step-header__title">Purpose of Visit</h2>
        <p className="step-header__desc">
          Help us serve you better by sharing the purpose of your stay with us.
        </p>
      </div>
      <div className="step-divider" />

      {/* Primary Reason */}
      <div className="form-group">
        <label htmlFor="visit-purpose" className="form-label">
          Primary Reason for Stay <span className="required-star">*</span>
        </label>
        <select
          id="visit-purpose"
          className={`form-select${errors.visitPurpose ? ' error' : ''}`}
          value={visitPurpose}
          onChange={e => onChange({ visitPurpose: e.target.value })}
        >
          <option value="">— Select primary reason —</option>
          {VISIT_PURPOSES.map(p => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
        {errors.visitPurpose && <p className="form-error">⚠ {errors.visitPurpose}</p>}
      </div>

      {/* Detailed Reason */}
      <div className="form-group">
        <label htmlFor="visit-details" className="form-label">
          Tell Us More <span className="required-star">*</span>
        </label>
        <textarea
          id="visit-details"
          className={`form-textarea${errors.visitDetails ? ' error' : ''}`}
          placeholder="Please briefly describe the purpose of your visit and stay.&#10;&#10;Example: Visiting Greater Noida for a 3-week business project and attending meetings with our local office team."
          value={visitDetails}
          onChange={e => onChange({ visitDetails: e.target.value })}
          rows={6}
        />
        {errors.visitDetails && <p className="form-error">⚠ {errors.visitDetails}</p>}
        <p className="form-hint">
          This helps our team personalise your experience and assist you better during your stay.
        </p>
      </div>

      <div
        style={{
          background: 'var(--color-gold-bg)',
          border: '1px solid var(--color-gold-border)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-4) var(--space-5)',
          display: 'flex',
          gap: 'var(--space-3)',
          alignItems: 'flex-start',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
        }}
      >
        <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>✨</span>
        <span>
          Our Guest Relations team reads every registration to ensure your stay is tailored to your needs.
          The more detail you share, the better we can serve you.
        </span>
      </div>
    </div>
  );
}
