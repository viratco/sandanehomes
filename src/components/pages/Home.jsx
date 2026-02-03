import React from 'react';
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
    return (
        <div className="home">
            <Header />
            <Hero />
            <LuxurySection />
            <ApartmentTypes />
            <ReservationSeparator />
            <CuisineSection />
            <ServicesSection />
            <HospitalitySection />
            <DiscoverSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;
