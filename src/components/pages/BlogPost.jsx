import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import BlogContent from '../BlogContent';
import { getBlogPost, getRelatedPosts } from '../../data/blogPosts';
import { FaWhatsapp, FaArrowLeft, FaRegClock, FaRegCalendarAlt, FaChevronDown } from 'react-icons/fa';
import './Blog.css';
import './SandaneHomes.css';

const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const DEFAULT_OG_IMAGE = 'https://www.sandanehomes.com/residences-og.jpg';

const PROPERTY_REDIRECTS = {
    'amaaltash-by-sandane-homes-ihe-2026-exhibitor-hotel-booking-guide': '/amaaltash',
    'amaaltash-by-sandane-homes-group-stay-hospitality-delegates-ihe-expo-mart': '/amaaltash',
    'amaaltash-by-sandane-homes-executive-hotel-rooms-kitchenette-ihe-2026': '/amaaltash',
    'amaaltash-by-sandane-homes-vs-5-star-hotels-ihe-2026-expo-mart': '/amaaltash',
    'amaaltash-by-sandane-homes-early-check-in-gst-billing-ihe-2026': '/amaaltash',
    'residences-by-sandane-homes-korean-expat-housing-greater-noida': '/residences',
    'residences-by-sandane-homes-japanese-expat-housing-greater-noida': '/residences',
    'residences-by-sandane-homes-serviced-apartments-near-india-expo-mart': '/residences',
    'residences-by-sandane-homes-luxury-villas-ansal-golf-links-greater-noida': '/residences',
    'residences-by-sandane-homes-long-stay-extended-stay-apartments-noida-expressway': '/residences',
    'residences-by-sandane-homes-vs-5-star-hotels-corporate-stays-greater-noida': '/residences',
    'amaaltash-sandane-homes-boutique-hotel-ansal-golf-links-greater-noida': '/amaaltash',
    'the-glam-sandane-homes-boutique-hotel-ansal-golf-links-greater-noida': '/glam',
    'residences-by-sandane-homes-luxury-serviced-apartments-greater-noida': '/residences',
    'residences-by-sandane-homes-expat-housing-ansal-golf-links-greater-noida': '/residences',
    'residences-by-sandane-homes-corporate-serviced-apartments-long-stay': '/residences',
    'residences-by-sandane-homes-furnished-2bhk-3bhk-apartments-near-pari-chowk': '/residences',
    'residences-by-sandane-homes-relocation-housing-surajpur-yamuna-expressway': '/residences',
    'coco-house-sandane-homes-boutique-hotel-near-india-expo-mart': '/coco-house',
    'coco-house-sandane-homes-group-accommodation-for-trade-exhibitors': '/coco-house',
    'coco-house-sandane-homes-hotel-near-pari-chowk-greater-noida': '/coco-house',
    'coco-house-sandane-homes-budget-luxury-hotel-knowledge-park': '/coco-house',
    'coco-house-sandane-homes-long-stay-corporate-guest-house': '/coco-house',
    'sandane-homes-luxury-suites-greater-noida-ansal-golf-links': '/sandane-homes',
    'amaaltash-hotel-near-surajpur-industrial-area-greater-noida': '/amaaltash',
    'the-glam-luxury-stay-near-noida-international-airport-corridor': '/glam',
    'amara-inn-hotel-near-yamuna-expressway-industrial-hub': '/amara',
    'coco-house-corporate-team-housing-greater-noida': '/coco-house',
    'hotels-near-auto-expo-2026-india-expo-mart-greater-noida': '/#our-luxury-hotels',
    'hotels-near-noida-expo-centre-sector-62-greater-noida-corridor': '/#our-luxury-hotels',
    'best-boutique-hotels-in-greater-noida-with-kitchenette-wifi': '/#our-luxury-hotels',
    'serviced-apartments-vs-hotels-near-india-expo-mart-greater-noida': '/residences',
    'hotels-near-galgotias-university-sharda-university-knowledge-park': '/#our-luxury-hotels',
    'sandane-homes-luxury-hotel-near-india-expo-mart-gate-1': '/sandane-homes',
    'amaaltash-hotel-near-knowledge-park-2-expo-mart-greater-noida': '/amaaltash',
    'the-glam-boutique-hotel-near-pari-chowk-expo-mart': '/glam',
    'amara-inn-corporate-hotel-extended-stay-expo-mart': '/amara',
    'coco-house-group-booking-hotel-single-gst-expo-mart': '/coco-house',
    'hotels-near-ihgf-delhi-fair-2026-india-expo-mart': '/#our-luxury-hotels',
    'hotels-near-elecrama-2026-india-expo-mart-greater-noida': '/#our-luxury-hotels',
    'hotels-near-renewable-energy-india-expo-rei-2026': '/#our-luxury-hotels',
    'hotels-near-cphi-pmec-india-2026-greater-noida': '/#our-luxury-hotels',
    'hotels-5-minutes-from-india-expo-mart-greater-noida': '/#our-luxury-hotels',
    'sandane-homes-luxury-hotel-near-ihe-2026-greater-noida': '/sandane-homes',
    'amaaltash-hotel-near-ihe-2026-india-expo-mart-greater-noida': '/amaaltash',
    'the-glam-boutique-hotel-near-ihe-2026-greater-noida': '/glam',
    'amara-inn-hotel-near-ihe-2026-india-expo-mart-greater-noida': '/amara',
    'coco-house-hotel-near-ihe-2026-india-expo-mart-greater-noida': '/coco-house',
    'hotels-near-ihe-2026-india-international-hospitality-expo': '/#our-luxury-hotels',
    'extended-stay-hotel-greater-noida-amara-inn': '/amara',
    'boutique-hotel-greater-noida-the-glam': '/glam',
    'group-booking-hotel-near-india-expo-mart': '/#our-luxury-hotels',
    'the-glam-luxury-hotel-near-india-expo-mart-greater-noida': '/glam',
    'the-glam-boutique-hotel-near-pari-chowk-greater-noida': '/glam',
    'amara-inn-corporate-hotel-near-india-expo-mart-greater-noida': '/amara',
    'amara-inn-hotel-near-pari-chowk-metro-station-greater-noida': '/amara',
    'coco-house-boutique-hotel-near-india-expo-mart-greater-noida': '/coco-house',
    'coco-house-hotel-near-pari-chowk-greater-noida': '/coco-house',
    'amaaltash-hotel-near-india-expo-mart-greater-noida': '/amaaltash',
    'saffron-inn-hotel-near-india-expo-mart-greater-noida': '/saffron',
    'coco-house-hotel-near-india-expo-mart-greater-noida': '/coco-house',
    'pine-tales-hotel-near-india-expo-mart-greater-noida': '/pine-tales',
    'glam-hotel-near-india-expo-mart-greater-noida': '/glam',
    'amara-inn-hotel-near-india-expo-mart-greater-noida': '/amara',
    'hotels-near-knowledge-park-greater-noida': '/#our-luxury-hotels',
    'hotels-near-pari-chowk-greater-noida': '/#our-luxury-hotels',
    'surajpur-industrial-area-corporate-housing-greater-noida': '/residences',
    'frro-address-verification-noida-greater-noida-guide': '/residences',
    'serviced-apartments-with-kitchen-greater-noida': '/residences',
    'safe-places-to-stay-greater-noida-female-travellers': '/#our-luxury-hotels',
    'serviced-apartments-near-yamuna-expressway-industrial-hubs': '/residences',
    'noida-international-airport-greater-noida-corporate-stay': '/#our-luxury-hotels',
    'corporate-guest-house-vs-serviced-apartments-greater-noida': '/residences',
    'hotels-serviced-apartments-near-india-expo-mart-greater-noida': '/residences',
    'japanese-korean-expat-housing-greater-noida': '/residences',
    'best-gated-communities-expats-greater-noida': '/residences',
    'why-greater-noida-is-best-for-expats': '/residences',
    'furnished-vs-unfurnished-apartments-expats': '/residences',
    'frro-registration-guide-expats-india': '/residences',
    'hotels-near-india-expo-centre-greater-noida': '/#our-luxury-hotels',
    'serviced-apartments-greater-noida-for-corporate-and-expats': '/residences',
    'korean-and-japanese-friendly-serviced-apartments-in-greater-noida': '/residences',
    'where-to-stay-in-greater-noida-complete-travel-guide': '/#our-luxury-hotels',
    'da-nuoyida-fuwushi-gongyu-zhinan': '/residences',
    'weiwo-oppo-yuangong-zhusu-zhinan': '/residences',
    'yindu-frro-dengji-zhongguo-gongmin-zhinan': '/residences',
    'yindu-shenghuo-zhongguo-yuangong': '/residences',
    'da-nuoyida-changzhu-gongyu-vs-jiudian': '/residences',
};

