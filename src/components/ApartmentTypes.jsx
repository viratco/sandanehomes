import React from 'react';
import { Link } from 'react-router-dom';
import amaaltashImg from '../assets/IMG_4015.JPG';
import sandaneHomeImg from '../assets/sandane_home_screenshot_v2_small.jpg';
import pineTalesImg from '../assets/IMG_6598.JPG';
import amaraImg from '../assets/IMG_6257_small.jpg';
import catarinaImg from '../assets/catarina_screenshot_small.jpg'; // New right corner image (Screenshot)
import './ApartmentTypes.css'; // Import the new CSS

const ApartmentTypes = () => {
    // State for cursor text
    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
    const [hoverText, setHoverText] = React.useState('');

    // Update cursor position
    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    // 5 items to match the design - Reordered as per request
    const apartments = [
        {
            title: "Amara inn", // Small Left
            image: amaraImg,
            sizeClass: "card-small",
            link: "/amara"
        },
        {
            title: "Amaaltash by Sandane Homes", // Medium Left
            image: amaaltashImg,
            sizeClass: "card-medium",
            link: "/amaaltash"
        },
        {
            title: "Sandane Homes\nthe luxury boutique", // Large Center (Main Focus)
            image: sandaneHomeImg,
            sizeClass: "card-large",
            link: "/sandane-homes"
        },
        {
            title: "Pine Tales by Sandane Homes", // Medium Right
            image: pineTalesImg,
            sizeClass: "card-medium",
            link: "/pine-tales"
        },
        {
            title: "Saffron inn", // Small Right
            image: catarinaImg,
            sizeClass: "card-small",
            link: "/saffron"
        }
    ];

    return (
        <section
            id="accommodations"
            style={{ backgroundColor: '#FFFBF5', padding: '40px 0 80px 0', color: '#111', textAlign: 'center', position: 'relative' }}
            onMouseMove={handleMouseMove}
        >
            <div className="container" style={{ maxWidth: '100%', margin: '0 auto', padding: '0 20px' }}>

                {/* Custom Cursor Text */}
                <div
                    className="cursor-text"
                    style={{
                        position: 'fixed',
                        left: cursorPos.x,
                        top: cursorPos.y,
                        opacity: hoverText ? 1 : 0,
                        pointerEvents: 'none',
                        zIndex: 9999,
                        // Styles handled in CSS for cleaner code, but inline for dynamic pos
                    }}
                >
                    {hoverText}
                </div>

                {/* Headers */}
                <h4 style={{
                    color: '#C5A572',
                    fontSize: '12px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    fontWeight: '600'
                }}>
                    Discover Our Collection
                </h4>

                <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '48px',
                    marginBottom: '60px',
                    fontWeight: '400',
                    color: '#1a3c40'
                }}>
                    Our Luxury Hotels
                </h2>

                {/* Gallery Container */}
                <div className="apartment-gallery-container">
                    {apartments.map((apt, index) => (
                        <Link
                            to={apt.link}
                            key={index}
                            className={`gallery-card ${apt.sizeClass}`}
                            style={{ display: 'flex', flexDirection: 'column' }}
                            onMouseEnter={() => setHoverText(apt.title)}
                            onMouseLeave={() => setHoverText('')}
                        >
                            <div className="card-image-wrapper">
                                <img src={apt.image} alt={apt.title} />
                            </div>
                            <div className="card-info-segment">
                                <h3>{apt.title}</h3>
                                <div className="explore-btn">Explore</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApartmentTypes;
