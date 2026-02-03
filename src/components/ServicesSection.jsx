import React from 'react';
import recreationImg from '../assets/services_recreation.jpeg'; // New Recreation Image (Renamed)
import restImg from '../assets/services_rest.jpeg'; // New Rest Image (Renamed)

const ServicesSection = () => {
    return (
        <div style={{ width: '100%', backgroundColor: '#FFFFFF', padding: '50px 0' }}>
            {/* First Box: Meeting Spaces */}
            <div className="services-box" style={{
                backgroundColor: '#F9F9F9',
                margin: '0 auto 30px auto',
                maxWidth: '95%',
                padding: '3px',
                borderRadius: '8px'
            }}>
                <section className="services-row" style={{
                    display: 'flex',
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    overflow: 'hidden'
                }}>
                    {/* Left: Meeting Room Image */}
                    <div className="services-image-half" style={{
                        width: '50%',
                        backgroundImage: `url(${recreationImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '350px'
                    }}></div>

                    {/* Right: Meeting Spaces Content */}
                    <div className="services-content-half" style={{
                        width: '50%',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '80px 60px',
                        boxSizing: 'border-box'
                    }}>
                        <div style={{ maxWidth: '500px' }}>
                            <h4 style={{
                                color: '#C5A572',
                                fontSize: '11px',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                fontWeight: '600',
                                marginBottom: '25px'
                            }}>
                                Culinary Convenience
                            </h4>

                            <h2 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '48px',
                                lineHeight: '1.2',
                                marginBottom: '30px',
                                color: '#111',
                                fontWeight: '400'
                            }}>
                                Fully Equipped Modern Kitchen
                            </h2>

                            <p style={{
                                fontSize: '15px',
                                lineHeight: '1.8',
                                color: '#555',
                                marginBottom: '35px'
                            }}>
                                We believe the heart of a home is its kitchen. That's why ours comes fully stocked—from ovens and microwaves to premium cutlery and essential utensils. Whether it's a quick family breakfast or a gourmet dinner, we provide everything you need to cook with love. <span style={{ color: '#1A3C34', fontWeight: '700' }}>Need something specific? Just tell us what you want, and we will provide.</span>
                            </p>

                            <button style={{
                                padding: '14px 35px',
                                backgroundColor: 'transparent',
                                border: '1px solid #C5A572',
                                color: '#111',
                                fontSize: '13px',
                                textTransform: 'capitalize',
                                letterSpacing: '1px',
                                cursor: 'pointer',
                                fontWeight: '400'
                            }}>
                                Discover More
                            </button>
                        </div>
                    </div>
                </section>
            </div >

            {/* Second Box: Wellness */}
            <div className="services-box" style={{
                backgroundColor: '#F9F9F9',
                margin: '0 auto 30px auto',
                maxWidth: '95%',
                padding: '3px',
                borderRadius: '8px'
            }}>
                <section className="services-row" style={{
                    display: 'flex',
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    overflow: 'hidden'
                }}>
                    {/* Left: Wellness Content */}
                    <div className="services-content-half" style={{
                        width: '50%',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '80px 60px',
                        boxSizing: 'border-box'
                    }}>
                        <div style={{ maxWidth: '500px' }}>
                            <h4 style={{
                                color: '#C5A572',
                                fontSize: '11px',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                fontWeight: '600',
                                marginBottom: '25px'
                            }}>
                                Rest & Relaxation
                            </h4>

                            <h2 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '48px',
                                lineHeight: '1.2',
                                marginBottom: '30px',
                                color: '#111',
                                fontWeight: '400'
                            }}>
                                Hassle-Free Living & Privacy
                            </h2>

                            <p style={{
                                fontSize: '15px',
                                lineHeight: '1.8',
                                color: '#555',
                                marginBottom: '35px'
                            }}>
                                Walk in with just your suitcase. We handle everything else. Our professional housekeeping team visits 7 days a week to ensure your home is sparkling clean. From laundry to maintenance, we take care of the chores so you can enjoy total privacy and comfort.
                            </p>
                        </div>
                    </div>

                    {/* Right: Spa Image */}
                    <div className="services-image-half" style={{
                        width: '50%',
                        backgroundImage: `url(${restImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '350px'
                    }}></div>
                </section>
            </div >

            {/* Third Box: Closing CTA */}
            < div style={{
                margin: '0 auto 30px auto',
                maxWidth: '95%',
                padding: '0', // Removed padding for immersive look
                borderRadius: '8px'
            }}>
                <section style={{
                    display: 'flex',
                    width: '100%',
                    backgroundColor: '#1A3C34', // Dark Luxury Green Background
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    {/* Content */}
                    <div className="services-full-content" style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center Alignment
                        justifyContent: 'center',
                        padding: '100px 60px', // More breathing room
                        boxSizing: 'border-box',
                        textAlign: 'center'
                    }}>
                        <h4 style={{
                            color: '#C5A572', // Gold
                            fontSize: '12px',
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                            marginBottom: '30px'
                        }}>
                            Your Premium Stay Awaits
                        </h4>

                        <h2 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '56px', // Larger font
                            lineHeight: '1.1',
                            marginBottom: '30px',
                            color: '#FFFFFF', // White
                            fontWeight: '400'
                        }}>
                            Ready to Move In?
                        </h2>

                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#E0E0E0', // Off-white/Light Grey
                            marginBottom: '40px',
                            maxWidth: '700px'
                        }}>
                            Don't just stay—live. Join the community of professionals who have chosen the Catarina standard of comfort, privacy, and service. Limited exclusive units available in DLF & Jaypee Greens.
                        </p>

                        <button style={{
                            padding: '18px 45px',
                            backgroundColor: '#C5A572', // Gold Button
                            border: 'none',
                            color: '#1A3C34', // Dark Text
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                        }}>
                            Reserve Your Apartment
                        </button>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default ServicesSection;
