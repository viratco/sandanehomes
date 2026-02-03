import React from 'react';
import hospitalityBg from '../assets/IMG_6094.jpg';

import testimonialImg from '../assets/IMG_6106.jpg';

import soheesTxt from '../assets/sohees_white_txt.png';

const HospitalitySection = () => {
    return (
        <section style={{ width: '100%', backgroundColor: '#FFFBF5', position: 'relative', paddingBottom: '250px' }}>
            {/* Hospitality Message with Background Image */}
            <div className="hospitality-hero" style={{
                position: 'relative',
                width: '100%',
                minHeight: '700px',
                backgroundImage: `url(${hospitalityBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column', // Align items column
                alignItems: 'center', // Center horizontally
                justifyContent: 'flex-start', // Move content up
                padding: '120px 80px'
            }}>
                {/* Dark overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}></div>

                {/* Text Content - Center */}
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center' }}>
                    <h4 style={{
                        color: '#C5A572',
                        fontSize: '11px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        marginBottom: '25px'
                    }}>
                        High Standards of Hospitality
                    </h4>

                    <img src={soheesTxt} alt="Catarina by Sandane Homes" style={{ width: '450px', height: 'auto' }} />
                </div>
            </div>

            {/* Green Testimonial Overlay - Positioned to straddle bottom of image */}
            <div className="hospitality-testimonial-overlay" style={{
                position: 'absolute',
                left: '15%',
                right: 0,
                bottom: '100px',
                width: '85%',
                height: '350px',
                display: 'flex',
                zIndex: 3
            }}>
                {/* Left 2/5: Image */}
                <div className="testimonial-image" style={{
                    width: '40%',
                    backgroundImage: `url(${testimonialImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>

                {/* Right 3/5: Testimonial Content */}
                <div className="testimonial-content" style={{
                    width: '60%',
                    backgroundColor: '#566453',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 40px',
                    boxSizing: 'border-box'
                }}>
                    {/* Stars */}
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        marginBottom: '25px'
                    }}>
                        {[...Array(5)].map((_, i) => (
                            <span key={i} style={{
                                color: '#C5A572',
                                fontSize: '18px'
                            }}>★</span>
                        ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p style={{
                        fontSize: '15px',
                        lineHeight: '1.6',
                        color: 'white',
                        textAlign: 'center',
                        marginBottom: '20px'
                    }}>
                        "A delightful culinary escape! Sohee's Kitchen brings the authentic taste of Korea right to your table, blended with an exquisite selection of gourmet comfort foods. Every bite is a flavor explosion, served in a warm and inviting atmosphere. Truly a hidden gem for foodies."
                    </p>

                    {/* Author Info Removed */}

                    {/* Navigation Dots */}
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} style={{
                                width: '7px',
                                height: '7px',
                                borderRadius: '50%',
                                backgroundColor: i === 0 ? 'white' : 'rgba(255, 255, 255, 0.4)',
                                cursor: 'pointer'
                            }}></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HospitalitySection;
