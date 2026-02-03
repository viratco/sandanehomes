import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import heroBg from '../../assets/catarina_main.jpg'; // Using existing main image for hero background
import img1 from '../../assets/IMG_7272.jpg'; // Bedroom/Interior
import img2 from '../../assets/IMG_7278.jpg'; // Interior/Lobby
import img3 from '../../assets/IMG_0609.jpg'; // Food/Room
import img4 from '../../assets/IMG_3482.JPG'; // Additional exterior/interior
import img5 from '../../assets/IMG_4015.JPG'; // Additional interior
import img6 from '../../assets/IMG_6598.JPG'; // Cuisine/Dining
import { FaBuilding, FaCouch, FaBed, FaBroom, FaShirt, FaBolt, FaTv, FaWind, FaGlassWater, FaBottleWater, FaWifi, FaScrewdriverWrench, FaCity, FaLocationDot } from 'react-icons/fa6';

const CatarinaServices = () => {
    // ... code ...

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
        <div className="catarina-services" style={{ backgroundColor: '#FFFFFF' }}>
            <Header showTopBar={false} />

            {/* Hero / Title Section */}
            <div className="page-hero-section" style={{
                paddingTop: '180px',
                paddingBottom: '80px',
                textAlign: 'center',
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${heroBg})`, // Added bg image with overlay
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingLeft: '20px',
                paddingRight: '20px'
            }}>
                <h1 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '48px',
                    color: '#111',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Catarina <span style={{ fontSize: '0.6em', display: 'block', marginTop: '5px', letterSpacing: '3px' }}>By Sandane Homes</span>
                </h1>
                <p style={{
                    fontSize: '14px',
                    color: '#C5A572',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontWeight: '600',
                    marginBottom: '20px'
                }}>
                    Apartments - Villas - Expert Accommodations
                </p>
                <div style={{
                    fontSize: '24px',
                    fontFamily: '"My Soul", cursive',
                    color: '#555',
                    marginBottom: '10px'
                }}>
                    "Where Comfort Meets Class"
                </div>
                {/* Multi-language text from flyer */}
                <div style={{
                    fontSize: '14px',
                    color: '#777',
                    marginTop: '10px',
                    lineHeight: '1.5'
                }}>
                    편안함과 품격이 만나는 곳<br />
                    快適さと高級感が融合した場所
                </div>
            </div>

            {/* Offerings & Locations */}
            <div style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '36px',
                    color: '#1A3C34', // Dark Green accent
                    marginBottom: '20px'
                }}>
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
            <div style={{ padding: '0 5% 80px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px'
                }}>
                    <div style={{ height: '300px', backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div style={{ height: '300px', backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div style={{ height: '300px', backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div style={{ height: '300px', backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div style={{ height: '300px', backgroundImage: `url(${img5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div style={{ height: '300px', backgroundImage: `url(${img6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                </div>
            </div>

            {/* Facilities Section */}
            <div style={{ backgroundColor: '#F9F9F9', padding: '80px 5%' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '36px',
                        color: '#111',
                        marginBottom: '50px',
                        textAlign: 'center'
                    }}>
                        Facilities Provided
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {facilities.map((facility, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                color: '#555',
                                fontSize: '15px',
                                lineHeight: '1.6'
                            }}>
                                <span style={{ color: '#1A3C34', fontSize: '24px' }}>{facility.icon}</span>
                                <div>{facility.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About & Contact Section */}
            <div style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
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
                        <div style={{
                            backgroundColor: '#000',
                            color: '#fff',
                            padding: '60px',
                            textAlign: 'center'
                        }}>
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
                            <h3 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '32px',
                                marginBottom: '30px',
                                color: '#111'
                            }}>
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
