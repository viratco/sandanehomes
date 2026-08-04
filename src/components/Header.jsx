import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ showTopBar = true, showNav = true, showLogo = true, customPhone = null }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const [isRestaurantDropdownOpen, setIsRestaurantDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Helper to get cookie value
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    // State for the current language
    const [currentLang, setCurrentLang] = useState(() => {
        const cookieVal = getCookie('googtrans');
        if (cookieVal) {
            const parts = cookieVal.split('/');
            const code = parts[parts.length - 1];
            if (['ko', 'ja', 'en'].includes(code)) {
                return code;
            }
        }
        return 'en';
    });

    // Handle language selection
    const changeLanguage = (lang) => {
        const hostname = window.location.hostname;
        const cookieVal = `/en/${lang}`;

        const deleteCookie = (name, path, domain) => {
            let str = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
            if (domain) str += `; domain=${domain}`;
            document.cookie = str;
        };

        deleteCookie('googtrans', '/');
        deleteCookie('googtrans', '/', hostname);
        if (hostname.includes('.')) {
            const domainParts = hostname.split('.');
            if (domainParts.length >= 2) {
                const mainDomain = `.${domainParts.slice(-2).join('.')}`;
                deleteCookie('googtrans', '/', mainDomain);
            }
        }

        document.cookie = `googtrans=${cookieVal}; path=/;`;

        if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
            const domainParts = hostname.split('.');
            if (domainParts.length >= 2) {
                const mainDomain = `.${domainParts.slice(-2).join('.')}`;
                document.cookie = `googtrans=${cookieVal}; path=/; domain=${mainDomain};`;
            }
        }

        setCurrentLang(lang);

        if (lang === 'ko' || lang === 'ja') {
            if (window.location.pathname.toLowerCase() !== '/residences') {
                window.location.href = '/residences';
                return;
            }
        }

        window.location.reload();
    };

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
                            <button 
                                onClick={() => changeLanguage('ko')} 
                                className={`lang-btn ${currentLang === 'ko' ? 'active' : ''}`}
                                aria-label="Translate to Korean"
                            >
                                <span className="lang-flag">🇰🇷</span> 한국어
                            </button>
                            <span className="lang-divider">|</span>
                            <button 
                                onClick={() => changeLanguage('ja')} 
                                className={`lang-btn ${currentLang === 'ja' ? 'active' : ''}`}
                                aria-label="Translate to Japanese"
                            >
                                <span className="lang-flag">🇯🇵</span> 日本語
                            </button>
                            <span className="lang-divider">|</span>
                            <button 
                                onClick={() => changeLanguage('en')} 
                                className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                                aria-label="Translate to English"
                            >
                                <span className="lang-flag">🇬🇧</span> EN
                            </button>
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
                                <Link to="/residences" className="nav-item-label" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>
                                    RESIDENCES
                                </Link>
                                {isServiceDropdownOpen && (
                                    <div className="dropdown-container">
                                        <ul className="dropdown-list">
                                            <li><Link to="/residences" onClick={() => setIsMobileMenuOpen(false)}>RESIDENCES BY SANDANE</Link></li>
                                            <li><Link to="/residences/relocation" onClick={() => setIsMobileMenuOpen(false)}>RELOCATION SERVICES</Link></li>
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
                        
                        {/* Mobile Translator */}
                        <div className="mobile-translator">
                            <span className="mobile-translator-label">Translate Site</span>
                            <div className="mobile-translator-buttons">
                                <button 
                                    onClick={() => changeLanguage('ko')} 
                                    className={`mobile-lang-btn ${currentLang === 'ko' ? 'active' : ''}`}
                                    aria-label="Translate to Korean"
                                >
                                    <span className="lang-flag">🇰🇷</span> 한국어
                                </button>
                                <button 
                                    onClick={() => changeLanguage('ja')} 
                                    className={`mobile-lang-btn ${currentLang === 'ja' ? 'active' : ''}`}
                                    aria-label="Translate to Japanese"
                                >
                                    <span className="lang-flag">🇯🇵</span> 日本語
                                </button>
                                <button 
                                    onClick={() => changeLanguage('en')} 
                                    className={`mobile-lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                                    aria-label="Translate to English"
                                >
                                    <span className="lang-flag">🇬🇧</span> English
                                </button>
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
                    {!shouldShowTopBar && window.innerWidth > 1024 && (
                        <div className="desktop-nav-translator">
                            <button onClick={() => changeLanguage('ko')} className={`lang-btn ${currentLang === 'ko' ? 'active' : ''}`} aria-label="Translate to Korean"><span className="lang-flag">🇰🇷</span> KR</button>
                            <span className="lang-divider">|</span>
                            <button onClick={() => changeLanguage('ja')} className={`lang-btn ${currentLang === 'ja' ? 'active' : ''}`} aria-label="Translate to Japanese"><span className="lang-flag">🇯🇵</span> JP</button>
                            <span className="lang-divider">|</span>
                            <button onClick={() => changeLanguage('en')} className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`} aria-label="Translate to English"><span className="lang-flag">🇬🇧</span> EN</button>
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
