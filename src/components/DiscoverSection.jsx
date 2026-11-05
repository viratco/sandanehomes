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
                    fontSize: 'clamp(28px, 5vw, 56px)',
                    lineHeight: '1.2',
                    marginBottom: '30px',
                    color: '#111',
                    fontWeight: '400'
                }}>
                    Unlock Your Property's Potential
                </h2>

                <p style={{
                    fontSize: 'clamp(13px, 1.5vw, 16px)',
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

            {/* VIP Building Owners Banner */}
            <div style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1C2D42 100%)',
                borderRadius: '20px',
                padding: '40px 30px',
                color: '#FFFFFF',
                textAlign: 'center',
                boxShadow: '0 15px 40px rgba(15, 23, 42, 0.15)',
                border: '1px solid rgba(197, 165, 114, 0.35)',
                maxWidth: '1000px',
                margin: '60px auto 0'
            }}>
                <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    FOR DEVELOPERS &amp; LANDLORDS (10–60+ UNITS)
                </span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', color: '#FFFFFF', margin: '10px 0 14px' }}>
                    Own a Standalone Building or Residential Tower?
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '15px', lineHeight: '1.7', maxWidth: '720px', margin: '0 auto 26px' }}>
                    Master-lease your entire asset to Sandane Homes under a 3 to 9-year institutional agreement. Enjoy 1 single master rent check on the 1st of every month, 100% free maintenance, and zero vacancy losses.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="/partner/building-owners"
                        style={{
                            backgroundColor: '#C5A572',
                            color: '#0F172A',
                            padding: '14px 32px',
                            borderRadius: '30px',
                            fontWeight: '700',
                            textDecoration: 'none',
                            fontSize: '14px',
                            boxShadow: '0 6px 20px rgba(197, 165, 114, 0.3)'
                        }}
                    >
                        Explore Building Master Lease &rarr;
                    </a>
                    <a
                        href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20own%20a%20building%20and%20would%20like%20to%20discuss%20a%20Master%20Lease."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#25D366',
                            color: '#FFFFFF',
                            padding: '14px 28px',
                            borderRadius: '30px',
                            fontWeight: '700',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}
                    >
                        💬 WhatsApp Acquisitions Desk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
