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

            {/* Added as requested by user to look like Catarina's subtitle */}
            <div style={{ padding: '20px 20px 60px 20px', backgroundColor: '#FFFBF5', textAlign: 'center' }}>
                <h3 style={{
                    fontSize: '24px',
                    color: '#111',
                    marginBottom: '30px',
                    fontWeight: '400'
                }}>
                    2BHK - 4BHK / VILLAS
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '16px', color: '#555' }}>
                    <p><strong style={{ color: '#111' }}>Location:</strong> Gurgaon / Greater Noida / Noida</p>
                    <p><strong style={{ color: '#111' }}>Options Available in:</strong> DLF / Jaypee Greens / Godrej Golf Link and other high-end societies</p>
                </div>
            </div>

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
