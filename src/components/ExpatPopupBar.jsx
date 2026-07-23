import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaGlobe, FaChevronRight } from 'react-icons/fa';
import './ExpatPopupBar.css';

const ExpatPopupBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Show after 1.2 seconds if not dismissed previously in session
        const timer = setTimeout(() => {
            const dismissed = sessionStorage.getItem('expat_popup_dismissed');
            if (!dismissed) {
                setIsVisible(true);
            }
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem('expat_popup_dismissed', 'true');
    };

    if (isDismissed || !isVisible) return null;

    return (
        <div className="expat-popup-container">
            <div className="expat-popup-card">
                {/* Close Button */}
                <button
                    className="expat-popup-close"
                    onClick={handleDismiss}
                    aria-label="Close notification"
                >
                    <FaTimes size={13} />
                </button>

                {/* Top Badge */}
                <div className="expat-popup-header">
                    <span className="expat-popup-badge">
                        <span className="expat-live-dot"></span>
                        🇰🇷 🇯🇵 🇨🇳 EXPAT RESIDENCES
                    </span>
                </div>

                {/* Main Headline */}
                <h4 className="expat-popup-title">
                    Are you Korean, Japanese, or an Expat relocating to NCR?
                </h4>

                {/* Short Info Description */}
                <p className="expat-popup-desc">
                    Discover luxury 1, 2 &amp; 3 BHK serviced apartments in <strong>Jaypee Greens</strong> &amp; <strong>Ansal Golf Links</strong> with 24/7 security, daily housekeeping, full kitchens &amp; FRRO assistance.
                </p>

                {/* Quick Language Chips */}
                <div className="expat-popup-chips">
                    <Link to="/korean-expat-housing-delhi-ncr" className="expat-chip">
                        🇰🇷 한국어
                    </Link>
                    <Link to="/japanese-expat-housing-delhi-ncr" className="expat-chip">
                        🇯🇵 日本語
                    </Link>
                    <Link to="/chinese-expat-housing-greater-noida" className="expat-chip">
                        🇨🇳 中文
                    </Link>
                </div>

                {/* Main Action Button */}
                <Link to="/residences" className="expat-popup-btn">
                    <span>Residencies by Sandane Homes</span>
                    <FaChevronRight size={12} />
                </Link>
            </div>
        </div>
    );
};

export default ExpatPopupBar;
