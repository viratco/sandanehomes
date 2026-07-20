import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import heroBg from '../../assets/hero-bg.webp';
import { blogPosts } from '../../data/blogPosts';
import './Blog.css';
import './SandaneHomes.css';

const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const BlogList = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = useMemo(() => {
        const unique = Array.from(new Set(blogPosts.map((p) => p.category)));
        return ['All', ...unique];
    }, []);

    const posts = useMemo(() => {
        const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
        return activeCategory === 'All' ? sorted : sorted.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Sandane Homes Journal',
        url: 'https://www.sandanehomes.com/blog',
        description:
            'Relocation guides, neighbourhood insights, and practical advice for expats and corporate professionals moving to Greater Noida and Delhi NCR.',
        blogPost: blogPosts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: `https://www.sandanehomes.com/blog/${p.slug}`,
            datePublished: new Date(p.date).toISOString(),
        })),
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sandanehomes.com/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.sandanehomes.com/blog' },
        ],
    };

    return (
        <div className="catarina-services sandane-homes-page">
            <SEO
                title="The Sandane Journal | Relocation Guides & Living in Greater Noida"
                description="Practical guides on expat relocation, neighbourhood life, and corporate housing in Greater Noida & Delhi NCR — from the team at Sandane Homes."
                canonical="https://www.sandanehomes.com/blog"
                ogImage="https://www.sandanehomes.com/residences-og.jpg"
                schema={[blogSchema, breadcrumbSchema]}
            />

            <Header showTopBar={false} />

            {/* ── HERO ── */}
            <div
                className="catarina-hero"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '120px 20px',
                    minHeight: '62vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)' }} />

                <p
                    style={{
                        position: 'relative', zIndex: 2,
                        fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase',
                        color: '#C5A572', fontWeight: '700', marginBottom: '18px',
                    }}
                >
                    The Sandane Journal
                </p>
                <h1 className="catarina-title" style={{ position: 'relative', zIndex: 2, maxWidth: '820px', margin: '0 auto', fontSize: '48px', lineHeight: '1.2' }}>
                    Guides &amp; Stories for Life in Greater Noida
                </h1>
                <p style={{ position: 'relative', zIndex: 2, fontSize: '18px', color: '#eee', maxWidth: '650px', margin: '20px auto 30px', lineHeight: '1.7' }}>
                    Relocation advice, neighbourhood insights, and practical tips for expats and professionals settling into Delhi NCR.
                </p>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <Link
                        to="/residences"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            backgroundColor: '#C5A572', color: '#1A3C34',
                            padding: '14px 32px', borderRadius: '30px',
                            textDecoration: 'none', fontSize: '16px', fontWeight: 'bold',
                            boxShadow: '0 4px 20px rgba(197,165,114,0.4)',
                            transition: 'all 0.3s'
                        }}
                        onMouseOver={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#1A3C34'; }}
                        onMouseOut={e => { e.currentTarget.style.backgroundColor = '#C5A572'; e.currentTarget.style.color = '#1A3C34'; }}
                    >
                        Browse All Serviced Residences &rarr;
                    </Link>
                </div>
            </div>

            {/* ── FILTER + GRID ── */}
            <div style={{ padding: '80px 20px 100px', backgroundColor: '#f9f9f9' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {categories.length > 2 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '50px' }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`blog-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {posts.length === 0 ? (
                        <p style={{ textAlign: 'center', color: '#777', fontSize: '17px', padding: '40px 0' }}>
                            No posts in this category yet — check back soon.
                        </p>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                            {posts.map((post) => (
                                <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card" style={{ textDecoration: 'none' }}>
                                    {post.coverImage ? (
                                        <img src={post.coverImage} alt={post.title} className="blog-card-image" loading="lazy" />
                                    ) : (
                                        <div className="blog-card-image" style={{ background: post.coverGradient || '#1A3C34' }} />
                                    )}
                                    <div className="blog-card-body">
                                        <span className="blog-card-tag">{post.category}</span>
                                        <h2 className="blog-card-title">{post.title}</h2>
                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                        <div className="blog-card-meta">
                                            <span>{formatDate(post.date)}</span>
                                            <span>&middot;</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* PROMO BANNER TO RESIDENCES */}
                    <div style={{
                        marginTop: '70px', backgroundColor: '#1A3C34', borderRadius: '16px',
                        padding: '44px 30px', textAlign: 'center', color: '#fff',
                        boxShadow: '0 10px 30px rgba(26,60,52,0.15)'
                    }}>
                        <span style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '800' }}>
                            Sandane Homes Portfolio
                        </span>
                        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#fff', margin: '14px 0 16px' }}>
                            Find Your Ideal Serviced Suite in Greater Noida
                        </h2>
                        <p style={{ fontSize: '16px', color: '#E0E0E0', maxWidth: '600px', margin: '0 auto 28px', lineHeight: '1.7' }}>
                            Explore fully furnished 1BHK, 2BHK, and studio residences in gated communities with 24/7 security, daily housekeeping, and full corporate amenities.
                        </p>
                        <Link
                            to="/residences"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                backgroundColor: '#C5A572', color: '#1A3C34',
                                padding: '16px 40px', borderRadius: '35px',
                                textDecoration: 'none', fontSize: '17px', fontWeight: 'bold',
                                boxShadow: '0 4px 20px rgba(197,165,114,0.4)',
                                transition: 'all 0.3s'
                            }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#1A3C34'; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#C5A572'; e.currentTarget.style.color = '#1A3C34'; }}
                        >
                            Explore Residences &rarr;
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogList;
