import React, { useState, useEffect } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import ExpatPopupBar from '../ExpatPopupBar';
import heroBg from '../../assets/e8cd7b2a-95fc-418d-9ca2-357008d2aa61.JPG';
import './Relocation.css';
import { 
  FaPassport, FaFileInvoiceDollar, FaPlaneArrival, FaBuilding, 
  FaBed, FaBroom, FaShirt, FaBolt, FaTv, FaWind, FaGlassWater, 
  FaBottleWater, FaWifi, FaScrewdriverWrench, FaLocationDot, 
  FaShieldHalved, FaPlus, FaWhatsapp, FaEnvelope, FaGlobe, 
  FaHouseUser, FaHandshake, FaChevronRight, FaCheck
} from 'react-icons/fa6';

const Relocation = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToContact = () => {
    const element = document.getElementById('footer-contact-section') || document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (window.location.hash === '#contact-section' || window.location.hash === '#footer-contact-section') {
      setTimeout(() => {
        scrollToContact();
      }, 300);
    }
  }, []);

  const seoProps = {
    title: "Sandane Homes Relocation Services | Corporate & Expat Relocation Greater Noida",
    description: "Turnkey corporate relocation support in Greater Noida for Japanese, Korean, Chinese & MNC expats. Fully furnished luxury 2BHK & 3BHK apartments, B2B GST invoicing, 300 Mbps WiFi & concierge.",
    canonical: "https://www.sandanehomes.com/residences/relocation",
    ogImage: "https://www.sandanehomes.com/residences-og.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sandane Homes Relocation Services",
      "serviceType": "Corporate & Expat Relocation",
      "provider": {
        "@type": "Organization",
        "name": "Residences by Sandane Homes",
        "url": "https://www.sandanehomes.com/residences"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Greater Noida, Uttar Pradesh, India"
      },
      "description": "Comprehensive corporate relocation services for international expats and executives moving to Greater Noida. Includes turnkey furnished apartments, airport pickup, 300 Mbps WiFi, and B2B GST master billing."
    }
  };

  const personas = [
    {
      flag: "🇯🇵",
      title: "Japanese Corporate Teams",
      subtitle: "Honda, Yamaha, Canon & Suppliers",
      desc: "Tailored housing solutions with 24/7 gated security inside Ansal Golf Links-1, quiet work environments, Japanese cuisine arrangements, and dedicated expat care.",
      hubs: "Surajpur Industrial Area & Yamuna Expressway"
    },
    {
      flag: "🇰🇷",
      title: "Korean Executive Teams",
      subtitle: "Samsung, LG, Hyundai Supply Chain",
      desc: "Full-service 2BHK & 3BHK residences with Korean breakfast options, 300 Mbps fiber internet, daily housekeeping, and 24/7 maintenance dispatch.",
      hubs: "Noida Expressway & Knowledge Park"
    },
    {
      flag: "🇨🇳",
      title: "Chinese Technical Management",
      subtitle: "Vivo, OPPO, Xiaomi & BYD",
      desc: "Turnkey executive apartments near mobile manufacturing hubs with consolidated B2B GST master invoicing, fast utility setup, and airport transfers.",
      hubs: "Ecotech Industrial Zones & Pari Chowk Corridor"
    },
    {
      flag: "🌍",
      title: "Global MNC Expat Families",
      subtitle: "Multinational Corporations & Consultancies",
      desc: "Family-ready luxury apartments near top international schools (DPS, Amity, Sharda), 100% power backup, clean air purifiers, and 24/7 dedicated concierge.",
      hubs: "Ansal Golf Links-1 & Greater Noida Hubs"
    }
  ];

  const processSteps = [
    {
      step: "PHASE 01",
      title: "Pre-Arrival Planning",
      desc: "Virtual 4K video walkthroughs, floorplan selection, custom lease drafting, and advance B2B GST tax invoice coordination for corporate HR.",
      bullets: ["Virtual 4K apartment tours", "Corporate lease customization", "Advance GST invoice generation"]
    },
    {
      step: "PHASE 02",
      title: "Seamless Arrival & Handover",
      desc: "Private airport pickup coordination from IGI Airport / Jewar Corridor, 24/7 key handover, and welcome kit with local SIM card & currency guidance.",
      bullets: ["Private chauffeur airport transfer", "24/7 key handover & orientation", "Welcome SIM & essentials kit"]
    },
    {
      step: "PHASE 03",
      title: "Arrival & Settlement Onboarding",
      desc: "Personalized apartment walkthrough, 300 Mbps fiber internet activation, neighborhood orientation tour, and local area essentials guidance.",
      bullets: ["Turnkey apartment handover", "Local area orientation tour", "Bank & SIM setup assistance"]
    },
    {
      step: "PHASE 04",
      title: "Ongoing Concierge Care",
      desc: "Daily housekeeping, 300 Mbps WiFi management, emergency maintenance dispatch, school admission advisory, and smooth lease renewals.",
      bullets: ["Daily housekeeping & laundry", "24/7 emergency maintenance", "International school advisory"]
    }
  ];

  const packagePillars = [
    {
      icon: <FaHouseUser />,
      title: "Turnkey Living & Comfort",
      items: [
        "Fully furnished 2BHK & 3BHK residences",
        "Daily housekeeping & linen change",
        "300 Mbps high-speed fiber internet",
        "100% dual-grid power backup",
        "Fully equipped kitchen & appliances",
        "Air purifiers & water filtration"
      ]
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Corporate Accounting & Support",
      items: [
        "Consolidated single B2B GST master invoice",
        "Flexible corporate lease terms (1–24 months)",
        "Security deposit protection & refund guarantee",
        "Bank account opening assistance",
        "Direct corporate billing coordination",
        "24/7 Property upkeep & maintenance"
      ]
    },
    {
      icon: <FaGlobe />,
      title: "Expat Lifestyle & Logistics",
      items: [
        "Private airport pickup & drop-off",
        "Local SIM card & connectivity setup",
        "Japanese, Korean & Chinese food options",
        "International school admissions guidance",
        "Emergency medical & hospital coordination",
        "Dedicated 24/7 expat concierge"
      ]
    }
  ];

  const proximities = [
    { name: "Honda Cars India Plant", dist: "5 km • 10 min drive" },
    { name: "Samsung Electronics HQ", dist: "8 km • 12 min drive" },
    { name: "LG Electronics Plant", dist: "8 km • 12 min drive" },
    { name: "Vivo / OPPO Mobile Hubs", dist: "12 km • 15 min drive" },
    { name: "India Expo Mart", dist: "8 min signal-free drive" },
    { name: "Pari Chowk Metro Station", dist: "5 min drive" },
    { name: "Noida International Airport (Jewar)", dist: "35 min corridor drive" },
    { name: "Sharda & Amity Universities", dist: "8 min drive" }
  ];

  const faqs = [
    {
      q: "What amenities are included in the serviced apartments?",
      a: "All relocation apartments include 300 Mbps fiber WiFi, daily housekeeping, 100% dual-grid power backup, fully equipped kitchens, air purifiers, and 24/7 gated security inside Ansal Golf Links-1."
    },
    {
      q: "Can lease payments be billed directly to our corporate entity with GST?",
      a: "Absolutely. We issue single B2B GST tax invoices consolidating rent, utilities, housekeeping, and internet for hassle-free corporate tax accounting."
    },
    {
      q: "What apartment configurations are available for relocated expats?",
      a: "We offer luxury 2BHK serviced apartments (ideal for single executives and couples) and 3BHK residences (ideal for expat families with children) inside gated Ansal Golf Links-1."
    },
    {
      q: "Can we inspect the apartment virtually before flying to India?",
      a: "Yes. Our team provides interactive 4K video tours, floor plans, and detailed asset inventories prior to departure."
    },
    {
      q: "Are housekeeping, utilities, and WiFi included in the monthly rent?",
      a: "Yes. All our relocation residences are turnkey. Daily housekeeping, 300 Mbps WiFi, power backup, water, and maintenance are included."
    },
    {
      q: "Do you assist with international school admissions for expat children?",
      a: "Yes. We provide advisory and campus visit arrangements for top accredited international schools near Greater Noida, including DPS, Amity International, and Sharda."
    }
  ];

  return (
    <div className="reloc-portal">
      <SEO {...seoProps} />
      <Header />
      <ExpatPopupBar />

      {/* Split Cinema Hero Section */}
      <section className="reloc-hero-split">
        <div className="reloc-hero-left">
          <div className="reloc-gold-badge">
            <FaHandshake /> 360° Corporate Relocation Support
          </div>
          <h1 className="reloc-hero-h1">
            Seamless Expat Relocation to <span>Greater Noida.</span>
          </h1>
          <p className="reloc-hero-p">
            Turnkey executive housing, B2B GST master invoicing, and full lifestyle concierge for Japanese, Korean, Chinese & MNC corporate teams. Managed by <strong>Residences by Sandane Homes</strong>.
          </p>
          <div className="reloc-hero-cta-group">
            <a href="https://wa.me/919711722273?text=Hello%2C%20I%20am%20interested%20in%20Sandane%20Homes%20Relocation%20Services%20for%20our%20corporate%20team." target="_blank" rel="noopener noreferrer" className="reloc-btn-gold">
              <FaWhatsapp /> Request Corporate Proposal
            </a>
            <a href="#reloc-roadmap" className="reloc-btn-outline">
              Explore 4-Step Process <FaChevronRight />
            </a>
          </div>
        </div>
        <div className="reloc-hero-right">
          <img src={heroBg} alt="Sandane Relocation Executive Living" className="reloc-hero-img-fill" />
          <div className="reloc-hero-glass-badge">
            <h4>Turnkey Executive Housing</h4>
            <p>Fully furnished 2BHK & 3BHK residences with daily housekeeping & 300 Mbps fiber internet.</p>
          </div>
        </div>
      </section>

      {/* Target Demographics Section */}
      <section className="reloc-portal-section">
        <div className="reloc-portal-header">
          <span className="reloc-tag">Corporate Expat Solutions</span>
          <h2 className="reloc-h2">Specialized Relocation for Global Industries</h2>
          <p className="reloc-p">
            Tailored to the unique culinary, security, and housing requirements of corporate expatriates moving to NCR's primary manufacturing belt.
          </p>
        </div>
        <div className="reloc-persona-row">
          {personas.map((item, idx) => (
            <div key={idx} className="reloc-persona-box">
              <div className="reloc-persona-top">
                <div className="reloc-persona-flag-circle">{item.flag}</div>
                <div>
                  <div className="reloc-persona-name">{item.title}</div>
                  <div className="reloc-persona-sub">{item.subtitle}</div>
                </div>
              </div>
              <p className="reloc-persona-desc">{item.desc}</p>
              <div className="reloc-persona-pill">
                Key Industrial Hubs: {item.hubs}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Relocation Roadmap */}
      <section className="reloc-portal-section" id="reloc-roadmap" style={{ background: '#FFFFFF', borderRadius: '32px', padding: '80px 5%' }}>
        <div className="reloc-portal-header">
          <span className="reloc-tag">Step-by-Step Onboarding</span>
          <h2 className="reloc-h2">Our 4-Phase Relocation Roadmap</h2>
          <p className="reloc-p">
            From pre-flight housing selection to daily expat concierge care, we manage the entire transition.
          </p>
        </div>
        <div className="reloc-roadmap-grid">
          {processSteps.map((step, idx) => (
            <div key={idx} className="reloc-roadmap-card">
              <div className="reloc-roadmap-node">{step.step}</div>
              <h3 className="reloc-roadmap-title">{step.title}</h3>
              <p className="reloc-roadmap-desc">{step.desc}</p>
              <ul className="reloc-roadmap-check">
                {step.bullets.map((b, bIdx) => (
                  <li key={bIdx}><FaCheck /> {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Checklist Pillars */}
      <section className="reloc-portal-section">
        <div className="reloc-portal-header">
          <span className="reloc-tag">All-Inclusive Services</span>
          <h2 className="reloc-h2">What is Included in Your Relocation Package</h2>
          <p className="reloc-p">
            Everything your executives and families need for total comfort, hassle-free stays, and corporate accounting ease.
          </p>
        </div>
        <div className="reloc-pillars-grid">
          {packagePillars.map((pillar, idx) => (
            <div key={idx} className="reloc-pillar-card">
              <div className="reloc-pillar-icon">{pillar.icon}</div>
              <h3 className="reloc-pillar-h3">{pillar.title}</h3>
              <ul className="reloc-pillar-ul">
                {pillar.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <FaCheck /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Proximity Radar Grid */}
      <section className="reloc-portal-section" style={{ background: '#112823', borderRadius: '32px', padding: '80px 5%', color: '#ffffff' }}>
        <div className="reloc-portal-header">
          <span className="reloc-tag" style={{ color: '#C5A572' }}>Strategic Connectivity</span>
          <h2 className="reloc-h2" style={{ color: '#ffffff' }}>Minutes from Major Manufacturing Hubs</h2>
          <p className="reloc-p" style={{ color: '#D1DED9' }}>
            Situated inside gated Ansal Golf Links-1, enjoying fast signal-free commutes to leading multinational plants.
          </p>
        </div>
        <div className="reloc-radar-grid">
          {proximities.map((item, idx) => (
            <div key={idx} className="reloc-radar-card">
              <div className="reloc-radar-icon"><FaLocationDot /></div>
              <div>
                <div className="reloc-radar-title">{item.name}</div>
                <div className="reloc-radar-time">{item.dist}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="reloc-portal-section">
        <div className="reloc-portal-header">
          <span className="reloc-tag">Frequently Asked Questions</span>
          <h2 className="reloc-h2">Corporate & Expat Relocation FAQs</h2>
          <p className="reloc-p">
            Common questions regarding lease terms, serviced amenities, B2B invoicing, and relocation logistics.
          </p>
        </div>
        <div className="reloc-accordion">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`reloc-acc-item ${activeFaq === idx ? 'active' : ''}`}>
              <button className="reloc-acc-btn" onClick={() => toggleFaq(idx)}>
                <span>{faq.q}</span>
                <span className="reloc-acc-icon"><FaPlus /></span>
              </button>
              {activeFaq === idx && (
                <div className="reloc-acc-body">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="reloc-portal-section" id="footer-contact-section" style={{ paddingBottom: '90px' }}>
        <div style={{ background: 'linear-gradient(135deg, #112823 0%, #1A3C34 100%)', borderRadius: '32px', padding: '70px 40px', color: '#ffffff', textAlign: 'center', boxShadow: '0 20px 50px rgba(17, 40, 35, 0.25)' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#ffffff', marginBottom: '18px' }}>
            Plan Your Corporate Relocation Proposal
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#D1DED9', maxWidth: '700px', margin: '0 auto 36px auto', lineHeight: '1.65' }}>
            Connect with our dedicated corporate relocation manager for customized executive housing proposals, virtual apartment tours, and corporate lease terms.
          </p>
          <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919711722273?text=Hello%2C%20I%20would%20like%20to%20request%20a%20relocation%20proposal%20for%20our%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="reloc-btn-gold"
            >
              <FaWhatsapp /> Chat on WhatsApp (+91 97117 22273)
            </a>
            <a
              href="mailto:sandanehomes@gmail.com?subject=Corporate%20Relocation%20Inquiry"
              className="reloc-btn-outline"
            >
              <FaEnvelope /> Email Corporate HR
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Relocation;
