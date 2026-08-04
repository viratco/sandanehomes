import React, { useState } from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import ExpatPopupBar from '../ExpatPopupBar';
import heroBg from '../../assets/e8cd7b2a-95fc-418d-9ca2-357008d2aa61.JPG';
import imgLivingRoom from '../../assets/IMG_7272.jpg';
import imgTopRight from '../../assets/livingroom.jpeg';
import imgRecreation from '../../assets/services_recreation.jpeg';
import './Relocation.css';
import { 
  FaPlaneArrival, FaBuilding, FaPassport, FaFileInvoiceDollar, 
  FaWifi, FaShieldHalved, FaCar, FaUtensils, FaGraduationCap, 
  FaHospital, FaSquareCheck, FaChevronRight, FaPlus, 
  FaWhatsapp, FaEnvelope, FaLocationDot, FaBed, FaCouch, 
  FaBroom, FaPhone, FaHandshake, FaGlobe, FaHouseUser
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

  const seoProps = {
    title: "Sandane Homes Relocation Services | Corporate & Expat Relocation Greater Noida",
    description: "Turnkey corporate relocation support in Greater Noida for Japanese, Korean, Chinese & MNC expats. 24-hr FRRO address verification, fully furnished luxury apartments, B2B GST invoicing & concierge.",
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
      "description": "Comprehensive corporate relocation services for international expats and executives moving to Greater Noida. Includes FRRO registration support, turnkey furnished apartments, airport pickup, and B2B GST master billing."
    }
  };

  const personas = [
    {
      flag: "🇯🇵",
      title: "Japanese Corporate Teams",
      subtitle: "Honda, Yamaha, Canon & Suppliers",
      desc: "Tailored housing solutions with 24/7 gated security inside Ansal Golf Links-1, quiet work environments, Japanese cuisine arrangements, and complete FRRO visa assistance.",
      hubs: "Surajpur Industrial Area & Yamuna Expressway"
    },
    {
      flag: "🇰🇷",
      title: "Korean Executive Teams",
      subtitle: "Samsung, LG, Hyundai Supply Chain",
      desc: "Full-service 2BHK & 3BHK residences with Korean breakfast options, 300 Mbps fiber internet, rapid FRRO documentation, and daily housekeeping.",
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
      step: "01",
      title: "Pre-Arrival Planning",
      desc: "Virtual 4K video walkthroughs, floorplan selection, custom lease drafting, and advance B2B GST tax invoice coordination for corporate HR.",
      bullets: ["Virtual 4K apartment tours", "Corporate lease customization", "Advance GST invoice generation"]
    },
    {
      step: "02",
      title: "Seamless Arrival & Handover",
      desc: "Private airport pickup coordination from IGI Airport / Jewar Corridor, 24/7 key handover, and welcome kit with local SIM card & currency guidance.",
      bullets: ["Private chauffeur airport transfer", "24/7 key handover & orientation", "Welcome SIM & essentials kit"]
    },
    {
      step: "03",
      title: "First-Week Compliance",
      desc: "Official FRRO address proof and tenancy documents issued within 24 hours of arrival. Direct guidance for local bank account opening.",
      bullets: ["24-hr FRRO address verification", "Bank account opening support", "Neighborhood orientation tour"]
    },
    {
      step: "04",
      title: "Ongoing Concierge Care",
      desc: "Daily housekeeping, 300 Mbps WiFi management, emergency maintenance dispatch, school admission advisory, and smooth lease renewals.",
      bullets: ["Daily housekeeping & laundry", "24/7 emergency maintenance", "International school advisory"]
    }
  ];

  const packageCategories = [
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
      icon: <FaPassport />,
      title: "Legal & Corporate Accounting",
      items: [
        "Official FRRO address proof within 24 hrs",
        "Consolidated single B2B GST master invoice",
        "Flexible corporate lease terms (1–24 months)",
        "Security deposit protection & refund guarantee",
        "Bank account opening assistance",
        "Direct corporate billing coordination"
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
    { name: "Vivo / OPPO Hubs", dist: "12 km • 15 min drive" },
    { name: "India Expo Mart", dist: "8 min signal-free drive" },
    { name: "Pari Chowk Metro Station", dist: "5 min drive" },
    { name: "Noida International Airport (Jewar)", dist: "35 min corridor drive" },
    { name: "Sharda & Amity Universities", dist: "8 min drive" }
  ];

  const faqs = [
    {
      q: "Do you issue official FRRO address verification documents?",
      a: "Yes. Within 24 hours of arrival, Residences by Sandane Homes provides complete notarized tenancy contracts and official landlord Form C / address verification documents required for FRRO registration."
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
    <div className="reloc-page">
      <SEO {...seoProps} />
      <Header />
      <ExpatPopupBar />

      {/* Hero Section */}
      <section className="reloc-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="reloc-hero-overlay"></div>
        <div className="reloc-hero-content">
          <div className="reloc-badge">
            <FaHandshake /> Corporate & Expat Relocation
          </div>
          <h1 className="reloc-hero-title">
            Move to India, <span>Stress-Free.</span>
          </h1>
          <p className="reloc-hero-subtitle">
            Complete end-to-end relocation support for Japanese, Korean, Chinese & MNC expat executives and their families in Greater Noida. Managed by <strong>Residences by Sandane Homes</strong>.
          </p>
          <div className="reloc-hero-actions">
            <a href="#reloc-package" className="reloc-btn-primary">
              View Relocation Package <FaChevronRight />
            </a>
            <a href="https://wa.me/919711722273?text=Hello%2C%20I%20am%20interested%20in%20Sandane%20Homes%20Relocation%20Services%20for%20our%20corporate%20team." target="_blank" rel="noopener noreferrer" className="reloc-btn-secondary">
              <FaWhatsapp /> Contact Relocation Specialist
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="reloc-stats-bar">
        <div className="reloc-stats-grid">
          <div className="reloc-stat-item">
            <h3>24 Hours</h3>
            <p>FRRO Address Proof Issuance</p>
          </div>
          <div className="reloc-stat-item">
            <h3>100% Turnkey</h3>
            <p>Furnished & Serviced Apartments</p>
          </div>
          <div className="reloc-stat-item">
            <h3>Single B2B</h3>
            <p>GST Master Tax Billing</p>
          </div>
          <div className="reloc-stat-item">
            <h3>24/7 Care</h3>
            <p>Multilingual Expat Concierge</p>
          </div>
        </div>
      </section>

      {/* Who We Relocate */}
      <section className="reloc-section">
        <div className="reloc-section-header">
          <span className="reloc-section-tag">Target Corporate Demographics</span>
          <h2 className="reloc-section-title">Specialized Relocation for International Corporate Teams</h2>
          <p className="reloc-section-desc">
            We understand the distinct cultural, culinary, security, and administrative needs of global professionals moving to NCR's prime industrial corridor.
          </p>
        </div>
        <div className="reloc-personas-grid">
          {personas.map((item, idx) => (
            <div key={idx} className="reloc-persona-card">
              <div className="reloc-persona-header">
                <span className="reloc-persona-flag">{item.flag}</span>
                <div>
                  <h3 className="reloc-persona-title">{item.title}</h3>
                  <div className="reloc-persona-subtitle">{item.subtitle}</div>
                </div>
              </div>
              <p className="reloc-persona-body">{item.desc}</p>
              <div className="reloc-persona-hubs">
                <div className="reloc-persona-hubs-title">Key Industrial Corridors:</div>
                <div className="reloc-persona-hubs-list">{item.hubs}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="reloc-section" style={{ padding: '0 24px' }}>
        <div className="reloc-timeline-section">
          <div className="reloc-section-header">
            <span className="reloc-section-tag" style={{ color: '#C5A572' }}>Seamless 4-Step Journey</span>
            <h2 className="reloc-section-title">Our End-to-End Relocation Process</h2>
            <p className="reloc-section-desc">
              From your initial inquiry to long-term community living, we ensure zero friction for your corporate HR and relocating employees.
            </p>
          </div>
          <div className="reloc-steps-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="reloc-step-card">
                <div className="reloc-step-number">{step.step}</div>
                <h3 className="reloc-step-title">{step.title}</h3>
                <p className="reloc-step-desc">{step.desc}</p>
                <ul className="reloc-step-bullets">
                  {step.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="reloc-section" id="reloc-package">
        <div className="reloc-section-header">
          <span className="reloc-section-tag">Complete Package</span>
          <h2 className="reloc-section-title">What is Included in Sandane Homes Relocation Services</h2>
          <p className="reloc-section-desc">
            Everything your executives and families need for immediate comfort, legal compliance, and operational peace of mind.
          </p>
        </div>
        <div className="reloc-package-grid">
          {packageCategories.map((cat, idx) => (
            <div key={idx} className="reloc-package-card">
              <div className="reloc-package-icon">{cat.icon}</div>
              <h3 className="reloc-package-title">{cat.title}</h3>
              <ul className="reloc-package-list">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <FaSquareCheck /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Residence Accommodation Options */}
      <section className="reloc-section" style={{ background: '#FFFFFF', borderRadius: '32px', padding: '80px 24px', margin: '40px auto', maxWidth: '1240px' }}>
        <div className="reloc-section-header">
          <span className="reloc-section-tag">Featured Accommodations</span>
          <h2 className="reloc-section-title">Residences by Sandane Homes Portfolio</h2>
          <p className="reloc-section-desc">
            Nestled inside gated Ansal Golf Links-1, Greater Noida with 24-hr security, private balconies, and lush green views.
          </p>
        </div>
        <div className="reloc-residences-grid">
          <div className="reloc-residence-card">
            <img src={imgLivingRoom} alt="2BHK Executive Serviced Apartment" className="reloc-residence-img" />
            <div className="reloc-residence-body">
              <span className="reloc-residence-tag">Single Executive & Couples</span>
              <h3 className="reloc-residence-title">2BHK Executive Serviced Apartment</h3>
              <p className="reloc-residence-desc">
                Spacious living room, master bedroom with ergonomic workspace, high-speed 300 Mbps WiFi, private kitchen, and daily housekeeping.
              </p>
              <div className="reloc-residence-features">
                <div className="reloc-residence-feature"><FaBed /> 2 Bedrooms</div>
                <div className="reloc-residence-feature"><FaCouch /> Fully Furnished</div>
                <div className="reloc-residence-feature"><FaBroom /> Daily Housekeeping</div>
              </div>
            </div>
          </div>
          <div className="reloc-residence-card">
            <img src={imgTopRight} alt="3BHK Luxury Family Residence" className="reloc-residence-img" />
            <div className="reloc-residence-body">
              <span className="reloc-residence-tag">Expat Family Residence</span>
              <h3 className="reloc-residence-title">3BHK Luxury Family Residence</h3>
              <p className="reloc-residence-desc">
                Expansive layout featuring 3 ensuite bedrooms, dining hall, modern kitchen, air purifiers, and 24/7 gated security for relocating families.
              </p>
              <div className="reloc-residence-features">
                <div className="reloc-residence-feature"><FaBed /> 3 Bedrooms</div>
                <div className="reloc-residence-feature"><FaShieldHalved /> 24/7 Security</div>
                <div className="reloc-residence-feature"><FaUtensils /> Full Kitchen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proximity / Distance Grid */}
      <section className="reloc-section">
        <div className="reloc-section-header">
          <span className="reloc-section-tag">Strategic Location</span>
          <h2 className="reloc-section-title">Minutes from Major Industrial & Airport Hubs</h2>
          <p className="reloc-section-desc">
            Situated in Ansal Golf Links-1, enjoy signal-free connectivity to top manufacturing plants, exhibition centers, and metro lines.
          </p>
        </div>
        <div className="reloc-proximity-grid">
          {proximities.map((item, idx) => (
            <div key={idx} className="reloc-proximity-item">
              <div className="reloc-proximity-icon"><FaLocationDot /></div>
              <div>
                <div className="reloc-proximity-name">{item.name}</div>
                <div className="reloc-proximity-dist">{item.dist}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="reloc-section">
        <div className="reloc-section-header">
          <span className="reloc-section-tag">Frequently Asked Questions</span>
          <h2 className="reloc-section-title">Corporate & Expat Relocation FAQs</h2>
          <p className="reloc-section-desc">
            Common questions regarding lease terms, FRRO documentation, B2B invoicing, and relocation logistics.
          </p>
        </div>
        <div className="reloc-faq-container">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`reloc-faq-item ${activeFaq === idx ? 'active' : ''}`}>
              <button className="reloc-faq-question" onClick={() => toggleFaq(idx)}>
                <span>{faq.q}</span>
                <span className="reloc-faq-icon"><FaPlus /></span>
              </button>
              {activeFaq === idx && (
                <div className="reloc-faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="reloc-section" style={{ padding: '0 24px' }}>
        <div className="reloc-cta-banner">
          <h2>Ready to Plan Your Corporate Relocation?</h2>
          <p>
            Connect with our dedicated relocation manager for custom corporate proposals, virtual apartment tours, and corporate lease structuring.
          </p>
          <div className="reloc-cta-buttons">
            <a href="https://wa.me/919711722273?text=Hello%2C%20I%20would%20like%20to%20request%20a%20relocation%20proposal%20for%20our%20company." target="_blank" rel="noopener noreferrer" className="reloc-btn-primary">
              <FaWhatsapp /> Chat on WhatsApp (+91 97117 22273)
            </a>
            <a href="mailto:sandanehomes@gmail.com?subject=Relocation%20Services%20Inquiry" className="reloc-btn-secondary">
              <FaEnvelope /> Email Corporate HR Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Relocation;
