import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);

    const sendEmail = () => {
        if (!email) {
            alert('Please enter your email');
            return;
        }

        if (!agreed) {
            alert('Please agree to the Privacy Policy');
            return;
        }

        emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            {
                user_email: email,
            },
            'YOUR_PUBLIC_KEY'
        )
            .then(() => {
                alert('Thank you! We’ll get back to you shortly.');
                setEmail('');
                setAgreed(false);
            })
            .catch(() => {
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
                        <div style={{ position: 'relative', marginBottom: '20px' }}>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '18px 140px 18px 20px',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid #ccc',
                                    fontSize: '15px',
                                    outline: 'none'
                                }}
                            />

                            <button
                                onClick={sendEmail}
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: '500'
                                }}
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

