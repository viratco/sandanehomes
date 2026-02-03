import React from 'react';
import locationImg from '../assets/IMG_4019.JPG';
import bookingImg from '../assets/IMG_3547.JPG';

const ContactSection = () => {
    return (
        <section className="contact-section" style={{
            width: '100%',
            display: 'flex',
            minHeight: '500px'
        }}>
            {/* Left Side: Getting Here */}
            <div className="contact-half-col" style={{
                width: '50%',
                position: 'relative',
                backgroundImage: `url(${locationImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 60px'
            }}>
                {/* Dark overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}></div>

                {/* Content */}
                <div className="contact-text-box" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '500px' }}>
                    <h4 style={{
                        color: '#C5A572',
                        fontSize: '11px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        marginBottom: '20px'
                    }}>
                        Our Location
                    </h4>

                    <h2 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '42px',
                        lineHeight: '1.2',
                        marginBottom: '30px',
                        color: '#111',
                        fontWeight: '400'
                    }}>
                        Getting Here
                    </h2>

                    <p style={{
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '8px'
                    }}>
                        Sandane Homes Aparthotel Greater Noida
                    </p>

                    <p style={{
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '8px'
                    }}>
                        415 6th Avenue, New York, New York, USA, 10018
                    </p>

                    <p style={{
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '8px'
                    }}>
                        Tel: +1 212-555-6699
                    </p>

                    <p style={{
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '35px'
                    }}>
                        Email: information@sandanehomes.com
                    </p>

                    <button style={{
                        padding: '14px 35px',
                        backgroundColor: 'transparent',
                        border: '1px solid #111',
                        color: '#111',
                        fontSize: '13px',
                        textTransform: 'capitalize',
                        letterSpacing: '1px',
                        cursor: 'pointer',
                        fontWeight: '400'
                    }}>
                        Get Directions
                    </button>
                </div>
            </div>

            {/* Right Side: Spend Your Time With Us */}
            <div className="contact-half-col" style={{
                width: '50%',
                position: 'relative',
                backgroundImage: `url(${bookingImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 60px'
            }}>
                {/* Dark overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}></div>

                {/* Content */}
                <div className="contact-text-box" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '500px' }}>
                    <h4 style={{
                        color: '#C5A572',
                        fontSize: '11px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        marginBottom: '20px'
                    }}>
                        Book A Room
                    </h4>

                    <h2 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '42px',
                        lineHeight: '1.2',
                        marginBottom: '30px',
                        color: '#111',
                        fontWeight: '400'
                    }}>
                        Spend Your Time With Us
                    </h2>

                    <p style={{
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '8px'
                    }}>
                        Everything at Sandane Homes, in its restaurants, bar and spa is designed to make your stay, lunch or dinner unforgettable.
                    </p>

                    <p style={{
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '8px'
                    }}>
                        Tel: +1 212-555-6688
                    </p>

                    <p style={{
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '35px'
                    }}>
                        Email: reservation@sandanehomes.com
                    </p>

                    <button style={{
                        padding: '14px 35px',
                        backgroundColor: 'transparent',
                        border: '1px solid #111',
                        color: '#111',
                        fontSize: '13px',
                        textTransform: 'capitalize',
                        letterSpacing: '1px',
                        cursor: 'pointer',
                        fontWeight: '400'
                    }}>
                        Reserve Your Stay
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
