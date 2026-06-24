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
                    viewBox="0 0 24 24" 
                    className="whatsapp-icon" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="whatsapp-green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#25D366" />
                            <stop offset="100%" stopColor="#128C7E" />
                        </linearGradient>
                    </defs>
                    {/* Outer talk bubble: filled with green gradient */}
                    <path 
                        fill="url(#whatsapp-green-gradient)" 
                        d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.458 3.472 1.33 4.984l-1.417 5.176 5.3-.1.018-.01c1.472.823 3.125 1.258 4.757 1.258 5.507 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2z" 
                    />
                    {/* Inner telephone receiver + border: filled with white */}
                    <path 
                        fill="#FFF" 
                        d="M12.012 3.52c4.667 0 8.468 3.8 8.468 8.468 0 4.667-3.8 8.468-8.468 8.468-1.5 0-2.98-.4-4.27-1.15l-.3-.18-3.17.08.85-3.08-.2-.32c-.82-1.3-1.25-2.82-1.25-4.38 0-4.667 3.8-8.468 8.468-8.468zm4.95 11.58c-.27-.14-1.6-.8-1.85-.88-.25-.08-.43-.13-.62.13-.18.27-.72.88-.88 1.07-.16.18-.32.2-.6.07-.27-.14-1.15-.42-2.18-1.34-.8-.7-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.12-.13.27-.3.4-.47.13-.17.18-.28.27-.47.09-.18.05-.35-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.45-.62-.46-.16-.01-.35-.01-.54-.01-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4s1 2.79 1.15 2.99c.15.2 1.99 3.04 4.82 4.26.68.28 1.2.46 1.62.6.68.21 1.3.18 1.8.1.55-.08 1.6-.66 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.53-.33z" 
                    />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppButton;
