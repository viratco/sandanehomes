import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, ogImage, ogType = 'website', schema }) => {
  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Sandane Homes" />
      <meta property="og:image" content={ogImage || 'https://www.sandanehomes.com/logo.png'} />

      {/* Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
