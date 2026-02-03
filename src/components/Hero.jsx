import React from 'react';
import BookingWidget from './BookingWidget';
import heroBg from '../assets/Copy of IMG_3491.JPG';
import './Hero.css';

const Hero = () => {
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
                    PREMIUM SERVICED
                </h1>
                <h1 className="hero-title-large">
                    RESIDENCES
                </h1>

                <BookingWidget />
            </div>
        </div>
    );
};

export default Hero;
