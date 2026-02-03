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

import { FaParking, FaCoffee, FaWifi, FaDesktop, FaConciergeBell, FaGamepad, FaBolt, FaBroom, FaStar, FaUserCircle } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, desc }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            style={{
                border: '1px solid #eee',
                padding: '40px 20px',
                textAlign: 'center',
                backgroundColor: isHovered ? '#8B7355' : '#fff',
                color: isHovered ? '#fff' : '#111',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                height: '100%'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Icon size={40} color={isHovered ? '#fff' : '#8B7355'} />
            <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                fontFamily: 'sans-serif'
            }}>
                {desc}
            </p>
        </div>
    );
};

const ReviewCard = ({ name, date, text }) => {
    return (
        <div style={{
            backgroundColor: '#FAF8F5',
            padding: '40px 30px',
            textAlign: 'left',
            borderRadius: '4px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
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
        <div className="sandane-homes-page" style={{ backgroundColor: '#FFFFFF' }}>
            <Header showTopBar={false} showNav={false} showLogo={false} />

            {/* Split Section */}
            <div className="sandane-hero-split" style={{ display: 'flex', minHeight: '80vh', flexWrap: 'wrap', position: 'relative' }}>

                {/* Left Side - Text */}
                <div className="sandane-hero-text" style={{
                    flex: '1',
                    flexBasis: '400px', // Responsive breakpoint
                    padding: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#fff'
                }}>
                    <h1 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '64px',
                        lineHeight: '1.1',
                        color: '#111',
                        marginBottom: '30px',
                        maxWidth: '500px'
                    }}>
                        Amara Inn<br />
                        <span style={{ fontSize: '32px', fontWeight: '400' }}>by Sandane Homes</span>
                    </h1>
                </div>

                {/* Right Side - Image */}
                <div className="sandane-hero-image" style={{
                    flex: '1',
                    flexBasis: '400px',
                    position: 'relative'
                }}>
                    <img
                        src={heroImg}
                        alt="Amara Inn"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block'
                        }}
                    />
                </div>

                {/* Stats Bar Overlay */}
                <div className="sandane-stats-bar" style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '80px',
                    right: 'auto', // Don't snap to right
                    backgroundColor: 'white',
                    padding: '30px 50px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '60px',
                    zIndex: 10,
                    maxWidth: '1000px'
                }}>
                    {/* Stat 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <div style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Playfair Display, serif', color: '#111' }}>
                            15k+
                        </div>
                        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#666', fontWeight: '600' }}>
                            Happy Customers
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ width: '1px', height: '40px', backgroundColor: '#eee' }}></div>

                    {/* Stat 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Playfair Display, serif', color: '#111' }}>4.9</span>
                            <div style={{ display: 'flex', gap: '2px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={14} color="#8B7355" />
                                ))}
                            </div>
                        </div>
                        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#666', fontWeight: '600' }}>
                            Overall Rating
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ width: '1px', height: '40px', backgroundColor: '#eee' }}></div>

                    {/* Stat 3 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <div style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Playfair Display, serif', color: '#111' }}>
                            12+
                        </div>
                        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#666', fontWeight: '600' }}>
                            Years Experience
                        </div>
                    </div>
                </div>

                {/* Floating Book Now Button below Stats Bar */}
                <div className="sandane-floating-buttons" style={{
                    position: 'absolute',
                    bottom: '-40px', // Push it strictly below the hero section/stats bar area
                    left: '80px',
                    zIndex: 20,
                    display: 'flex',
                    gap: '20px'
                }}>
                    <button style={{
                        padding: '18px 45px',
                        backgroundColor: '#8B7355',
                        border: 'none',
                        color: '#fff',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        cursor: 'pointer',
                        fontWeight: '700',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(139, 115, 85, 0.3)'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#6d5a43';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 115, 85, 0.4)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#8B7355';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 115, 85, 0.3)';
                        }}
                    >
                        Book Now
                    </button>
                    <button style={{
                        padding: '18px 45px',
                        backgroundColor: 'transparent',
                        border: '2px solid #8B7355',
                        color: '#8B7355',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        cursor: 'pointer',
                        fontWeight: '700',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(139, 115, 85, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Contact Us
                    </button>
                </div>

            </div>

            {/* Our Rooms Section */}
            <div style={{ padding: '100px 40px', textAlign: 'center' }}>
                <h4 style={{
                    color: '#C5A572',
                    fontSize: '14px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    fontWeight: '600',
                    fontFamily: 'Playfair Display, serif'
                }}>
                    Our Rooms
                </h4>
                <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '48px',
                    color: '#111',
                    marginBottom: '60px',
                    lineHeight: '1.2'
                }}>
                    Indulge in Luxury Explore <br /> Our Rooms
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '20px',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    {rooms.map((room, index) => (
                        <div key={index} style={{ textAlign: 'left', cursor: 'pointer' }}>
                            <div style={{
                                height: '350px',
                                overflow: 'hidden',
                                marginBottom: '20px',
                                position: 'relative'
                            }}>
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <h3 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '22px',
                                fontWeight: '700',
                                marginBottom: '10px',
                                color: '#111'
                            }}>
                                {room.title}
                            </h3>
                            <p style={{
                                color: '#555',
                                fontSize: '15px',
                                lineHeight: '1.6',
                                marginBottom: '20px',
                                maxWidth: '100%'
                            }}>
                                {room.desc}
                            </p>
                            <div style={{
                                fontSize: '12px',
                                fontWeight: '800',
                                color: '#111',
                                letterSpacing: '1px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px'
                            }}>
                                READ MORE &gt;
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Services Section */}
            <div style={{ padding: '100px 40px', textAlign: 'center' }}>
                <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '48px',
                    color: '#111',
                    marginBottom: '60px',
                    lineHeight: '1.2'
                }}>
                    Personalized Hospitality Discover <br /> Our Signature Services
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '20px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {services.map((service, index) => (
                        <ServiceCard key={index} icon={service.icon} desc={service.desc} />
                    ))}
                </div>
            </div>

            {/* Reviews Section */}
            <div style={{ padding: '80px 40px', textAlign: 'center', backgroundColor: '#fff' }}>
                <h4 style={{
                    color: '#C5A572',
                    fontSize: '24px',
                    fontFamily: 'Playfair Display, serif',
                    marginBottom: '40px'
                }}>
                    Your Reviews
                </h4>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
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
