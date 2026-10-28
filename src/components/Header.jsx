import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

const Header = ({ showTopBar = true, showNav = true, showLogo = true, customPhone = null }) => {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const [isRestaurantDropdownOpen, setIsRestaurantDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Real language routing state
    const isJa = location.pathname === '/gurugram/japanese-expat-housing' || location.pathname.startsWith('/japanese');
    const isKo = location.pathname === '/gurugram/korean-expat-housing' || location.pathname.startsWith('/korean');
    const isEn = !isJa && !isKo;
    const englishReturnPath = (isJa || isKo) ? '/residences/gurgaon' : location.pathname;

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const shouldShowTopBar = showTopBar && location.pathname !== '/residences';

    return (
        <header className={`site-header ${(isScrolled || location.pathname !== '/') ? 'scrolled' : ''} ${location.pathname !== '/' ? 'is-subpage' : ''} ${location.pathname === '/residences' ? 'is-catarina' : ''}`}>
            {/* Top Info Row */}
            {shouldShowTopBar && (
                <div className="header-top-row">
                    <div>BB-28, Block B, Ansal Golf Link -1, Greater Noida, UP 201315</div>
                    <div className="header-contact-info">
                        <div className="header-translator">
                            <Link 
                                to="/gurugram/korean-expat-housing" 
                                className={`lang-btn ${isKo ? 'active' : ''}`}
                                aria-label="Korean Expat Housing"
                                title="Korean Expat Housing in Gurugram"
                            >
                                <span className="lang-flag">🇰🇷</span> 한국어
                            </Link>
                            <span className="lang-divider">|</span>
                            <Link 
                                to="/gurugram/japanese-expat-housing" 
                                className={`lang-btn ${isJa ? 'active' : ''}`}
                                aria-label="Japanese Expat Housing"
                                title="Japanese Expat Housing in Gurugram"
                            >
                                <span className="lang-flag">🇯🇵</span> 日本語
                            </Link>
                            <span className="lang-divider">|</span>
                            <Link 
                                to={englishReturnPath} 
                                className={`lang-btn ${isEn ? 'active' : ''}`}
                                aria-label="English"
                                title="English"
                            >
                                <span className="lang-flag">🇬🇧</span> EN
                            </Link>
                        </div>
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
                                <a href="/#our-luxury-hotels" className="nav-item-label" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>HOTELS</a>
                                {isDropdownOpen && (
                                    <div className="dropdown-container">
                                        <ul className="dropdown-list">
                                            <li><Link to="/sandane-homes" onClick={() => setIsMobileMenuOpen(false)}>SANDANE HOMES</Link></li>
                                            <li><Link to="/amara" onClick={() => setIsMobileMenuOpen(false)}>AMARA</Link></li>
                                            <li><Link to="/amaaltash" onClick={() => setIsMobileMenuOpen(false)}>AMAALTASH</Link></li>
                                            <li><Link to="/glam" onClick={() => setIsMobileMenuOpen(false)}>GLAM</Link></li>
                                            <li><Link to="/coco-house" onClick={() => setIsMobileMenuOpen(false)}>COCO HOUSE</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li>

                            {/* RESIDENCES */}
                            <li
                                className="nav-item"
                                onMouseEnter={() => !isMobileMenuOpen && setIsServiceDropdownOpen(true)}
                                onMouseLeave={() => !isMobileMenuOpen && setIsServiceDropdownOpen(false)}
                                onClick={() => {
                                    if (window.innerWidth <= 1024) setIsServiceDropdownOpen(!isServiceDropdownOpen);
                                }}
                            >
                                <Link to="/residences" className="nav-item-label" title="Residences by Sandane Homes" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>
                                    RESIDENCES
                                </Link>
                                {isServiceDropdownOpen && (
                                    <div className="dropdown-container">
                                        <ul className="dropdown-list">
                                            <li><Link to="/residences" title="Residences by Sandane Homes" onClick={() => setIsMobileMenuOpen(false)}>RESIDENCES BY SANDANE HOMES</Link></li>
                                            <li><Link to="/gurugram-corporate-housing" onClick={() => setIsMobileMenuOpen(false)}>GURUGRAM CORPORATE HOUSING</Link></li>
                                            <li><Link to="/gurugram/japanese-expat-housing" onClick={() => setIsMobileMenuOpen(false)}>JAPANESE EXPAT HOUSING</Link></li>
                                            <li><Link to="/serviced-apartments-greater-noida" onClick={() => setIsMobileMenuOpen(false)}>GREATER NOIDA APARTMENTS</Link></li>
                                            <li><Link to="/residences/relocation" onClick={() => setIsMobileMenuOpen(false)}>RELOCATION SERVICES</Link></li>
                                            <li><Link to="/partner-with-us" onClick={() => setIsMobileMenuOpen(false)}>PARTNER WITH US (MONETIZE)</Link></li>
                                            <li><Link to="/partner/apply" onClick={() => setIsMobileMenuOpen(false)}>PARTNER ONBOARDING FORM</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li>

                            {/* BLOG */}
                            <li className="nav-item">
                                <Link to="/blog" className="nav-item-label" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>
                                    BLOG
                                </Link>
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
                                <a href="https://soheeskitchen.com" target="_blank" rel="noopener noreferrer" className="nav-item-label" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>
                                    RESTAURANTS
                                </a>
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
                        
                        {/* Mobile Translator */}
                        <div className="mobile-translator">
                            <span className="mobile-translator-label">Language / 言語 / 언어</span>
                            <div className="mobile-translator-buttons">
                                <Link 
                                    to="/gurugram/korean-expat-housing" 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`mobile-lang-btn ${isKo ? 'active' : ''}`}
                                    aria-label="Korean Expat Housing"
                                >
                                    <span className="lang-flag">🇰🇷</span> 한국어
                                </Link>
                                <Link 
                                    to="/gurugram/japanese-expat-housing" 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`mobile-lang-btn ${isJa ? 'active' : ''}`}
                                    aria-label="Japanese Expat Housing"
                                >
                                    <span className="lang-flag">🇯🇵</span> 日本語
                                </Link>
                                <Link 
                                    to={englishReturnPath} 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`mobile-lang-btn ${isEn ? 'active' : ''}`}
                                    aria-label="English"
                                >
                                    <span className="lang-flag">🇬🇧</span> English
                                </Link>
                            </div>
                        </div>
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

                {/* Right Info (Custom Phone & Translator) */}
                <div className="header-right-info" style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Hidden at ≤1024px via Header.css */}
                    {!shouldShowTopBar && (
                        <div className="desktop-nav-translator">
                            <Link to="/gurugram/korean-expat-housing" className={`lang-btn ${isKo ? 'active' : ''}`} aria-label="Korean Expat Housing"><span className="lang-flag">🇰🇷</span> KR</Link>
                            <span className="lang-divider">|</span>
                            <Link to="/gurugram/japanese-expat-housing" className={`lang-btn ${isJa ? 'active' : ''}`} aria-label="Japanese Expat Housing"><span className="lang-flag">🇯🇵</span> JP</Link>
                            <span className="lang-divider">|</span>
                            <Link to={englishReturnPath} className={`lang-btn ${isEn ? 'active' : ''}`} aria-label="English"><span className="lang-flag">🇬🇧</span> EN</Link>
                        </div>
                    )}
                    {customPhone && (
                        <a href={`tel:${customPhone.replace(/\s/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            Tel: {customPhone}
                        </a>
                    )}
                </div>
            </div>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}
        </header>
    );
};

export default Header;
