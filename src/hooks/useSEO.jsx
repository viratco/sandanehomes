import { useEffect } from 'react';

const useSEO = ({ title, description, canonicalUrl, ogType = 'website', ogImage }) => {
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

    }, [title, description, canonicalUrl, ogType, ogImage]);
};

export default useSEO;
