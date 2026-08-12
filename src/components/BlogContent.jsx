import React from 'react';

/* Renders the block-based content array used in src/data/blogPosts.js */
const BlogContent = ({ blocks = [] }) => {
    return (
        <div className="blog-prose">
            {blocks.map((block, i) => {
                switch (block.type) {
                    case 'heading':
                        return (
                            <h2 key={i} className="blog-prose-heading" dangerouslySetInnerHTML={{ __html: block.text }} />
                        );
                    case 'subheading':
                        return (
                            <h3 key={i} className="blog-prose-subheading" dangerouslySetInnerHTML={{ __html: block.text }} />
                        );
                    case 'list':
                        return (
                            <ul key={i} className="blog-prose-list">
                                {block.items.map((item, j) => (
                                    <li key={j} dangerouslySetInnerHTML={{ __html: typeof item === 'string' ? item : item.html || item.text }} />
                                ))}
                            </ul>
                        );
                    case 'orderedList':
                        return (
                            <ol key={i} className="blog-prose-list blog-prose-list-ordered">
                                {block.items.map((item, j) => (
                                    <li key={j} dangerouslySetInnerHTML={{ __html: typeof item === 'string' ? item : item.html || item.text }} />
                                ))}
                            </ol>
                        );
                    case 'quote':
                        return (
                            <blockquote key={i} className="blog-prose-quote">
                                <p dangerouslySetInnerHTML={{ __html: block.text }} />
                                {block.attribution && <cite>{block.attribution}</cite>}
                            </blockquote>
                        );
                    case 'note':
                        return (
                            <div key={i} className="blog-prose-note" dangerouslySetInnerHTML={{ __html: block.text }} />
                        );
                    case 'image':
                        return (
                            <figure key={i} className="blog-prose-figure">
                                <img src={block.src} alt={block.caption || ''} loading="lazy" />
                                {block.caption && <figcaption>{block.caption}</figcaption>}
                            </figure>
                        );
                    case 'cta':
                        return (
                            <div key={i} className="hotel-cta-block" style={{
                                margin: '40px 0',
                                padding: '36px 30px',
                                background: 'linear-gradient(135deg, #1A3C34 0%, #112823 100%)',
                                borderRadius: '18px',
                                color: '#ffffff',
                                textAlign: 'center',
                                boxShadow: '0 8px 30px rgba(26,60,52,0.15)',
                                border: '1px solid #C5A572'
                            }}>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#C5A572', marginBottom: '14px' }}>
                                    Looking for corporate hotel accommodation in Greater Noida?
                                </h3>
                                <p style={{ color: '#E0E0E0', fontSize: '15px', lineHeight: '1.7', maxWidth: '640px', margin: '0 auto 24px' }}>
                                    Sandane Homes operates hotel properties — <a href="/amaaltash" style={{ color: '#C5A572', fontWeight: 'bold', textDecoration: 'underline' }}>Amaaltash</a>, <a href="/amara" style={{ color: '#C5A572', fontWeight: 'bold', textDecoration: 'underline' }}>Amara Inn</a>, <a href="/coco-house" style={{ color: '#C5A572', fontWeight: 'bold', textDecoration: 'underline' }}>CoCo House</a>, and <a href="/glam" style={{ color: '#C5A572', fontWeight: 'bold', textDecoration: 'underline' }}>The Glam</a> — minutes from India Expo Mart, Expo Plaza, Pari Chowk, and Knowledge Park. Corporate rates, GST invoicing, group booking consolidation, and multi-language support.
                                </p>
                                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <a
                                        href="https://wa.me/919711722273?text=Hello%2C%20I%20am%20looking%20for%20corporate%20hotel%20booking%20near%20India%20Expo%20Mart"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                                            backgroundColor: '#25D366', color: '#ffffff',
                                            padding: '14px 28px', borderRadius: '30px',
                                            textDecoration: 'none', fontSize: '16px', fontWeight: '700',
                                            boxShadow: '0 4px 15px rgba(37,211,102,0.3)'
                                        }}
                                    >
                                        💬 Contact Us — WhatsApp (+91 97117 22273)
                                    </a>
                                    <a
                                        href="/"
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                                            backgroundColor: '#C5A572', color: '#1A3C34',
                                            padding: '14px 28px', borderRadius: '30px',
                                            textDecoration: 'none', fontSize: '16px', fontWeight: '700',
                                            boxShadow: '0 4px 15px rgba(197,165,114,0.3)'
                                        }}
                                    >
                                        View Our Hotels &rarr;
                                    </a>
                                </div>
                            </div>
                        );
                    case 'paragraph':
                    default:
                        return (
                            <p key={i} className="blog-prose-paragraph" dangerouslySetInnerHTML={{ __html: block.text }} />
                        );
                }
            })}
        </div>
    );
};

export default BlogContent;
