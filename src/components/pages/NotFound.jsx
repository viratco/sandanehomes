import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';

// Shown for any address that has no page. Vercel serves the homepage HTML for unknown
// paths (status 200), so without this Google saw them as copies of the homepage.
// `noindex` tells Google to drop them; the links send visitors somewhere useful.
const NotFound = () => (
  <div className="sandane-homes-page" style={{ minHeight: '100vh', background: '#FBF6EE' }}>
    <SEO
      title="Page not found | Sandane Homes"
      description="This page doesn't exist. Find our boutique hotels in Greater Noida and our furnished homes for expats in Gurugram and Greater Noida."
      noindex
    />
    <Header showTopBar={false} />
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '160px 20px 100px', textAlign: 'center' }}>
      <p style={{ color: '#9A7446', fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>Page not found</p>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 40px)', color: '#2E2119', margin: '16px 0 12px' }}>
        This page doesn’t exist
      </h1>
      <p style={{ color: '#5A4636', fontSize: 16, lineHeight: 1.7, margin: '0 0 32px' }}>
        It may have moved, or the address may have a typo. These will take you where you need to go:
      </p>
      <nav aria-label="Main pages" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {[
          ['/', 'Hotels in Greater Noida'],
          ['/residences', 'Residences for expats'],
          ['/residences/gurgaon', 'Our homes in Gurgaon'],
          ['/blog', 'Guides & blog'],
        ].map(([to, label]) => (
          <Link key={to} to={to} style={{ padding: '11px 20px', borderRadius: 40, border: '1px solid rgba(139, 94, 52, 0.45)', color: '#6B4423', fontWeight: 600, fontSize: 14, textDecoration: 'none', background: '#FFFDF8' }}>
            {label}
          </Link>
        ))}
      </nav>
    </main>
    <Footer />
  </div>
);

export default NotFound;
