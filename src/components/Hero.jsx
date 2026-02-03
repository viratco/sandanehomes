
import React from 'react';
import BookingWidget from './BookingWidget';
import heroBg from '../assets/Copy of IMG_3491.JPG';

const Hero = () => {
    return (
        <div className="hero-container" style={{
            height: '130vh', // Increased height to push curve below fold
            width: '100vw', // Force full viewport width
            marginLeft: 'calc(50% - 50vw)', // Breakout technique
            marginRight: 'calc(50% - 50vw)',
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            textAlign: 'center',
            borderBottomLeftRadius: '50% 80px',
            borderBottomRightRadius: '50% 80px',
            overflow: 'hidden'
        }}>
            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)',
                zIndex: 1
            }}></div>

            {/* Content Container - Fixed to top 100vh */}
            <div className="hero-content" style={{
                zIndex: 2,
                width: '100%',
                height: '100vh', // Occupy only the first viewport height
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 20px',
                boxSizing: 'border-box'
            }}>
                <h4 className="hero-subtitle" style={{
                    color: '#C5A572',
                    fontSize: '14px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    marginBottom: '20px'
                }}>
                    Welcome to Sandane Homes, A Luxury Apartment Hotel in Greater Noida
                </h4>

                <h1 className="hero-title-large" style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '80px',
                    color: 'white',
                    lineHeight: '1.1',
                    marginBottom: '10px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    fontWeight: '400'
                }}>
                    PREMIUM SERVICED
                </h1>
                <h1 className="hero-title-large" style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '80px',
                    color: 'white',
                    lineHeight: '1.1',
                    marginBottom: '60px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    fontWeight: '400'
                }}>
                    RESIDENCES
                </h1>

                <BookingWidget />
            </div>
        </div>
    );
};

export default Hero;
