import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import heroImg from '../../assets/IMG_6257.jpg'; // Amara Inn Hero Image - High Res
import room1 from '../../assets/IMG_6236.jpg'; // Updated per user request
import room2 from '../../assets/IMG_6234.jpg'; // Updated per user request
import room3 from '../../assets/IMG_6229.jpg'; // Updated per user request
import room4 from '../../assets/IMG_6221.jpg'; // Updated per user request
import aboutUsImg from '../../assets/IMG_6094.jpg';
import soheesLogo from '../../assets/upscaled_image.png';
import './SandaneHomes.css'; // Import shared CSS

import { FaParking, FaCoffee, FaWifi, FaDesktop, FaConciergeBell, FaGamepad, FaBolt, FaBroom, FaStar, FaUserCircle } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, desc }) => {
    return (
        <div className="service-card">
            <Icon size={40} className="service-icon" />
            <p className="service-desc">{desc}</p>
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

const Amara = () => {
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
            <Header showTopBar={false} showNav={false} showLogo={false} />

            {/* Split Section */}
            <div className="sandane-hero-split">

                {/* Left Side - Text */}
                <div className="sandane-hero-text">
                    <h1 className="sandane-hero-title">
                        Amara Inn<br />
                        <span style={{ fontSize: '32px', fontWeight: '400' }}>by Sandane Homes</span>
                    </h1>
                </div>

                {/* Right Side - Image */}
                <div className="sandane-hero-image">
                    <img
                        src={heroImg}
                        alt="Amara Inn"
                        className="sandane-hero-img-el"
                    />
                </div>

                {/* Stats Bar Overlay */}
                <div className="sandane-stats-bar">
                    {/* Stat a */}
                    <div className="stat-item">
                        <div className="stat-number">15k+</div>
                        <div className="stat-label">Happy Customers</div>
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
                        <div className="stat-label">Overall Rating</div>
                    </div>

                    {/* Divider */}
                    <div className="stat-divider"></div>

                    {/* Stat 3 */}
                    <div className="stat-item">
                        <div className="stat-number">12+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                </div>

                {/* Floating Book Now Button below Stats Bar */}
                <div className="sandane-floating-buttons">
                    <button className="btn-book">
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
                            <div className="read-more-link">
                                READ MORE &gt;
                            </div>
                        </div>
                    ))}
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

export default Amara;
