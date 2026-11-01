import React, { useState } from 'react';
import { FaCheckCircle, FaWhatsapp, FaInfoCircle } from 'react-icons/fa';

const apartmentTypes = [
  { id: '1bhk', label: '1 BHK', desc: 'Executive Suite' },
  { id: '2bhk', label: '2 BHK', desc: 'Serviced Apartment' },
  { id: '3bhk', label: '3 BHK', desc: 'Luxury Family Suite' },
  { id: '4bhk', label: '4 BHK', desc: 'Expansive Builder Floor' },
  { id: '5bhk', label: '5 BHK', desc: 'Luxury Penthouse / Floor' },
  { id: '5bhk_plus', label: '5 BHK +', desc: 'Villas, Multi-Units & Buildings' }
];

const cities = [
  { id: 'Gurugram', label: 'Gurugram', sub: 'Golf Course / Cyber City / Sohna Rd' },
  { id: 'Greater Noida', label: 'Greater Noida', sub: 'Jaypee Greens / Ansal / Pari Chowk' },
  { id: 'Noida', label: 'Noida', sub: 'Expressway / Sector 62-63' },
  { id: 'Delhi NCR', label: 'Other Delhi NCR', sub: 'Yamuna Expressway / Delhi' }
];

const furnishingOptions = [
  'Fully Furnished (Turnkey)',
  'Semi-Furnished (Kitchen & Wardrobes)',
  'Unfurnished / Bare Shell'
];

const modelPreferences = [
  { id: 'company_decides', label: 'Open to Company Evaluation (Recommended)', desc: 'Let Sandane Homes review the property and propose the most suitable structure' },
  { id: 'subleasing', label: 'Preference: Corporate Subleasing (Fixed Rent)', desc: 'Fixed monthly rental payout under a signed lease agreement' },
  { id: 'partner', label: 'Preference: Revenue Partnership (Shared Model)', desc: 'Shared monthly revenue linked to actual property performance' }
];

