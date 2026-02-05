import React, { useState } from 'react';


const Footer = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [agreed, setAgreed] = useState(false);

    const sendEmail = () => {
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

        // FormSubmit.co AJAX Endpoint
        fetch("https://formsubmit.co/ajax/sandanehomes@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                phone: phone,
                _subject: "New Contact from Sandane Homes Website!",
                message: `New contact submission:\nEmail: ${email}\nPhone: ${phone}`
            })
        })
            .then(response => response.json())
            .then(data => {
                alert('Thank you! We will get back to you shortly.');
                setEmail('');
                setPhone('');
                setAgreed(false);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong. Please try again.');
            });
    };

    return (
        <footer style={{ width: '100%', backgroundColor: '#F9F9F9' }}>
            <div className="footer-newsletter-container" style={{
                padding: '80px 80px 60px 80px',
                borderBottom: '1px solid #ddd'
            }}>
                <div className="footer-newsletter-row" style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '60px'
                }}>

                    {/* LEFT TEXT */}
                    <div style={{ flex: 1 }}>
                        <h4 style={{
                            color: '#C5A572',
                            fontSize: '11px',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                            marginBottom: '20px'
                        }}>
                            Stay Connected with Sandane Homes
                        </h4>

                        <h2 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '42px',
                            lineHeight: '1.3',
                            color: '#111',
                            fontWeight: '400',
                            maxWidth: '500px'
                        }}>
                            Have a question or want to know more about our property showcases?
                            Share your details and we’ll get back to you.
                        </h2>
                    </div>

                    {/* RIGHT FORM */}
                    <div style={{ flex: 1, maxWidth: '600px' }}>
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

                        {/* Phone Input */}
                        <div style={{ position: 'relative', marginBottom: '20px' }}>
                            <input
                                type="tel"
                                placeholder="Your Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
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
        </footer>
    );
};

export default Footer;

