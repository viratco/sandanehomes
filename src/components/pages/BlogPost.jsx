import React from 'react';
import { useParams } from 'react-router-dom';
import { PROPERTY_REDIRECTS, getBlogRedirect } from '../../data/blogRedirects';

const BlogPost = () => {
    const { slug } = useParams();
    const targetUrl = PROPERTY_REDIRECTS[slug] || getBlogRedirect(slug);

    if (typeof window !== 'undefined') {
        window.location.replace(targetUrl);
    }

    return null;
};

export default BlogPost;
