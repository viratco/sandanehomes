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

    const handleEnquireClick = (e) => {
        if (e) e.preventDefault();
        handleDismiss();
        const element = document.getElementById('footer-contact-section') || document.getElementById('contact-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            element.classList.remove('highlight-section');
            void element.offsetWidth;
            element.classList.add('highlight-section');
            setTimeout(() => {
                element.classList.remove('highlight-section');
            }, 2600);
        } else {
            window.location.href = '/residences#footer-contact-section';
        }
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
                    <Link to="/residences" style={{ textDecoration: 'none' }}>
                        <span className="expat-popup-badge">
                            <span className="expat-live-dot"></span>
                            <span className="expat-flags">🇰🇷 🇯🇵 🇨🇳</span> RESIDENCES
                        </span>
                    </Link>
                </div>

                {/* Main Headline */}
                <h4 className="expat-popup-title">
                    {isResidencesPage ? "Relocating to Greater Noida?" : "Are you an expat relocating to Greater Noida?"}
                </h4>

                {/* Short Info Description */}
                <p className="expat-popup-desc">
                    {isResidencesPage 
                        ? "Residences are booking out fast. Send us a quick WhatsApp message now to check availability and reserve your stay."
                        : <span>Discover luxury 1, 2 &amp; 3 BHK serviced apartments in <strong>Jaypee Greens</strong> &amp; <strong>DLF</strong> with 24/7 security, daily housekeeping, full kitchens &amp; 24/7 concierge.</span>
                    }
                </p>

                {/* Main Action Button (Enquire Now -> Scroll to Footer Contact Form) */}
                <button 
                    onClick={handleEnquireClick}
                    className="expat-popup-btn"
                    style={{ marginTop: '15px', border: 'none', cursor: 'pointer' }}
                >
                    <span className="expat-btn-text">Enquire Now</span>
                    <span className="expat-btn-icon">
                        <FaArrowRight size={11} />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ExpatPopupBar;
