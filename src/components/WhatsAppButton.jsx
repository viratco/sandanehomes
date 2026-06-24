import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    // URL-encoded text: "Hi! I'm interested in Residences by Sandane Homes. Please provide more details."
    const phoneNumber = "919711722273";
    const defaultText = encodeURIComponent("Hi! I'm interested in Residences by Sandane Homes. Please provide more details.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultText}`;

    return (
        <div className="whatsapp-container">
            <div className="whatsapp-ripple-ring whatsapp-ripple-ring-1"></div>
            <div className="whatsapp-ripple-ring whatsapp-ripple-ring-2"></div>
            <a 
                href={whatsappUrl}
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sandane Homes on WhatsApp"
            >
                <svg 
                    viewBox="0 0 16 16" 
                    className="whatsapp-icon" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* Diagonal gradient matching the top-right-to-bottom-left flow of the first reference image */}
                        <linearGradient id="whatsapp-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#25D366" />
                            <stop offset="100%" stopColor="#128C7E" />
                        </linearGradient>
                    </defs>
                    
                    {/* 1. Outer speech bubble shape (Gradient Green) */}
                    <path 
                        fill="url(#whatsapp-gradient)" 
                        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.601 2.326z" 
                    />
                    
                    {/* 2. Inner circular background (White) */}
                    <circle 
                        cx="7.994" 
                        cy="7.93" 
                        r="5.2" 
                        fill="#FFFFFF" 
                    />
                    
                    {/* 3. Inner telephone receiver (Gradient Green) */}
                    <path 
                        fill="url(#whatsapp-gradient)" 
                        d="M11.609 9.587c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" 
                    />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppButton;
