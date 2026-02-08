import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import cuisineImg from '../assets/catarina_main.jpg'; // Updated to new main image
import foodImg from '../assets/IMG_0609.jpg'; // Updated to new second image
import recreationImg from '../assets/services_recreation.jpeg'; // New Recreation Image (Renamed)
import restImg from '../assets/services_rest.jpeg'; // New Rest Image (Renamed)

const CuisineSection = () => {
    const navigate = useNavigate(); // Initialize hook

    return (
        <section id="service-apartments" className="cuisine-section" style={{
            display: 'flex',
            flexDirection: 'column', // Changed to column to stack header and content
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#FFFFFF',
            position: 'relative',
            paddingBottom: '100px'
        }}>
            <div className="catarina-box" style={{
                maxWidth: '95%',
                margin: '50px auto',
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 0px 20px rgba(0,0,0,0.05)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '4px solid rgba(197, 165, 114, 0.4)' // Increased thickness and opacity for visibility
            }}>
                {/* Main Header */}
                <div style={{ textAlign: 'center', padding: '80px 20px 50px 20px' }}>
                    <h4 style={{
                        color: '#C5A572',
                        fontSize: '13px',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        fontWeight: '700',
                        marginBottom: '60px',
                        fontFamily: 'sans-serif'
                    }}>
                        HIGH STANDARDS OF HOSPITALITY
                    </h4>
                    <div style={{
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        <h2 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '90px', // Dramatically increased
                            lineHeight: '0.9',
                            color: '#111',
                            fontWeight: '400',
                            textTransform: 'uppercase',
                            margin: 0,
                            letterSpacing: '-2px' // Tighter spacing for elegance
                        }}>
                            CATARINA
                        </h2>
                        <h2 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '52px', // Prominent but smaller than main title
                            lineHeight: '1.1',
                            color: '#111',
                            fontWeight: '400',
                            textTransform: 'uppercase',
                            marginTop: '10px',
                            letterSpacing: '1px'
                        }}>
                            BY SANDANE HOMES
                        </h2>
                        <h4 style={{
                            color: '#C5A572',
                            fontSize: '13px',
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            marginTop: '20px',
                            fontFamily: 'sans-serif'
                        }}>
                            services apartments and homes
                        </h4>
                    </div>
                </div>

                {/* Content Row */}
                <div className="cuisine-content-row" style={{ display: 'flex', width: '100%' }}>
                    {/* Left Column */}
                    <div className="cuisine-left-col" style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                        {/* Top: Dining Room Image */}
                        <div style={{
                            height: '650px',
                            backgroundImage: `url(${cuisineImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}></div>


                        {/* Bottom Black Area with Text */}
                        <div className="cuisine-content-box" style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '60px',
                            boxSizing: 'border-box',
                            backgroundColor: '#FFFFFF' // Changed to white
                        }}>
                            <div>
                                <h4 style={{
                                    color: '#C5A572',
                                    fontSize: '11px',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    fontWeight: '600',
                                    marginBottom: '20px'
                                }}>
                                    Urban Sanctuary
                                </h4>
                                <h3 style={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: '36px',
                                    lineHeight: '1.3',
                                    color: '#111',
                                    fontWeight: '400',
                                    maxWidth: '450px',
                                    marginBottom: '20px'
                                }}>
                                    A space crafted by us, a home created for you
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: '1.7',
                                    color: '#555',
                                    maxWidth: '450px'
                                }}>
                                    Discover a haven of sophistication and comfort at Catarina. Designed for the modern professional, our spaces are fully equipped with premium air purifiers, yearly maintenance, and comprehensive services, granting you the ultimate freedom to live wherever you want while ensuring your stay is effortlessly exceptional.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Offset) */}
                    <div className="cuisine-right-col" style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '60px' // Reduced Stagger offset
                    }}>
                        {/* Top: Green Content Box */}
                        <div className="cuisine-text-block" style={{
                            height: '650px',
                            backgroundColor: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            padding: '40px 80px 0 80px',
                            boxSizing: 'border-box'
                        }}>
                            <div style={{ maxWidth: '500px' }}>







                                <h3 style={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: '36px',
                                    lineHeight: '1.3',
                                    color: '#111',
                                    fontWeight: '400',
                                    marginBottom: '25px',
                                    textTransform: 'capitalize'
                                }}>
                                    Curated Residences for Global Professionals
                                </h3>

                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#555', // Changed back to dark gray
                                    marginBottom: '40px'
                                }}>
                                    Experience premium fully-serviced luxury accommodations in the heart of Greater Noida. With over 5 years of hospitality excellence, Catarina offers meticulously designed 2BHK to 4BHK apartments and villas, tailored for expats and professionals seeking comfort, convenience, and exceptional service.
                                </p>

                                <button
                                    onClick={() => navigate('/catarina-services')} // Add navigation
                                    style={{
                                        padding: '16px 40px',
                                        backgroundColor: 'transparent',
                                        border: '1px solid #C5A572', // Gold border
                                        color: '#111', // Changed back to dark
                                        fontSize: '14px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        cursor: 'pointer',
                                        display: 'inline-block'
                                    }}>
                                    DISCOVER CATARINA SERVICES
                                </button>
                            </div>
                        </div>

                        {/* Bottom: Food Image */}
                        <div style={{
                            height: '450px',
                            backgroundImage: `url(${foodImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative' // Needed for absolute child
                        }}>
                            {/* Scroll Top Button (Inside image, bottom right) */}
                            <div style={{
                                position: 'absolute', // Relative to the section usually, but let's put it absolute bottom right of the page flow or this div
                                bottom: '50px',
                                right: '50px',
                                width: '50px',
                                height: '50px',
                                border: '1px solid #C5A572',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#C5A572',
                                cursor: 'pointer',
                                backgroundColor: 'rgba(0,0,0,0.2)'
                            }}>
                                ^
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Appended Services Content --- */}

                {/* First Box: Meeting Spaces */}
                <div className="services-box" style={{
                    backgroundColor: '#F9F9F9',
                    margin: '30px auto 30px auto', // Added top margin
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
            </div>
        </section>
    );
};

export default CuisineSection;
