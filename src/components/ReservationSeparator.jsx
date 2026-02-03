import React from 'react';

const ReservationSeparator = () => {
    return (
        <div className="reservation-separator-container" style={{
            width: '100%',
            backgroundColor: '#FFFBF5', // Updated to off-white
            padding: '20px 0', // Further reduced
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: 'none', // Removed top border
            borderBottom: '1px solid #C5A572',
            gap: '15px'
        }}>
            <div style={{
                color: '#C5A572',
                fontSize: '12px',
                letterSpacing: '5px',
                fontWeight: '600',
                textTransform: 'uppercase'
            }}>
                Start Your Journey
            </div>
            <h2 className="reservation-title" style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '36px',
                color: '#111',
                margin: 0,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: '400'
            }}>
                Book Your Reservation
            </h2>
            <div style={{
                width: '60px',
                height: '2px',
                backgroundColor: '#C5A572',
                marginTop: '10px',
                marginBottom: '20px'
            }}></div>
            <button style={{
                padding: '16px 45px',
                backgroundColor: '#111',
                color: '#fff',
                border: 'none',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '0'
            }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#C5A572';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#111';
                }}
            >
                Book Now
            </button>
        </div>
    );
};

export default ReservationSeparator;
