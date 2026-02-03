import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import cuisineImg from '../assets/catarina_main.jpg'; // Updated to new main image
import foodImg from '../assets/IMG_0609.jpg'; // Updated to new second image

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
            {/* Main Header */}
            <div style={{ textAlign: 'center', padding: '100px 20px 60px 20px' }}>
                <h4 style={{
                    color: '#C5A572',
                    fontSize: '13px',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    marginBottom: '30px',
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
        </section>
    );
};

export default CuisineSection;
