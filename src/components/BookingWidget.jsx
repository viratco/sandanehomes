
import React, { useState } from 'react';

const BookingWidget = () => {
    const [checkIn, setCheckIn] = useState('2026-01-16');
    const [checkOut, setCheckOut] = useState('2026-01-17');
    const [guests, setGuests] = useState('1 Adult, 0 Children');

    return (
        <div className="booking-widget-container" style={{
            display: 'flex',
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            border: '1px solid #C5A572',
            backgroundColor: 'rgba(30,30,30, 0.4)',
            backdropFilter: 'blur(5px)',
            marginTop: '80px'
        }}>
            {/* Check In */}
            <div className="booking-widget-item" style={{ flex: 1, borderRight: '1px solid #C5A572', padding: '20px 30px', display: 'flex', flexDirection: 'column', color: 'white' }}>
                <label style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', marginBottom: '5px' }}>Check In</label>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: '#ccc', cursor: 'pointer' }}>
                    {checkIn}
                    <span style={{ fontSize: '10px' }}>▼</span>
                </div>
            </div>

            {/* Check Out */}
            <div className="booking-widget-item" style={{ flex: 1, borderRight: '1px solid #C5A572', padding: '20px 30px', display: 'flex', flexDirection: 'column', color: 'white' }}>
                <label style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', marginBottom: '5px' }}>Check Out</label>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: '#ccc', cursor: 'pointer' }}>
                    {checkOut}
                    <span style={{ fontSize: '10px' }}>▼</span>
                </div>
            </div>

            {/* Guests */}
            <div className="booking-widget-item" style={{ flex: 1.5, borderRight: '1px solid #C5A572', padding: '20px 30px', display: 'flex', flexDirection: 'column', color: 'white' }}>
                <label style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', marginBottom: '5px' }}>Guests</label>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: '#ccc', cursor: 'pointer' }}>
                    {guests}
                    <span style={{ fontSize: '10px' }}>▼</span>
                </div>
            </div>

            {/* Button */}
            <button className="booking-widget-item" style={{
                flex: 1.2,
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                fontFamily: 'Playfair Display, serif',
                fontSize: '18px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s'
            }}
                onMouseOver={(e) => e.target.style.background = 'rgba(197, 165, 114, 0.3)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
            >
                Check Availability
            </button>
        </div>
    );
};

export default BookingWidget;
