import React from 'react';
import SEO from '../SEO';
import Header from '../Header';
import SubpageNav from '../SubpageNav';
import Footer from '../Footer';
// Use the latest refined image for the page as well
import heroImg from '../../assets/Copy of IMG_3491.JPG';
import room1 from '../../assets/IMG_0586.jpg';
import room2 from '../../assets/IMG_0609.jpg';
import room3 from '../../assets/IMG_3547_small.jpg';
import room4 from '../../assets/IMG_6108.jpg';
import aboutUsImg from '../../assets/IMG_6094.jpg';
import soheesLogo from '../../assets/upscaled_image.png';

import { FaParking, FaCoffee, FaWifi, FaDesktop, FaConciergeBell, FaGamepad, FaBolt, FaBroom, FaStar, FaUserCircle, FaUtensils, FaShieldAlt, FaMapMarkerAlt, FaFileInvoiceDollar, FaBed, FaLeaf } from 'react-icons/fa';
import './SandaneHomes.css';
import { createHotelSchema } from '../../utils/schemaHelper';

const sandaneHomesSchema = createHotelSchema({
    name: "Sandane Homes Hotel",
    url: "https://www.sandanehomes.com/sandane-homes",
    description: "Indulge in luxury at Sandane Homes. Kitchenette rooms, executive suites, in-house café, 24/7 room service, and top-tier amenities for corporate stays in Greater Noida.",
    starRating: 5
});

const ServiceCard = ({ icon: Icon, title, desc }) => {
    return (
        <div className="service-card">
            <Icon size={40} className="service-icon" />
            <p className="service-desc">
                {desc}
            </p>
        </div>
    );
};

const ReviewCard = ({ name, date, text }) => {
    return (
        <div className="review-card">
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaUserCircle size={40} color="#333" />
                        <span style={{ fontWeight: '600', fontSize: '16px', color: '#111', fontFamily: 'Playfair Display, serif' }}>{name}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '2px' }}>
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} size={14} color="#8B7355" />
                        ))}
                    </div>
                </div>
                <p style={{
                    color: '#444',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    marginBottom: '30px',
                    fontFamily: 'sans-serif'
                }}>
                    "{text}"
                </p>
            </div>
            <div style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>
                {date}
            </div>
        </div>
    );
};

