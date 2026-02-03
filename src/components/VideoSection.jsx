import React from 'react';
import videoBg from '../assets/video-bg.png';

const VideoSection = () => {
    return (
        <section className="video-section" style={{
            position: 'relative',
            width: '100%',
            height: '70vh',
            backgroundImage: `url(${videoBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Play Button */}
            <div className="play-button" style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: 'rgba(0,0,0,0.1)'
            }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)';
                    e.currentTarget.style.borderColor = 'white';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                }}
            >
                {/* Triangle/Play Icon */}
                <div style={{
                    width: 0,
                    height: 0,
                    borderTop: '12px solid transparent',
                    borderBottom: '12px solid transparent',
                    borderLeft: '20px solid white',
                    marginLeft: '5px' // Optical centering
                }}></div>
            </div>
        </section>
    );
};

export default VideoSection;
