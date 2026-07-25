import React from 'react';
import { Link } from 'react-router-dom';
import BookingWidget from './BookingWidget';
import heroBg from '../assets/Copy of IMG_3491.JPG';
import './Hero.css';

const Hero = () => {
    const scrollToHotels = (e) => {
        if (e) e.preventDefault();
        const target = document.getElementById('our-luxury-hotels') || document.getElementById('accommodations');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero-container" style={{
            backgroundImage: `url(${heroBg})`
        }}>
            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Content Container - Fixed to top 100vh */}
            <div className="hero-content">
                <h4 className="hero-subtitle">
                    Welcome to Sandane Homes, A Luxury Apartment Hotel in Greater Noida
                </h4>

                <h1 className="hero-title-large">
                    PREMIUM SERVICED<br />RESIDENCES
                </h1>

                {/* Dual Hero CTA Buttons */}
                <div className="hero-cta-container">
                    <Link to="/residences" className="hero-cta-btn">
                        VIEW RESIDENCES
                    </Link>
                    <button
                        onClick={scrollToHotels}
                        className="hero-cta-btn"
                    >
                        BOOK A HOTEL
                    </button>
                </div>

                <BookingWidget />
            </div>
        </div>
    );
};

export default Hero;
