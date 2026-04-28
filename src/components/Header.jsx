import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ showTopBar = true, showNav = true, showLogo = true }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const [isRestaurantDropdownOpen, setIsRestaurantDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const shouldShowTopBar = showTopBar && location.pathname !== '/catarina-services';

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Info Row */}
            {shouldShowTopBar && (
                <div className="header-top-row">
                    <div>BB-28, Block B, Ansal Golf Link -1, Greater Noida, UP 201315</div>
                    <div className="header-contact-info">
                        <span>Tel: +91 9711722273</span>
                        <span>sandanehomes@gmail.com</span>
                    </div>
                </div>
            )}

            {/* Navbar Row */}
            <div className="header-nav-row">
                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>

                {/* Left Nav (Desktop) */}
                {showNav && (
                    <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <ul className="nav-list">
                            {/* HOTELS */}
                            <li
                                className="nav-item"
                                onMouseEnter={() => !isMobileMenuOpen && setIsDropdownOpen(true)}
                                onMouseLeave={() => !isMobileMenuOpen && setIsDropdownOpen(false)}
                                onClick={() => {
                                    if (window.innerWidth <= 1024) setIsDropdownOpen(!isDropdownOpen);
                                }}
                            >
                                <span className="nav-item-label">HOTELS</span>
                                {isDropdownOpen && (
                                    <div className="dropdown-container">
                                        <ul className="dropdown-list">
                                            <li><Link to="/sandane-homes" onClick={() => setIsMobileMenuOpen(false)}>SANDANE HOMES</Link></li>
                                            <li><Link to="/amara" onClick={() => setIsMobileMenuOpen(false)}>AMARA</Link></li>
                                            <li><Link to="/amaaltash" onClick={() => setIsMobileMenuOpen(false)}>AMAALTASH</Link></li>
                                            <li><Link to="/saffron" onClick={() => setIsMobileMenuOpen(false)}>SAFFRON</Link></li>
                                            <li><Link to="/pine-tales" onClick={() => setIsMobileMenuOpen(false)}>PINE TALES</Link></li>
                                            <li><Link to="/glam" onClick={() => setIsMobileMenuOpen(false)}>GLAM</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li>

                            {/* SERVICE APARTMENT */}
                            <li
                                className="nav-item"
                                onMouseEnter={() => !isMobileMenuOpen && setIsServiceDropdownOpen(true)}
                                onMouseLeave={() => !isMobileMenuOpen && setIsServiceDropdownOpen(false)}
                                onClick={() => {
                                    if (window.innerWidth <= 1024) setIsServiceDropdownOpen(!isServiceDropdownOpen);
                                }}
                            >
                                <span className="nav-item-label">SERVICE APARTMENT</span>
                                {isServiceDropdownOpen && (
                                    <div className="dropdown-container">
                                        <ul className="dropdown-list">
                                            <li><Link to="/catarina-services" onClick={() => setIsMobileMenuOpen(false)}>CATARINA</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li>

                            {/* RESTAURANTS */}
                            <li
                                className="nav-item nav-item-last"
                                onMouseEnter={() => !isMobileMenuOpen && setIsRestaurantDropdownOpen(true)}
                                onMouseLeave={() => !isMobileMenuOpen && setIsRestaurantDropdownOpen(false)}
                                onClick={() => {
                                    if (window.innerWidth <= 1024) setIsRestaurantDropdownOpen(!isRestaurantDropdownOpen);
                                }}
                            >
                                <span className="nav-item-label">RESTAURANTS</span>
                                {isRestaurantDropdownOpen && (
                                    <div className="dropdown-container">
                                        <ul className="dropdown-list">
                                            <li>
                                                <a href="https://soheeskitchen.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                                    SOHEE'S KITCHEN
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Logo */}
                {showLogo && (
                    <div className="logo-container">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span className="logo-text">SANDANE HOMES</span>
                            <div className="logo-stars">★ ★ ★ ★ ★</div>
                        </Link>
                    </div>
                )}
            </div>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}
        </header>
    );
};

export default Header;
