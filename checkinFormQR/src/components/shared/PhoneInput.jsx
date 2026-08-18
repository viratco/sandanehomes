import { useState } from 'react';
import { SORTED_COUNTRIES } from '../../utils/constants.js';

export default function PhoneInput({ phoneCode, phoneNumber, onCodeChange, onNumberChange, error }) {
  const [codeSearch, setCodeSearch] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = SORTED_COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(codeSearch.toLowerCase()) ||
    c.dialCode.includes(codeSearch)
  );

  const selectedCountry = SORTED_COUNTRIES.find(c => c.dialCode === phoneCode) || SORTED_COUNTRIES[0];

  return (
    <div className="phone-input-row">
      <div style={{ position: 'relative', width: '140px', flexShrink: 0 }}>
        <button
          type="button"
          id="phone-code-btn"
          onClick={() => setOpen(!open)}
          style={{
            width: '100%',
            minHeight: '52px',
            padding: '0 12px',
            border: `1.5px solid ${error ? 'var(--color-error)' : 'var(--color-border)'}`,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-card)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: 'var(--text-md)',
            color: 'var(--color-text-primary)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
          }}
        >
          <span>{selectedCountry?.code}</span>
          <span style={{ color: 'var(--color-text-secondary)' }}>{phoneCode}</span>
          <svg style={{ marginLeft: 'auto', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            border: '1.5px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 50,
            maxHeight: '260px',
            overflowY: 'auto',
            marginTop: '4px',
          }}>
            <div style={{ padding: '8px', borderBottom: '1px solid var(--color-border)', position: 'sticky', top: 0, background: 'white' }}>
              <input
                type="text"
                placeholder="Search country..."
                value={codeSearch}
                onChange={e => setCodeSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 10px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  outline: 'none',
                }}
                autoFocus
              />
            </div>
            {filtered.map(c => (
              <button
                key={`${c.code}-${c.dialCode}`}
                type="button"
                onClick={() => {
                  onCodeChange(c.dialCode);
                  setOpen(false);
                  setCodeSearch('');
                }}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  color: 'var(--color-text-primary)',
                  background: phoneCode === c.dialCode ? 'var(--color-gold-bg)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-bg-warm)'}
                onMouseLeave={e => e.currentTarget.style.background = phoneCode === c.dialCode ? 'var(--color-gold-bg)' : 'transparent'}
              >
                <span style={{ fontWeight: 600, color: 'var(--color-gold-dark)', minWidth: '42px' }}>{c.dialCode}</span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.name}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: '16px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '13px' }}>
                No results found
              </div>
            )}
          </div>
        )}
      </div>

      <input
        type="tel"
        id="phone-number"
        className={`form-input phone-number-input${error ? ' error' : ''}`}
        placeholder="Phone number"
        value={phoneNumber}
        onChange={e => onNumberChange(e.target.value.replace(/[^\d\s\-]/g, ''))}
        inputMode="tel"
        autoComplete="tel"
      />
    </div>
  );
}
