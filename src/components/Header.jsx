import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = ({ showTopBar = true, showNav = true, showLogo = true }) => {
    const location = useLocation();
    const [isNavOpen, setIsNavOpen] = useState(false); // Default to closed (collapsible)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                        <span>Tel: +1 212 555 6688</span>
                        <span>Fax: +1 212 555 6699</span>
                        <span>booking@sandanehomes.com</span>
                    </div>
                </div>
            )}

            {/* Navbar Row */}
            <div className="container header-nav-row" style={{
                display: 'flex',
                justifyContent: 'center', // Center content when only logo is present, or space-between if nav exists
                alignItems: 'center',
                padding: '0 10px',
                position: 'relative' // For absolute positioning of logo center if we wanted, but flex is safer
            }}>
                {/* Left Nav */}
                {showNav && (
                    <div className="header-nav-links mobile-nav-visible" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px', // Reduced gap
                        position: 'absolute',
                        left: '10px',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        padding: '8px 15px', // Reduced padding
                        borderRadius: '30px',
                        backdropFilter: 'blur(5px)',
                        transition: 'all 0.3s ease' // Smooth transition for width change
                    }}>
                        <div
                            onClick={() => setIsNavOpen(!isNavOpen)}
                            style={{
                                width: '24px',
                                height: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                zIndex: 2
                            }}
                        >
                            <div style={{ height: '2px', background: 'white', width: '100%' }}></div>
                            <div style={{ height: '2px', background: 'white', width: '100%' }}></div>
                            <div style={{ height: '2px', background: 'white', width: '100%' }}></div>
                        </div>
                        {isNavOpen && (
                            <nav style={{ animation: 'fadeIn 0.3s ease' }}>
                                <ul style={{ display: 'flex', gap: '30px', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                                    <li><Link to="/#accommodations" style={{ color: 'inherit', textDecoration: 'none' }}>SERVICE APARTMENT</Link></li>

                                    {/* Dropdown for Accommodations */}
                                    <li
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                        style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                                    >
                                        <Link to="/#accommodations" style={{ color: 'inherit', textDecoration: 'none', padding: '10px 0' }}>
                                            ACCOMMODATIONS
                                        </Link>

                                        {isDropdownOpen && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '100%', // Start right below the link
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                paddingTop: '20px', // Create an invisible bridge for the cursor
                                                zIndex: 20,
                                            }}>
                                                <div style={{
                                                    backgroundColor: 'white',
                                                    borderRadius: '20px',
                                                    padding: '20px',
                                                    minWidth: '220px',
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                                }}>
                                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
                                                        <li><Link to="/catarina-services" style={{ color: '#333', textDecoration: 'none', fontSize: '14px', display: 'block', fontWeight: '500' }}>CATARINA SERVICES</Link></li>
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
                                </ul>
                            </nav>
                        )}
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

                {/* Logo */}
                {showLogo && (
                    <div className="logo-container" style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '32px',
                        letterSpacing: '3px',
                        textAlign: 'center',
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
