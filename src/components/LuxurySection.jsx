import React from 'react';
import lobbyImg from '../assets/IMG_7278.jpg'; // Vertical image replacement
import roomImg from '../assets/IMG_7272.jpg'; // Horizontal image replacement

const LuxurySection = () => {
    return (
        <section
            id="rooms"
            className="luxury-section"
            style={{
                padding: '100px 5%',
                backgroundColor: '#FFFBF5',
                display: 'flex',
                justifyContent: 'center',
                gap: '80px',
                alignItems: 'flex-start',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
            {/* Left Column */}
            <div className="luxury-left-col" style={{
                width: '35%',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px'
            }}>
                {/* Vertical Image */}
                <div style={{
                    width: '100%',
                    height: '500px',
                    borderRadius: '20px',
                    overflow: 'hidden'
                }}>
                    <img src={lobbyImg} alt="Luxury Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Stats Card */}
                <div style={{
                    backgroundColor: '#F3EFE4', // Beige/Cream
                    padding: '40px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <div style={{
                        fontSize: '48px',
                        color: '#1A3C34', // Dark Green
                        fontFamily: 'Playfair Display, serif',
                        lineHeight: '1'
                    }}>
                        1 Lakh+
                    </div>
                    <div style={{
                        fontSize: '14px',
                        color: '#444',
                        lineHeight: '1.2'
                    }}>
                        Happy<br />Customer
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="luxury-right-col" style={{
                width: '55%',
                paddingTop: '40px'
            }}>
                {/* Header Section */}
                <div style={{ marginBottom: '50px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        color: '#1A3C34',
                        fontSize: '12px',
                        fontWeight: '600',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ width: '0', height: '0', borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderRight: '5px solid #1A3C34', marginRight: '5px' }}></span>
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#1A3C34' }}></span>
                        </span>
                        About Us
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#1A3C34' }}></span>
                            <span style={{ width: '0', height: '0', borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderLeft: '5px solid #1A3C34', marginLeft: '5px' }}></span>
                        </span>
                    </div>

                    <div className="luxury-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '30px' }}>
                        <h2 style={{
                            fontSize: '32px', // Compromised size
                            fontFamily: 'Playfair Display, serif',
                            color: '#111',
                            lineHeight: '1.2',
                            margin: 0,
                            flex: '1',
                            letterSpacing: '-0.5px' // Tighter spacing
                        }}>
                            Experience Comfort, <span style={{ color: '#666' }}>Elegance</span><br />
                            <span style={{ color: '#666' }}>& Exceptional Hospitality</span>
                        </h2>

                        <p style={{
                            fontSize: '12px', // Compromised size
                            color: '#555',
                            lineHeight: '1.6',
                            width: '40%', // Slightly wider to ensure no wrap
                            marginTop: '8px',
                            textAlign: 'left'
                        }}>
                            Experience world-class comfort and elegant design<br />
                            combined with exceptional hospitality, ensuring<br />
                            every of your stay feels special & unforgettable.
                        </p>
                    </div>
                </div>

                {/* Room Image Container */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '450px',
                    marginTop: '20px'
                }}>
                    {/* Inner Image Wrapper for Border Radius */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '20px',
                        overflow: 'hidden'
                    }}>
                        <img src={roomImg} alt="Hotel Room" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Scroll Badge */}
                    <div style={{
                        position: 'absolute',
                        top: '-40px', // Adjusted to overlap nicely since container is no longer clipping
                        right: '40px',
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#0F2823', // Deep Dark Green
                        borderRadius: '50%',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        border: '4px solid white',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                        zIndex: 10 // Ensure it sits on top
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '16px', marginBottom: '2px' }}>▼</div>
                            <div>Scroll</div>
                        </div>
                    </div>

                    {/* Button */}
                    <button style={{
                        position: 'absolute',
                        bottom: '30px',
                        right: '30px',
                        backgroundColor: '#C5A572',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        textTransform: 'uppercase'
                    }}>
                        TOP
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LuxurySection;
