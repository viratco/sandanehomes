import React from 'react';
import SEO from '../SEO';
import Header from '../Header';
import Hero from '../Hero';
import LuxurySection from '../LuxurySection';
import ApartmentTypes from '../ApartmentTypes';
import CuisineSection from '../CuisineSection';
import ServicesSection from '../ServicesSection';
import HospitalitySection from '../HospitalitySection';
import DiscoverSection from '../DiscoverSection';
import FaqSection from '../FaqSection';
import ContactSection from '../ContactSection';
import ReservationSeparator from '../ReservationSeparator';
import Footer from '../Footer';
import ExpatPopupBar from '../ExpatPopupBar';
import { SANDANE_ORGANIZATION_SCHEMA } from '../../utils/schemaHelper';

const homeSchema = SANDANE_ORGANIZATION_SCHEMA;

const Home = () => {
    return (
        <div className="home">
            <SEO
                title="Sandane Homes | Boutique Hotels & Large Serviced Apartments | Greater Noida & Gurugram"
                description="Sandane Homes runs boutique hotels in Greater Noida for short stays, and Residences by Sandane Homes for long stays: entire furnished 3–4 BHK homes of 2,700–3,500 sq ft for company expats and families in Greater Noida and Gurugram."
                canonical="https://www.sandanehomes.com/"
                ogImage="https://www.sandanehomes.com/residences-og.jpg"
                schema={homeSchema}
            />
            <Header />
            <Hero />
            <LuxurySection />
            <ApartmentTypes />
            <ReservationSeparator />
            <CuisineSection />

            <HospitalitySection />
            <DiscoverSection />
            <FaqSection />
            <ContactSection />
            <Footer />
            <ExpatPopupBar />
        </div>
    );
};

export default Home;
