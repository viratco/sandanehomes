import React, { lazy, Suspense } from 'react';
// Keep the blog styles in the main stylesheet: a prerendered blog page is visible before
// the blog chunk loads, and must not show unstyled while it does.
import './components/pages/Blog.css';

// The blog pages pull in src/data/blogPosts.js (about 1.8 MB), so they load in their own
// chunk instead of the main bundle every visitor downloads.
//
// preloadBlogPages() loads that chunk up front. The build calls it before prerendering
// (entry-server.jsx), and main.jsx calls it before hydrating a prerendered blog page, so
// in both cases the pages render directly, without a Suspense fallback, and the server
// HTML and the first client render match. When someone navigates to the blog from another
// page, the chunk loads on demand behind a blank, full-height placeholder.
const loadList = () => import('./components/pages/BlogList');
const loadPost = () => import('./components/pages/BlogPost');

let List = null;
let Post = null;
const LazyList = lazy(loadList);
const LazyPost = lazy(loadPost);

export const preloadBlogPages = () =>
  Promise.all([loadList(), loadPost()]).then(([list, post]) => {
    List = list.default;
    Post = post.default;
  });

export const isBlogPath = (pathname = '') => /^\/(blog|zh|cn)(\/|$)/.test(pathname);

const placeholder = <div style={{ minHeight: '100vh' }} aria-busy="true" />;

export const BlogListPage = (props) =>
  List ? <List {...props} /> : <Suspense fallback={placeholder}><LazyList {...props} /></Suspense>;

export const BlogPostPage = (props) =>
  Post ? <Post {...props} /> : <Suspense fallback={placeholder}><LazyPost {...props} /></Suspense>;
