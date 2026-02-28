import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import heroBg from '../../assets/e8cd7b2a-95fc-418d-9ca2-357008d2aa61.JPG'; // Using new image for hero background
import imgRecreation from '../../assets/services_recreation.jpeg';
import imgTopLeft from '../../assets/IMG_7278.jpg';
import imgTopRight from '../../assets/IMG_0542.jpg';
import imgNew3 from '../../assets/IMG_7257.jpg';
import imgBottomMiddle from '../../assets/last3.jpeg';
import imgNew5 from '../../assets/IMG_7254.jpg';
import './SandaneHomes.css'; // Import shared CSS
import { FaBuilding, FaCouch, FaBed, FaBroom, FaShirt, FaBolt, FaTv, FaWind, FaGlassWater, FaBottleWater, FaWifi, FaScrewdriverWrench, FaCity, FaLocationDot } from 'react-icons/fa6';

const CatarinaServices = () => {
    // Facility Data with Icons
    const facilities = [
        { icon: <FaBuilding />, text: "Semi-furnished flats/villas" },
        { icon: <FaCouch />, text: "Furniture included" },
        { icon: <FaBed />, text: "Bed and bath linens changed twice a week" },
        { icon: <FaBroom />, text: "Housekeeping services available seven days a week" },
        { icon: <FaShirt />, text: "Laundry facilities provided" },
        { icon: <FaBolt />, text: "100% electricity backup" },
        { icon: <FaTv />, text: "One television included" },
        { icon: <FaWind />, text: "Air purifier included" },
        { icon: <FaGlassWater />, text: "Hot and cold water dispenser" },
        { icon: <FaBottleWater />, text: "20-liter water jars – five bottles provided per month" },
        { icon: <FaWifi />, text: "Installation and registration of one Wi-Fi connection up to 300 Mbps" },
        { icon: <FaScrewdriverWrench />, text: "Coverage for other maintenance and property upkeep expenses" },
        { icon: <FaCity />, text: "Options Available in DLF/Jaypee Greens / Godrej Golf Link and other high-end societies" },
        { icon: <FaLocationDot />, text: "Location - Gurgaon / Greater Noida / Noida" }
    ];

    return (
        <div className="catarina-services sandane-homes-page">
            <Header showTopBar={false} />

            {/* Hero / Title Section */}
            <div className="catarina-hero" style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <h1 className="catarina-title">
                    Catarina <span style={{ fontSize: '0.6em', display: 'block', marginTop: '5px', letterSpacing: '3px' }}>By Sandane Homes</span>
                </h1>
                <p className="catarina-subtitle">
                    Apartments - Villas - Expert Accommodations
                </p>
                <div className="catarina-quote">
                    "Where Comfort Meets Class"
                </div>
                {/* Multi-language text from flyer */}
                <div className="catarina-lang-text" style={{
                    fontSize: '28px',
                    lineHeight: '1.6',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                    fontWeight: '500'
                }}>
                    편안함과 품격이 만나는 곳<br />
                    快適さと高級感が融合した場所
                </div>
            </div>

            {/* Offerings & Locations */}
            <div className="catarina-section catarina-accomm-section">
                <h2 className="section-title" style={{ color: '#1A3C34' }}>
                    Luxury Accommodations
                </h2>
                <h3 style={{
                    fontSize: '24px',
                    color: '#111',
                    marginBottom: '40px',
                    fontWeight: '400'
                }}>
                    2BHK - 4BHK / VILLAS
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '16px', color: '#555' }}>
                    <p><strong style={{ color: '#111' }}>Location:</strong> Gurgaon / Greater Noida / Noida</p>
                    <p><strong style={{ color: '#111' }}>Options Available in:</strong> DLF / Jaypee Greens / Godrej Golf Link and other high-end societies</p>
                </div>

                {/* Catarina Info Section - Sticky Note Style */}
                <div style={{
                    marginTop: '60px',
                    maxWidth: '800px',
                    margin: '60px auto 0 auto',
                    textAlign: 'center',
                    lineHeight: '1.9',
                    fontSize: '20px',
                    fontFamily: '"Shadows Into Light", "Caveat", cursive, sans-serif', // Hand-written style font fallback
                    color: '#2b2b2b',
                    backgroundColor: '#FEF9C3', // Classic sticky note yellow
                    padding: '50px 40px',
                    boxShadow: '3px 7px 15px rgba(0,0,0,0.15)',
                    transform: 'rotate(-1.5deg)', // Slight tilt
                    position: 'relative',
                    borderBottomRightRadius: '30px 5px', // Curled corner effect
                }}>
                    {/* The "Pin" */}
                    <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '30px',
                        height: '30px',
                        background: 'radial-gradient(circle at 30% 30%, #EF4444, #B91C1C)', // Red pin head
                        borderRadius: '50%',
                        boxShadow: '2px 5px 6px rgba(0,0,0,0.3), inset -2px -2px 5px rgba(0,0,0,0.2)',
                        zIndex: 2
                    }}>
                        <div style={{ // Pin highlight
                            position: 'absolute',
                            top: '4px',
                            left: '4px',
                            width: '8px',
                            height: '8px',
                            background: 'rgba(255,255,255,0.6)',
                            borderRadius: '50%'
                        }}></div>
                    </div>

                    <p style={{ marginBottom: '20px', fontStyle: 'italic' }}>
                        Catarina by Sandane Homes embodies our philosophy: <br />
                        <strong style={{ fontSize: '24px', color: '#1A3C34', display: 'inline-block', marginTop: '10px' }}>"Where Comfort Meets Class"</strong>
                    </p>
                    <p style={{ textAlign: 'left', marginBottom: '15px', padding: '0 20px' }}>
                        We specialize in delivering premium, fully-serviced stays tailored specifically for expats and professionals seeking a seamless, high-end living experience across India. Our luxury 2BHK to 4BHK apartments and villas come semi-furnished with comprehensive amenities designed for your absolute convenience:
                    </p>
                    <ul style={{ textAlign: 'left', paddingLeft: '40px', margin: '0 20px 20px 20px', lineHeight: '1.6' }}>
                        <li><strong>Uninterrupted Comfort:</strong> 100% electricity backup.</li>
                        <li><strong>Seamless Connectivity:</strong> Fast 300 Mbps Wi-Fi.</li>
                        <li><strong>Pristine Living:</strong> Daily dedicated housekeeping.</li>
                        <li><strong>Peace of Mind:</strong> Inclusive property maintenance.</li>
                    </ul>
                    <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
                        At Catarina, we manage the details, so you can focus on living exceptionally.
                    </p>
                </div>
            </div>

            {/* Image Gallery (Mimicking flyer grid) */}
            <div className="catarina-section catarina-gallery-section" style={{ paddingBottom: '80px', paddingTop: 0 }}>
                <div className="catarina-gallery-grid">
                    <div className="catarina-gallery-item" style={{ backgroundImage: `url(${imgTopLeft})` }}></div>
                    <div className="catarina-gallery-item" style={{ backgroundImage: `url(${imgRecreation})` }}></div>
                    <div className="catarina-gallery-item" style={{ backgroundImage: `url(${imgTopRight})` }}></div>
                    <div className="catarina-gallery-item" style={{ backgroundImage: `url(${imgNew3})` }}></div>
                    <div className="catarina-gallery-item" style={{ backgroundImage: `url(${imgBottomMiddle})` }}></div>
                    <div className="catarina-gallery-item" style={{ backgroundImage: `url(${imgNew5})` }}></div>
                </div>
            </div>

            {/* Facilities Section */}
            <div className="catarina-facilities-section">
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ marginBottom: '50px' }}>
                        Facilities Provided
                    </h2>

                    <div className="catarina-facilities-grid">
                        {facilities.map((facility, index) => (
                            <div key={index} className="catarina-facility-item">
                                <span className="catarina-facility-icon">{facility.icon}</span>
                                <div>{facility.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About & Contact Section */}
            <div className="catarina-section catarina-contact-section">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '50px',
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: '50px'
                    }}>
                        {/* About Us Box */}
                        <div className="catarina-about-box">
                            <h3 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '32px',
                                marginBottom: '30px',
                                color: '#fff'
                            }}>
                                ABOUT US
                            </h3>
                            <p style={{ lineHeight: '1.8', fontSize: '15px', color: '#e0e0e0', maxWidth: '800px', margin: '0 auto' }}>
                                Sandane Homes delivers premium fully-serviced stays across India. With 5+ years in hospitality, we specialize in hosting expats and professionals seeking comfort, convenience, and exceptional service - nationwide.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div style={{ textAlign: 'center' }}>
                            <h3 className="section-title">
                                Contact Us
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', color: '#555' }}>
                                    <span style={{ color: '#111', fontSize: '24px' }}>📞</span>
                                    +91 97117 22273
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', color: '#555' }}>
                                    <span style={{ color: '#111', fontSize: '24px' }}>✉️</span>
                                    sandanehomes@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CatarinaServices;
