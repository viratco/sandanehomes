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
                title="Sandane Homes | Boutique Hotels & Expat Serviced Apartments"
                description="Boutique hotels in Greater Noida for short stays, and entire furnished 3–4 BHK homes in Gurugram and Greater Noida, leased to companies for expat staff and families."
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
