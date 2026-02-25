import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Header = ({ showTopBar = true, showNav = true, showLogo = true }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const [isRestaurantDropdownOpen, setIsRestaurantDropdownOpen] = useState(false);

    const handleNavClick = (setter, dest, currentState) => {
        if (window.innerWidth <= 768) {
            // On mobile: toggle dropdown
            setter(!currentState);
        } else {
            // On desktop: just navigate
            navigate(dest);
        }
    };

    // Force hide top bar on Catarina Services page regardless of prop
    const shouldShowTopBar = showTopBar && location.pathname !== '/catarina-services';

    return (
        <header style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 10,
            color: 'white',
            padding: '20px 0'
        }}>
            {/* Top Info Row */}
            {shouldShowTopBar && (
                <div className="container header-top-row" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '11px',
                    letterSpacing: '1px',
                    marginBottom: '25px',
                    fontWeight: '500',
                    textTransform: 'uppercase'
                }}>
                    <div>BB-28, Block B, Ansal Golf Link -1, Greater Noida, Uttar Pradesh 201315</div>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <span>Tel: +91 9711722273</span>
                        <span>sandanehomes@gmail.com</span>
                    </div>
                </div>
            )}

            {/* Navbar Row */}
            <div className="container header-nav-row" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                {/* Left Nav */}
                <div className="desktop-left-nav" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                    {showNav && (
                        <div className="header-nav-links mobile-nav-visible" style={{
                            display: 'flex',
                            alignItems: 'center',
                            zIndex: 10,
                            transition: 'all 0.3s ease' // Smooth transition for width change
                        }}>
                            <nav style={{ animation: 'fadeIn 0.3s ease' }}>
                                <ul className="nav-list-mobile-fix" style={{
                                    display: 'flex',
                                    fontSize: '10px', // Reduced to fit better
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    listStyle: 'none',
                                    margin: 0,
                                    padding: '0 15px',
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(5, 5, 5, 0.85)', // Very dark background like screenshot
                                    backdropFilter: 'blur(8px)', // Frosted glass effect
                                    borderRadius: '4px', // Sharp rectangle with very slight rounding for modern feel
                                    border: '1px solid #C5A572', // Golden border line
                                }}>
                                    {/* HOTELS */}
                                    <li
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                        onTouchStart={(e) => {
                                            e.stopPropagation();
                                            setIsDropdownOpen(prev => !prev);
                                            setIsServiceDropdownOpen(false);
                                            setIsRestaurantDropdownOpen(false);
                                        }}
                                        style={{
                                            position: 'relative',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '12px 12px',
                                            borderRight: '1px solid rgba(197, 165, 114, 0.3)',
                                            cursor: 'pointer',
                                            userSelect: 'none',
                                        }}
                                    >
                                        HOTELS

                                        {isDropdownOpen && (
                                            <div
                                                onTouchStart={(e) => e.stopPropagation()}
                                                style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    paddingTop: '12px',
                                                    zIndex: 20,
                                                }}
                                            >
                                                <div style={{
                                                    backgroundColor: 'white',
                                                    borderRadius: '20px',
                                                    padding: '20px',
                                                    minWidth: '220px',
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                                }}>
                                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
                                                        <li><Link to="/sandane-homes" style={{ color: '#333', textDecoration: 'none', fontSize: '14px', display: 'block', fontWeight: '500' }}>SANDANE HOMES</Link></li>
                                                        <li><Link to="/amara" style={{ color: '#333', textDecoration: 'none', fontSize: '14px', display: 'block', fontWeight: '500' }}>AMARA</Link></li>
                                                        <li><Link to="/amaaltash" style={{ color: '#333', textDecoration: 'none', fontSize: '14px', display: 'block', fontWeight: '500' }}>AMAALTASH</Link></li>
                                                        <li><Link to="/saffron" style={{ color: '#333', textDecoration: 'none', fontSize: '14px', display: 'block', fontWeight: '500' }}>SAFFRON</Link></li>
                                                        <li><Link to="/pine-tales" style={{ color: '#333', textDecoration: 'none', fontSize: '14px', display: 'block', fontWeight: '500' }}>PINE TALES</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </li>

                                    {/* SERVICE APARTMENT */}
                                    <li
                                        onMouseEnter={() => setIsServiceDropdownOpen(true)}
                                        onMouseLeave={() => setIsServiceDropdownOpen(false)}
                                        onTouchStart={(e) => {
                                            e.stopPropagation();
                                            setIsServiceDropdownOpen(prev => !prev);
                                            setIsDropdownOpen(false);
                                            setIsRestaurantDropdownOpen(false);
                                        }}
                                        style={{
                                            position: 'relative',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '14px 12px',
                                            borderRight: '1px solid rgba(197, 165, 114, 0.3)',
                                            cursor: 'pointer',
                                            userSelect: 'none',
                                        }}
                                    >
                                        SERVICE APARTMENT

                                        {isServiceDropdownOpen && (
                                            <div
                                                onTouchStart={(e) => e.stopPropagation()}
                                                style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    paddingTop: '12px',
                                                    zIndex: 20,
                                                }}
                                            >
                                                <div style={{
                                                    backgroundColor: 'white',
                                                    borderRadius: '20px',
                                                    padding: '20px',
                                                    minWidth: '180px',
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                                }}>
                                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
                                                        <li><Link to="/catarina-services" style={{ color: '#333', textDecoration: 'none', fontSize: '14px', display: 'block', fontWeight: '500' }}>CATARINA</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </li>

                                    {/* RESTAURANTS */}
                                    <li
                                        onMouseEnter={() => setIsRestaurantDropdownOpen(true)}
                                        onMouseLeave={() => setIsRestaurantDropdownOpen(false)}
                                        onTouchStart={(e) => {
                                            e.stopPropagation();
                                            setIsRestaurantDropdownOpen(prev => !prev);
                                            setIsDropdownOpen(false);
                                            setIsServiceDropdownOpen(false);
                                        }}
                                        style={{
                                            position: 'relative',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '14px 12px',
                                            cursor: 'pointer',
                                            userSelect: 'none',
                                        }}
                                    >
                                        RESTAURANTS

                                        {isRestaurantDropdownOpen && (
                                            <div
                                                onTouchStart={(e) => e.stopPropagation()}
                                                style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    paddingTop: '12px',
                                                    zIndex: 20,
                                                }}
                                            >
                                                <div style={{
                                                    backgroundColor: 'white',
                                                    borderRadius: '20px',
                                                    padding: '20px',
                                                    minWidth: '180px',
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                                }}>
                                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
                                                        <li><Link to="/restaurants" style={{ color: '#333', textDecoration: 'none', fontSize: '14px', display: 'block', fontWeight: '500' }}>SOHEE'S KITCHEN</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </li>

                                </ul>
                            </nav>
                            <style>
                                {`
                                @keyframes fadeIn {
                                    from { opacity: 0; transform: translateX(-10px); }
                                    to { opacity: 1; transform: translateX(0); }
                                }
                            `}
                            </style>
                        </div>
                    )}
                </div>

                {/* Logo */}
                {showLogo && (
                    <div className="logo-container" style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '32px',
                        letterSpacing: '3px',
                        textAlign: 'center',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1, // Keep behind dropdowns but visible clearly
                        whiteSpace: 'nowrap' // Ensure logo doesn't wrap unnecessarily
                    }}>
                        SANDANE HOMES
                        <div style={{ fontSize: '10px', letterSpacing: '5px', marginTop: '-5px', color: '#C5A572' }}>★ ★ ★ ★ ★</div>
                    </div>
                )}

            </div>
        </header>
    );
};

export default Header;
