import React from 'react';
import useSEO from '../../hooks/useSEO';
import Header from '../Header';
import Hero from '../Hero';
import LuxurySection from '../LuxurySection';
import ApartmentTypes from '../ApartmentTypes';
import CuisineSection from '../CuisineSection';
import ServicesSection from '../ServicesSection';
import HospitalitySection from '../HospitalitySection';
import DiscoverSection from '../DiscoverSection';
import ContactSection from '../ContactSection';
import ReservationSeparator from '../ReservationSeparator';
import Footer from '../Footer';

const Home = () => {
    useSEO({
        title: "Sandane Homes | Premium Serviced Apartments & Stays in Greater Noida",
        description: "Discover luxury serviced apartments and premium residences by Sandane Homes in Greater Noida. Fully-serviced premium stays with top-notch amenities, professional hospitality, and comfort.",
        canonicalUrl: "https://www.sandanehomes.com/"
    });

    return (
        <div className="home">
            <Header />
            <Hero />
            <LuxurySection />
            <ApartmentTypes />
            <ReservationSeparator />
            <CuisineSection />

            <HospitalitySection />
            <DiscoverSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;
