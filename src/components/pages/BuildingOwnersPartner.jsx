import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import PartnerApplicationForm from '../PartnerApplicationForm';
import {
  FaBuilding, FaHandshake, FaChartLine, FaShieldAlt, FaKey,
  FaCheckCircle, FaPercentage, FaTools, FaWhatsapp, FaArrowRight,
  FaFileContract, FaRegSmile, FaCrown, FaStar, FaQuoteLeft,
  FaHome, FaBriefcase, FaUserCheck, FaCog, FaMoneyBillWave, FaHeadset,
  FaChevronDown, FaChevronUp, FaCity, FaMapMarkerAlt,
  FaTimes as FaXmark
} from 'react-icons/fa';
import './SandaneHomes.css';

import buildingHeroImg from '../../assets/building-partner-hero.jpg';
import interiorImg from '../../assets/abstract_luxury_interior.png';

const BuildingOwnersPartner = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      q: "How does a full building master lease work with Sandane Homes?",
      a: "Sandane Homes executes a 3 to 9 year institutional master lease contract for your entire standalone building, tower, or builder floor block. We issue one single consolidated master rental payment directly to your bank account on the 1st of every month, taking over 100% of building operations, utility administration, and tenant management."
    },
    {
      q: "Will Sandane Homes convert our building into a corporate hotel or serviced residence?",
      a: "Yes. We take full operational control, furnish or upgrade units to 5-star executive hospitality standards, establish round-the-clock reception and housekeeping, and position the property under the Sandane Homes brand for verified Japanese, Korean, and European corporate expatriates."
    },
    {
      q: "Who assumes building security, facility upkeep, and regular maintenance?",
      a: "Sandane Homes manages 100% of property operations: professional 24/7 security staff, daily housekeeping, linen care, lift maintenance, electrical and plumbing repairs, and generator backup at zero additional expense to the building owner."
    },
    {
      q: "What building sizes and locations do you master-lease in Delhi NCR?",
      a: "We actively lease standalone residential towers, builder floor blocks, and commercial guest houses with 10 to 60+ units across Gurugram (Golf Course Road, Cyber City, Sohna Road, DLF Phase 1–5), Greater Noida (Ansal Golf Links, Jaypee Greens, Pari Chowk, Knowledge Park), Noida Expressway, and Yamuna Expressway near Noida International Airport Jewar."
    },
    {
      q: "Can Sandane Homes assist with interior furnishing for bare-shell or semi-furnished buildings?",
      a: "Yes. We regularly onboard bare-shell, semi-furnished, or unbranded properties and coordinate interior architecture, custom turnkey furnishings, and appliance installations to elevate the asset into a premium corporate residence."
    },
    {
      q: "How is this superior to renting 20 to 50 apartments individually?",
      a: "Traditional multi-tenant renting results in 15%–25% annual vacancy loss, constant broker commission leakage, late payments, tenant damage, and hours of administrative headache. Sandane Homes eliminates vacancy risk entirely, guarantees timely payouts on the 1st of every month, and returns your asset in pristine showroom condition."
    }
  ];

  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sandane Homes Building Owners Master Lease & Brand Management Program",
      "provider": { "@type": "Organization", "name": "Sandane Homes", "url": "https://www.sandanehomes.com" },
      "description": "Master-lease your residential building, tower, or guest house in Gurugram, Greater Noida, and Delhi NCR to Sandane Homes. Single master rent check, 3-9 year contracts, zero vacancy risk, full corporate hotel conversion.",
      "areaServed": ["Gurugram", "Greater Noida", "Noida", "Yamuna Expressway", "Delhi NCR"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  return (
    <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', minHeight: '100vh', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <SEO
        title="Building Owners Master Lease & Hotel Conversion | Sandane Homes"
        description="Master-lease your standalone building, residential tower, or builder block (10-60+ units) in Gurugram, Greater Noida & Delhi NCR to Sandane Homes. 1 single master rent check, 3-9 year contracts, zero vacancy risk."
        canonical="https://www.sandanehomes.com/partner/building-owners"
        ogImage="https://www.sandanehomes.com/residences-og.jpg"
        schema={pageSchema}
      />

      <Header showTopBar={false} />

      {/* ── HERO BANNER ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1C2D42 50%, #0F172A 100%)',
        padding: '120px 20px 80px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(197, 165, 114, 0.25)'
      }}>
        {/* Subtle Watermark */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          textAlign: 'center',
          pointerEvents: 'none',
          opacity: 0.03,
          userSelect: 'none',
          lineHeight: '0.9'
        }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(70px, 14vw, 180px)', fontWeight: 'bold', color: '#FFF', display: 'block' }}>
            MASTER LEASE
          </span>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))', gap: '50px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          {/* Left Hero Content */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(197, 165, 114, 0.15)',
              border: '1px solid #C5A572',
              color: '#C5A572',
              padding: '6px 18px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '22px'
            }}>
              <FaBuilding /> INSTITUTIONAL BUILDING MASTER LEASE &amp; BRAND MANAGEMENT
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              lineHeight: '1.15',
              color: '#FFFFFF',
              marginBottom: '20px',
              fontWeight: '600'
            }}>
              Give Your Building to Sandane Homes.
              <span style={{ display: 'block', color: '#C5A572', fontStyle: 'italic', marginTop: '6px' }}>
                We Manage It Under Our Brand.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              lineHeight: '1.75',
              color: '#CBD5E1',
              maxWidth: '560px',
              marginBottom: '32px'
            }}>
              Own a standalone building, residential tower, or builder block of 10 to 60+ units in Gurugram, Greater Noida, or Noida? Stop managing dozens of individual tenants. Sandane Homes takes over your entire asset under a <strong>3 to 9 year Master Lease</strong>, guaranteeing one master rent check every month with 100% free maintenance.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#corporate-building-form"
                style={{
                  backgroundColor: '#C5A572',
                  color: '#0F172A',
                  padding: '16px 36px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(197, 165, 114, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                PROPOSE YOUR BUILDING <FaArrowRight size={13} />
              </a>

              <a
                href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20own%20a%20building%20and%20am%20interested%20in%20a%20Master%20Lease%20proposal."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '16px 30px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(37,211,102,0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <FaWhatsapp size={18} /> CONNECT ON WHATSAPP (INSTANT VALUATION)
              </a>
            </div>
          </div>

          {/* Right Hero Image Card Frame */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(197, 165, 114, 0.3)',
              borderRadius: '20px',
              padding: '16px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              position: 'relative'
            }}>
              <img
                src={buildingHeroImg}
                alt="Sandane Homes Building Master Lease"
                style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '14px' }}
              />

              {/* Floating Executive Badge */}
              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                right: '30px',
                background: 'rgba(15, 23, 42, 0.94)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(197, 165, 114, 0.4)',
                borderRadius: '14px',
                padding: '20px 24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>INSTITUTIONAL MASTER LEASE</span>
                  <span style={{ background: '#C5A572', color: '#0F172A', padding: '3px 10px', borderRadius: '10px', fontSize: '11px', fontWeight: '800' }}>GUARANTEED</span>
                </div>
                <h4 style={{ color: '#FFFFFF', margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>Full Building &amp; Tower Master Leasing</h4>
                <p style={{ color: '#94A3B8', margin: 0, fontSize: '13px' }}>Gurugram • Greater Noida • Noida Expressway • Yamuna Expressway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS BAR ── */}
      <section style={{ backgroundColor: '#1E293B', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '45px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', textAlign: 'center' }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>1 Master Check</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Consolidated Monthly Payout</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>3 – 9 Years</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Guaranteed Master Lease Term</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>100% Zero</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Building Vacancy Risk</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C5A572', margin: '0 0 4px 0' }}>MNC Expat Stays</h3>
            <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Verified Corporate Tenants</p>
          </div>
        </div>
      </section>

      {/* ── WHY MASTER-LEASE WITH SANDANE HOMES ── */}
      <section style={{ padding: '90px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px' }}>
          <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>THE INSTITUTIONAL ADVANTAGE</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', color: '#FFFFFF', marginTop: '10px' }}>
            Why Leading Building Owners Choose Sandane Homes
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.7', marginTop: '14px' }}>
            Managing a 20-unit building with individual tenants is a full-time headache. Sandane Homes transforms your property into a high-yielding, institutional corporate hotel residence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '30px' }}>
          <div style={{ background: '#1E293B', padding: '36px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <FaMoneyBillWave size={36} color="#C5A572" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#FFF', margin: '0 0 12px 0' }}>Single Check on the 1st of Every Month</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>
              Never track rent payments from 20 different bank transfers. We deposit one single consolidated master rental payment directly on the 1st of every month without fail.
            </p>
          </div>

          <div style={{ background: '#1E293B', padding: '36px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <FaShieldAlt size={36} color="#C5A572" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#FFF', margin: '0 0 12px 0' }}>Zero Vacancy Losses</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>
              In traditional renting, 2 to 4 units are constantly empty between tenant changes. Under our Master Lease agreement, you receive 100% rent every month, regardless of occupancy.
            </p>
          </div>

          <div style={{ background: '#1E293B', padding: '36px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <FaTools size={36} color="#C5A572" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#FFF', margin: '0 0 12px 0' }}>100% Free Maintenance &amp; Upkeep</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>
              Sandane Homes assumes total operational responsibility. Our in-house technical team manages plumbing, lift maintenance, generator servicing, electricals, and painting at zero cost to you.
            </p>
          </div>

          <div style={{ background: '#1E293B', padding: '36px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <FaCrown size={36} color="#C5A572" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#FFF', margin: '0 0 12px 0' }}>Branded Corporate Hotel Conversion</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>
              We elevate your building into a branded Sandane Homes serviced apart-hotel with 24/7 lobby reception, professional uniform security, and high-speed enterprise broadband.
            </p>
          </div>

          <div style={{ background: '#1E293B', padding: '36px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <FaUserCheck size={36} color="#C5A572" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#FFF', margin: '0 0 12px 0' }}>Verified Corporate &amp; Expat Tenants</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>
              No random walk-in guests or unverified bachelors. Stays are arranged directly for Japanese &amp; Korean engineers, multinational consultants, and senior executives with full Form C and police compliance.
            </p>
          </div>

          <div style={{ background: '#1E293B', padding: '36px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <FaFileContract size={36} color="#C5A572" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#FFF', margin: '0 0 12px 0' }}>Long-Term Legal Security (3 to 9 Years)</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>
              Institutional registered lease contracts with built-in escalation clauses and zero broker fees. Clean, transparent, corporate-grade documentation backed by legal certainty.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE: INDIVIDUAL RENTING VS MASTER LEASE ── */}
      <section style={{ backgroundColor: '#1E293B', padding: '80px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#C5A572', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>FINANCIAL REALITY</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#FFFFFF', marginTop: '8px' }}>
              Individual Multi-Tenant Renting vs. Sandane Homes Master Lease
            </h2>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid rgba(197, 165, 114, 0.25)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px', fontSize: '14px' }}>
              <thead>
                <tr style={{ backgroundColor: '#0F172A', borderBottom: '2px solid #C5A572' }}>
                  <th style={{ padding: '18px 24px', color: '#FFF' }}>Parameter</th>
                  <th style={{ padding: '18px 24px', color: '#94A3B8' }}>Traditional Multi-Tenant Renting</th>
                  <th style={{ padding: '18px 24px', color: '#C5A572', fontWeight: '800' }}>Sandane Homes Master Lease</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: '600', color: '#FFF' }}>Monthly Rent Collection</td>
                  <td style={{ padding: '16px 24px', color: '#EF4444' }}>20 to 50 separate transfers; frequent delays</td>
                  <td style={{ padding: '16px 24px', color: '#10B981', fontWeight: '700' }}>1 Single Master Check on the 1st</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: '600', color: '#FFF' }}>Vacancy Risk</td>
                  <td style={{ padding: '16px 24px', color: '#EF4444' }}>15%–25% annual revenue lost to empty flats</td>
                  <td style={{ padding: '16px 24px', color: '#10B981', fontWeight: '700' }}>0% (100% rent paid regardless of occupancy)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: '600', color: '#FFF' }}>Maintenance &amp; Repairs</td>
                  <td style={{ padding: '16px 24px', color: '#EF4444' }}>Borne by building owner; frequent repair calls</td>
                  <td style={{ padding: '16px 24px', color: '#10B981', fontWeight: '700' }}>100% Free (Handled entirely by Sandane Homes)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: '600', color: '#FFF' }}>Tenant Profile</td>
                  <td style={{ padding: '16px 24px', color: '#94A3B8' }}>Unvetted individual tenants, student groups</td>
                  <td style={{ padding: '16px 24px', color: '#10B981', fontWeight: '700' }}>Verified Japanese, Korean &amp; MNC executives</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: '600', color: '#FFF' }}>Brokerage Fees</td>
                  <td style={{ padding: '16px 24px', color: '#EF4444' }}>Recurring 15–30 days rent commission per flat</td>
                  <td style={{ padding: '16px 24px', color: '#10B981', fontWeight: '700' }}>Zero broker fees; direct multi-year contract</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 24px', fontWeight: '600', color: '#FFF' }}>Asset Condition</td>
                  <td style={{ padding: '16px 24px', color: '#EF4444' }}>Heavy wear and tear; damaged fixtures</td>
                  <td style={{ padding: '16px 24px', color: '#10B981', fontWeight: '700' }}>5-Star Hotel Showroom Standard maintained daily</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── OUR OPERATIONAL HUBS (PROOF OF WORK) ── */}
      <section style={{ padding: '90px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
          <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>DELHI NCR FOOTPRINT</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', color: '#FFFFFF', marginTop: '10px' }}>
            Where We Actively Acquire Buildings
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.7', marginTop: '14px' }}>
            Sandane Homes operates a growing hospitality footprint across northern India's premier corporate and industrial growth corridors.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ background: '#1E293B', padding: '30px', borderRadius: '14px', borderLeft: '4px solid #C5A572' }}>
            <h4 style={{ color: '#C5A572', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>Gurugram Hub</h4>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#FFF', margin: '0 0 10px 0' }}>Golf Course &amp; Cyber City</h3>
            <p style={{ color: '#94A3B8', fontSize: '13.5px', lineHeight: '1.6', margin: '0 0 16px 0' }}>
              Standalone residential blocks and builder floors near DLF Phase 1–5, Golf Course Road, Sector 58, and Sohna Road tech corridors.
            </p>
            <Link to="/partner/gurugram-building-owners" style={{ color: '#C5A572', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}>
              View Gurugram Building Program &rarr;
            </Link>
          </div>

          <div style={{ background: '#1E293B', padding: '30px', borderRadius: '14px', borderLeft: '4px solid #25D366' }}>
            <h4 style={{ color: '#25D366', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>Greater Noida Hub</h4>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#FFF', margin: '0 0 10px 0' }}>India Expo Mart &amp; Knowledge Park</h3>
            <p style={{ color: '#94A3B8', fontSize: '13.5px', lineHeight: '1.6', margin: '0 0 16px 0' }}>
              Guest houses, boutique hotels, and residential blocks in Ansal Golf Links, Jaypee Greens, Pari Chowk, and Surajpur Industrial Area.
            </p>
            <Link to="/partner/greater-noida-building-owners" style={{ color: '#25D366', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}>
              View Greater Noida Building Program &rarr;
            </Link>
          </div>

          <div style={{ background: '#1E293B', padding: '30px', borderRadius: '14px', borderLeft: '4px solid #38BDF8' }}>
            <h4 style={{ color: '#38BDF8', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>Yamuna Expressway Hub</h4>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#FFF', margin: '0 0 10px 0' }}>Noida Airport &amp; Industrial Corridors</h3>
            <p style={{ color: '#94A3B8', fontSize: '13.5px', lineHeight: '1.6', margin: '0 0 16px 0' }}>
              Upcoming hospitality assets, service apartment towers, and transit housing along Yamuna Expressway and Jewar International Airport zone.
            </p>
            <a href="#corporate-building-form" style={{ color: '#38BDF8', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}>
              Propose Airport Corridor Asset &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── THE REAL FORM SECTION (UNIFIED CANONICAL COMPONENT) ── */}
      <div id="corporate-building-form" style={{ backgroundColor: '#0B132B', padding: '70px 0 90px', borderTop: '1px solid rgba(197, 165, 114, 0.25)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', marginBottom: '20px', padding: '0 20px' }}>
          <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>DIRECT ASSET PROPOSAL</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', color: '#FFFFFF', marginTop: '6px' }}>
            Submit Your Building Details
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '640px', margin: '10px auto 0' }}>
            Share basic information about your property. Our acquisitions director will conduct a preliminary assessment and present a commercial Master Lease term sheet within 24 to 48 hours.
          </p>
        </div>

        <PartnerApplicationForm
          id="building-partner-form"
          defaultCity="Gurugram"
          defaultApartmentType="5bhk_plus"
          title="Building Owner Master Lease Proposal"
          subtitle="Provide your building specifications below. Our senior acquisitions desk will review your property and present an institutional Master Lease proposal within 24 hours."
          tag="CONFIDENTIAL MASTER LEASE EVALUATION"
        />
      </div>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section style={{ padding: '90px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#C5A572', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>BUILDING OWNER FAQS</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', color: '#FFFFFF', marginTop: '8px' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '15px', color: '#94A3B8' }}>
            Everything building owners need to know about partnering their property asset with Sandane Homes.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: '#1E293B',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '18px',
                    gap: '16px'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <FaChevronUp color="#C5A572" size={16} /> : <FaChevronDown color="#C5A572" size={16} />}
                </button>
                {isOpen && (
                  <div style={{ padding: '0 28px 24px', color: '#CBD5E1', fontSize: '14.5px', lineHeight: '1.7', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FINAL VIP CALLOUT ── */}
      <section style={{ backgroundColor: '#1E293B', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', color: '#FFF', marginBottom: '14px' }}>
            Speak Directly With Our Senior Acquisitions Team
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '15px', marginBottom: '28px' }}>
            Have a finished or under-construction building in Gurugram, Greater Noida, or Noida? Schedule a confidential on-site inspection today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919711722273?text=Hi%20Sandane%20Homes,%20I%20am%20a%20building%20owner%20and%20would%20like%20to%20schedule%20a%20call%20with%20your%20Acquisitions%20Director."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#FFF',
                padding: '16px 36px',
                borderRadius: '30px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px'
              }}
            >
              <FaWhatsapp size={20} /> CHAT ON WHATSAPP (+91 97117 22273)
            </a>
            <a
              href="tel:+919711722273"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#FFF',
                padding: '16px 32px',
                borderRadius: '30px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              📞 CALL DIRECT: +91 97117 22273
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuildingOwnersPartner;
