import React, { useEffect } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import heroBg from '../../assets/e8cd7b2a-95fc-418d-9ca2-357008d2aa61.JPG'; // Using new image for hero background
import imgRecreation from '../../assets/services_recreation.jpeg';
import imgFlower from '../../assets/flower-macro.png';
import imgTopLeft from '../../assets/IMG_7278.jpg';
import imgTopRight from '../../assets/IMG_0542.jpg';
import imgFleetService from '../../assets/fleetservice.png';
import imgKoreanBreakfast from '../../assets/korean_breakfast.png';
import imgNew3 from '../../assets/IMG_7257.jpg';
import imgBottomMiddle from '../../assets/last3.jpeg';
import imgNew5 from '../../assets/IMG_7254.jpg';
import './SandaneHomes.css'; // Import shared CSS
import { FaBuilding, FaCouch, FaBed, FaBroom, FaShirt, FaBolt, FaTv, FaWind, FaGlassWater, FaBottleWater, FaWifi, FaScrewdriverWrench, FaCity, FaLocationDot } from 'react-icons/fa6';

const Residences = () => {
    useEffect(() => {
        if (window.location.hash === '#contact-section') {
            setTimeout(() => {
                const element = document.getElementById('contact-section');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500); // small delay to let page render
        }
    }, []);

    const seoProps = {
        title: "Residences by Sandane Homes | Luxury Serviced Apartments for Expats in Greater Noida",
        description: "Fully furnished luxury 2 & 3 BHK apartments in Greater Noida for expats and corporate professionals. Housekeeping, maintenance & all essentials included. Just arrive.",
        canonical: "https://www.sandanehomes.com/residences",
        ogImage: "https://www.sandanehomes.com/residences-og.jpg",
        schema: {
            "@context": "https://schema.org",
            "@type": "ApartmentComplex",
            "name": "Residences by Sandane Homes",
            "description": "Premium fully-furnished serviced apartments in Greater Noida for corporate expats and international professionals. Minutes from Honda Cars India, LG Electronics, Samsung, and Yamaha Motor. Flexible monthly stays with full amenities.",
            "url": "https://www.sandanehomes.com/residences",
            "telephone": "+919711722273",
            "email": "sandanehomes@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "BB-28, Block B, Ansal Golf Link-1",
                "addressLocality": "Greater Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201315",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.4558093,
                "longitude": 77.5036021
            },
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "High-Speed WiFi (300 Mbps)", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "100% Power Backup", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Air Purifier", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Fully Furnished", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Laundry Facilities", "value": true }
            ],
            "containsPlace": [
                { "@type": "Apartment", "name": "2BHK Serviced Apartment" },
                { "@type": "Apartment", "name": "3BHK Serviced Apartment" },
                { "@type": "Apartment", "name": "4BHK Serviced Apartment" },
                { "@type": "Apartment", "name": "Luxury Villa" }
            ],
            "areaServed": [
                "Greater Noida", "Noida", "Gurgaon", "NCR"
            ],
            "sameAs": "https://www.sandanehomes.com"
        }
    };

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
        <div className="catarina-services sandane-homes-page" style={{ backgroundColor: '#F4F0EB', minHeight: '100vh', overflowX: 'hidden' }}>
            <SEO {...seoProps} />
            <Header showTopBar={false} />

            {/* Commented Out New Editorial Layout */}
            {false && (
                <>
            {/* Editorial Layout Container ("Bel Sognatore" style) */}
            <div style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '1400px', 
                margin: '0 auto', 
                height: '1100px', /* fixed height to allow absolute positioning */
                paddingTop: '60px'
            }}>
                
                {/* Large Typography Background */}
                <div style={{
                    position: 'absolute',
                    top: '60px', /* Moved completely off the header */
                    left: '0',
                    width: '100%',
                    textAlign: 'center',
                    zIndex: 10,
                    pointerEvents: 'none'
                }}>
                    <h1 style={{ 
                        fontFamily: 'Playfair Display, serif', 
                        fontSize: '100px', /* Significantly smaller */
                        fontWeight: '400', 
                        color: '#4A463F', 
                        margin: 0,
                        lineHeight: '1'
                    }}>
                        Sandane
                    </h1>
                    <h1 style={{ 
                        fontFamily: 'Playfair Display, serif', 
                        fontSize: '140px', /* Significantly smaller */
                        fontWeight: '400', 
                        color: '#4A463F', 
                        margin: '-20px 0 0 0', /* Adjusted margin for smaller font */
                        lineHeight: '1',
                        letterSpacing: '-2px'
                    }}>
                        Residences
                    </h1>
                </div>

                {/* Left Column (Image + Text) */}
                <div style={{
                    position: 'absolute',
                    top: '200px',
                    left: '-160px', /* Bleeds significantly off the left edge */
                    width: '26%', /* Significantly smaller image width */
                    zIndex: 5
                }}>
                    <img src={imgFlower} alt="Residences Detail" style={{ width: '100%', height: 'auto', aspectRatio: '3/4', objectFit: 'cover' }} />
                    
                    {/* Text block pulled up to overlap the image */ }
                    <div style={{ 
                        marginTop: '-130px', /* Shifted even further up for deeper vertical overlap */
                        marginLeft: '150px', /* Shifted to the left for more horizontal overlap */
                        paddingRight: '10px',
                        minWidth: '340px', /* Prevents text from being crushed by the narrow column */
                        position: 'relative',
                        zIndex: 6 /* Higher z-index to sit on top of the image */
                    }}>
                        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#4A463F', fontFamily: 'Georgia, serif', marginBottom: '20px' }}>
                            Found in the heart of the NCR, <i>Sandane Residences</i> is a 5-star boutique living experience, encompassing fully-serviced apartments and holistic comfort.
                        </p>
                        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#4A463F', fontFamily: 'Georgia, serif' }}>
                            \\<br/>
                            Choose our beautifully curated homes tailored for expats and professionals seeking a sanctuary, from organic amenities to extensive bespoke services.
                        </p>
                    </div>
                </div>

                {/* Center Column (Large Image) */}
                <div style={{
                    position: 'absolute',
                    top: '400px', /* Moved down */
                    left: '28%',
                    width: '44%',
                    zIndex: 2 /* Behind the 'Residences' text */
                }}>
                    <img src={imgRecreation} alt="Main View" style={{ width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover' }} />
                </div>

                {/* Right Column (Text + Image) */}
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    right: '-160px', /* Pushed even further right to strongly bleed off edge */
                    width: '35%', /* Wider to ensure picture goes off edge but text has room */
                    zIndex: 5
                }}>
                    <div style={{ position: 'relative', paddingTop: '60px', paddingLeft: '30px', paddingRight: '120px' /* Big padding to keep text safe while pic bleeds */ }}>
                        {/* Arched background shape */}
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '85%', /* Covers text and top half of image */
                            backgroundColor: '#EAE1D9',
                            borderTopLeftRadius: '500px', /* Pill shape top */
                            borderTopRightRadius: '500px',
                            zIndex: -1
                        }}></div>
                        
                        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#4A463F', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '40px', textAlign: 'center' }}>
                            A philosophy of nurture via absolute comfort and a spirit of collaboration are tangibly felt at Sandane Residences, where our team works together to bring the best hospitality to the table.
                        </p>
                        <img src={imgTopRight} alt="Architecture View" style={{ width: '100%', height: 'auto', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }} />
                    </div>
                </div>
            </div>
                </>
            )}

            {/* Restored Old Code */}
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

            {/* 3-Cards Section */}
            <div style={{ maxWidth: '1400px', margin: '80px auto', padding: '0 20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                    {/* Card 1 */}
                    <div style={{
                        flex: '1 1 calc(33.333% - 20px)',
                        minWidth: '280px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        {/* Square Image Box */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            backgroundColor: '#e0e0e0',
                            backgroundImage: `url(${imgFleetService})`, // Fleet Service Image
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '0px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}></div>
                        
                        {/* Text Content Below */}
                        <div>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', marginBottom: '15px', color: '#1A3C34' }}>
                                Fleet Car Service
                            </h3>
                            <p style={{ lineHeight: '1.7', fontSize: '15px', color: '#555', fontWeight: '400' }}>
                                Travel seamlessly with our comprehensive fleet car services. We offer premium car rentals, reliable office or home pick-up and drop-off, and professional driver rentals tailored to your schedule.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div style={{
                        flex: '1 1 calc(33.333% - 20px)',
                        minWidth: '280px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        {/* Square Image Box */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            backgroundColor: '#e0e0e0',
                            backgroundImage: `url(${imgKoreanBreakfast})`, // Korean Breakfast Image
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '0px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}></div>
                        
                        {/* Text Content Below */}
                        <div>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', marginBottom: '15px', color: '#1A3C34' }}>
                                Korean Breakfast
                            </h3>
                            <p style={{ lineHeight: '1.7', fontSize: '15px', color: '#555', fontWeight: '400' }}>
                                Start your day with an authentic Korean breakfast experience. Thoughtfully prepared with traditional ingredients, offering the perfect blend of warmth and nourishment right at your doorstep.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div style={{
                        flex: '1 1 calc(33.333% - 20px)',
                        minWidth: '280px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        {/* Square Image Box */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            backgroundColor: '#e0e0e0',
                            backgroundImage: `url(${imgNew3})`, // Placeholder image
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '0px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}></div>
                        
                        {/* Text Content Below */}
                        <div>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', marginBottom: '15px', color: '#1A3C34' }}>
                                Curated Apartments
                            </h3>
                            <p style={{ lineHeight: '1.7', fontSize: '15px', color: '#555', fontWeight: '400' }}>
                                Discover fully-furnished, meticulously designed living spaces. Each curated apartment is tailored to provide expats and professionals with unparalleled comfort, style, and premium amenities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Little Text Below Cards */}
                <p style={{
                    textAlign: 'center',
                    fontSize: '13px',
                    color: '#888',
                    marginTop: '25px',
                    fontStyle: 'italic',
                    letterSpacing: '0.5px'
                }}>
                    * All premium packages and amenities are subject to availability and bespoke configuration.
                </p>
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

            <Footer isResidences={true} />
        </div>
    );
};

export default Residences;
