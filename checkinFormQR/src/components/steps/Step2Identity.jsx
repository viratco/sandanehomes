import { useState, useCallback, useRef } from 'react';
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE, ID_TYPES } from '../../utils/constants.js';
import { formatFileSize } from '../../utils/validation.js';

function FileUploadBox({ label, subtitle, file, onFileChange, error, isRequired = true, inputId }) {
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleSelect = useCallback((selectedFile) => {
    if (!selectedFile) return;

    if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
      onFileChange(null);
      setPreview(null);
      return;
    }
    if (selectedFile.size > MAX_FILE_SIZE) {
      onFileChange(null);
      setPreview(null);
      return;
    }

    onFileChange(selectedFile);

    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = e => setPreview(e.target.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview('pdf');
    }
  }, [onFileChange]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) handleSelect(dropped);
  }, [handleSelect]);

  const handleRemove = () => {
    onFileChange(null);
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="form-group" style={{ marginBottom: '20px' }}>
      <label className="form-label" htmlFor={inputId}>
        {label} {isRequired && <span className="required-star">*</span>}
      </label>
      {subtitle && <p className="form-hint" style={{ marginBottom: '8px' }}>{subtitle}</p>}

      {!file ? (
        <div
          className={`upload-zone${dragOver ? ' drag-over' : ''}${error ? ' upload-zone-error' : ''}`}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          style={{
            padding: '20px 14px',
            border: error ? '2px dashed var(--color-error)' : undefined,
            background: error ? 'var(--color-error-bg)' : undefined,
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            id={inputId}
            accept=".jpg,.jpeg,.png,.pdf"
            capture="environment"
            onChange={e => handleSelect(e.target.files[0])}
          />
          <div className="upload-zone__icon" style={{ fontSize: '1.8rem', marginBottom: '6px' }}>
            📸
          </div>
          <p className="upload-zone__title" style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>
            Take photo or upload {label.toLowerCase()}
          </p>
          <p className="upload-zone__subtitle" style={{ fontSize: '11px', marginBottom: '4px' }}>
            JPG · JPEG · PNG · PDF (Max 5 MB)
          </p>
        </div>
      ) : (
        <div className="upload-preview" style={{ padding: '10px 14px' }}>
          {preview === 'pdf' ? (
            <div className="upload-preview__pdf-icon">📋</div>
          ) : preview ? (
            <img src={preview} alt={`${label} preview`} className="upload-preview__thumbnail" />
          ) : (
            <div className="upload-preview__pdf-icon">📄</div>
          )}
          <div className="upload-preview__info">
            <p className="upload-preview__name">{file.name}</p>
            <p className="upload-preview__size">{formatFileSize(file.size)}</p>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-success)', marginTop: '2px', fontWeight: 600 }}>
              ✓ Document attached
            </p>
          </div>
          <button type="button" className="upload-preview__remove" onClick={handleRemove}>
            Replace
          </button>
        </div>
      )}

      {error && <p className="form-error">⚠ {error}</p>}
    </div>
  );
}

export default function Step2Identity({ data, onChange, errors }) {
  const { idType, idFileFront, idFileBack, fullName, additionalGuests = [] } = data;

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
        <p className="step-header__eyebrow">Step 2 of 5</p>
        <h2 className="step-header__title">Identity Verification</h2>
        <p className="step-header__desc">
          Please upload clear photographs or scans of both the <strong>Front</strong> and <strong>Back</strong> of the government ID for each guest.
        </p>
      </div>
      <div className="step-divider" />

      {/* Privacy notice */}
      <div className="privacy-banner">
        <strong>🔒 Secure & Confidential</strong> — All ID documents are encrypted and stored in a private, access-controlled repository.
      </div>

      {/* Primary Guest ID Section */}
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
          <span style={{ fontSize: '1.2rem' }}>🪪</span>
          <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 600, color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {fullName ? `${fullName} (Guest 1)` : 'Guest 1 (Primary Guest)'}
          </h3>
        </div>

        {/* ID Type */}
        <div className="form-group">
          <label htmlFor="id-type-primary" className="form-label">
            ID Type <span className="required-star">*</span>
          </label>
          <select
            id="id-type-primary"
            className={`form-select${errors.idType ? ' error' : ''}`}
            value={idType}
            onChange={e => onChange({ idType: e.target.value })}
          >
            <option value="">— Select ID type —</option>
            {ID_TYPES.map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          {errors.idType && <p className="form-error">⚠ {errors.idType}</p>}
        </div>

        {/* Front Side Upload */}
        <FileUploadBox
          label="ID Document — Front Side"
          subtitle="Front side showing photo, name, and ID number."
          file={idFileFront}
          onFileChange={file => onChange({ idFileFront: file })}
          error={errors.idFileFront}
          isRequired={true}
          inputId="id-upload-front-primary"
        />

        {/* Back Side Upload */}
        <FileUploadBox
          label="ID Document — Back Side"
          subtitle="Back side showing address and authority details."
          file={idFileBack}
          onFileChange={file => onChange({ idFileBack: file })}
          error={errors.idFileBack}
          isRequired={true}
          inputId="id-upload-back-primary"
        />
      </div>

      {/* Additional Guests ID Sections */}
      {additionalGuests.map((guest, index) => {
        const guestNum = index + 2;
        const gName = guest.fullName ? `${guest.fullName} (Guest ${guestNum})` : `Guest ${guestNum}`;
        const typeError = errors[`guest_${index}_idType`];
        const frontError = errors[`guest_${index}_idFileFront`];
        const backError = errors[`guest_${index}_idFileBack`];

        return (
          <div
            key={guest.id || index}
            style={{
              background: 'var(--color-bg-warm)',
              border: '1.5px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 18px',
              marginBottom: '28px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.2rem' }}>🪪</span>
              <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 600, color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {gName}
              </h3>
            </div>

            {/* ID Type */}
            <div className="form-group">
              <label className="form-label">
                ID Type <span className="required-star">*</span>
              </label>
              <select
                className={`form-select${typeError ? ' error' : ''}`}
                value={guest.idType || 'aadhaar'}
                onChange={e => handleGuestChange(index, 'idType', e.target.value)}
              >
                <option value="">— Select ID type —</option>
                {ID_TYPES.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              {typeError && <p className="form-error">⚠ {typeError}</p>}
            </div>

            {/* Front Side Upload */}
            <FileUploadBox
              label={`Guest ${guestNum} ID — Front Side`}
              subtitle="Front side showing photo, name, and ID number."
              file={guest.idFileFront}
              onFileChange={file => handleGuestChange(index, 'idFileFront', file)}
              error={frontError}
              isRequired={true}
              inputId={`id-upload-front-guest-${index}`}
            />

            {/* Back Side Upload */}
            <FileUploadBox
              label={`Guest ${guestNum} ID — Back Side`}
              subtitle="Back side showing address and authority details."
              file={guest.idFileBack}
              onFileChange={file => handleGuestChange(index, 'idFileBack', file)}
              error={backError}
              isRequired={true}
              inputId={`id-upload-back-guest-${index}`}
            />
          </div>
        );
      })}

      <div className="info-banner">
        <span>ℹ️</span>
        <span>
          Please ensure all text, numbers, and photographs on all uploaded documents are clearly readable.
        </span>
      </div>
    </div>
  );
}
