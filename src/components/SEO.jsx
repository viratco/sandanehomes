import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO component with multi-schema, hreflang, and language support.
 * @param {string}   title        - Page title tag
 * @param {string}   description  - Meta description
 * @param {string}   canonical    - Canonical URL
 * @param {string}   ogImage      - OG image URL
 * @param {string}   ogType       - OG type (default: 'website')
 * @param {object|object[]} schema - One or more JSON-LD schema objects
 * @param {string}   lang         - HTML lang attribute (e.g. 'ko', 'ja', 'en')
 * @param {object[]} hreflang     - Array of {lang, href} for alternate language links
 */
const SEO = ({ title, description, canonical, ogImage, ogType = 'website', schema, lang = 'en', hreflang = [] }) => {
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      {/* Language */}
      <html lang={lang} />

      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content="index, follow" />

      {/* hreflang alternates */}
      {hreflang.map((alt) => (
        <link key={alt.lang} rel="alternate" hreflang={alt.lang} href={alt.href} />
      ))}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Sandane Homes" />
      <meta property="og:image" content={ogImage || 'https://www.sandanehomes.com/logo.png'} />

      {/* Multiple JSON-LD schema blocks */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
