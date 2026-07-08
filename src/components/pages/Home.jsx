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

const Home = () => {
    return (
        <div className="home">
            <SEO
                title="Sandane Homes | Premium Serviced Apartments & Stays in Greater Noida"
                description="Discover luxury serviced apartments and premium residences by Sandane Homes in Greater Noida. Fully-serviced stays with top-notch amenities, professional hospitality, and comfort."
                canonical="https://www.sandanehomes.com/"
                ogImage="https://www.sandanehomes.com/residences-og.jpg"
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
        </div>
    );
};

export default Home;
