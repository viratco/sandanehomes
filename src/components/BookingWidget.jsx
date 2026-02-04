import React from 'react';
import { FaStar } from 'react-icons/fa';
import './BookingWidget.css';

const BookingWidget = () => {
    return (
        <div className="booking-widget-container">
            {/* Trusted By */}
            <div className="booking-widget-item" style={{ flex: 1.5 }}>
                <label className="booking-label">Trusted by Guests</label>
                <div className="booking-value-row">
                    <span className="booking-value" style={{ fontSize: '18px', fontWeight: 'bold' }}>15,000+</span>
                </div>
            </div>

            {/* Rating */}
            <div className="booking-widget-item" style={{ flex: 1.5 }}>
                <label className="booking-label">Average User Rating</label>
                <div className="booking-value-row">
                    <span className="booking-value" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: 'bold' }}>
                        4.9
                        <div style={{ display: 'flex', gap: '2px' }}>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={14} color="#C5A572" />
                            ))}
                        </div>
                    </span>
                </div>
            </div>

            {/* Experience */}
            <div className="booking-widget-item" style={{ flex: 1.5 }}>
                <label className="booking-label">Of Excellence</label>
                <div className="booking-value-row">
                    <span className="booking-value" style={{ fontSize: '18px', fontWeight: 'bold' }}>12+ Years</span>
                </div>
            </div>

            {/* CTA Button */}
            <button className="booking-btn">
                CHECK AVAILABILITY
            </button>
        </div>
    );
};

export default BookingWidget;