const BlogPost = () => {
    const { slug } = useParams();
    const PHONE = '919711722273';
    const post = getBlogPost(slug);
    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    React.useEffect(() => {
        if (PROPERTY_REDIRECTS[slug]) {
            window.location.replace(PROPERTY_REDIRECTS[slug]);
        } else if (
            slug.includes('residences') ||
            slug.includes('expat') ||
            slug.includes('serviced-apartment') ||
            post?.category === 'Expat Housing' ||
            post?.category === 'Corporate Stays'
        ) {
            window.location.replace('/residences');
        }
    }, [slug, post]);

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

    const isZh = post.lang === 'zh-CN' || post.lang === 'zh';
    const canonical = isZh 
        ? `https://www.sandanehomes.com/zh/${post.slug}`
        : `https://www.sandanehomes.com/blog/${post.slug}`;

    const ogImage = post.coverImage
        ? (post.coverImage.startsWith('http') ? post.coverImage : `https://www.sandanehomes.com${post.coverImage}`)
        : DEFAULT_OG_IMAGE;

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription || post.excerpt,
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
            { '@type': 'ListItem', position: 1, name: isZh ? '首页' : 'Home', item: 'https://www.sandanehomes.com/' },
            { '@type': 'ListItem', position: 2, name: isZh ? '博客' : 'Blog', item: 'https://www.sandanehomes.com/blog' },
            { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
        ],
    };

    const faqSchema = post.faqs && post.faqs.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    } : null;

    const relatedPosts = getRelatedPosts(post.slug, 3);

    const heroBackgroundStyle = post.coverImage
        ? { backgroundImage: `url(${post.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : { background: post.coverGradient || '#1A3C34' };

    const hreflang = isZh ? [
        { lang: 'zh-CN', href: canonical },
        { lang: 'zh', href: canonical },
        { lang: 'en', href: `https://www.sandanehomes.com/blog/${post.slug}` },
        { lang: 'x-default', href: canonical }
    ] : [
        { lang: 'en', href: canonical },
        { lang: 'x-default', href: canonical }
    ];

    const schemas = [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

    return (
        <div className="catarina-services sandane-homes-page">
            <SEO
                title={post.metaTitle || `${post.title} | Sandane Homes`}
                description={post.metaDescription || post.excerpt}
                canonical={canonical}
                ogImage={ogImage}
                ogType="article"
                lang={post.lang || 'en'}
                hreflang={hreflang}
                schema={schemas}
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
                            <FaRegCalendarAlt /> {post.date}
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
                            {isZh ? '探索大诺伊达精选高级公寓 \u2192' : 'Explore Luxury Residences \u2192'}
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── BREADCRUMB ── */}
            <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', padding: '18px 20px' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '14px', color: '#888' }}>
                    <div>
                        <Link to="/" style={{ color: '#888' }}>{isZh ? '首页' : 'Home'}</Link> <span style={{ margin: '0 8px' }}>/</span>
                        <Link to="/blog" style={{ color: '#888' }}>{isZh ? '博客文章' : 'Blog'}</Link> <span style={{ margin: '0 8px' }}>/</span>
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
                        {isZh ? '查看精选公寓房源 \u2192' : 'View Serviced Suites \u2192'}
                    </Link>
                </div>
            </div>

            {/* ── CONTENT ── */}
            <div style={{ padding: '60px 20px 0', backgroundColor: '#fff' }}>
                <BlogContent blocks={post.content} />
            </div>

            {/* ── INLINE RESIDENCES BANNER CTA ── */}
            <div style={{ padding: '20px 20px 40px', backgroundColor: '#fff' }}>
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
                        {isZh ? '探索 Sandane Homes 奢华服务式公寓' : 'Explore Our Luxury Serviced Residences'}
                    </h3>
                    <p style={{ color: '#555', fontSize: '15px', maxWidth: '560px', margin: '0 auto 24px', lineHeight: '1.6' }}>
                        {isZh
                            ? '为您打造的全套家具、每日保洁、具备完整烹饪设施的 1BHK、2BHK 及独立套房。位于 Jaypee Greens 与 Ansal Golf Links 等高端门禁社区。'
                            : 'Discover fully furnished, hotel-serviced 1BHK, 2BHK, and studio suites in Greater Noida\'s finest gated societies like Jaypee Greens & Ansal Golf Links.'}
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
                        {isZh ? '查看所有可预订房源 \u2192' : 'View All Available Residences \u2192'}
                    </Link>
                </div>
            </div>

            {/* ── FAQ ACCORDION SECTION ── */}
            {post.faqs && post.faqs.length > 0 && (
                <div style={{ padding: '50px 20px 60px', backgroundColor: '#FAF8F5', borderTop: '1px solid #EAE5DC', borderBottom: '1px solid #EAE5DC' }}>
                    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                            <span style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C5A572', fontWeight: '800' }}>
                                {isZh ? '常见问题解答' : 'Frequently Asked Questions'}
                            </span>
                            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '30px', color: '#1A3C34', marginTop: '8px' }}>
                                {isZh ? '关于本文内容的常见疑问' : 'Questions Related to This Article'}
                            </h2>
                            <div style={{ width: '40px', height: '3px', backgroundColor: '#C5A572', margin: '12px auto 0', borderRadius: '2px' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {post.faqs.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: '#ffffff',
                                            borderRadius: '14px',
                                            border: '1px solid #E6E1D7',
                                            boxShadow: isOpen ? '0 6px 20px rgba(26,60,52,0.06)' : '0 2px 6px rgba(0,0,0,0.02)',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <button
                                            onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                            style={{
                                                width: '100%',
                                                padding: '18px 22px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                textAlign: 'left',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                outline: 'none',
                                                gap: '16px'
                                            }}
                                        >
                                            <span style={{ fontSize: '16px', fontWeight: '700', color: '#1A3C34', lineHeight: '1.4' }}>
                                                {faq.question}
                                            </span>
                                            <span style={{
                                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                                width: '28px', height: '28px', borderRadius: '50%',
                                                backgroundColor: isOpen ? '#1A3C34' : '#F0ECE4',
                                                color: isOpen ? '#C5A572' : '#1A3C34',
                                                flexShrink: 0,
                                                transition: 'all 0.3s ease',
                                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                            }}>
                                                <FaChevronDown size={12} />
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div style={{
                                                padding: '0 22px 20px',
                                                color: '#4A5568',
                                                fontSize: '15px',
                                                lineHeight: '1.7',
                                                borderTop: '1px solid #F0ECE4',
                                                paddingTop: '14px',
                                                backgroundColor: '#FFFCF9'
                                            }}>
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* ── TAGS ── */}
            {post.tags && post.tags.length > 0 && (
                <div style={{ padding: '50px 20px 60px', backgroundColor: '#fff' }}>
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
                    {isZh ? '正在寻找大诺伊达的理想居所？' : 'Looking for a home in Greater Noida?'}
                </h2>
                <p style={{ fontSize: '17px', color: '#E0E0E0', marginBottom: '40px', maxWidth: '560px', margin: '0 auto 40px' }}>
                    {isZh
                        ? '探索我们的豪华住宅系列，或通过微信 / WhatsApp 联系我们的专属团队获得即时协助。'
                        : 'Explore our collection of luxury residences or message our team on WhatsApp for instant assistance.'}
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
                        {isZh ? '查看精选房源 \u2192' : 'Explore Residences \u2192'}
                    </Link>
                    <a
                        href={`https://wa.me/${PHONE}?text=${encodeURIComponent(isZh ? '您好，我了解了贵司大诺伊达服务式公寓博客，想咨询外派住宿预订。' : 'Hello, I read your blog post and I would like to know more about housing in Greater Noida')}`}
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
                        <FaWhatsapp size={22} /> {isZh ? '微信 / WhatsApp 咨询' : 'WhatsApp Us'}
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
