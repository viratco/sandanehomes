import React from 'react';
import locationImg from '../assets/IMG_4019.JPG';
import bookingImg from '../assets/IMG_3547.JPG';
import './ContactSection.css'; // Import the new CSS

const ContactSection = () => {
    return (
        <section className="contact-section">
            {/* Left Side: Getting Here */}
            <div className="contact-half-col" style={{ backgroundImage: `url(${locationImg})` }}>
                <div className="contact-overlay"></div>

                <div className="contact-text-box">
                    <span className="contact-subtitle">OUR LOCATION</span>
                    <h2 className="contact-title">Getting Here</h2>

                    <p className="contact-desc">
                        Sandane Homes Aparthotel Greater Noida<br />
                        415 6th Avenue, New York, New York, USA, 10018
                    </p>

                    <p className="contact-desc">
                        Tel: +1 212-555-6699<br />
                        Email: information@sandanehomes.com
                    </p>

                    <button
                        className="contact-btn"
                        onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get Directions
                    </button>
                </div>
            </div>

            {/* Right Side: Spend Your Time With Us */}
            <div className="contact-half-col" style={{ backgroundImage: `url(${bookingImg})` }}>
                <div className="contact-overlay"></div>

                <div className="contact-text-box">
                    <span className="contact-subtitle">BOOK A ROOM</span>
                    <h2 className="contact-title">Spend Your Time With Us</h2>

                    <p className="contact-desc">
                        Everything at Sandane Homes, in its restaurants, bar and spa is designed to make your stay, lunch or dinner unforgettable.
                    </p>

                    <p className="contact-desc">
                        Tel: +1 212-555-6688<br />
                        Email: reservation@sandanehomes.com
                    </p>

                    <button
                        className="contact-btn"
                        onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Reserve Your Stay
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