const PartnerApplicationForm = ({
  id = "application-form",
  defaultCity = "Gurugram",
  defaultApartmentType = "3bhk",
  title = "Submit Your Property Details",
  subtitle = "Provide basic information about your property. Our corporate asset team will review the details and present an official payout proposal within 24 hours.",
  tag = "STEP-BY-STEP PROPOSAL"
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [locality, setLocality] = useState('');
  const [selectedApartmentType, setSelectedApartmentType] = useState(defaultApartmentType);
  const [furnishing, setFurnishing] = useState('Fully Furnished (Turnkey)');
  const [modelPreference, setModelPreference] = useState('company_decides');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedTypeObj = apartmentTypes.find(t => t.id === selectedApartmentType);
    const selectedModelObj = modelPreferences.find(m => m.id === modelPreference);
    const formattedApartmentType = selectedTypeObj ? `${selectedTypeObj.label} (${selectedTypeObj.desc})` : selectedApartmentType;
    const formattedModel = selectedModelObj ? selectedModelObj.label : modelPreference;

    // Natural, polite and professional message from the property owner
    const whatsappMessage =
      `Hi Sandane Homes team,\n\n` +
      `I would like to explore partnering with Sandane Homes to monetize my property. Here are my property details:\n\n` +
      `• *Name:* ${name}\n` +
      `• *Contact Number:* ${phone}\n` +
      (email ? `• *Email:* ${email}\n` : '') +
      `• *City:* ${selectedCity}\n` +
      (locality ? `• *Society / Locality:* ${locality}\n` : '') +
      `• *Property Type:* ${formattedApartmentType}\n` +
      `• *Furnishing Status:* ${furnishing}\n` +
      `• *Preferred Model:* ${formattedModel}\n` +
      (notes && notes.trim() && notes !== 'None' ? `• *Additional Notes:* ${notes}\n` : '') +
      `\nPlease review my property details and let me know the next steps. Thank you!`;

    // Immediately launch WhatsApp with full details pre-filled
    window.open(`https://wa.me/919711722273?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

    const payload = {
      _subject: `New Partner Application: ${name} - ${formattedApartmentType} in ${selectedCity}`,
      _captcha: "false",
      _template: "table",
      "Owner Full Name": name,
      "Contact Number / WhatsApp": phone,
      "Email Address": email || 'Not provided',
      "City": selectedCity,
      "Locality / Society": locality || 'Not specified',
      "Apartment Type": formattedApartmentType,
      "Furnishing Status": furnishing,
      "Preferred Model": formattedModel,
      "Additional Notes": notes || 'None',
      "Company Decision Policy Acknowledged": "Yes, partner understands final model (Revenue Share vs Corporate Sublease) is evaluated & decided by Sandane Homes",
      "Submission Timestamp": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    fetch("https://formsubmit.co/ajax/residencesbysandanehomes@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'ads_conversion_Purchase_1', {});
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setIsSubmitting(false);
        setSubmitted(true);
      });
  };

  return (
    <section id={id} style={{ padding: '40px 20px 90px', maxWidth: '960px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        padding: 'clamp(28px, 5vw, 54px)',
        border: '1px solid #E5DFD5',
        boxShadow: '0 15px 45px rgba(26, 60, 52, 0.06)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          {tag && (
            <span style={{ color: '#8B7355', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
              {tag}
            </span>
          )}
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#111111', marginTop: '6px', marginBottom: '10px' }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontSize: '14px', color: '#666', fontFamily: 'Georgia, serif', maxWidth: '620px', margin: '0 auto' }}>
              {subtitle}
            </p>
          )}
        </div>

        {submitted ? (
          <div style={{
            textAlign: 'center',
            padding: '50px 24px',
            background: '#FAF8F5',
            border: '2px solid #C5A572',
            borderRadius: '16px'
          }}>
            <FaCheckCircle size={54} color="#25D366" style={{ marginBottom: '18px' }} />
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#1C2D42', margin: '0 0 10px 0' }}>
              Application Received Successfully!
            </h3>
            <p style={{ fontSize: '15px', color: '#555', maxWidth: '560px', margin: '0 auto 24px', lineHeight: '1.6' }}>
              Thank you, <strong>{name}</strong>. Your property information has been sent directly to our acquisitions desk. We will review your property details and contact you via Phone / WhatsApp shortly.
            </p>
            <a
              href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20just%20submitted%20my%20property%20partner%20form%20online."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: '30px',
                fontWeight: '700',
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              <FaWhatsapp size={18} /> OPEN CHAT ON WHATSAPP
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* SECTION 1: OWNER CONTACT */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#8B7355',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>1.</span> OWNER / CONTACT INFORMATION
              </h4>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '18px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#333', marginBottom: '6px' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Singhania"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '8px',
                      border: '1px solid #DDD',
                      fontSize: '14px',
                      backgroundColor: '#FAF8F5',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#333', marginBottom: '6px' }}>
                    Contact Number / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98110 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '8px',
                      border: '1px solid #DDD',
                      fontSize: '14px',
                      backgroundColor: '#FAF8F5',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#333', marginBottom: '6px' }}>
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. vikram@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '8px',
                      border: '1px solid #DDD',
                      fontSize: '14px',
                      backgroundColor: '#FAF8F5',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: PROPERTY LOCATION */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#8B7355',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>2.</span> PROPERTY CITY &amp; LOCATION
              </h4>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '12px',
                marginBottom: '18px'
              }}>
                {cities.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setSelectedCity(c.id)}
                    style={{
                      padding: '14px',
                      borderRadius: '10px',
                      border: selectedCity === c.id ? '2px solid #1C2D42' : '1px solid #E5DFD5',
                      backgroundColor: selectedCity === c.id ? 'rgba(28, 45, 66, 0.06)' : '#FAF8F5',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14px', color: '#1C2D42' }}>{c.label}</strong>
                    <span style={{ fontSize: '11px', color: '#777', display: 'block', marginTop: '2px' }}>{c.sub}</span>
                  </div>
                ))}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#333', marginBottom: '6px' }}>
                  Society / Condominium Name or Specific Locality
                </label>
                <input
                  type="text"
                  placeholder="e.g. Conscient Hines Elevate Sector 58 / Sushant Lok Block B / Jaypee Greens Augusta"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '8px',
                    border: '1px solid #DDD',
                    fontSize: '14px',
                    backgroundColor: '#FAF8F5',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* SECTION 3: APARTMENT TYPE (1 BHK, 2 BHK, 3 BHK, etc.) */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <h4 style={{
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>3.</span> APARTMENT / PROPERTY TYPE *
                </h4>
                <span style={{ fontSize: '12px', color: '#777' }}>Select the configuration you wish to onboard</span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: '12px'
              }}>
                {apartmentTypes.map((apt) => (
                  <div
                    key={apt.id}
                    onClick={() => setSelectedApartmentType(apt.id)}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: selectedApartmentType === apt.id ? '2px solid #8B7355' : '1px solid #E5DFD5',
                      backgroundColor: selectedApartmentType === apt.id ? 'rgba(197, 165, 114, 0.12)' : '#FAF8F5',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{
                        fontSize: '15px',
                        fontWeight: '800',
                        color: selectedApartmentType === apt.id ? '#8B7355' : '#1C2D42'
                      }}>
                        {apt.label}
                      </span>
                      {selectedApartmentType === apt.id && (
                        <FaCheckCircle color="#8B7355" size={14} />
                      )}
                    </div>
                    <span style={{ fontSize: '12px', color: '#666', display: 'block' }}>
                      {apt.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 4: FURNISHING STATUS */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#8B7355',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>4.</span> FURNISHING STATE
              </h4>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {furnishingOptions.map((f) => (
                  <div
                    key={f}
                    onClick={() => setFurnishing(f)}
                    style={{
                      padding: '12px 18px',
                      borderRadius: '25px',
                      fontSize: '13px',
                      fontWeight: '600',
                      border: furnishing === f ? '2px solid #1C2D42' : '1px solid #DDD',
                      backgroundColor: furnishing === f ? '#1C2D42' : '#FAF8F5',
                      color: furnishing === f ? '#FFFFFF' : '#333',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5: MODEL PREFERENCE */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <h4 style={{
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>5.</span> YOUR PREFERRED MODEL
                </h4>
                <span style={{ fontSize: '11px', color: '#8B7355', fontWeight: '700' }}>
                  *Final model decided by company
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {modelPreferences.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setModelPreference(m.id)}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: modelPreference === m.id ? '2px solid #1C2D42' : '1px solid #E5DFD5',
                      backgroundColor: modelPreference === m.id ? 'rgba(28, 45, 66, 0.05)' : '#FAF8F5',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      boxSizing: 'border-box'
                    }}
                  >
                    <input
                      type="radio"
                      name="modelPreference"
                      checked={modelPreference === m.id}
                      onChange={() => setModelPreference(m.id)}
                      style={{ marginTop: '3px', cursor: 'pointer' }}
                    />
                    <div>
                      <strong style={{ display: 'block', fontSize: '14px', color: '#1C2D42' }}>{m.label}</strong>
                      <span style={{ fontSize: '12px', color: '#666', lineHeight: '1.4', display: 'block', marginTop: '2px' }}>{m.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 6: ADDITIONAL NOTES */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#333', marginBottom: '6px' }}>
                Additional Details / Specific Requirements (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Expected monthly rent, floor level, current tenancy status, or special furnishing details..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 16px',
                  borderRadius: '8px',
                  border: '1px solid #DDD',
                  fontSize: '14px',
                  backgroundColor: '#FAF8F5',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                backgroundColor: isSubmitting ? '#5A6C80' : '#25D366',
                color: '#FFFFFF',
                padding: '18px 24px',
                borderRadius: '35px',
                fontSize: '15px',
                fontWeight: '800',
                letterSpacing: '1px',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease'
              }}
            >
              <FaWhatsapp size={22} />
              {isSubmitting ? 'PREPARING YOUR APPLICATION...' : 'SUBMIT & CHAT ON WHATSAPP →'}
            </button>

            <p style={{
              textAlign: 'center',
              fontSize: '11px',
              color: '#888',
              marginTop: '14px',
              marginBottom: 0
            }}>
              🔒 Your information is confidential. We will review your asset and respond with an official proposal within 24 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default PartnerApplicationForm;

