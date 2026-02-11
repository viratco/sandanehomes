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
                <div className="catarina-lang-text">
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
