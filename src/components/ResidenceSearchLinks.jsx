import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { indexedResidenceSearchPages } from '../data/residenceSearchPages';
import './pages/ResidenceSearchPage.css';

// "Find the right home" links to the pages in residenceSearchPages.js, so visitors
// (and Google) can reach them from the Residences pages.
// city: 'gurugram' shows Gurgaon pages plus the pages that cover both cities.
const LABELS = {
  'long-stay-serviced-apartments-gurgaon': 'Long stay serviced apartments, Gurgaon',
  'fully-furnished-house-for-rent-gurgaon': 'Fully furnished house for rent, Gurgaon',
  'corporate-guest-house-gurgaon': 'Corporate guest house, Gurgaon',
  'serviced-apartments-dlf-cyber-city-gurgaon': 'Serviced apartments near DLF Cyber City',
  'serviced-apartments-golf-course-road-gurgaon': 'Serviced apartments, Golf Course Extension Road',
  'fully-furnished-house-for-rent-greater-noida': 'Fully furnished house for rent, Greater Noida',
  'corporate-guest-house-greater-noida': 'Corporate guest house, Greater Noida',
  'company-lease-apartments-delhi-ncr': 'Company lease apartments for employees',
};

const ResidenceSearchLinks = ({ city }) => {
  const pages = indexedResidenceSearchPages.filter((p) => !city || p.city === city || p.city === 'ncr');
  return (
    <section className="rsp-related rsp-related-hub" aria-labelledby="rsp-find-title">
      <h2 id="rsp-find-title">Find the right home</h2>
      <ul>
        {pages.map((p) => (
          <li key={p.slug}>
            <Link to={`/${p.slug}`}>{LABELS[p.slug] || p.h1} <FaArrowRight aria-hidden="true" /></Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResidenceSearchLinks;
