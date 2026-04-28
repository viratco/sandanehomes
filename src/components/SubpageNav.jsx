import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubpageNav.css';

const SubpageNav = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [hoverText, setHoverText] = useState('');

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const navData = [
        {
            category: "HOTELS",
            items: [
                { name: "Amara Inn", link: "/amara" },
                { name: "Sandane Homes", link: "/sandane-homes" },
                { name: "Glam", link: "/glam" },
                { name: "Amaaltash", link: "/amaaltash" }
            ]
        },
        {
            category: "SERVICE APARTMENT",
            items: [
                { name: "Saffron Inn", link: "/saffron" },
                { name: "Pine Tales", link: "/pine-tales" },
                { name: "Catarina Services", link: "/catarina-services" }
            ]
        },
        {
            category: "RESTAURANTS",
            items: [
                { name: "Sohee's Kitchen", link: "#" } 
            ]
        }
    ];

    return (
        <>
            <div
                className="cursor-text"
                style={{
                    position: 'fixed',
                    left: cursorPos.x,
                    top: cursorPos.y,
                    opacity: hoverText ? 1 : 0,
                    pointerEvents: 'none',
                    zIndex: 9999,
                    fontFamily: 'Playfair Display, serif'
                }}
            >
                {hoverText}
            </div>

            <div className="subpage-nav-container">
                <div className="subpage-nav-menu">
                    {navData.map((group, index) => (
                        <React.Fragment key={group.category}>
                            <div 
                                className="nav-menu-group"
                                onMouseEnter={() => setHoverText(`EXPLORE ${group.category}`)}
                                onMouseLeave={() => setHoverText('')}
                            >
                                <span className="nav-menu-label">{group.category}</span>
                                <div className="nav-dropdown">
                                    {group.items.map((item, i) => (
                                        <Link key={i} to={item.link} className="dropdown-item">
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {index < navData.length - 1 && <div className="nav-menu-divider"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SubpageNav;