const SandaneHomes = () => {

    const rooms = [
        {
            title: "Kitchenette",
            desc: "Comfortable and cozy room with a separate kitchen in it for your convenience.",
            image: room1
        },
        {
            title: "Classy Rooms",
            desc: "Elegant, spacious, and luxurious room with a premium memory foam mattress for your ultimate relaxation.",
            image: room3
        },
        {
            title: "Workstations",
            desc: "Ultimate luxury suite featuring a spacious dedicated workspace for your professional convenience.",
            image: room2
        },
        {
            title: "In-house restaurant",
            desc: "Experience culinary excellence at our in-house restaurant, serving delicious meals throughout your stay.",
            image: room4
        }
    ];

    const services = [
        { icon: FaParking, desc: "Convenient on-site parking available for guests' ease." },
        { icon: FaCoffee, desc: "Complimentary breakfast served daily for guests' enjoyment." },
        { icon: FaWifi, desc: "High-speed complimentary WiFi for seamless connectivity." },
        { icon: FaDesktop, desc: "Efficient workspace designed for work and relaxation." },
        { icon: FaConciergeBell, desc: "24/7 room service for your comfort and convenience." },
        { icon: FaGamepad, desc: "Billiards available to play for your entertainment and leisure." },
        { icon: FaBolt, desc: "Complimentary electricity service for guests' convenience and comfort." },
        { icon: FaBroom, desc: "Daily housekeeping service to maintain cleanliness and comfort." }
    ];

    const reviews = [
        {
            name: "Thalshee Ittoosingh",
            date: "4 months ago",
            text: "I had a very good stay at this hotel. It feels safe, which is great for solo travelers. The room was clean, the bathroom was spotless, and a very nice balcony. Breakfast was provided. The owner is very welcoming, and the staff are also friendly and helpful. The hotel offers many useful services, making the stay easy and comfortable. Overall, it is a clean, safe, and friendly place that I would gladly recommend."
        },
        {
            name: "Dhiren Singh",
            date: "3 months ago",
            text: "The rooms are exceptionally clean and comfortable. The staff is very polite, humble, and always ready to assist. Beds are neat and tidy, and the service is truly top-notch. The owner, Senior Mr. Kapoor, is a true gentleman who personally inspects the entire property to ensure everything is perfect. His polite and professional approach makes the stay even more pleasant. Highly recommended."
        },
        {
            name: "Anju Chahal",
            date: "2 weeks ago",
            text: "Stayed for 4 nights, had a wonderful stay. Highly recommend the place. Owner himself is great host and a very generous person."
        }
    ];

    return (
        <div className="sandane-homes-page">
            <SEO
                title="Sandane Homes Hotel | Luxury Boutique Hotel & Executive Suites in Greater Noida"
                description="Indulge in luxury at Sandane Homes Hotel. Kitchenette rooms, executive suites, in-house café, 24/7 room service, and top-tier amenities for corporate stays in Greater Noida."
                canonical="https://www.sandanehomes.com/sandane-homes"
                ogImage="https://www.sandanehomes.com/residences-og.jpg"
                schema={sandaneHomesSchema}
            />
            <Header showTopBar={false} />
            <SubpageNav />


            {/* Split Section */}
            <div className="sandane-hero-split">

                {/* Left Side - Text */}
                <div className="sandane-hero-text">
                    <h1 className="sandane-hero-title">
                        Here Where Luxury Meets Comfort
                    </h1>
                </div>

                {/* Right Side - Image */}
                <div className="sandane-hero-image">
                    <img
                        src={heroImg}
                        alt="Sandane Homes Luxury"
                        className="sandane-hero-img-el"
                    />
                </div>

                {/* Stats Bar Overlay */}
                <div className="sandane-stats-bar">
                    {/* Stat a */}
                    <div className="stat-item">
                        <div className="stat-number">
                            15k+
                        </div>
                        <div className="stat-label">
                            Happy Customers
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="stat-divider"></div>

                    {/* Stat 2 */}
                    <div className="stat-item">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="stat-number">4.9</span>
                            <div style={{ display: 'flex', gap: '2px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={14} color="#8B7355" />
                                ))}
                            </div>
                        </div>
                        <div className="stat-label">
                            Overall Rating
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="stat-divider"></div>

                    {/* Stat 3 */}
                    <div className="stat-item">
                        <div className="stat-number">
                            10+
                        </div>
                        <div className="stat-label">
                            Years Experience
                        </div>
                    </div>
                </div>

                {/* Floating Book Now Button below Stats Bar */}
                <div className="sandane-floating-buttons">
                    <button
                        className="btn-book"
                        onClick={() => window.open('https://bookingengine.stayflexi.com/29512/?checkin=18-06-2026&num_nights=1&num_guests=2&source=google&hotel_id=29512', '_blank')}
                    >
                        Book Now
                    </button>
                    <button
                        className="btn-contact"
                        onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Our Rooms Section */}
            <div className="sandane-rooms-section">
                <h4 className="section-subtitle">
                    Our Rooms
                </h4>
                <h2 className="section-title">
                    Indulge in Luxury Explore <br /> Our Rooms
                </h2>

                <div className="rooms-grid">
                    {rooms.map((room, index) => (
                        <div key={index} className="room-card">
                            <div className="room-image-container">
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="room-image"
                                />
                            </div>
                            <h3 className="room-title">
                                {room.title}
                            </h3>
                            <p className="room-desc">
                                {room.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Us Section */}
            <div className="sandane-about-section">
                {/* Left Image */}
                <div className="about-image">
                    <img
                        src={aboutUsImg}
                        alt="Interior"
                        className="about-img-el"
                    />
                </div>

                {/* Right Content */}
                <div className="about-content">
                    <img
                        src={soheesLogo}
                        alt="Sohee's Kitchen"
                        className="about-logo"
                    />
                    <p className="about-text">
                        In-house restaurant / Cafe at Sandane Homes , specializing in Pan-Asian cuisine with authentic Korean flavors.
                    </p>
                </div>
            </div>

            {/* ═══════════════════════════════════════════
                WHY CHOOSE SANDANE HOMES HOTEL — SEO Section
            ═══════════════════════════════════════════ */}
            <div className="sh-why-section">
                {/* Top Label */}
                <h4 className="section-subtitle">Why Choose Us</h4>
                <h2 className="section-title" style={{ marginBottom: '16px' }}>
                    Greater Noida's Premier Luxury Boutique Hotel
                </h2>
                <p className="sh-why-intro">
                    Sandane Homes Hotel is a luxury boutique hotel nestled inside the exclusive gated enclave of
                    <strong> Ansal Golf Links-1, Greater Noida</strong> — just
                    <strong> 5 minutes from India Expo Centre &amp; Mart</strong>. We combine the warmth of a boutique stay
                    with hotel-grade service: an in-house restaurant, premium rooms, 300 Mbps fiber WiFi,
                    and 24/7 personalized hospitality — all under one beautiful roof.
                </p>

                {/* Six Pillar Feature Grid */}
                <div className="sh-pillars-grid">
                    <div className="sh-pillar">
                        <div className="sh-pillar-icon"><FaUtensils /></div>
                        <h3 className="sh-pillar-title">In-House Restaurant & Kitchen</h3>
                        <p className="sh-pillar-desc">
                            Sohee's Kitchen — our in-house restaurant &amp; café — brings authentic Pan-Asian
                            and Korean cuisine directly to you. Freshly prepared breakfasts, hot meals, and
                            24/7 room service mean you never have to leave the comfort of the hotel.
                        </p>
                    </div>

                    <div className="sh-pillar">
                        <div className="sh-pillar-icon"><FaBed /></div>
                        <h3 className="sh-pillar-title">Premium Rooms & Kitchenette Suites</h3>
                        <p className="sh-pillar-desc">
                            Rest in king-size memory foam beds, enjoy smart 4K TVs, and work from
                            dedicated in-room desks. Our kitchenette suites add a mini-fridge, microwave,
                            and RO water — every convenience of a premium hotel room.
                        </p>
                    </div>

                    <div className="sh-pillar">
                        <div className="sh-pillar-icon"><FaShieldAlt /></div>
                        <h3 className="sh-pillar-title">Secure & Peaceful Hotel Setting</h3>
                        <p className="sh-pillar-desc">
                            Set inside the prestigious Ansal Golf Links-1 gated enclave with 24/7 CCTV
                            and secured entry. Rated <strong>"Safe"</strong> and <strong>"Highly Recommended"</strong> by
                            solo travelers, couples, and business guests on Google &amp; Booking.com.
                        </p>
                    </div>

                    <div className="sh-pillar">
                        <div className="sh-pillar-icon"><FaWifi /></div>
                        <h3 className="sh-pillar-title">300 Mbps High-Speed WiFi</h3>
                        <p className="sh-pillar-desc">
                            Dedicated 300 Mbps fiber broadband — not shared, never throttled. Whether you're
                            streaming your favourite show, on a video call, or browsing, our hotel WiFi
                            delivers seamless connectivity in every room, all day.
                        </p>
                    </div>

                    <div className="sh-pillar">
                        <div className="sh-pillar-icon"><FaFileInvoiceDollar /></div>
                        <h3 className="sh-pillar-title">Hassle-Free GST Billing</h3>
                        <p className="sh-pillar-desc">
                            Travelling for business? We issue clean, official GST tax invoices for every
                            hotel booking — making your expense claims easy. Our front desk handles all
                            billing so you can focus on your stay, not paperwork.
                        </p>
                    </div>

                    <div className="sh-pillar">
                        <div className="sh-pillar-icon"><FaMapMarkerAlt /></div>
                        <h3 className="sh-pillar-title">Prime Greater Noida Location</h3>
                        <p className="sh-pillar-desc">
                            3.5 km from India Expo Centre &amp; Mart Gate 1 via a signal-free route.
                            Minutes from Pari Chowk, Knowledge Park, Sharda University, and major
                            expressways — ideally placed for any visit to Greater Noida.
                        </p>
                    </div>
                </div>

                {/* Rich SEO Paragraph Block */}
                <div className="sh-seo-block">
                    <div className="sh-seo-text">
                        <h3>A Boutique Hotel Stay Like No Other in Greater Noida</h3>
                        <p>
                            At <strong>Sandane Homes Hotel</strong>, every detail is designed for guests who appreciate
                            the finer things. Rated <strong>4.9/5</strong> on Google, MakeMyTrip, Booking.com, and Agoda,
                            our guests describe their experience as <em>"luxurious," "super clean," "brand new feel,"
                            and "highly recommended"</em> — the hallmarks of a truly exceptional boutique hotel.
                        </p>
                        <p>
                            From trade fair visitors at India Expo Mart and business travellers to weekend getaway
                            guests and families — everyone is welcomed with the same attentive, warm hospitality
                            that makes <strong>Sandane Homes Hotel</strong> stand apart from the rest of Greater Noida.
                        </p>
                        <p>
                            Dine at <strong>Sohee's Kitchen</strong>, our beloved in-house restaurant, enjoy
                            the billiards lounge, wake up to a complimentary hot breakfast, and let our
                            concierge team take care of every need. At Sandane Homes, great hospitality
                            isn't a feature — it's the standard.
                        </p>
                    </div>
                    <div className="sh-seo-highlights">
                        <div className="sh-highlight-item"><FaLeaf /><span>Daily housekeeping & fresh linens</span></div>
                        <div className="sh-highlight-item"><FaCoffee /><span>Complimentary breakfast daily</span></div>
                        <div className="sh-highlight-item"><FaGamepad /><span>Billiards lounge & recreation</span></div>
                        <div className="sh-highlight-item"><FaParking /><span>Free secured hotel parking</span></div>
                        <div className="sh-highlight-item"><FaBolt /><span>24/7 uninterrupted power supply</span></div>
                        <div className="sh-highlight-item"><FaConciergeBell /><span>Personal concierge on call</span></div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="sandane-services-section">
                <h2 className="section-title">
                    Personalized Hospitality Discover <br /> Our Signature Services
                </h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} icon={service.icon} desc={service.desc} />
                    ))}
                </div>
            </div>

            {/* Reviews Section */}
            <div className="sandane-reviews-section">
                <h4 className="review-title">
                    Your Reviews
                </h4>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SandaneHomes;
