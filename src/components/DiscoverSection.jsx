import React from 'react';
import artImg from '../assets/IMG_3482.JPG';
import parkImg from '../assets/IMG_4015.JPG';
import foodImg from '../assets/IMG_6598.JPG';

const DiscoverSection = () => {
    return (
        <section className="discover-section" style={{
            width: '100%',
            backgroundColor: '#FFFBF5',
            padding: '100px 80px',
            boxSizing: 'border-box'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h4 style={{
                    color: '#C5A572',
                    fontSize: '11px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    marginBottom: '20px'
                }}>
                    PARTNER WITH US
                </h4>

                <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '56px',
                    lineHeight: '1.2',
                    marginBottom: '30px',
                    color: '#111',
                    fontWeight: '400'
                }}>
                    Unlock Your Property's Potential
                </h2>

                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#555',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    Turn your property into a premium serviced apartment. We handle everything—from marketing and guest management to maintenance—offering you hassle-free income and peace of mind. Join our exclusive network of high-standard homes today.
                </p>
            </div>

            {/* Three Cards */}
            <div className="discover-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '30px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* Card 1: Exhibitions & Museum */}
                <div style={{
                    backgroundColor: '#F9F9F9',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid #C5A572'
                }}>
                    {/* Recommended Tag */}
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        color: '#FFF',
                        backgroundColor: '#111',
                        padding: '8px 16px',
                        fontSize: '11px',
                        fontWeight: '600',
                        letterSpacing: '1px',
                        zIndex: 2
                    }}>
                        RECOMMENDED
                    </div>

                    {/* Image */}
                    <div style={{
                        width: '100%',
                        height: '250px',
                        backgroundImage: `url(${artImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>

                    {/* Content */}
                    <div style={{ padding: '30px' }}>
                        <h5 style={{
                            color: '#C5A572',
                            fontSize: '11px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                            marginBottom: '15px'
                        }}>
                            Comprehensive Management
                        </h5>

                        <h3 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '28px',
                            lineHeight: '1.3',
                            marginBottom: '15px',
                            color: '#111',
                            fontWeight: '400'
                        }}>
                            Peace of Mind
                        </h3>

                        <p style={{
                            fontSize: '14px',
                            lineHeight: '1.7',
                            color: '#555',
                            marginBottom: '25px'
                        }}>
                            We handle everything from guest vetting and bookings to 24/7 support. Relax knowing your property is in professional hands, fully insured and compliant with all local regulations.
                        </p>

                        <a href="#" style={{
                            color: '#111',
                            fontSize: '11px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}>
                            Discover More ›
                        </a>
                    </div>
                </div>

                {/* Card 2: Nearby Parks */}
                <div style={{
                    backgroundColor: '#F9F9F9',
                    overflow: 'hidden',
                    marginTop: '60px',
                    border: '1px solid #C5A572'
                }}>
                    {/* Image */}
                    <div style={{
                        width: '100%',
                        height: '250px',
                        backgroundImage: `url(${parkImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>

                    {/* Content */}
                    <div style={{ padding: '30px' }}>
                        <h5 style={{
                            color: '#C5A572',
                            fontSize: '11px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                            marginBottom: '15px'
                        }}>
                            Financial Growth
                        </h5>

                        <h3 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '28px',
                            lineHeight: '1.3',
                            marginBottom: '15px',
                            color: '#111',
                            fontWeight: '400'
                        }}>
                            Higher Returns
                        </h3>

                        <p style={{
                            fontSize: '14px',
                            lineHeight: '1.7',
                            color: '#555',
                            marginBottom: '25px'
                        }}>
                            Transform your property into an Asset. Our specialized short-term rental strategies and dynamic pricing models ensure you earn significantly more than traditional long-term leasing.
                        </p>

                        <a href="#" style={{
                            color: '#111',
                            fontSize: '11px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}>
                            Discover More ›
                        </a>
                    </div>
                </div>

                {/* Card 3: Local Food Tour */}
                <div style={{
                    backgroundColor: '#F9F9F9',
                    overflow: 'hidden',
                    border: '1px solid #C5A572'
                }}>
                    {/* Image */}
                    <div style={{
                        width: '100%',
                        height: '250px',
                        backgroundImage: `url(${foodImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>

                    {/* Content */}
                    <div style={{ padding: '30px' }}>
                        <h5 style={{
                            color: '#C5A572',
                            fontSize: '11px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                            marginBottom: '15px'
                        }}>
                            Asset Protection
                        </h5>

                        <h3 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '28px',
                            lineHeight: '1.3',
                            marginBottom: '15px',
                            color: '#111',
                            fontWeight: '400'
                        }}>
                            Impeccable Care
                        </h3>

                        <p style={{
                            fontSize: '14px',
                            lineHeight: '1.7',
                            color: '#555',
                            marginBottom: '25px'
                        }}>
                            We treat your home as if it were our own. With professional housekeeping after every stay and proactive maintenance checks, your property stays in showroom condition year-round.
                        </p>

                        <a href="#" style={{
                            color: '#111',
                            fontSize: '11px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}>
                            Discover More ›
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
