import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaArrowRight } from 'react-icons/fa';
import './ExpatPopupBar.css';

const ExpatPopupBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // Website intro animation (Preloader) runs for 3.4 seconds (3400ms).
        // Popup waits for intro animation to finish + 2.0 seconds delay = 5400ms total.
        setIsVisible(false);
        const timer = setTimeout(() => {
            const dismissed = sessionStorage.getItem('expat_popup_dismissed');
            if (!dismissed) {
                setIsVisible(true);
            }
        }, 5400);

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsDismissed(true);
            sessionStorage.setItem('expat_popup_dismissed', 'true');
        }, 350);
    };

    if (isDismissed || !isVisible) return null;

    return (
        <div className={`expat-popup-container ${isClosing ? 'expat-popup-exit' : ''}`}>
            <div className="expat-popup-card">
                {/* Ambient Gold Glow Effect */}
                <div className="expat-popup-glow"></div>

                {/* Close Button */}
                <button
                    className="expat-popup-close"
                    onClick={handleDismiss}
                    aria-label="Close notification"
                >
                    <FaTimes size={11} />
                </button>

                {/* Top Live Badge */}
                <div className="expat-popup-header">
                    <span className="expat-popup-badge">
                        <span className="expat-live-dot"></span>
                        <span className="expat-flags">🇰🇷 🇯🇵 🇨🇳</span> EXPAT RESIDENCES
                    </span>
                </div>

                {/* Main Headline */}
                <h4 className="expat-popup-title">
                    Are you Korean, Japanese, or relocating to Greater Noida?
                </h4>

                {/* Short Info Description */}
                <p className="expat-popup-desc">
                    Discover luxury 1, 2 &amp; 3 BHK serviced apartments in <strong>Jaypee Greens</strong> &amp; <strong>DLF</strong> with 24/7 security, daily housekeeping, full kitchens &amp; 24/7 concierge.
                </p>

                {/* Quick Language Chips */}
                <div className="expat-popup-chips">
                    <Link to="/korean-expat-housing-delhi-ncr" className="expat-chip">
                        🇰🇷 한국어 Guide
                    </Link>
                    <Link to="/japanese-expat-housing-delhi-ncr" className="expat-chip">
                        🇯🇵 日本語 Guide
                    </Link>
                    <Link to="/chinese-expat-housing-greater-noida" className="expat-chip">
                        🇨🇳 中文 Guide
                    </Link>
                </div>

                {/* Main Action Button */}
                <Link to="/residences" className="expat-popup-btn">
                    <span className="expat-btn-text">See Residencies by Sandane Homes</span>
                    <span className="expat-btn-icon">
                        <FaArrowRight size={11} />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ExpatPopupBar;
