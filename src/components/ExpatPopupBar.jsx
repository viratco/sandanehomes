import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaArrowRight } from 'react-icons/fa';
import './ExpatPopupBar.css';

const ExpatPopupBar = () => {
    const location = useLocation();
    const isResidencesPage = location.pathname.toLowerCase() === '/residences';
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => {
            const storageKey = isResidencesPage ? 'expat_popup_dismissed_residences' : 'expat_popup_dismissed';
            const dismissed = sessionStorage.getItem(storageKey);
            if (!dismissed) {
                setIsVisible(true);
            }
        }, 5400);

        return () => clearTimeout(timer);
    }, [isResidencesPage]);

    const handleDismiss = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsDismissed(true);
            const storageKey = isResidencesPage ? 'expat_popup_dismissed_residences' : 'expat_popup_dismissed';
            sessionStorage.setItem(storageKey, 'true');
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
                    {isResidencesPage ? "Relocating to Greater Noida?" : "Are you an expat relocating to Greater Noida?"}
                </h4>

                {/* Short Info Description */}
                <p className="expat-popup-desc">
                    {isResidencesPage 
                        ? "Premium corporate suites are in high demand. Enquire now to check real-time availability and secure your reservation."
                        : <span>Discover luxury 1, 2 &amp; 3 BHK serviced apartments in <strong>Jaypee Greens</strong> &amp; <strong>DLF</strong> with 24/7 security, daily housekeeping, full kitchens &amp; 24/7 concierge.</span>
                    }
                </p>

                {isResidencesPage ? (
                    /* Main Action Button for Residences Page (Enquiry Now -> WhatsApp) */
                    <a 
                        href="https://wa.me/918826269690?text=Hello%20Sandane%20Homes%2C%20I%20would%20like%20to%20inquire%20about%20executive%20housing%20options%20at%20Residences%20by%20Sandane%20Homes."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="expat-popup-btn"
                        style={{ marginTop: '15px' }}
                    >
                        <span className="expat-btn-text">Enquiry Now</span>
                        <span className="expat-btn-icon">
                            <FaArrowRight size={11} />
                        </span>
                    </a>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </div>
    );
};

export default ExpatPopupBar;
