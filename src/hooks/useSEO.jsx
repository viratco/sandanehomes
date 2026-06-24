import { useEffect } from 'react';

const useSEO = ({ title, description, canonicalUrl, ogType = 'website', ogImage, jsonLd }) => {
    useEffect(() => {
        // Update Title
        if (title) {
            document.title = title;
        }

        // Helper function to update/create meta tags
        const updateOrCreateMeta = (nameOrProperty, content, isProperty = false) => {
            if (content === undefined || content === null) {
                const existing = document.querySelector(isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`);
                if (existing) existing.remove();
                return;
            }

            const selector = isProperty
                ? `meta[property="${nameOrProperty}"]`
                : `meta[name="${nameOrProperty}"]`;
            
            let element = document.querySelector(selector);
            if (!element) {
                element = document.createElement('meta');
                if (isProperty) {
                    element.setAttribute('property', nameOrProperty);
                } else {
                    element.setAttribute('name', nameOrProperty);
                }
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Update basic meta tags
        updateOrCreateMeta('description', description);

        // Update Open Graph (Facebook / LinkedIn)
        updateOrCreateMeta('og:title', title, true);
        updateOrCreateMeta('og:description', description, true);
        updateOrCreateMeta('og:type', ogType, true);
        updateOrCreateMeta('og:image', ogImage, true);
        
        const currentUrl = canonicalUrl || window.location.href;
        updateOrCreateMeta('og:url', currentUrl, true);

        // Update Twitter Cards
        updateOrCreateMeta('twitter:card', 'summary_large_image');
        updateOrCreateMeta('twitter:title', title);
        updateOrCreateMeta('twitter:description', description);
        updateOrCreateMeta('twitter:image', ogImage);

        // Update Canonical Link
        let linkElement = document.querySelector('link[rel="canonical"]');
        if (!linkElement) {
            linkElement = document.createElement('link');
            linkElement.setAttribute('rel', 'canonical');
            document.head.appendChild(linkElement);
        }
        linkElement.setAttribute('href', currentUrl);

        // Inject JSON-LD structured data (per-page schema)
        // Use a unique attribute so we can clean up on unmount to avoid duplicates
        const JSON_LD_ID = 'useseo-jsonld';
        const existingScript = document.querySelector(`script[data-seo-id="${JSON_LD_ID}"]`);
        if (existingScript) existingScript.remove();

        if (jsonLd) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-seo-id', JSON_LD_ID);
            script.textContent = JSON.stringify(jsonLd, null, 2);
            document.head.appendChild(script);
        }

        // Cleanup JSON-LD on unmount
        return () => {
            const scriptToRemove = document.querySelector(`script[data-seo-id="${JSON_LD_ID}"]`);
            if (scriptToRemove) scriptToRemove.remove();
        };

    }, [title, description, canonicalUrl, ogType, ogImage, jsonLd]);
};

export default useSEO;
