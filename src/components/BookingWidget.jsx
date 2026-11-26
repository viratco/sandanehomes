import React from 'react';
import { FaStar } from 'react-icons/fa';
import './BookingWidget.css';

const BookingWidget = () => {
    return (
        <div className="booking-widget-container">

            {/* Rating */}
            <div className="booking-widget-item">
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
        </div>
    );
};

export default BookingWidget;
