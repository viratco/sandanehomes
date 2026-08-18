import { useEffect } from 'react';
import { HOTELS } from '../../utils/constants.js';
import { getTodayString, formatTimestampIST } from '../../utils/validation.js';

export default function Step3Stay({ data, onChange, errors }) {
  const {
    property, permanentAddress,
    checkInDate, checkOutDate, roomNumber, arrivalTimestamp
  } = data;

  useEffect(() => {
    if (!arrivalTimestamp) {
      onChange({ arrivalTimestamp: new Date().toISOString() });
    }
  }, []);

  const today = getTodayString();
  const displayTimestamp = arrivalTimestamp
    ? formatTimestampIST(arrivalTimestamp)
    : formatTimestampIST();

  return (
    <div>
      <div className="step-header">
        <p className="step-header__eyebrow">Step 3 of 5</p>
        <h2 className="step-header__title">Stay Details</h2>
        <p className="step-header__desc">
          Tell us about your stay at Sandane Homes — your address, check-in and check-out dates, and assigned room.
        </p>
      </div>
      <div className="step-divider" />

      {/* Arrival Timestamp (auto-recorded) */}
      <div className="form-group">
        <label className="form-label">Registration Time</label>
        <div className="timestamp-display">
          <span className="timestamp-display__icon">🕐</span>
          <div>
            <p className="timestamp-display__label">Automatically Recorded</p>
            <p className="timestamp-display__value">{displayTimestamp}</p>
          </div>
        </div>
        <p className="form-hint">Your registration timestamp is automatically recorded by the system.</p>
      </div>

      {/* Property */}
      <div className="form-group">
        <label htmlFor="property" className="form-label">
          Property <span className="required-star">*</span>
        </label>
        <select
          id="property"
          className={`form-select${errors.property ? ' error' : ''}`}
          value={property}
          onChange={e => onChange({ property: e.target.value })}
        >
          <option value="">— Select property —</option>
          {HOTELS.map(h => (
            <option key={h.value} value={h.value}>{h.label}</option>
          ))}
        </select>
        {errors.property && <p className="form-error">⚠ {errors.property}</p>}
      </div>

      {/* Room Number */}
      <div className="form-group">
        <label htmlFor="room-number" className="form-label">
          Room Number <span className="required-star">*</span>
        </label>
        <input
          id="room-number"
          type="text"
          className={`form-input${errors.roomNumber ? ' error' : ''}`}
          placeholder="e.g. 101, 202, 305"
          value={roomNumber}
          onChange={e => onChange({ roomNumber: e.target.value.trim() })}
          inputMode="text"
          autoComplete="off"
          style={{ maxWidth: '220px' }}
        />
        {errors.roomNumber && <p className="form-error">⚠ {errors.roomNumber}</p>}
        <p className="form-hint">Your room number will be assigned by our reception team.</p>
      </div>

      {/* Check-In / Check-Out */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div className="form-group">
          <label htmlFor="check-in-date" className="form-label">
            Check-In Date <span className="required-star">*</span>
          </label>
          <input
            id="check-in-date"
            type="date"
            className={`form-input${errors.checkInDate ? ' error' : ''}`}
            value={checkInDate}
            min={today}
            onChange={e => onChange({ checkInDate: e.target.value })}
          />
          {errors.checkInDate && <p className="form-error">⚠ {errors.checkInDate}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="check-out-date" className="form-label">
            Check-Out Date <span className="required-star">*</span>
          </label>
          <input
            id="check-out-date"
            type="date"
            className={`form-input${errors.checkOutDate ? ' error' : ''}`}
            value={checkOutDate}
            min={checkInDate || today}
            onChange={e => onChange({ checkOutDate: e.target.value })}
          />
          {errors.checkOutDate && <p className="form-error">⚠ {errors.checkOutDate}</p>}
        </div>
      </div>

      {/* Permanent Address */}
      <div className="form-group">
        <label htmlFor="permanent-address" className="form-label">
          Permanent Address <span className="required-star">*</span>
        </label>
        <textarea
          id="permanent-address"
          className={`form-textarea${errors.permanentAddress ? ' error' : ''}`}
          placeholder={`House/Building No., Street Name\nCity, State / Province\nCountry — Postal Code`}
          value={permanentAddress}
          onChange={e => onChange({ permanentAddress: e.target.value })}
          rows={5}
        />
        {errors.permanentAddress && <p className="form-error">⚠ {errors.permanentAddress}</p>}
        <p className="form-hint">Please provide your complete permanent residential address.</p>
      </div>
    </div>
  );
}
