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
                        onClick={() => window.open('https://www.google.com/maps/place/Sandane+Homes+The+Luxury+Boutique/@28.4558093,77.5010272,17z/data=!4m9!3m8!1s0x390cc1cc3684ae2b:0x53c7da621f9bea8!5m2!4m1!1i2!8m2!3d28.4558093!4d77.5036021!16s%2Fg%2F11w9xpnt0q?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
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
