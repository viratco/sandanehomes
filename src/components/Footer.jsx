import React, { useState } from 'react';
import './Footer.css';

const Footer = ({ customPhone = "+91 9711722273", hideContactForm = false, isResidences = false }) => {
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const [agreed, setAgreed] = useState(false);
    
    // Extra fields for Residences page
    const [fullName, setFullName] = useState('');
    const [duration, setDuration] = useState('1 month');
    const [date, setDate] = useState('');
    const [messageText, setMessageText] = useState('');

    const sendEmail = () => {
        if (isResidences && !fullName) {
            alert('Please enter your full name');
            return;
        }

        if (!email) {
            alert('Please enter your email');
            return;
        }

        if (!phone) {
            alert('Please enter your phone number');
            return;
        }

        if (!agreed) {
            alert('Please agree to the Privacy Policy');
            return;
        }

        let messageBody = `New contact submission:\nEmail: ${email}\nPhone: ${countryCode} ${phone}`;
        if (isResidences) {
            messageBody = `New Enquiry from Residences Page!\nName: ${fullName}\nEmail: ${email}\nPhone: ${countryCode} ${phone}\nDuration: ${duration}\nDate: ${date}\nMessage: ${messageText}`;
        }

        // FormSubmit.co AJAX Endpoint
        fetch("https://formsubmit.co/ajax/sandanehomes@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: isResidences ? "New Enquiry from Residences Page!" : "New Contact from Sandane Homes Website!",
                email: email,
                phone: `${countryCode} ${phone}`,
                fullName: isResidences ? fullName : undefined,
                duration: isResidences ? duration : undefined,
                date: isResidences ? date : undefined,
                message: messageBody
            })
        })
            .then(response => response.json())
            .then(data => {
                alert('Thank you! We will get back to you shortly.');
                setEmail('');
                setPhone('');
                setAgreed(false);
                if (isResidences) {
                    setFullName('');
                    setDuration('1 month');
                    setDate('');
                    setMessageText('');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong. Please try again.');
            });
    };

    return (
        <footer style={{ width: '100%', backgroundColor: '#F9F9F9' }}>
            {!hideContactForm && (
                <div id="contact-section" className="footer-newsletter-container">
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
                            {isResidences ? 'Exclusive Long-Stay Inquiries' : 'Stay Connected with Sandane Homes'}
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
                            {isResidences 
                                ? 'Ready to move in? Share your details to reserve your apartment.' 
                                : 'Have a question or want to know more about our property showcases? Share your details and we’ll get back to you.'}
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
                            <p style={{ margin: 0 }}>
                                <strong style={{ color: '#111' }}>Email:</strong> sandanehomes@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                        <div className="footer-right-col">
                            
                            {isResidences && (
                                <div style={{ position: 'relative', marginBottom: '20px' }}>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
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
                            )}

                            {/* Email Input */}
                        <div style={{ position: 'relative', marginBottom: '20px' }}>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

                        {/* Phone Input with Country Code */}
                        <div style={{ position: 'relative', marginBottom: '20px', display: 'flex', gap: '10px' }}>
                            {/* Country Code Selector */}
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

                            {/* Phone Number Input */}
                            <input
                                type="tel"
                                placeholder="Phone Number"
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

                            {isResidences && (
                                <>
                                    <div style={{ position: 'relative', marginBottom: '20px', display: 'flex', gap: '20px' }}>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '5px', paddingLeft: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Duration</label>
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
                                        <div style={{ flex: 1 }}>
                                            <label style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '5px', paddingLeft: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Date</label>
                                            <input
                                                type="date"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px 20px',
                                                    backgroundColor: 'transparent',
                                                    border: 'none',
                                                    borderBottom: '1px solid #ccc',
                                                    fontSize: '15px',
                                                    outline: 'none'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ position: 'relative', marginBottom: '30px' }}>
                                        <textarea
                                            placeholder="Message"
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
                                </>
                            )}

                        {/* Send Button */}
                        <div style={{ marginBottom: '20px' }}>
                            <button
                                onClick={sendEmail}
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    background: '#C5A572',
                                    border: 'none',
                                    color: '#fff',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = '#a88d5f'}
                                onMouseOut={(e) => e.currentTarget.style.background = '#C5A572'}
                            >
                                Send ✉
                            </button>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input
                                type="checkbox"
                                checked={agreed}
                                onChange={() => setAgreed(!agreed)}
                            />
                            <label style={{ fontSize: '13px', color: '#999' }}>
                                I agree to the Privacy Policy
                            </label>
                        </div>
                    </div>

                </div>
            </div>
            )}

            {/* Sitewide links to key landing pages */}
            <div style={{ borderTop: '1px solid #e8e8e8', padding: '28px 20px', textAlign: 'center' }}>
                <nav style={{
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                    gap: '12px 28px', maxWidth: '1000px', margin: '0 auto',
                    fontSize: '13px', letterSpacing: '0.5px'
                }}>
                    {[
                        ['Serviced Apartments Greater Noida', '/serviced-apartments-greater-noida'],
                        ['Korean Expat Housing Delhi NCR', '/korean-expat-housing-delhi-ncr'],
                        ['Japanese Expat Housing Greater Noida', '/japanese-expat-housing-delhi-ncr'],
                        ['Blog', '/blog'],
                        ['Long-Term Residences', '/residences'],
                        ['FAQs', '/faqs'],
                    ].map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            style={{ color: '#888', textDecoration: 'none', transition: 'color 0.3s' }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#C5A572'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#888'}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
};

export default Footer;

