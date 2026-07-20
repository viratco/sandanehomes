import React, { useEffect } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import heroBg from '../../assets/e8cd7b2a-95fc-418d-9ca2-357008d2aa61.JPG'; // Using new image for hero background
import imgRecreation from '../../assets/services_recreation.jpeg';
import imgLivingRoom from '../../assets/IMG_7272.jpg';
import imgTopLeft from '../../assets/IMG_7278.jpg';
import imgTopRight from '../../assets/livingroom.jpeg';
import imgFleetService from '../../assets/fleetservice.png';
import imgKoreanBreakfast from '../../assets/korean_breakfast.png';
import imgNew3 from '../../assets/IMG_7257.jpg';
import imgBottomMiddle from '../../assets/last3.jpeg';
import imgNew5 from '../../assets/IMG_7254.jpg';
import imgAbstractInterior from '../../assets/abstract_luxury_interior.png';
import './SandaneHomes.css'; // Import shared CSS
import { FaBuilding, FaCouch, FaBed, FaBroom, FaShirt, FaBolt, FaTv, FaWind, FaGlassWater, FaBottleWater, FaWifi, FaScrewdriverWrench, FaCity, FaLocationDot, FaStar, FaQuoteLeft } from 'react-icons/fa6';

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
            {true && (
                <>
            {/* Editorial Layout Container ("Bel Sognatore" style) */}
            <div className="editorial-container">
                
                {/* Large Typography Background */}
                <div className="editorial-title-bg">
                    <h1>Residences</h1>
                    <h1>Sandane Homes</h1>
                </div>

                {/* Left Column (Image + Text) */}
                <div className="editorial-left-col">
                    <img src={imgLivingRoom} alt="Residences Detail" />
                    
                    {/* Text block pulled up to overlap the image */}
                    <div className="editorial-left-text">
                        {/* Glassmorphic card for high readability on photographic background */}
                        <div className="editorial-glass-card">
                            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#4A463F', fontFamily: 'Georgia, serif', margin: 0 }}>
                                Found in the heart of the NCR, <i>Sandane Residences</i> is a 5-star boutique living experience, encompassing fully-serviced apartments and holistic comfort.
                            </p>
                        </div>
                        
                        <p className="editorial-subtext">
                            \\<br/>
                            Choose our beautifully curated homes tailored for expats and professionals seeking a sanctuary, from organic amenities to extensive bespoke services.
                        </p>
                    </div>
                </div>

                {/* Center Column (Large Image) */}
                <div className="editorial-center-col">
                    <img src={imgRecreation} alt="Main View" />
                </div>

                {/* Right Column (Text + Image) */}
                <div className="editorial-right-col">
                    <div className="editorial-right-inner">
                        {/* Arched background shape */}
                        <div className="editorial-arch-bg"></div>
                        
                        <p className="editorial-right-text">
                            A philosophy of nurture via absolute comfort and a spirit of collaboration are tangibly felt at Sandane Residences, where our team works together to bring the best hospitality to the table.
                        </p>
                        <img src={imgTopRight} alt="Architecture View" className="editorial-right-img" />
                    </div>
                </div>
            </div>
                </>
            )}

            {/* Restored Old Code */}
            {true && (
                <>
            {/* Commented Out Hero / Title Section */}
            {/* 
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
            */}

            {/* Elegant Transition Divider */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                margin: '100px auto 40px auto',
                maxWidth: '600px',
                width: '80%',
                opacity: 0.7
            }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#C5A572' }}></div>
                <span style={{ color: '#C5A572', fontSize: '10px', letterSpacing: '2px' }}>❖</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#C5A572' }}></div>
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

                {/* Aesthetic Enquire Now Button */}
                <div style={{ marginTop: '35px', display: 'flex', justifyContent: 'center' }}>
                    <a
                        href="https://wa.me/919711722273?text=Hello%20Sandane%20Homes%2C%20I%20am%20interested%20in%20booking%20a%20serviced%20apartment%20/%20villa."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '16px 50px',
                            fontSize: '14px',
                            backgroundColor: '#1A3C34',
                            border: '1px solid #1A3C34',
                            borderRadius: '30px',
                            fontWeight: '600',
                            color: '#ffffff',
                            letterSpacing: '1.5px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            boxShadow: '0 8px 25px rgba(26, 60, 52, 0.2)',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.backgroundColor = '#C5A572';
                            e.currentTarget.style.borderColor = '#C5A572';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(197, 165, 114, 0.4)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.backgroundColor = '#1A3C34';
                            e.currentTarget.style.borderColor = '#1A3C34';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(26, 60, 52, 0.2)';
                        }}
                    >
                        <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        ENQUIRE NOW
                    </a>
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

            {/* Testimonials / Reviews Section */}
            <div style={{ 
                backgroundColor: '#F4F0EB', 
                padding: '100px 20px', 
                borderTop: '1px solid rgba(197, 165, 114, 0.2)',
                borderBottom: '1px solid rgba(197, 165, 114, 0.2)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ 
                            color: '#C5A572', 
                            fontSize: '13px', 
                            textTransform: 'uppercase', 
                            letterSpacing: '3px', 
                            fontWeight: '600',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Guest Experiences
                        </span>
                        <h2 style={{ 
                            fontFamily: 'Playfair Display, serif', 
                            fontSize: '42px', 
                            fontWeight: '700', 
                            color: '#1A3C34',
                            margin: 0
                        }}>
                            Trusted by Global Executives
                        </h2>
                        <div style={{ 
                            width: '60px', 
                            height: '2px', 
                            backgroundColor: '#C5A572', 
                            margin: '20px auto 0 auto' 
                        }}></div>
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                        gap: '30px',
                        justifyContent: 'center'
                    }}>
                        {/* Review 1 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '40px 30px',
                            borderRadius: '8px',
                            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: '1px solid rgba(197, 165, 114, 0.1)',
                            position: 'relative'
                        }}>
                            <span style={{ 
                                position: 'absolute', 
                                top: '20px', 
                                right: '30px', 
                                color: 'rgba(197, 165, 114, 0.15)',
                                fontSize: '40px'
                            }}>
                                <FaQuoteLeft />
                            </span>
                            <div>
                                <div style={{ display: 'flex', gap: '3px', marginBottom: '15px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={14} color="#C5A572" />
                                    ))}
                                </div>
                                <p style={{ 
                                    fontSize: '16px', 
                                    lineHeight: '1.8', 
                                    color: '#333', 
                                    fontStyle: 'italic',
                                    marginBottom: '30px',
                                    fontFamily: 'Georgia, serif'
                                }}>
                                    "삼성 주재원으로 인도에 부임하면서 신뢰할 수 있는 숙소를 찾는 것이 가장 중요했습니다. 산다네 레지던스는 기대 이상이었습니다. 정성스럽고 맛있는 한식 조식과 전문적인 하우스키핑 서비스 덕분에 정말 편안하게 생활하고 있습니다."
                                    <span style={{ 
                                        display: 'block', 
                                        marginTop: '15px', 
                                        fontSize: '14px', 
                                        color: '#666',
                                        lineHeight: '1.6',
                                        fontWeight: '400',
                                        fontStyle: 'normal'
                                    }}>
                                        (Translated: "As a Samsung expat in India, finding a reliable stay was my top priority. Sandane Residences exceeded expectations. The authentic Korean breakfast and professional housekeeping have made my stay extremely comfortable.")
                                    </span>
                                </p>
                            </div>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '15px', 
                                borderTop: '1px solid #f2f2f2', 
                                paddingTop: '20px' 
                            }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1A3C34',
                                    color: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    fontFamily: 'Playfair Display, serif'
                                }}>
                                    JS
                                </div>
                                <div>
                                    <h4 style={{ margin: '0 0 3px 0', fontSize: '16px', color: '#1A3C34', fontWeight: '600' }}>Jae-Seok Min</h4>
                                    <span style={{ fontSize: '12px', color: '#888', letterSpacing: '0.5px' }}>Senior Engineer, Samsung India</span>
                                </div>
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '40px 30px',
                            borderRadius: '8px',
                            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: '1px solid rgba(197, 165, 114, 0.1)',
                            position: 'relative'
                        }}>
                            <span style={{ 
                                position: 'absolute', 
                                top: '20px', 
                                right: '30px', 
                                color: 'rgba(197, 165, 114, 0.15)',
                                fontSize: '40px'
                            }}>
                                <FaQuoteLeft />
                            </span>
                            <div>
                                <div style={{ display: 'flex', gap: '3px', marginBottom: '15px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={14} color="#C5A572" />
                                    ))}
                                </div>
                                <p style={{ 
                                    fontSize: '16px', 
                                    lineHeight: '1.8', 
                                    color: '#555', 
                                    fontStyle: 'italic',
                                    marginBottom: '30px',
                                    fontFamily: 'Georgia, serif'
                                }}>
                                    "Exceptional stay. The property in Ansal Golf Links is beautiful, quiet, and secure. Having dedicated maintenance staff and high-speed fiber internet made working from home seamless. The best corporate housing experience in Greater Noida."
                                </p>
                            </div>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '15px', 
                                borderTop: '1px solid #f2f2f2', 
                                paddingTop: '20px' 
                            }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1A3C34',
                                    color: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    fontFamily: 'Playfair Display, serif'
                                }}>
                                    MK
                                </div>
                                <div>
                                    <h4 style={{ margin: '0 0 3px 0', fontSize: '16px', color: '#1A3C34', fontWeight: '600' }}>Marcus K.</h4>
                                    <span style={{ fontSize: '12px', color: '#888', letterSpacing: '0.5px' }}>Director, Automotive Supplier Group</span>
                                </div>
                            </div>
                        </div>

                        {/* Review 3 */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '40px 30px',
                            borderRadius: '8px',
                            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: '1px solid rgba(197, 165, 114, 0.1)',
                            position: 'relative'
                        }}>
                            <span style={{ 
                                position: 'absolute', 
                                top: '20px', 
                                right: '30px', 
                                color: 'rgba(197, 165, 114, 0.15)',
                                fontSize: '40px'
                            }}>
                                <FaQuoteLeft />
                            </span>
                            <div>
                                <div style={{ display: 'flex', gap: '3px', marginBottom: '15px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={14} color="#C5A572" />
                                    ))}
                                </div>
                                <p style={{ 
                                    fontSize: '16px', 
                                    lineHeight: '1.8', 
                                    color: '#333', 
                                    fontStyle: 'italic',
                                    marginBottom: '30px',
                                    fontFamily: 'Georgia, serif'
                                }}>
                                    "出張者にとって完璧なオアシスです。ドライバー付きレンタカーサービスのおかげで、現地での移動手段を計画する手間が大幅に省けました。ヤムナ高速道路の産業ハブにも非常に近く、毎日の通勤がとてもスムーズでした。"
                                    <span style={{ 
                                        display: 'block', 
                                        marginTop: '15px', 
                                        fontSize: '14px', 
                                        color: '#666',
                                        lineHeight: '1.6',
                                        fontWeight: '400',
                                        fontStyle: 'normal'
                                    }}>
                                        (Translated: "A perfect sanctuary for business travelers. The car rental with driver service saved us the hassle of planning local transport. Very close to the Yamuna Expressway industrial hubs, making daily commuting very smooth.")
                                    </span>
                                </p>
                            </div>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '15px', 
                                borderTop: '1px solid #f2f2f2', 
                                paddingTop: '20px' 
                            }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1A3C34',
                                    color: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    fontFamily: 'Playfair Display, serif'
                                }}>
                                    HY
                                </div>
                                <div>
                                    <h4 style={{ margin: '0 0 3px 0', fontSize: '16px', color: '#1A3C34', fontWeight: '600' }}>Hiroshi Yoshida</h4>
                                    <span style={{ fontSize: '12px', color: '#888', letterSpacing: '0.5px' }}>VP Operations, Logistics Partner</span>
                                </div>
                        </div>
                    </div>

                    {/* Review 4 (Chinese) */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '40px 30px',
                        borderRadius: '8px',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(197, 165, 114, 0.1)',
                        position: 'relative'
                    }}>
                        <span style={{ 
                            position: 'absolute', 
                            top: '20px', 
                            right: '30px', 
                            color: 'rgba(197, 165, 114, 0.15)',
                            fontSize: '40px'
                        }}>
                            <FaQuoteLeft />
                        </span>
                        <div>
                            <div style={{ display: 'flex', gap: '3px', marginBottom: '15px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={14} color="#C5A572" />
                                ))}
                            </div>
                            <p style={{ 
                                fontSize: '16px', 
                                lineHeight: '1.8', 
                                color: '#333', 
                                fontStyle: 'italic',
                                marginBottom: '30px',
                                fontFamily: 'Georgia, serif'
                            }}>
                                "在印度工作的六个月里，这里是我的家。房间设计非常典雅，每天的清洁服务也很周到。特别感谢前台团队帮助我协调上下班的专车服务。对于任何来大诺伊达出差或常驻的中国高管来说，这绝对是首选。"
                                <span style={{ 
                                    display: 'block', 
                                    marginTop: '15px', 
                                    fontSize: '14px', 
                                    color: '#666',
                                    lineHeight: '1.6',
                                    fontWeight: '400',
                                    fontStyle: 'normal'
                                }}>
                                    (Translated: "During my six months working in India, this was my home. The rooms are elegantly designed and daily housekeeping is meticulous. Special thanks to the concierge desk for coordinating my office commute transport. Highly recommended for any Chinese executive relocations to Greater Noida.")
                                </span>
                            </p>
                        </div>
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '15px', 
                            borderTop: '1px solid #f2f2f2', 
                            paddingTop: '20px' 
                        }}>
                            <div style={{
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                backgroundColor: '#1A3C34',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                fontFamily: 'Playfair Display, serif'
                            }}>
                                LW
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 3px 0', fontSize: '16px', color: '#1A3C34', fontWeight: '600' }}>Li Wei</h4>
                                <span style={{ fontSize: '12px', color: '#888', letterSpacing: '0.5px' }}>Project Director, SAIC Motor India</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 5 (German expat - English) */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '40px 30px',
                        borderRadius: '8px',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(197, 165, 114, 0.1)',
                        position: 'relative'
                    }}>
                        <span style={{ 
                            position: 'absolute', 
                            top: '20px', 
                            right: '30px', 
                            color: 'rgba(197, 165, 114, 0.15)',
                            fontSize: '40px'
                        }}>
                            <FaQuoteLeft />
                        </span>
                        <div>
                            <div style={{ display: 'flex', gap: '3px', marginBottom: '15px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={14} color="#C5A572" />
                                ))}
                            </div>
                            <p style={{ 
                                fontSize: '16px', 
                                lineHeight: '1.8', 
                                color: '#333', 
                                fontStyle: 'italic',
                                marginBottom: '30px',
                                fontFamily: 'Georgia, serif'
                            }}>
                                "Highly recommend Sandane Residences. As a German engineer visiting Honda Cars for a three-month assignment, I appreciated the secure gated community, the stable electricity, and the exceptionally high-speed fiber internet. The team does a great job making you feel welcome."
                            </p>
                        </div>
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '15px', 
                            borderTop: '1px solid #f2f2f2', 
                            paddingTop: '20px' 
                        }}>
                            <div style={{
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                backgroundColor: '#1A3C34',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                fontFamily: 'Playfair Display, serif'
                            }}>
                                TM
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 3px 0', fontSize: '16px', color: '#1A3C34', fontWeight: '600' }}>Dr. Thomas Mueller</h4>
                                <span style={{ fontSize: '12px', color: '#888', letterSpacing: '0.5px' }}>Consulting Specialist, Honda Cars India</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 6 (French - French + English) */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '40px 30px',
                        borderRadius: '8px',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(197, 165, 114, 0.1)',
                        position: 'relative'
                    }}>
                        <span style={{ 
                            position: 'absolute', 
                            top: '20px', 
                            right: '30px', 
                            color: 'rgba(197, 165, 114, 0.15)',
                            fontSize: '40px'
                        }}>
                            <FaQuoteLeft />
                        </span>
                        <div>
                            <div style={{ display: 'flex', gap: '3px', marginBottom: '15px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={14} color="#C5A572" />
                                ))}
                            </div>
                            <p style={{ 
                                fontSize: '16px', 
                                lineHeight: '1.8', 
                                color: '#333', 
                                fontStyle: 'italic',
                                marginBottom: '30px',
                                fontFamily: 'Georgia, serif'
                                }}>
                                    "Nous avons réservé plusieurs appartements chez Sandane pour nos équipes techniques. Le service est impeccable, la communication très fluide et la facturation d'entreprise simplifiée. Nos collaborateurs ont adoré leur séjour."
                                    <span style={{ 
                                        display: 'block', 
                                        marginTop: '15px', 
                                        fontSize: '14px', 
                                        color: '#666',
                                        lineHeight: '1.6',
                                        fontWeight: '400',
                                        fontStyle: 'normal'
                                    }}>
                                        (Translated: "We booked several apartments at Sandane for our technical teams. The service is impeccable, communication is fluid, and corporate invoicing is simplified. Our staff loved their stay.")
                                    </span>
                                </p>
                            </div>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '15px', 
                                borderTop: '1px solid #f2f2f2', 
                                paddingTop: '20px' 
                            }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1A3C34',
                                    color: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    fontFamily: 'Playfair Display, serif'
                                }}>
                                    CD
                                </div>
                                <div>
                                    <h4 style={{ margin: '0 0 3px 0', fontSize: '16px', color: '#1A3C34', fontWeight: '600' }}>Chloé Dubois</h4>
                                    <span style={{ fontSize: '12px', color: '#888', letterSpacing: '0.5px' }}>HR Mobility Coordinator, Alstom Transport</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Talk to a Specialist Section */}
            <div style={{ 
                maxWidth: '1100px', 
                margin: '100px auto', 
                padding: '0 20px' 
            }}>
                <div className="specialist-card">
                    {/* Visual Art / Architecture Side */}
                    <div className="specialist-img-container" style={{ position: 'relative' }}>
                        <img 
                            src={imgAbstractInterior} 
                            alt="Bespoke Relocation Interior Detail" 
                        />
                        {/* Decorative Gold Frame Offset */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            right: '20px',
                            bottom: '20px',
                            border: '1px solid rgba(197, 165, 114, 0.4)',
                            pointerEvents: 'none',
                            zIndex: 2
                        }}></div>
                        
                        {/* Large Abstract Gold Label overlay */}
                        <div style={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '30px',
                            right: '30px',
                            backgroundColor: 'rgba(26, 60, 52, 0.92)',
                            backdropFilter: 'blur(10px)',
                            padding: '20px',
                            border: '1px solid rgba(197, 165, 114, 0.25)',
                            zIndex: 3
                        }}>
                            <div style={{ 
                                fontFamily: 'Playfair Display, serif', 
                                color: '#ffffff', 
                                fontSize: '18px', 
                                fontWeight: '600',
                                marginBottom: '5px',
                                letterSpacing: '0.5px'
                            }}>
                                Sandane Stays
                            </div>
                            <div style={{ 
                                color: '#C5A572', 
                                fontSize: '11px', 
                                letterSpacing: '2px', 
                                textTransform: 'uppercase',
                                fontWeight: '500'
                            }}>
                                Custom Extended Lease
                            </div>
                        </div>
                    </div>

                    {/* Editorial Copy Stays Side */}
                    <div className="specialist-text-container" style={{ 
                        position: 'relative',
                        backgroundColor: '#ffffff'
                    }}>
                        {/* Background subtle serif initial for luxury catalog aesthetic */}
                        <span style={{
                            position: 'absolute',
                            right: '30px',
                            top: '10px',
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '180px',
                            color: 'rgba(197, 165, 114, 0.05)',
                            lineHeight: 1,
                            pointerEvents: 'none',
                            userSelect: 'none',
                            fontWeight: '700'
                        }}>
                            S
                        </span>

                        <span style={{ 
                            color: '#C5A572', 
                            fontSize: '12px', 
                            letterSpacing: '3px', 
                            fontWeight: '600', 
                            textTransform: 'uppercase',
                            display: 'block'
                        }}>
                            Expat Housing Services
                        </span>
                        <h3 style={{ 
                            fontFamily: 'Playfair Display, serif', 
                            fontSize: '38px', 
                            fontWeight: '700', 
                            color: '#1A3C34', 
                            margin: 0,
                            lineHeight: '1.2',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            Bespoke Relocation & Stays
                        </h3>
                        <p style={{ 
                            fontSize: '15px', 
                            lineHeight: '1.8', 
                            color: '#555',
                            margin: 0,
                            position: 'relative',
                            zIndex: 2
                        }}>
                            Relocating to a new country or managing corporate expat housing demands precision. Our corporate housing desk works directly with HR leads, global relocation partners, and executive expats to configure turnkey luxury residences across the NCR.
                        </p>
                        
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '14px', 
                            margin: '10px 0',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ 
                                    width: '24px', 
                                    height: '24px', 
                                    borderRadius: '50%', 
                                    backgroundColor: 'rgba(197, 165, 114, 0.1)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    color: '#C5A572',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    flexShrink: 0
                                }}>✓</span>
                                <span style={{ fontSize: '14px', color: '#444' }}>Custom lease durations (30 days up to annual terms)</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ 
                                    width: '24px', 
                                    height: '24px', 
                                    borderRadius: '50%', 
                                    backgroundColor: 'rgba(197, 165, 114, 0.1)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    color: '#C5A572',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    flexShrink: 0
                                }}>✓</span>
                                <span style={{ fontSize: '14px', color: '#444' }}>Tailored dining configurations & local vehicle support</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ 
                                    width: '24px', 
                                    height: '24px', 
                                    borderRadius: '50%', 
                                    backgroundColor: 'rgba(197, 165, 114, 0.1)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    color: '#C5A572',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    flexShrink: 0
                                }}>✓</span>
                                <span style={{ fontSize: '14px', color: '#444' }}>Consolidated invoicing under corporate policy specs</span>
                            </div>
                        </div>

                        <div style={{ marginTop: '10px', position: 'relative', zIndex: 2 }}>
                        <a
                            href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20am%20relocating%20and%20would%20like%20to%20discuss%20serviced%20residence%20options."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '16px 40px',
                                fontSize: '14px',
                                backgroundColor: '#1A3C34',
                                border: '1px solid #1A3C34',
                                borderRadius: '30px',
                                fontWeight: '600',
                                color: '#ffffff',
                                letterSpacing: '1.5px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                boxShadow: '0 8px 25px rgba(26, 60, 52, 0.2)',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.backgroundColor = '#C5A572';
                                e.currentTarget.style.borderColor = '#C5A572';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(197, 165, 114, 0.4)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.backgroundColor = '#1A3C34';
                                e.currentTarget.style.borderColor = '#1A3C34';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(26, 60, 52, 0.2)';
                            }}
                        >
                            <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                            TALK TO A SPECIALIST
                        </a>
                    </div>
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
            <div className="catarina-section catarina-contact-section" id="contact-section" style={{ padding: '80px 20px 100px', backgroundColor: '#FAF8F5' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>
                    
                    {/* Elegant About Us Banner */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1A3C34 0%, #112823 100%)',
                        borderRadius: '24px',
                        padding: '60px 40px',
                        textAlign: 'center',
                        color: '#fff',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(26,60,52,0.18)',
                        border: '1px solid rgba(197,165,114,0.35)'
                    }}>
                        {/* Decorative Gold Glow */}
                        <div style={{
                            position: 'absolute',
                            top: '-60px',
                            right: '-60px',
                            width: '220px',
                            height: '220px',
                            background: 'radial-gradient(circle, rgba(197,165,114,0.22) 0%, transparent 70%)',
                            pointerEvents: 'none'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-60px',
                            left: '-60px',
                            width: '220px',
                            height: '220px',
                            background: 'radial-gradient(circle, rgba(197,165,114,0.15) 0%, transparent 70%)',
                            pointerEvents: 'none'
                        }} />

                        <span style={{
                            fontSize: '12px',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: '#C5A572',
                            fontWeight: '800',
                            display: 'inline-block',
                            marginBottom: '14px'
                        }}>
                            Welcome To Sandane Homes
                        </span>
                        
                        <h2 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '38px',
                            margin: '0 0 20px',
                            color: '#fff',
                            fontWeight: '600'
                        }}>
                            About Us
                        </h2>

                        <div style={{
                            width: '60px',
                            height: '2px',
                            backgroundColor: '#C5A572',
                            margin: '0 auto 28px'
                        }} />

                        <p style={{
                            lineHeight: '1.9',
                            fontSize: '17px',
                            color: '#E0E0E0',
                            maxWidth: '780px',
                            margin: '0 auto 36px',
                            fontWeight: '400'
                        }}>
                            Sandane Homes delivers premium, fully-serviced luxury stays across India. With 5+ years of hospitality excellence, we specialize in hosting expats, diplomats, and corporate professionals seeking refined comfort, absolute privacy, and uncompromised nationwide service.
                        </p>

                        {/* Highlight Pills */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '14px'
                        }}>
                            {[
                                "✨ 5+ Years Hospitality Excellence",
                                "🛡️ 100% Gated Society Safety",
                                "🔑 Fully Managed Just-Arrive Suites",
                                "🌏 Expat & Corporate Specialist"
                            ].map((pill, idx) => (
                                <span key={idx} style={{
                                    backgroundColor: 'rgba(255,255,255,0.08)',
                                    border: '1px solid rgba(197,165,114,0.3)',
                                    color: '#F0E6D2',
                                    padding: '10px 22px',
                                    borderRadius: '30px',
                                    fontSize: '14px',
                                    fontWeight: '500'
                                }}>
                                    {pill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div style={{ textAlign: 'center' }}>
                        <span style={{
                            fontSize: '12px',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: '#C5A572',
                            fontWeight: '800',
                            display: 'inline-block',
                            marginBottom: '10px'
                        }}>
                            Get In Touch
                        </span>
                        <h2 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '36px',
                            color: '#1A3C34',
                            margin: '0 0 36px'
                        }}>
                            Contact Us
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '24px',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            {/* Phone Card */}
                            <a href="tel:+919711722273" style={{
                                textDecoration: 'none',
                                backgroundColor: '#fff',
                                padding: '28px 24px',
                                borderRadius: '16px',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                                border: '1px solid #EFEAE4',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '18px',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(26,60,52,0.12)'; }}
                            onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.05)'; }}
                            >
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(26,60,52,0.08)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '22px',
                                    flexShrink: 0
                                }}>
                                    📞
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <p style={{ margin: 0, fontSize: '13px', textTransform: 'uppercase', color: '#888', fontWeight: '600', letterSpacing: '1px' }}>Call / WhatsApp</p>
                                    <p style={{ margin: '4px 0 0', fontSize: '18px', fontWeight: '700', color: '#1A3C34' }}>+91 97117 22273</p>
                                </div>
                            </a>

                            {/* Email Card */}
                            <a href="mailto:sandanehomes@gmail.com" style={{
                                textDecoration: 'none',
                                backgroundColor: '#fff',
                                padding: '28px 24px',
                                borderRadius: '16px',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                                border: '1px solid #EFEAE4',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '18px',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(26,60,52,0.12)'; }}
                            onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.05)'; }}
                            >
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(197,165,114,0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '22px',
                                    flexShrink: 0
                                }}>
                                    ✉️
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <p style={{ margin: 0, fontSize: '13px', textTransform: 'uppercase', color: '#888', fontWeight: '600', letterSpacing: '1px' }}>Email Us</p>
                                    <p style={{ margin: '4px 0 0', fontSize: '17px', fontWeight: '700', color: '#1A3C34' }}>sandanehomes@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
                </>
            )}

            <Footer isResidences={true} />
        </div>
    );
};

export default Residences;
