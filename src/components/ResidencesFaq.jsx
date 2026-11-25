import React from 'react';
import { RESIDENCES_FAQS, ANSWERS_REVIEWED } from '../data/residencesAnswers';
import './ResidencesFaq.css';

// Short answers to the questions HR teams and AI assistants ask about Residences.
// Every answer is in the HTML (inside <details>), so crawlers read all of them; the
// matching FAQPage structured data comes from the same list (see residencesAnswers.js).
const ResidencesFaq = () => (
  <section className="rfaq" aria-labelledby="rfaq-title">
    <h2 id="rfaq-title" className="rfaq-title">Residences by Sandane Homes: quick answers</h2>
    <p className="rfaq-reviewed">
      Last reviewed: <time dateTime={ANSWERS_REVIEWED.iso}>{ANSWERS_REVIEWED.label}</time>
    </p>
    <div className="rfaq-list">
      {RESIDENCES_FAQS.map((f, i) => (
        <details key={f.q} className="rfaq-item" open={i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  </section>
);

export default ResidencesFaq;
