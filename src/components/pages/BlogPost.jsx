import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import BlogContent from '../BlogContent';
import { getBlogPost, getRelatedPosts } from '../../data/blogPosts';
import { FaWhatsapp, FaArrowLeft, FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';
import './Blog.css';
import './SandaneHomes.css';

const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const DEFAULT_OG_IMAGE = 'https://www.sandanehomes.com/residences-og.jpg';

const BlogPost = () => {
    const { slug } = useParams();
    const PHONE = '919711722273';
    const post = getBlogPost(slug);

    if (!post) {
        return (
            <div className="catarina-services sandane-homes-page">
                <SEO
                    title="Post Not Found | Sandane Homes Journal"
                    description="This blog post could not be found."
                    canonical="https://www.sandanehomes.com/blog"
                />
                <Header showTopBar={false} />
                <div style={{ padding: '160px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#1A3C34', marginBottom: '20px' }}>
                        Post Not Found
                    </h1>
                    <p style={{ color: '#666', fontSize: '17px', marginBottom: '36px' }}>
                        The article you're looking for doesn't exist or may have been moved.
                    </p>
                    <Link
                        to="/blog"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            backgroundColor: '#1A3C34', color: 'white',
                            padding: '14px 30px', borderRadius: '30px', fontWeight: '600',
                        }}
                    >
                        <FaArrowLeft /> Back to Journal
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const canonical = `https://www.sandanehomes.com/blog/${post.slug}`;
    const ogImage = post.coverImage
        ? (post.coverImage.startsWith('http') ? post.coverImage : `https://www.sandanehomes.com${post.coverImage}`)
        : DEFAULT_OG_IMAGE;

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: ogImage,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: { '@type': 'Organization', name: post.author || 'Sandane Homes' },
        publisher: {
            '@type': 'Organization',
            name: 'Sandane Homes',
            logo: { '@type': 'ImageObject', url: 'https://www.sandanehomes.com/logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        url: canonical,
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sandanehomes.com/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.sandanehomes.com/blog' },
            { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
        ],
    };

    const relatedPosts = getRelatedPosts(post.slug, 3);

    const heroBackgroundStyle = post.coverImage
        ? { backgroundImage: `url(${post.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : { background: post.coverGradient || '#1A3C34' };

    return (
        <div className="catarina-services sandane-homes-page">
            <SEO
                title={`${post.title} | Sandane Homes Journal`}
                description={post.excerpt}
                canonical={canonical}
                ogImage={ogImage}
                ogType="article"
                schema={[articleSchema, breadcrumbSchema]}
            />

            <Header showTopBar={false} />

            {/* ── HERO ── */}
            <div
                className="catarina-hero"
                style={{
                    ...heroBackgroundStyle,
                    padding: '140px 20px 90px',
                    minHeight: '58vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)' }} />

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>
                    <span
                        style={{
                            display: 'inline-block', backgroundColor: '#C5A572', color: '#fff',
                            fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase',
                            padding: '7px 16px', borderRadius: '20px', marginBottom: '22px',
                        }}
                    >
                        {post.category}
                    </span>
                    <h1 className="catarina-title" style={{ fontSize: '42px', lineHeight: '1.25', margin: 0 }}>
                        {post.title}
                    </h1>
                    {post.subtitle && (
                        <p style={{ fontSize: '18px', color: '#eee', maxWidth: '650px', margin: '18px auto 0', lineHeight: '1.7' }}>
                            {post.subtitle}
                        </p>
                    )}
                    <div style={{ display: 'flex', gap: '22px', justifyContent: 'center', marginTop: '24px', color: '#eee', fontSize: '14px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaRegCalendarAlt /> {formatDate(post.date)}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaRegClock /> {post.readTime}
                        </span>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <Link
                            to="/residences"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                backgroundColor: '#C5A572', color: '#1A3C34',
                                padding: '14px 32px', borderRadius: '30px',
                                textDecoration: 'none', fontSize: '16px', fontWeight: 'bold',
                                boxShadow: '0 4px 20px rgba(197,165,114,0.4)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#1A3C34'; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#C5A572'; e.currentTarget.style.color = '#1A3C34'; }}
                        >
                            Explore Luxury Residences &rarr;
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── BREADCRUMB ── */}
            <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', padding: '18px 20px' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '14px', color: '#888' }}>
                    <div>
                        <Link to="/" style={{ color: '#888' }}>Home</Link> <span style={{ margin: '0 8px' }}>/</span>
                        <Link to="/blog" style={{ color: '#888' }}>Blog</Link> <span style={{ margin: '0 8px' }}>/</span>
                        <span style={{ color: '#1A3C34', fontWeight: '600' }}>{post.title}</span>
                    </div>
                    <Link
                        to="/residences"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            color: '#C5A572', fontWeight: '700', textDecoration: 'none',
                            fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px'
                        }}
                    >
                        View Serviced Suites &rarr;
                    </Link>
                </div>
            </div>

            {/* ── CONTENT ── */}
            <div style={{ padding: '60px 20px 0', backgroundColor: '#fff' }}>
                <BlogContent blocks={post.content} />
            </div>

            {/* ── INLINE RESIDENCES BANNER CTA ── */}
            <div style={{ padding: '20px 20px 60px', backgroundColor: '#fff' }}>
                <div style={{
                    maxWidth: '760px', margin: '0 auto',
                    background: 'linear-gradient(135deg, #F5EFEB 0%, #E6DFD5 100%)',
                    borderRadius: '16px', padding: '36px 30px',
                    border: '1px solid #D5C7B5',
                    boxShadow: '0 8px 30px rgba(26,60,52,0.08)',
                    textAlign: 'center'
                }}>
                    <span style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '800' }}>
                        Sandane Homes Collection
                    </span>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#1A3C34', margin: '12px 0' }}>
                        Explore Our Luxury Serviced Residences
                    </h3>
                    <p style={{ color: '#555', fontSize: '15px', maxWidth: '560px', margin: '0 auto 24px', lineHeight: '1.6' }}>
                        Discover fully furnished, hotel-serviced 1BHK, 2BHK, and studio suites in Greater Noida's finest gated societies like Jaypee Greens &amp; Ansal Golf Links.
                    </p>
                    <Link
                        to="/residences"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            backgroundColor: '#1A3C34', color: '#fff',
                            padding: '14px 32px', borderRadius: '30px',
                            textDecoration: 'none', fontSize: '16px', fontWeight: '700',
                            boxShadow: '0 4px 15px rgba(26,60,52,0.2)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={e => { e.currentTarget.style.backgroundColor = '#C5A572'; e.currentTarget.style.color = '#1A3C34'; }}
                        onMouseOut={e => { e.currentTarget.style.backgroundColor = '#1A3C34'; e.currentTarget.style.color = '#fff'; }}
                    >
                        View All Available Residences &rarr;
                    </Link>
                </div>
            </div>

            {/* ── TAGS ── */}
            {post.tags && post.tags.length > 0 && (
                <div style={{ padding: '0 20px 80px', backgroundColor: '#fff' }}>
                    <div className="blog-card-tags" style={{ maxWidth: '760px', margin: '0 auto' }}>
                        {post.tags.map((tag) => (
                            <span key={tag} className="blog-card-tag-chip">{tag}</span>
                        ))}
                    </div>
                </div>
            )}

            {/* ── CTA ── */}
            <div style={{
                backgroundColor: '#1A3C34',
                padding: '90px 20px', textAlign: 'center', color: 'white'
            }}>
                <h2 style={{ fontSize: '34px', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>
                    Looking for a home in Greater Noida?
                </h2>
                <p style={{ fontSize: '17px', color: '#E0E0E0', marginBottom: '40px', maxWidth: '560px', margin: '0 auto 40px' }}>
                    Explore our collection of luxury residences or message our team on WhatsApp for instant assistance.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link
                        to="/residences"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            backgroundColor: '#C5A572', color: '#1A3C34',
                            padding: '16px 36px', borderRadius: '40px',
                            textDecoration: 'none', fontSize: '17px', fontWeight: 'bold',
                            transition: 'transform 0.3s, background-color 0.3s'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Explore Residences &rarr;
                    </Link>
                    <a
                        href={`https://wa.me/${PHONE}?text=Hello%2C%20I%20read%20your%20blog%20post%20and%20I%27d%20like%20to%20know%20more%20about%20housing%20in%20Greater%20Noida`}
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '12px',
                            backgroundColor: '#25D366', color: 'white',
                            padding: '16px 36px', borderRadius: '40px',
                            textDecoration: 'none', fontSize: '17px', fontWeight: 'bold',
                            transition: 'transform 0.3s'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <FaWhatsapp size={22} /> WhatsApp Us
                    </a>
                </div>
            </div>

            {/* ── RELATED POSTS ── */}
            {relatedPosts.length > 0 && (
                <div style={{ padding: '90px 20px', backgroundColor: '#f9f9f9' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ color: '#1A3C34', textAlign: 'center', marginBottom: '50px' }}>
                            More from the Journal
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                            {relatedPosts.map((p) => (
                                <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-card" style={{ textDecoration: 'none' }}>
                                    {p.coverImage ? (
                                        <img src={p.coverImage} alt={p.title} className="blog-card-image" loading="lazy" />
                                    ) : (
                                        <div className="blog-card-image" style={{ background: p.coverGradient || '#1A3C34' }} />
                                    )}
                                    <div className="blog-card-body">
                                        <span className="blog-card-tag">{p.category}</span>
                                        <h3 className="blog-card-title">{p.title}</h3>
                                        <p className="blog-card-excerpt">{p.excerpt}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default BlogPost;
