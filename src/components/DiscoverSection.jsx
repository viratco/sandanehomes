import React from 'react';
import artImg from '../assets/discover_peace.png';
import parkImg from '../assets/discover_returns.png';
import foodImg from '../assets/discover_care.png';
import './DiscoverSection.css';

const DiscoverSection = () => {
    return (
        <section className="discover-section">
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
            <div className="discover-grid">
                {/* Card 1: Comprehensive Management */}
                <div className="discover-card">
                    {/* Recommended Tag */}


                    {/* Image */}
                    <div className="discover-card-image" style={{
                        backgroundImage: `url(${artImg})`
                    }}></div>

                    {/* Content */}
                    <div className="discover-card-content">
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


                    </div>
                </div>

                {/* Card 2: Financial Growth */}
                <div className="discover-card discover-card-offset">
                    {/* Image */}
                    <div className="discover-card-image" style={{
                        backgroundImage: `url(${parkImg})`
                    }}></div>

                    {/* Content */}
                    <div className="discover-card-content">
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


                    </div>
                </div>

                {/* Card 3: Asset Protection */}
                <div className="discover-card">
                    {/* Image */}
                    <div className="discover-card-image" style={{
                        backgroundImage: `url(${foodImg})`
                    }}></div>

                    {/* Content */}
                    <div className="discover-card-content">
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


                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
