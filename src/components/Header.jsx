
import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ showTopBar = true, showNav = true, showLogo = true }) => {
    const location = useLocation();
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
                    <div className="header-nav-links mobile-nav-visible" style={{ display: 'flex', alignItems: 'center', gap: '40px', position: 'absolute', left: '10px' }}>
                        <div style={{ width: '24px', height: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
                            <div style={{ height: '2px', background: 'white', width: '100%' }}></div>
                            <div style={{ height: '2px', background: 'white', width: '100%' }}></div>
                            <div style={{ height: '2px', background: 'white', width: '100%' }}></div>
                        </div>
                        <nav>
                            <ul style={{ display: 'flex', gap: '30px', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', listStyle: 'none', margin: 0, padding: 0 }}>

                                <li><a href="/#service-apartments" style={{ color: 'inherit', textDecoration: 'none' }}>SERVICE APARTMENT</a></li>
                                <li><a href="/#accommodations" style={{ color: 'inherit', textDecoration: 'none' }}>ACCOMMODATIONS</a></li>
                            </ul>
                        </nav>
                    </div>
                )}

                {/* Logo */}
                {showLogo && (
                    <div className="logo-container" style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '32px',
                        letterSpacing: '3px',
                        textAlign: 'center',
                        // No flex: 1 needed if we use absolute for others, or we need to balance it.
                        // If nav is hidden, we want logo centered.
                        // If nav is shown, the current layout used space-between.
                        // Let's use absolute positioning for left/right elements to guarantee center logo?
                        // Or keep space-between if nav is there.
                        // Implementation choice: Use absolute left/right for nav items to keep Logo perfectly centered in all cases?
                        // The previous code used flex space-between.
                        // Let's stick to flex but make it conditionally behave.
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
