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
import { createLodgingSchema } from '../../utils/schemaHelper';

const homeSchema = createLodgingSchema({
    name: "Sandane Homes",
    url: "https://www.sandanehomes.com/",
    description: "Discover luxury boutique hotels and premium residences by Sandane Homes in Greater Noida. Luxury stays, executive suites, and corporate residences with top-notch amenities, professional hospitality, and comfort."
});

const Home = () => {
    return (
        <div className="home">
            <SEO
                title="Sandane Homes | Luxury Boutique Hotels & Premium Stays in Greater Noida"
                description="Discover luxury boutique hotels and premium residences by Sandane Homes in Greater Noida. Luxury stays, executive suites, and corporate residences with top-notch amenities, professional hospitality, and comfort."
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
