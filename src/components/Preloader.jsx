import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fading out after 2.6 seconds
        const timer1 = setTimeout(() => {
            setFadeOut(true);
        }, 2600);

        // Tell parent to completely unmount after fade completes
        const timer2 = setTimeout(() => {
            onComplete();
        }, 3400);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <div className={`preloader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
            {/* The Logo and Content in the center */}
            <div className="preloader-center-content">
                <div className="brand-logo-container">
                    <h1 className="brand-title">SANDANE HOMES</h1>
                    <div className="brand-stars">
                        <span style={{ animationDelay: '0.4s' }}>★</span>
                        <span style={{ animationDelay: '0.5s' }}>★</span>
                        <span style={{ animationDelay: '0.6s' }}>★</span>
                        <span style={{ animationDelay: '0.7s' }}>★</span>
                        <span style={{ animationDelay: '0.8s' }}>★</span>
                    </div>
                </div>
                {/* A sleek vertical loading line that grows then disappears */}
                <div className="vertical-loader"></div>
            </div>
        </div>
    );
};

export default Preloader;
