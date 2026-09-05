import React from 'react';
import SEO from '../SEO';
import Header from '../Header';
import SubpageNav from '../SubpageNav';
import Footer from '../Footer';
import heroImg from '../../assets/coco_facade.jpg';
import room1 from '../../assets/coco_reception.jpg';
import room2 from '../../assets/coco_room_netflix.jpg'; // Smart Studio Workspace
import room3 from '../../assets/coco_lounge.jpg';
import room4 from '../../assets/coco_hallway.jpg'; // Guest Corridors
import './SandaneHomes.css';
import { createHotelSchema } from '../../utils/schemaHelper';

const cocoSchema = createHotelSchema({
    name: "CoCo House",
    url: "https://www.sandanehomes.com/coco-house",
    description: "CoCo House — a chic luxury boutique hotel in Greater Noida. Premium rooms, stylish interiors, full housekeeping, and curated hospitality. Book now.",
    starRating: 4
}); // Import shared CSS

import { FaParking, FaCoffee, FaWifi, FaDesktop, FaConciergeBell, FaBolt, FaBroom, FaStar, FaUserCircle } from 'react-icons/fa';

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

const CocoHouse = () => {

    const rooms = [
        {
            title: "Reception Area",
            desc: "Warm and welcoming reception desk with modern check-in facilities and cheerful custom murals.",
            image: room1
        },
        {
            title: "Executive Lounge",
            desc: "Spacious, comfortable seating area featuring vivid murals and modern styling, perfect for relaxing.",
            image: room3
        },
        {
            title: "Smart Studio",
            desc: "Cozy workspace and entertainment hub featuring flat-screen streaming, writing desk, and custom armchair.",
            image: room2
        },
        {
            title: "Guest Corridors",
            desc: "Artistic hallway corridors with vibrant accent graphics leading directly to your guest room.",
            image: room4
        }
    ];

    const services = [
        { icon: FaParking, desc: "Convenient on-site parking available for guests' ease." },
        { icon: FaCoffee, desc: "Complimentary breakfast served daily for guests' enjoyment." },
        { icon: FaWifi, desc: "High-speed complimentary WiFi for seamless connectivity." },
        { icon: FaDesktop, desc: "Efficient workspace designed for work and relaxation." },
        { icon: FaConciergeBell, desc: "24/7 room service for your comfort and convenience." },
        { icon: FaBolt, desc: "Complimentary electricity service for guests' convenience and comfort." },
        { icon: FaBroom, desc: "Daily housekeeping service to maintain cleanliness and comfort." }
    ];

    const reviews = [
        {
            name: "Rajesh Kumar",
            date: "1 month ago",
            text: "CoCo House offers fantastic luxury and high-quality room service. The staff is welcoming and makes sure your stay is exceptional. Highly recommend!"
        },
        {
            name: "Aisha Sharma",
            date: "3 weeks ago",
            text: "Wonderful boutique experience. Loved the warm lighting, design aesthetic, and quiet comfort of the rooms. The host was helpful throughout."
        }
    ];

    return (
        <div className="sandane-homes-page">
            <SEO
                title="CoCo House | Luxury Boutique Hotel in Greater Noida"
                description="CoCo House — a chic luxury boutique hotel in Greater Noida. Premium rooms, stylish interiors, full housekeeping, and curated hospitality. Book now."
                canonical="https://www.sandanehomes.com/coco-house"
                ogImage="https://www.sandanehomes.com/residences-og.jpg"
                schema={cocoSchema}
            />
            <Header showTopBar={false} />
            <SubpageNav />

            {/* Split Section */}
            <div className="sandane-hero-split">

                {/* Left Side - Text */}
                <div className="sandane-hero-text">
                    <h1 className="sandane-hero-title">
                        CoCo House
                    </h1>
                </div>

                {/* Right Side - Image */}
                <div className="sandane-hero-image">
                    <img
                        src={heroImg}
                        alt="CoCo House"
                        className="sandane-hero-img-el"
                    />
                </div>

                {/* Stats Bar Overlay */}
                <div className="sandane-stats-bar">
                    <div className="stat-item">
                        <div className="stat-number">5k+</div>
                        <div className="stat-label">Happy Customers</div>
                    </div>

                    <div className="stat-divider"></div>

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

                    <div className="stat-divider"></div>

                    <div className="stat-item">
                        <div className="stat-number">5+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                </div>

                {/* Floating Book Now Button below Stats Bar */}
                <div className="sandane-floating-buttons">
                    <button
                        className="btn-book"
                        onClick={() => window.open('https://www.makemytrip.com/hotels/coco_house-details-greater_noida.html', '_blank')}
                    >
                        Book Now
                    </button>
                    <button
                        className="btn-contact"
                        onClick={() => {
                            const el = document.getElementById('footer-contact-section') || document.getElementById('contact-section');
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                window.open('https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20would%20like%20to%20enquire%20about%20your%20properties.', '_blank');
                            }
                        }}
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

            {/* SEO Text Block */}
            <div className="seo-text-block" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', color: '#555' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Experience CoCo House: Your Boutique Hotel in Greater Noida</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
                    Welcome to CoCo House, a uniquely designed premium boutique hotel providing an exquisite stay experience near the India Expo Centre & Mart. Ideal for both business professionals and leisure travelers, CoCo House merges modern aesthetic elegance with exceptional hospitality. Whether you need a short-term luxury stay or executive accommodation, our property offers unparalleled comfort and convenience.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    Each smartly designed studio and executive room comes fully equipped with high-speed internet, premium entertainment, and dedicated workspaces. Situated centrally in Greater Noida, just moments away from major landmarks like Knowledge Park and local universities, CoCo House is the ultimate choice for visitors seeking a sophisticated, pet-friendly environment with 24-hour concierge service, complimentary breakfast, and daily housekeeping.
                </p>
            </div>

            <Footer />
        </div>
    );
};

export default CocoHouse;
