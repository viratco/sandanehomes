import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import {
  FaHandshake, FaFileContract, FaBuilding, FaCheckCircle, FaWhatsapp,
  FaPhoneAlt, FaShieldAlt, FaChartLine, FaInfoCircle, FaStar,
  FaHome, FaChevronDown, FaChevronUp, FaArrowRight, FaCrown, FaUserCheck
} from 'react-icons/fa';

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

const PartnerApplicationPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCity, setSelectedCity] = useState('Gurugram');
  const [locality, setLocality] = useState('');
  const [selectedApartmentType, setSelectedApartmentType] = useState('3bhk');
  const [furnishing, setFurnishing] = useState('Fully Furnished (Turnkey)');
  const [modelPreference, setModelPreference] = useState('company_decides');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

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

  const partnerFaqs = [
    {
      q: "How does Sandane Homes decide between the Partner (Revenue Share) and Leasing (Subleasing) model?",
      a: "Our team reviews your property's micro-location, building condition, furnishing level, and corporate demand. We then determine whether the property is best suited for a fixed corporate sublease or a performance-linked revenue partnership."
    },
    {
      q: "When do I receive rent or revenue payouts?",
      a: "For Corporate Subleasing agreements, monthly rent is transferred to your bank account as per the agreed schedule in the lease. For Revenue Partnership properties, revenue payouts along with monthly statements are settled on an agreed monthly date."
    },
    {
      q: "Who takes care of property repairs, maintenance, and daily cleaning?",
      a: "Sandane Homes manages routine housekeeping, linen care, and coordinates regular minor upkeep (basic plumbing, electrical checks, AC servicing) to keep the apartment in good, well-maintained condition for guests."
    },
    {
      q: "Who will stay in my apartment or building?",
      a: "Our residences cater to corporate executives, business travelers, and expatriates. All guest check-ins follow identity verification, and foreign guests undergo standard Form C / FRRO documentation."
    },
    {
      q: "Can I partner if my apartment is unfurnished or semi-furnished?",
      a: "Yes. Sandane Homes can evaluate properties in semi-furnished or bare-shell condition and discuss furnishing assistance or leasing options depending on location and layout."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAF8F5', minHeight: '100vh' }}>
      <SEO
        title="Property Partner & Master Lease Application | Sandane Homes"
        description="Apply to partner with Sandane Homes or lease your 1 BHK, 2 BHK, 3 BHK, 4 BHK, 5 BHK, or 5 BHK+ property. Compare Partner vs Corporate Subleasing models and submit your property for evaluation."
        canonical="https://www.sandanehomes.com/partner/apply"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
      />

      <Header showTopBar={false} />

      {/* ── HERO HEADER ── */}
      <section style={{
        backgroundColor: '#1C2D42',
        color: '#FFFFFF',
        padding: '120px 20px 70px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Watermark */}
        <div style={{
          position: 'absolute',
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          textAlign: 'center',
          pointerEvents: 'none',
          opacity: 0.04,
          userSelect: 'none',
          lineHeight: '0.9'
        }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(60px, 12vw, 160px)', fontWeight: 'bold', color: '#FFF', display: 'block' }}>
            PARTNER • LEASE
          </span>
        </div>

        <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(197, 165, 114, 0.15)',
            border: '1px solid #C5A572',
            color: '#C5A572',
            padding: '6px 18px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '22px'
          }}>
            <FaHandshake /> PROPERTY MONETIZATION & MASTER LEASE PROGRAM
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            lineHeight: '1.18',
            color: '#FFFFFF',
            marginBottom: '20px',
            fontWeight: '600'
          }}>
            Partner With Sandane Homes
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            lineHeight: '1.75',
            color: '#C3D0DF',
            maxWidth: '740px',
            margin: '0 auto 30px',
            fontFamily: 'Georgia, serif'
          }}>
            Monetize your 1 BHK, 2 BHK, 3 BHK, 4 BHK, 5 BHK, or 5 BHK+ property. We manage quality residential assets as corporate serviced residences for corporate professionals and expatriates across Gurugram, Noida, and Greater Noida.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#application-form"
              style={{
                backgroundColor: '#C5A572',
                color: '#1C2D42',
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '1px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(197, 165, 114, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              FILL PARTNER FORM <FaArrowRight size={12} />
            </a>
            <a
              href="#application-form"
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '1px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FaWhatsapp size={16} /> CONNECT ON WHATSAPP (QUICK FORM)
            </a>
          </div>
        </div>
      </section>

      {/* ── TWO CARDS: PARTNER VS LEASING ── */}
      <section style={{ padding: '70px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span style={{ color: '#8B7355', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
            OUR TWO ONBOARDING MODELS
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#111111', marginTop: '8px', marginBottom: '12px' }}>
            Choose Your Engagement Pathway
          </h2>
          <p style={{ fontSize: '14.5px', color: '#666', lineHeight: '1.6', fontFamily: 'Georgia, serif' }}>
            We operate two distinct asset monetization structures designed around owner cashflow preferences.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '28px',
          alignItems: 'stretch',
          marginBottom: '36px'
        }}>
          {/* CARD 1: PARTNER */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '18px',
            padding: '36px 30px',
            border: '2px solid #C5A572',
            boxShadow: '0 12px 35px rgba(197, 165, 114, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '-13px',
              right: '26px',
              background: '#C5A572',
              color: '#1C2D42',
              padding: '4px 14px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '1px'
            }}>
              MODEL 1: PARTNERSHIP
            </span>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(197, 165, 114, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8B7355'
                }}>
                  <FaChartLine size={24} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#111', margin: 0 }}>
                    Partner
                  </h3>
                  <span style={{ fontSize: '12px', color: '#8B7355', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Revenue Share / Co-Hosting
                  </span>
                </div>
              </div>

              <div style={{
                background: '#FAF8F5',
                padding: '14px 18px',
                borderRadius: '10px',
                marginBottom: '20px',
                borderLeft: '3px solid #C5A572'
              }}>
                <span style={{ fontSize: '12px', color: '#777', textTransform: 'uppercase', fontWeight: '700' }}>Revenue Model:</span>
                <p style={{ fontSize: '18px', fontWeight: '800', color: '#111', margin: '4px 0 0' }}>
                  Shared Revenue Model
                </p>
                <span style={{ fontSize: '12px', color: '#555' }}>Monthly payouts linked to property performance</span>
              </div>

              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.65', marginBottom: '22px' }}>
                A collaborative hosting model where monthly earnings are based on actual guest occupancy. Sandane Homes manages guest bookings, daily housekeeping, and property care while sharing the proceeds transparently.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #F0ECE4', fontSize: '13.5px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#8B7355" size={15} style={{ flexShrink: 0 }} /> Professional corporate and expat guest hosting
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #F0ECE4', fontSize: '13.5px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#8B7355" size={15} style={{ flexShrink: 0 }} /> Regular housekeeping and linen maintenance
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid #F0ECE4', fontSize: '13.5px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#8B7355" size={15} style={{ flexShrink: 0 }} /> Clear monthly revenue &amp; occupancy statements
                </li>
                <li style={{ padding: '8px 0', fontSize: '13.5px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#8B7355" size={15} style={{ flexShrink: 0 }} /> Routine maintenance and minor repairs coordination
                </li>
              </ul>
            </div>

            <div style={{
              fontSize: '12px',
              color: '#8B7355',
              fontWeight: '700',
              textAlign: 'center',
              padding: '8px',
              background: 'rgba(197, 165, 114, 0.1)',
              borderRadius: '8px'
            }}>
              Suitable for luxury apartments &amp; society suites
            </div>
          </div>

          {/* CARD 2: LEASING */}
          <div style={{
            backgroundColor: '#1C2D42',
            color: '#FFFFFF',
            borderRadius: '18px',
            padding: '36px 30px',
            border: '2px solid #334A65',
            boxShadow: '0 12px 35px rgba(28, 45, 66, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '-13px',
              right: '26px',
              background: '#25D366',
              color: '#FFFFFF',
              padding: '4px 14px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '1px'
            }}>
              MODEL 2: LEASING
            </span>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C5A572'
                }}>
                  <FaFileContract size={24} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#FFF', margin: 0 }}>
                    Leasing
                  </h3>
                  <span style={{ fontSize: '12px', color: '#C5A572', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Corporate Subleasing / Master Lease
                  </span>
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.06)',
                padding: '14px 18px',
                borderRadius: '10px',
                marginBottom: '20px',
                borderLeft: '3px solid #25D366'
              }}>
                <span style={{ fontSize: '12px', color: '#B3C3D4', textTransform: 'uppercase', fontWeight: '700' }}>Rental Model:</span>
                <p style={{ fontSize: '18px', fontWeight: '800', color: '#FFF', margin: '4px 0 0' }}>
                  Fixed Monthly Rent
                </p>
                <span style={{ fontSize: '12px', color: '#C3D0DF' }}>Predictable monthly rent under signed lease terms</span>
              </div>

              <p style={{ fontSize: '14px', color: '#D1DCE5', lineHeight: '1.65', marginBottom: '22px' }}>
                Sandane Homes signs a corporate lease agreement directly with the property owner. You receive steady monthly rent as agreed in the contract, while our team handles subleasing, guest management, and day-to-day operations.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '13.5px', color: '#E0E6ED', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#25D366" size={15} style={{ flexShrink: 0 }} /> Multi-year lease agreements (terms mutually agreed)
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '13.5px', color: '#E0E6ED', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#25D366" size={15} style={{ flexShrink: 0 }} /> Sandane Homes manages guest tenancies &amp; operations
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '13.5px', color: '#E0E6ED', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#25D366" size={15} style={{ flexShrink: 0 }} /> Direct bank transfer of agreed monthly rent
                </li>
                <li style={{ padding: '8px 0', fontSize: '13.5px', color: '#E0E6ED', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaCheckCircle color="#25D366" size={15} style={{ flexShrink: 0 }} /> Regular upkeep &amp; property returned in agreed condition
                </li>
              </ul>
            </div>

            <div style={{
              fontSize: '12px',
              color: '#C5A572',
              fontWeight: '700',
              textAlign: 'center',
              padding: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px'
            }}>
              Suitable for entire floors, standalone buildings &amp; stable rent seekers
            </div>
          </div>
        </div>

        {/* ── MANDATORY COMPANY POLICY NOTICE BOX ── */}
        <div style={{
          background: 'linear-gradient(135deg, #FFF9F0 0%, #FDF4E6 100%)',
          border: '1.5px solid #E6CA9E',
          borderRadius: '16px',
          padding: '24px 28px',
          display: 'flex',
          gap: '18px',
          alignItems: 'flex-start',
          boxShadow: '0 6px 20px rgba(139, 115, 85, 0.08)'
        }}>
          <div style={{
            color: '#8B7355',
            fontSize: '22px',
            marginTop: '2px',
            flexShrink: 0
          }}>
            <FaInfoCircle />
          </div>
          <div>
            <h4 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '17px',
              color: '#1C2D42',
              margin: '0 0 6px 0',
              fontWeight: '700'
            }}>
              Important Decision Policy: Model Allocation Decided by Sandane Homes
            </h4>
            <p style={{
              fontSize: '14px',
              color: '#5C4A33',
              lineHeight: '1.65',
              margin: 0,
              fontFamily: 'Georgia, serif'
            }}>
              Please note that while property owners can indicate their preference in the form below, <strong>the definitive determination of whether a property is onboarded under the Revenue Partnership model or the Corporate Subleasing (Master Lease) agreement is evaluated and solely decided by Sandane Homes</strong>.
              Our asset review committee analyzes specific parameters—including the micro-location (Gurugram, Greater Noida, Noida), society tier, inventory volume (single flat vs. full floor or tower), furnishing specification, and active multinational expat demand—to recommend and approve the most viable structure for your property.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE PARTNER FORM SECTION ── */}
      <section id="application-form" style={{ padding: '40px 20px 90px', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: 'clamp(28px, 5vw, 54px)',
          border: '1px solid #E5DFD5',
          boxShadow: '0 15px 45px rgba(26, 60, 52, 0.06)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ color: '#8B7355', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
              STEP-BY-STEP PROPOSAL
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#111111', marginTop: '6px', marginBottom: '10px' }}>
              Submit Your Property Details
            </h2>
            <p style={{ fontSize: '14px', color: '#666', fontFamily: 'Georgia, serif', maxWidth: '620px', margin: '0 auto' }}>
              Provide basic information about your property. Our corporate asset team will review the details and present an official payout proposal within 24 hours.
            </p>
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
                Thank you, <strong>{name}</strong>. Your property information has been sent directly to our team at <strong>residencesbysandanehomes@gmail.com</strong>. We will review your property details and contact you via Phone / WhatsApp shortly.
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

              {/* SECTION 5: MODEL PREFERENCE (WITH CLEAR COMPANY DECISION REMINDER) */}
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
                  boxShadow: '0 8px 25px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                {isSubmitting ? (
                  'SUBMITTING APPLICATION TO TEAM...'
                ) : (
                  <>
                    <FaWhatsapp size={20} /> SUBMIT &amp; CHAT ON WHATSAPP <FaArrowRight size={14} />
                  </>
                )}
              </button>

              <p style={{
                textAlign: 'center',
                fontSize: '12px',
                color: '#666',
                marginTop: '16px',
                lineHeight: '1.5'
              }}>
                🔒 By submitting, your complete property details are delivered to our team and immediately opened in WhatsApp for instant conversation.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section style={{ backgroundColor: '#FAF8F5', borderTop: '1px solid #E8E2D9', padding: '70px 20px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#8B7355', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#111', marginTop: '6px' }}>
              Everything Property Owners Need to Know
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {partnerFaqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #EAE4DC',
                  overflow: 'hidden'
                }}
              >
                <div
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <h4 style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#1C2D42',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {faq.q}
                  </h4>
                  <span style={{ color: '#8B7355', marginLeft: '12px' }}>
                    {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                {openFaq === i && (
                  <div style={{
                    padding: '0 24px 22px',
                    fontSize: '14px',
                    color: '#555',
                    lineHeight: '1.7',
                    borderTop: '1px solid #F4EFEA',
                    paddingTop: '16px',
                    fontFamily: 'Georgia, serif'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '50px',
            textAlign: 'center',
            padding: '30px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #EAE4DC'
          }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#111', margin: '0 0 8px 0' }}>
              Prefer to speak to an acquisition manager right now?
            </h3>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
              Call our acquisitions desk or send pictures of your apartment directly over WhatsApp.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="tel:+919711722273"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#1C2D42',
                  color: '#FFFFFF',
                  padding: '12px 26px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '700'
                }}
              >
                <FaPhoneAlt size={13} /> +91 97117 22273
              </a>
              <a
                href="#application-form"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '12px 26px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '700'
                }}
              >
                <FaWhatsapp size={16} /> SHARE DETAILS ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerApplicationPage;
