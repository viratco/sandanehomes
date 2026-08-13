import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import amaaltashImg from '../assets/IMG_4015.JPG';
import sandaneHomeImg from '../assets/sandane_home_screenshot_v2_small.jpg';
import pineTalesImg from '../assets/IMG_6598.JPG';
import glamMainImg from '../assets/glam_main.jpg'; // New Glam image
import amaraImg from '../assets/amara_facade.jpg';
import saffronImg from '../assets/saffron_bedroom.png'; // Saffron image
import cocoFacadeImg from '../assets/coco_facade.jpg'; // CoCo House facade image
import './ApartmentTypes.css'; // Import the new CSS

const ApartmentTypes = () => {
    // State for cursor text
    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
    const [hoverText, setHoverText] = React.useState('');
    const galleryRef = useRef(null);

    const scrollGallery = (direction) => {
        if (galleryRef.current) {
            const scrollAmount = window.innerWidth < 1024 ? 300 : 400; // Adjust scroll distance based on screen size
            galleryRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Update cursor position
    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    // 7 items symmetrically ordered with Sandane Homes centerpiece
    const apartments = [
        {
            title: "Pine Tales by Sandane Homes",
            image: pineTalesImg,
            sizeClass: "card-tier-1",
            link: "/pine-tales"
        },
        {
            title: "CoCo House",
            image: cocoFacadeImg,
            sizeClass: "card-tier-2",
            link: "/coco-house"
        },
        {
            title: "Amaaltash by Sandane Homes",
            image: amaaltashImg,
            sizeClass: "card-tier-3",
            link: "/amaaltash"
        },
        {
            title: "Sandane Homes\nthe luxury boutique",
            image: sandaneHomeImg,
            sizeClass: "card-tier-4",
            link: "/sandane-homes"
        },
        {
            title: "The Glam by Sandane Homes",
            image: glamMainImg,
            sizeClass: "card-tier-3",
            link: "/glam"
        },
        {
            title: "Amara Inn by Sandane Homes",
            image: amaraImg,
            sizeClass: "card-tier-2",
            link: "/amara"
        },
        {
            title: "Saffron Inn by Sandane Homes",
            image: saffronImg,
            sizeClass: "card-tier-1",
            link: "/saffron"
        }
    ];

    return (
        <section
            id="our-luxury-hotels"
            style={{ backgroundColor: '#FFFBF5', padding: '40px 0 80px 0', color: '#111', textAlign: 'center', position: 'relative' }}
            onMouseMove={handleMouseMove}
        >
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
                }}
            >
                {hoverText}
            </div>

            <div className="container" style={{ maxWidth: '100%', margin: '0 auto', padding: '0 20px' }}>

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
            </div>

            {/* Slider Wrapper - Full width to prevent clipping */}
            <div style={{ position: 'relative', width: '100%', margin: '0 auto' }}>

                {/* Left Arrow */}
                <button
                    className="slider-arrow left-arrow"
                    onClick={() => scrollGallery('left')}
                    aria-label="Scroll left"
                >
                    <FaChevronLeft />
                </button>

                {/* Gallery Container */}
                <div className="apartment-gallery-container" ref={galleryRef}>
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

                {/* Right Arrow */}
                <button
                    className="slider-arrow right-arrow"
                    onClick={() => scrollGallery('right')}
                    aria-label="Scroll right"
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default ApartmentTypes;
