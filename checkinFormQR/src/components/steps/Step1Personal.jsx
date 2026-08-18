import { SORTED_COUNTRIES } from '../../utils/constants.js';
import PhoneInput from '../shared/PhoneInput.jsx';

export default function Step1Personal({ data, onChange, errors }) {
  const { fullName, age, nationality, phoneCode, phoneNumber, email, additionalGuests = [] } = data;

  const handleAddGuest = () => {
    const updated = [
      ...additionalGuests,
      {
        id: Date.now().toString(),
        fullName: '',
        age: '',
        nationality: nationality || '',
        phoneCode: phoneCode || '+91',
        phoneNumber: '',
        email: '',
        idType: 'aadhaar',
        idFileFront: null,
        idFileBack: null,
      },
    ];
    onChange({ additionalGuests: updated });
  };

  const handleRemoveGuest = (index) => {
    const updated = additionalGuests.filter((_, i) => i !== index);
    onChange({ additionalGuests: updated });
  };

  const handleGuestChange = (index, field, value) => {
    const updated = additionalGuests.map((g, i) => {
      if (i === index) {
        return { ...g, [field]: value };
      }
      return g;
    });
    onChange({ additionalGuests: updated });
  };

  return (
    <div>
      <div className="step-header">
        <p className="step-header__eyebrow">Step 1 of 5</p>
        <h2 className="step-header__title">Personal Information</h2>
        <p className="step-header__desc">
          Please provide contact details and information for yourself and all guests staying in the room.
        </p>
      </div>
      <div className="step-divider" />

      {/* Primary Guest Card */}
      <div
        style={{
          background: 'var(--color-gold-bg)',
          border: '1.5px solid var(--color-gold-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px 18px',
          marginBottom: '28px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontSize: '1.2rem' }}>👤</span>
          <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 600, color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Primary Guest (Guest 1)
          </h3>
        </div>

        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="full-name" className="form-label">
            Full Name <span className="required-star">*</span>
          </label>
          <input
            id="full-name"
            type="text"
            className={`form-input${errors.fullName ? ' error' : ''}`}
            placeholder="As shown on your government ID"
            value={fullName}
            onChange={e => onChange({ fullName: e.target.value })}
            autoComplete="name"
            autoCapitalize="words"
          />
          {errors.fullName && <p className="form-error">⚠ {errors.fullName}</p>}
        </div>

        {/* Age & Nationality Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
          {/* Age */}
          <div className="form-group">
            <label htmlFor="guest-age" className="form-label">
              Age <span className="required-star">*</span>
            </label>
            <input
              id="guest-age"
              type="number"
              className={`form-input${errors.age ? ' error' : ''}`}
              placeholder="Age"
              value={age}
              onChange={e => onChange({ age: e.target.value })}
              min="18"
              max="120"
              inputMode="numeric"
            />
            {errors.age && <p className="form-error">⚠ {errors.age}</p>}
          </div>

          {/* Nationality */}
          <div className="form-group">
            <label htmlFor="nationality" className="form-label">
              Nationality <span className="required-star">*</span>
            </label>
            <select
              id="nationality"
              className={`form-select${errors.nationality ? ' error' : ''}`}
              value={nationality}
              onChange={e => onChange({ nationality: e.target.value })}
            >
              <option value="">— Select nationality —</option>
              {SORTED_COUNTRIES.map(c => (
                <option key={c.code} value={c.name}>{c.name}</option>
              ))}
            </select>
            {errors.nationality && <p className="form-error">⚠ {errors.nationality}</p>}
          </div>
        </div>

        {/* Phone */}
        <div className="form-group">
          <label className="form-label">
            Phone Number <span className="required-star">*</span>
          </label>
          <PhoneInput
            phoneCode={phoneCode}
            phoneNumber={phoneNumber}
            onCodeChange={v => onChange({ phoneCode: v })}
            onNumberChange={v => onChange({ phoneNumber: v })}
            error={errors.phoneNumber || errors.phoneCode}
          />
          {(errors.phoneCode || errors.phoneNumber) && (
            <p className="form-error">⚠ {errors.phoneCode || errors.phoneNumber}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="guest-email" className="form-label">
            Email Address <span className="optional-tag">(Optional)</span>
          </label>
          <input
            id="guest-email"
            type="email"
            className={`form-input${errors.email ? ' error' : ''}`}
            placeholder="you@example.com"
            value={email}
            onChange={e => onChange({ email: e.target.value })}
            autoComplete="email"
            inputMode="email"
          />
          {errors.email && <p className="form-error">⚠ {errors.email}</p>}
        </div>
      </div>

      {/* Additional / Accompanying Guests Section */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              Accompanying Guests
            </h3>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
              Add details for any additional people staying in your room.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddGuest}
            id="add-guest-btn"
            style={{
              padding: '8px 14px',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--color-gold)',
              background: 'var(--color-gold-bg)',
              color: 'var(--color-gold-dark)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            }}
          >
            <span>+</span> Add Person
          </button>
        </div>

        {/* List of Additional Guests */}
        {additionalGuests.map((guest, index) => {
          const guestNum = index + 2;
          const nameError = errors[`guest_${index}_fullName`];
          const ageError = errors[`guest_${index}_age`];
          const natError = errors[`guest_${index}_nationality`];
          const phoneError = errors[`guest_${index}_phoneNumber`];
          const emailError = errors[`guest_${index}_email`];

          return (
            <div
              key={guest.id || index}
              style={{
                background: 'var(--color-bg-warm)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px 16px',
                marginBottom: '20px',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Guest {guestNum}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveGuest(index)}
                  style={{
                    color: 'var(--color-error)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                    padding: '4px 8px',
                  }}
                >
                  ✕ Remove
                </button>
              </div>

              {/* Full Name */}
              <div className="form-group">
                <label className="form-label">
                  Full Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  className={`form-input${nameError ? ' error' : ''}`}
                  placeholder={`Guest ${guestNum} full legal name`}
                  value={guest.fullName || ''}
                  onChange={e => handleGuestChange(index, 'fullName', e.target.value)}
                  autoCapitalize="words"
                />
                {nameError && <p className="form-error">⚠ {nameError}</p>}
              </div>

              {/* Age & Nationality */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label">
                    Age <span className="required-star">*</span>
                  </label>
                  <input
                    type="number"
                    className={`form-input${ageError ? ' error' : ''}`}
                    placeholder="Age"
                    value={guest.age || ''}
                    onChange={e => handleGuestChange(index, 'age', e.target.value)}
                    min="1"
                    max="120"
                  />
                  {ageError && <p className="form-error">⚠ {ageError}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Nationality <span className="required-star">*</span>
                  </label>
                  <select
                    className={`form-select${natError ? ' error' : ''}`}
                    value={guest.nationality || ''}
                    onChange={e => handleGuestChange(index, 'nationality', e.target.value)}
                  >
                    <option value="">— Select nationality —</option>
                    {SORTED_COUNTRIES.map(c => (
                      <option key={c.code} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                  {natError && <p className="form-error">⚠ {natError}</p>}
                </div>
              </div>

              {/* Phone Number for Accompanying Guest */}
              <div className="form-group">
                <label className="form-label">
                  Phone Number <span className="required-star">*</span>
                </label>
                <PhoneInput
                  phoneCode={guest.phoneCode || '+91'}
                  phoneNumber={guest.phoneNumber || ''}
                  onCodeChange={v => handleGuestChange(index, 'phoneCode', v)}
                  onNumberChange={v => handleGuestChange(index, 'phoneNumber', v)}
                  error={phoneError}
                />
                {phoneError && <p className="form-error">⚠ {phoneError}</p>}
              </div>

              {/* Email for Accompanying Guest */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">
                  Email Address <span className="optional-tag">(Optional)</span>
                </label>
                <input
                  type="email"
                  className={`form-input${emailError ? ' error' : ''}`}
                  placeholder="guest@example.com"
                  value={guest.email || ''}
                  onChange={e => handleGuestChange(index, 'email', e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                />
                {emailError && <p className="form-error">⚠ {emailError}</p>}
              </div>
            </div>
          );
        })}

        {additionalGuests.length === 0 && (
          <div
            style={{
              padding: '18px 16px',
              border: '1.5px dashed var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              color: 'var(--color-text-muted)',
              fontSize: 'var(--text-xs)',
              cursor: 'pointer',
              background: 'var(--color-card)',
            }}
            onClick={handleAddGuest}
          >
            Staying with 2 or more people? Tap <strong>+ Add Person</strong> to register accompanying guests.
          </div>
        )}
      </div>
    </div>
  );
}
