import React from 'react';

/* Renders the block-based content array used in src/content/blogPosts.js */
const BlogContent = ({ blocks = [] }) => {
    return (
        <div className="blog-prose">
            {blocks.map((block, i) => {
                switch (block.type) {
                    case 'heading':
                        return (
                            <h2 key={i} className="blog-prose-heading">
                                {block.text}
                            </h2>
                        );
                    case 'subheading':
                        return (
                            <h3 key={i} className="blog-prose-subheading">
                                {block.text}
                            </h3>
                        );
                    case 'list':
                        return (
                            <ul key={i} className="blog-prose-list">
                                {block.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        );
                    case 'orderedList':
                        return (
                            <ol key={i} className="blog-prose-list blog-prose-list-ordered">
                                {block.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ol>
                        );
                    case 'quote':
                        return (
                            <blockquote key={i} className="blog-prose-quote">
                                <p>{block.text}</p>
                                {block.attribution && <cite>{block.attribution}</cite>}
                            </blockquote>
                        );
                    case 'note':
                        return (
                            <div key={i} className="blog-prose-note">
                                {block.text}
                            </div>
                        );
                    case 'image':
                        return (
                            <figure key={i} className="blog-prose-figure">
                                <img src={block.src} alt={block.caption || ''} loading="lazy" />
                                {block.caption && <figcaption>{block.caption}</figcaption>}
                            </figure>
                        );
                    case 'paragraph':
                    default:
                        return (
                            <p key={i} className="blog-prose-paragraph">
                                {block.text}
                            </p>
                        );
                }
            })}
        </div>
    );
};

export default BlogContent;
