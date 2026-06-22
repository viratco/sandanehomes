import React, { useEffect } from 'react';
import useSEO from '../../hooks/useSEO';
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

const Residences = () => {
    useSEO({
        title: "Residences by Sandane Homes | Premium Corporate Stays & Villas NCR",
        description: "Expat-focused luxury serviced apartments and villas in Noida, Greater Noida, and Gurgaon. Offering semi-furnished properties with housekeeping, 100% power backup, and corporate amenities.",
        canonicalUrl: "https://www.sandanehomes.com/residences"
    });

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
        { icon: <FaCity />, text: "Options Available in DLF / Jaypee Greens / Godrej Golf Link and other high-end societies" },
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
                    Residences <span style={{ fontSize: '0.6em', display: 'block', marginTop: '5px', letterSpacing: '3px' }}>By Sandane Homes</span>
                </h1>
                <p className="catarina-subtitle">
                    Apartments - Villas - Executive Accommodations
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

                {/* Residences Info Section */}
                <div style={{
                    marginTop: '50px',
                    maxWidth: '850px',
                    margin: '50px auto 0 auto',
                    textAlign: 'left', // Aligned left for better bullet point reading
                    lineHeight: '1.9',
                    fontSize: '17px',
                    color: '#333',
                    backgroundColor: '#ffffff',
                    padding: '50px 40px',
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                    borderTop: '4px solid #1A3C34'
                }}>
                    <p style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <strong style={{ fontSize: '18px', color: '#1A3C34' }}>Leaving home is hard. Finding it here shouldn't be.</strong>
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        Picture this: your long flight is over, and you've just stepped into an unfamiliar country. The excitement is real, but so is the anxiety of starting over. <i>Where will you live? How will you manage the details?</i> At Residences by Sandane Homes, crossing oceans doesn't mean losing your sense of belonging. We don’t just hand you keys; we welcome you to a sanctuary. From a freshly made bed to curated furnishings that make the space feel like <b>yours</b>, we carry the weight of relocation so you can simply breathe, unpack, and embrace your new chapter.
                    </p>
                    <ul style={{
                        margin: '0',
                        paddingLeft: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <li><strong>Property Sourcing:</strong> We find the finest apartments and luxury villas in prime NCR locations, perfectly matched to your lifestyle.</li>
                        <li><strong>Complete Furnishing & Essentials:</strong> We fully furnish your new home with elegant furniture and provide all necessities—from premium cutlery and kitchenware to fresh bed and bath linens.</li>
                        <li><strong>Uninterrupted Comfort:</strong> Enjoy peace of mind with 100% electricity backup and fast 300 Mbps Wi-Fi limitlessly.</li>
                        <li><strong>Worry-Free Living:</strong> Inclusive property maintenance and dedicated daily housekeeping ensures we manage all details, so you can focus on your professional journey.</li>
                    </ul>
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

            {/* SEO Text Block */}
            <div className="seo-text-block" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center', color: '#555' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#1A3C34' }}>Premium Corporate Housing & Serviced Apartments in Greater Noida</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
                    Residences by Sandane Homes is the premier choice for <strong>Serviced Apartments in Greater Noida</strong> and top-tier <strong>Corporate Housing across the NCR</strong>. We specialize in providing fully furnished, high-end executive accommodations tailored for expats, diplomats, and corporate leaders. Our long-stay apartments are thoughtfully designed to offer a seamless transition for professionals relocating to Noida or Gurgaon.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    If you are searching for a <strong>Luxury Serviced Apartment in NCR</strong> that combines the privacy of a private residence with the world-class amenities of a 5-star hotel, Residences by Sandane Homes is your perfect match. Enjoy hassle-free living with our comprehensive services including daily housekeeping, high-speed Wi-Fi, and 100% power backup in the most secure and prestigious neighborhoods.
                </p>
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

export default Residences;
