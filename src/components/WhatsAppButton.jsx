import React from 'react';
import { useLocation } from 'react-router-dom';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const location = useLocation();
    const isResidencesPage = location.pathname.toLowerCase() === '/residences';

    const phoneNumber = isResidencesPage ? "918826269690" : "919711722273";
    const defaultText = isResidencesPage
        ? encodeURIComponent("hi.. i wana talk abt residences by sandane homes")
        : encodeURIComponent("Hi Sandane Homes! I would like to get more information.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultText}`;

    return (
        <div className="whatsapp-container">
            <div className="whatsapp-shake-wrapper">
                <a 
                    href={whatsappUrl}
                    className="whatsapp-float"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Sandane Homes on WhatsApp"
                >
                    <svg 
                        viewBox="0 0 100 100" 
                        className="whatsapp-icon" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="whatsapp-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#25D366" />
                                <stop offset="100%" stopColor="#128C7E" />
                            </linearGradient>
                        </defs>
                        
                        {/* 1. Official outer speech bubble shape (Gradient Green) */}
                        <path 
                            fill="url(#whatsapp-gradient)" 
                            d="M50 0a50 50 0 0 0-43.3 75L0 100l25.8-6.8A50 50 0 1 0 50 0z" 
                        />
                        
                        {/* 2. Inner circular background (White) */}
                        <circle 
                            cx="50" 
                            cy="50" 
                            r="38" 
                            fill="#FFFFFF" 
                        />
                        
                        {/* 3. Official inner telephone receiver (Gradient Green) */}
                        <path 
                            fill="url(#whatsapp-gradient)" 
                            d="M66.9 57.7c-1.1-.6-6.6-3.3-7.6-3.7-1-.3-1.8-.5-2.5.6-.7.9-2.9 3.7-3.6 4.4-.7.8-1.3.9-2.5.3-6.8-3.4-11.3-6.1-15-12.5-1.2-2.1-.2-3.3.8-4.5.9-.9 2-2.4 2.5-3.1.5-.7.7-1.3.3-2.5-.3-1.1-2.9-7-4-9.6-1-2.5-2.1-2.2-2.9-2.2-.7 0-1.5-.1-2.3-.1s-2.1.3-3.2 1.5c-1.1 1.2-4.2 4.1-4.2 10.1s4.4 11.7 5 12.5c.6.8 8.6 13.1 20.8 18.4 7.2 3.1 10.1 3.4 13.7 2.9 2.2-.3 6.8-2.8 7.8-5.5 1-2.7 1-5.1.7-5.5-.3-.5-1.1-.8-2.2-1.3z" 
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default WhatsAppButton;
