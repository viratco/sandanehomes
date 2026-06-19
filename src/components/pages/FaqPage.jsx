import React from 'react';
import useSEO from '../../hooks/useSEO';
import Header from '../Header';
import SubpageNav from '../SubpageNav';
import Footer from '../Footer';
import FaqSection from '../FaqSection';

const FaqPage = () => {
    useSEO({
        title: "Frequently Asked Questions | Sandane Homes",
        description: "Find answers to all your questions about Sandane Homes, from our location near the India Expo Centre to our premium amenities, check-in timings, and more.",
        canonicalUrl: "https://www.sandanehomes.com/faqs"
    });

    return (
        <div className="sandane-homes-page" style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header showTopBar={false} />
            <SubpageNav />
            <div style={{ flex: 1, paddingTop: '100px' }}>
                <FaqSection />
            </div>
            <Footer />
        </div>
    );
};

export default FaqPage;
