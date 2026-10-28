import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ customPhone = "+91 9711722273", hideContactForm = false, isResidences = false }) => {
    const location = useLocation();
    const isResidenceRoute = isResidences || 
        location.pathname.startsWith('/residences') || 
        location.pathname.startsWith('/gurugram') ||
        location.pathname.includes('housing') ||
        location.pathname.includes('apartment');

    const [fullName, setFullName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const [duration, setDuration] = useState('1 month');
    const [messageText, setMessageText] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [honeypot, setHoneypot] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        // Honeypot spam check
        if (honeypot) {
            return;
        }

        if (!fullName.trim()) {
            setErrorMessage('Please enter your full name.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email.trim())) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        if (!agreed) {
            setErrorMessage('Please agree to the Privacy Policy to proceed.');
            return;
        }

        setIsSubmitting(true);

        const targetEmail = "residencesbysandanehomes@gmail.com";
        const messageBody = `New Enquiry from ${isResidenceRoute ? 'Residences' : 'Website'}!\n` +
            `Name: ${fullName.trim()}\n` +
            (company.trim() ? `Company: ${company.trim()}\n` : '') +
            `Email: ${email.trim()}\n` +
            (phone.trim() ? `Phone: ${countryCode} ${phone.trim()}\n` : 'Phone: Not provided\n') +
            `Stay Length: ${duration}\n` +
            (messageText.trim() ? `Message: ${messageText.trim()}\n` : 'Message: None provided\n');

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Enquiry from ${fullName.trim()} (${isResidenceRoute ? 'Residences' : 'Website'})`,
                    _honey: honeypot,
                    name: fullName.trim(),
                    company: company.trim() || 'Not specified',
                    email: email.trim(),
                    phone: phone.trim() ? `${countryCode} ${phone.trim()}` : 'Not provided',
                    stay_length: duration,
                    message: messageBody
                })
            });

            const data = await response.json();
            if (response.ok && (data.success === "true" || data.success === true || data.message)) {
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('event', 'ads_conversion_Purchase_1', {});
                }
                setIsSuccess(true);
                setFullName('');
                setCompany('');
                setEmail('');
                setPhone('');
                setDuration('1 month');
                setMessageText('');
                setAgreed(false);
            } else {
                setErrorMessage('Something went wrong while submitting. Please contact us directly.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setErrorMessage('Something went wrong while submitting. Please contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer style={{ width: '100%', backgroundColor: '#F9F9F9' }}>
            {!hideContactForm && (
                <div id="footer-contact-section" className="footer-newsletter-container">
                    <div className="footer-newsletter-row">

                        {/* LEFT TEXT */}
                    <div className="footer-left-col">
                        <h4 style={{
                            color: '#C5A572',
                            fontSize: '11px',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                            marginBottom: '20px'
                        }}>
                            {isResidenceRoute ? 'Exclusive Long-Stay Inquiries' : 'Stay Connected with Sandane Homes'}
                        </h4>

                        <h2 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '42px',
                            lineHeight: '1.3',
                            color: '#111',
                            fontWeight: '400',
                            maxWidth: '500px',
                            marginBottom: '30px'
                        }}>
                            Tell us who's arriving and when — we'll come back with available homes.
                        </h2>

                        <div style={{
                            fontSize: '15px',
                            color: '#555',
                            lineHeight: '1.6',
                            fontWeight: '500'
                        }}>
                            <p style={{ margin: '0 0 10px 0' }}>
                                <strong style={{ color: '#111' }}>Phone:</strong> {customPhone}
                            </p>
                            <p style={{ margin: 0, wordBreak: 'break-word' }}>
                                <strong style={{ color: '#111' }}>Email:</strong> residencesbysandanehomes@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                        <div className="footer-right-col">
                            {isSuccess ? (
                                <div style={{
                                    padding: '40px 24px',
                                    backgroundColor: '#F0FDF4',
                                    border: '1px solid #BBF7D0',
                                    borderRadius: '8px',
                                    textAlign: 'center'
                                }}>
                                    <h3 style={{ color: '#166534', fontSize: '22px', marginBottom: '12px', fontFamily: 'Playfair Display, serif' }}>
                                        Thanks — we'll reply within one working day
                                    </h3>
                                    <p style={{ color: '#15803D', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
                                        Your enquiry has been received. Our team will review available homes and get back to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    {/* Honeypot field for spam prevention */}
                                    <input
                                        type="text"
                                        name="_gotcha"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                        style={{ display: 'none' }}
                                        tabIndex="-1"
                                        autoComplete="off"
                                        aria-hidden="true"
                                    />

                                    {/* Error message with WhatsApp fallback */}
                                    {errorMessage && (
                                        <div style={{
                                            padding: '14px 18px',
                                            backgroundColor: '#FEF2F2',
                                            border: '1px solid #FECACA',
                                            borderRadius: '6px',
                                            marginBottom: '20px',
                                            color: '#991B1B',
                                            fontSize: '14px',
                                            lineHeight: 1.5
                                        }}>
                                            <div>{errorMessage}</div>
                                            <div style={{ marginTop: '8px' }}>
                                                Need urgent assistance? Message us on WhatsApp:{' '}
                                                <a 
                                                    href="https://wa.me/919711722273" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    style={{ color: '#1A3C34', fontWeight: '700', textDecoration: 'underline' }}
                                                >
                                                    wa.me/919711722273
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {/* Name Input (required) */}
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <input
                                            type="text"
                                            placeholder="Name *"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '18px 20px',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid #ccc',
                                                fontSize: '15px',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>

                                    {/* Company Input (optional) */}
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <input
                                            type="text"
                                            placeholder="Company (optional)"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '18px 20px',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid #ccc',
                                                fontSize: '15px',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>

                                    {/* Email Input (required) */}
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <input
                                            type="email"
                                            placeholder="Email *"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '18px 20px',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid #ccc',
                                                fontSize: '15px',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>

                                    {/* Phone Input with Country Code (optional) */}
                                    <div style={{ position: 'relative', marginBottom: '20px', display: 'flex', gap: '10px' }}>
                                        <select
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                            style={{
                                                width: '120px',
                                                padding: '18px 10px',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid #ccc',
                                                fontSize: '15px',
                                                outline: 'none',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <option value="+91">🇮🇳 +91</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+44">🇬🇧 +44</option>
                                            <option value="+61">🇦🇺 +61</option>
                                            <option value="+971">🇦🇪 +971</option>
                                            <option value="+65">🇸🇬 +65</option>
                                            <option value="+86">🇨🇳 +86</option>
                                            <option value="+81">🇯🇵 +81</option>
                                            <option value="+82">🇰🇷 +82</option>
                                            <option value="+33">🇫🇷 +33</option>
                                            <option value="+49">🇩🇪 +49</option>
                                            <option value="+39">🇮🇹 +39</option>
                                            <option value="+34">🇪🇸 +34</option>
                                            <option value="+7">🇷🇺 +7</option>
                                            <option value="+55">🇧🇷 +55</option>
                                            <option value="+27">🇿🇦 +27</option>
                                            <option value="+52">🇲🇽 +52</option>
                                            <option value="+60">🇲🇾 +60</option>
                                            <option value="+62">🇮🇩 +62</option>
                                            <option value="+63">🇵🇭 +63</option>
                                            <option value="+66">🇹🇭 +66</option>
                                            <option value="+84">🇻🇳 +84</option>
                                        </select>
                                        <input
                                            type="tel"
                                            placeholder="Phone (optional)"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            style={{
                                                flex: 1,
                                                padding: '18px 20px',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid #ccc',
                                                fontSize: '15px',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>

                                    {/* Stay Length Selector */}
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <label style={{ fontSize: '12px', color: '#888', display: 'block', marginBottom: '5px', paddingLeft: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            Stay length
                                        </label>
                                        <select
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '12px 20px',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid #ccc',
                                                fontSize: '15px',
                                                outline: 'none',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <option value="1 month">1 month</option>
                                            <option value="2 months">2 months</option>
                                            <option value="3 months">3 months</option>
                                            <option value="6 months">6 months</option>
                                            <option value="1 year+">1 year+</option>
                                        </select>
                                    </div>

                                    {/* Message Textarea (optional) */}
                                    <div style={{ position: 'relative', marginBottom: '25px' }}>
                                        <textarea
                                            placeholder="Message (optional — move-in dates, team size, requirements)"
                                            value={messageText}
                                            onChange={(e) => setMessageText(e.target.value)}
                                            rows="3"
                                            style={{
                                                width: '100%',
                                                padding: '18px 20px',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid #ccc',
                                                fontSize: '15px',
                                                outline: 'none',
                                                resize: 'vertical'
                                            }}
                                        />
                                    </div>

                                    {/* Privacy Checkbox (required) */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                                        <input
                                            type="checkbox"
                                            id="footer-privacy-checkbox"
                                            checked={agreed}
                                            onChange={() => setAgreed(!agreed)}
                                            style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                                            required
                                        />
                                        <label htmlFor="footer-privacy-checkbox" style={{ fontSize: '13px', color: '#777', cursor: 'pointer' }}>
                                            I agree to the Privacy Policy *
                                        </label>
                                    </div>

                                    {/* Send Button */}
                                    <div style={{ marginBottom: '10px' }}>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            style={{
                                                width: '100%',
                                                padding: '16px',
                                                background: isSubmitting ? '#A08F6B' : '#C5A572',
                                                border: 'none',
                                                color: '#fff',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                transition: 'all 0.3s ease',
                                                opacity: isSubmitting ? 0.7 : 1
                                            }}
                                            onMouseOver={(e) => { if (!isSubmitting) e.currentTarget.style.background = '#a88d5f'; }}
                                            onMouseOut={(e) => { if (!isSubmitting) e.currentTarget.style.background = '#C5A572'; }}
                                        >
                                            {isSubmitting ? 'Sending...' : 'SEND ✉'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                </div>
            </div>
            )}

            {/* Sitewide Comprehensive SEO & Navigation Directory */}
            <div style={{ backgroundColor: '#14201C', color: '#fff', borderTop: '1px solid rgba(197,165,114,0.3)', padding: '60px 20px 40px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', textAlign: 'left', marginBottom: '45px' }}>
                    
                    {/* Column 1: Boutique Hotels & Flagship Stays */}
                    <div>
                        <h4 style={{ color: '#C5A572', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '18px' }}>
                            Boutique Hotels & Stays
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li><Link to="/sandane-homes" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Sandane Homes Flagship</Link></li>
                            <li><Link to="/residences" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Residences by Sandane Homes</Link></li>
                            <li><Link to="/amara" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Amara Inn by Sandane Homes</Link></li>
                            <li><Link to="/amaaltash" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Amaaltash by Sandane Homes</Link></li>
                            <li><Link to="/glam" style={{ color: '#D0C5B0', textDecoration: 'none' }}>The Glam by Sandane Homes</Link></li>
                            <li><Link to="/coco-house" style={{ color: '#D0C5B0', textDecoration: 'none' }}>CoCo House</Link></li>
                            <li><Link to="/residences/relocation" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Corporate Relocation Services</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Corporate & Expat Housing */}
                    <div>
                        <h4 style={{ color: '#C5A572', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '18px' }}>
                            Corporate & Expat Housing
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li><Link to="/residences/gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Serviced Apartments in Gurgaon</Link></li>
                            <li><Link to="/elevate-hines-sector-58-gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Conscient Hines Elevate, Sector 58</Link></li>
                            <li><Link to="/green-meadows-sector-27-gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Green Meadows, Sector 27</Link></li>
                            <li><Link to="/sushant-lok-block-b-sector-27-gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Sushant Lok Block B, Sector 27</Link></li>
                            <li><Link to="/gurugram-corporate-housing" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Gurugram Corporate Housing</Link></li>
                            <li><Link to="/gurugram/dlf-phase-4" style={{ color: '#D0C5B0', textDecoration: 'none' }}>DLF Phase 4 Serviced Apartments</Link></li>
                            <li><Link to="/gurugram/golf-course-road" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Golf Course Road Luxury Suites</Link></li>
                            <li><Link to="/gurugram/sushant-lok" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Sushant Lok Corporate Stays</Link></li>
                            <li><Link to="/gurugram/japanese-expat-housing" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Gurugram Japanese Expat Housing</Link></li>
                            <li><Link to="/gurugram/korean-expat-housing" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Gurugram Korean Expat Housing</Link></li>
                            <li><Link to="/serviced-apartments-greater-noida" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Greater Noida Serviced Apartments</Link></li>
                            <li><Link to="/japanese-expat-housing-delhi-ncr" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Japanese Expat Housing NCR</Link></li>
                            <li><Link to="/korean-expat-housing-delhi-ncr" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Korean Expat Housing NCR</Link></li>
                            <li><Link to="/chinese-expat-housing-greater-noida" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Chinese Expat Housing Greater Noida</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Japanese & MNC Company Housing */}
                    <div>
                        <h4 style={{ color: '#C5A572', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '18px' }}>
                            Dedicated MNC Housing
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li><Link to="/housing-for-honda-employees-gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Honda Employees Housing (Gurgaon)</Link></li>
                            <li><Link to="/housing-for-honda-employees-noida" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Honda Cars Housing (Noida)</Link></li>
                            <li><Link to="/housing-for-daikin-employees-gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Daikin Expats Housing (Gurgaon)</Link></li>
                            <li><Link to="/housing-for-daikin-employees-noida" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Daikin Expats Housing (Noida)</Link></li>
                            <li><Link to="/housing-for-toyota-employees-gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Toyota Expats Housing (Gurugram)</Link></li>
                            <li><Link to="/housing-for-yamaha-employees-greater-noida" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Yamaha Motor Housing (Gr Noida)</Link></li>
                            <li><Link to="/housing-for-ntt-data-employees-gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>NTT Data Housing (Cyber City)</Link></li>
                            <li><Link to="/housing-for-maruti-suzuki-employees-gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Maruti Suzuki Housing (Gurgaon)</Link></li>
                            <li><Link to="/housing-for-denso-employees-gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Denso Expat Housing (Gurugram)</Link></li>
                            <li><Link to="/housing-for-mitsubishi-electric-employees-gurgaon" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Mitsubishi Electric Housing</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Property Owners & Monetization */}
                    <div>
                        <h4 style={{ color: '#C5A572', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '18px' }}>
                            Property Owners (Monetize)
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li><Link to="/partner-with-us" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Partner With Sandane Homes</Link></li>
                            <li><Link to="/partner/apply" style={{ color: '#C5A572', fontWeight: '600', textDecoration: 'none' }}>Partner Application Form (Apply)</Link></li>
                            <li><Link to="/partner/gurugram-home-owners" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Gurugram Home Owners Program</Link></li>
                            <li><Link to="/partner/gurugram-building-owners" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Gurugram Building Master Lease</Link></li>
                            <li><Link to="/blog/earn-revenue-from-your-house-floor-building" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Earn Revenue from House / Floor</Link></li>
                            <li><Link to="/blog/homestay-club-with-sandane-homes" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Homestay Club with Sandane Homes</Link></li>
                            <li><Link to="/blog/earn-with-your-floor-building-master-lease" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Earn with Your Floor or Building</Link></li>
                            <li><Link to="/blog/earn-with-your-property-sandane-homes" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Earn with Your Property Guide</Link></li>
                            <li><Link to="/blog" style={{ color: '#D0C5B0', textDecoration: 'none' }}>The Sandane Journal (Blog)</Link></li>
                            <li><Link to="/faqs" style={{ color: '#D0C5B0', textDecoration: 'none' }}>Frequently Asked Questions</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Subfooter Row */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                    <p style={{ margin: 0 }}>
                        © {new Date().getFullYear()} Sandane Homes. All rights reserved. Premium Serviced Residences & Boutique Hotels across Gurugram, Greater Noida & Delhi NCR.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

