// ─────────────────────────────────────────────────────────────
//  SANDANE HOMES — Blog Redirects Mapping
//  Maps every blog post slug to its target property / landing page
// ─────────────────────────────────────────────────────────────
import { blogPosts } from './blogPosts.js';

export const getBlogRedirect = (slug) => {
    if (!slug) return '/#our-luxury-hotels';
    const s = String(slug).toLowerCase();
    if (s.includes('amaaltash')) return '/amaaltash';
    if (s.includes('glam')) return '/glam';
    if (s.includes('coco')) return '/coco-house';
    if (s.includes('saffron')) return '/saffron';
    if (s.includes('amara')) return '/amara';
    if (s.includes('pine')) return '/pine-tales';
    if (
        s.includes('residences') ||
        s.includes('expat') ||
        s.includes('serviced-apartment') ||
        s.includes('relocation') ||
        s.includes('housing') ||
        s.includes('gated') ||
        s.includes('frro') ||
        s.includes('fuwushi') ||
        s.includes('zhusu') ||
        s.includes('changzhu') ||
        s.includes('shenghuo')
    ) return '/residences';
    if (s.includes('sandane-homes')) return '/sandane-homes';
    return '/#our-luxury-hotels';
};

export const PROPERTY_REDIRECTS = blogPosts.reduce((acc, post) => {
    acc[post.slug] = getBlogRedirect(post.slug);
    return acc;
}, {});
