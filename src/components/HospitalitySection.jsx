import React from 'react';
import hospitalityBg from '../assets/IMG_6094.jpg';
import testimonialImg from '../assets/IMG_6106.jpg';
import soheesTxt from '../assets/sohees_white_txt.png';
import './HospitalitySection.css';

const HospitalitySection = () => {
    return (
        <section className="hospitality-section">
            {/* Hospitality Message with Background Image */}
            <div className="hospitality-hero" style={{
                backgroundImage: `url(${hospitalityBg})`
            }}>
                {/* Dark overlay */}
                <div className="hospitality-overlay"></div>

                {/* Text Content - Center */}
                <div className="hospitality-content">
                    <h4 className="hospitality-title">
                        High Standards of Hospitality
                    </h4>

                    <img src={soheesTxt} alt="Catarina by Sandane Homes" className="hospitality-logo" />
                </div>
            </div>

            {/* Green Testimonial Overlay */}
            <div className="hospitality-testimonial-overlay">
                {/* Left Part: Image */}
                <div className="testimonial-image" style={{
                    backgroundImage: `url(${testimonialImg})`
                }}></div>

                {/* Right Part: Testimonial Content */}
                <div className="testimonial-content">
                    {/* Stars */}
                    <div className="star-rating">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="star">★</span>
                        ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="testimonial-text">
                        "A delightful culinary escape! Sohee's Kitchen brings the authentic taste of Korea right to your table, blended with an exquisite selection of gourmet comfort foods. Every bite is a flavor explosion, served in a warm and inviting atmosphere. Truly a hidden gem for foodies."
                    </p>

                    {/* Navigation Dots */}
                    <div className="nav-dots">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className={`nav-dot ${i === 0 ? 'active' : 'inactive'}`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HospitalitySection;
