import React from 'react';
import SEO from '../SEO';
import Header from '../Header';
import SubpageNav from '../SubpageNav';
import Footer from '../Footer';
import FaqSection from '../FaqSection';

const FaqPage = () => {
    const seoProps = {
        title: "FAQs – Serviced Apartments & Corporate Stays | Sandane Homes Greater Noida",
        description: "Got questions about long-stay serviced apartments in Greater Noida? Find answers about pricing, amenities, corporate packages & expat accommodation at Sandane Homes.",
        canonical: "https://www.sandanehomes.com/faqs",
        ogImage: "https://www.sandanehomes.com/logo.png",
        schema: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Does Sandane Homes provide housing to expats?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Sandane Homes specialises in expat housing across Greater Noida, Noida, and Gurgaon. We serve professionals from Japan, South Korea, the UK, the USA, and across Europe — providing fully-furnished, move-in-ready residences with dedicated support from day one."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the minimum stay at Residences by Sandane Homes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We offer flexible stays starting from 1 month, with special corporate packages for 3, 6, and 12-month engagements. Monthly rolling contracts are available for professionals on project-based assignments."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are your serviced apartments suitable for Japanese and Korean expats?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Our residences in Greater Noida are minutes from Honda Cars India, Yamaha Motor, LG Electronics, and Samsung — making them the preferred choice for Japanese and Korean expat professionals at these companies. We understand your needs around water safety, power reliability, and cultural comfort."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What amenities are included in the monthly stay?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "All apartments come fully furnished with premium housekeeping, high-speed Wi-Fi up to 300 Mbps, air conditioning, air purifiers, hot & cold water dispensers, a 20-litre water supply, 100% electricity backup, laundry facilities, and 24/7 maintenance support. We handle every detail so you don't have to."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is the water safe at Sandane Homes residences?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We understand this is a top concern for international guests. Every residence is equipped with RO-filtered water dispensers and we provide 5 bottles (20 litres each) of purified water per month as standard. Your health and safety are non-negotiable to us."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer corporate housing packages for companies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We work directly with HR departments and corporate housing managers. Our B2B packages include bulk apartment arrangements, transparent invoicing, dedicated account management, and flexible lease structures tailored to your company's relocation timelines."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Where are the Sandane Homes residences located?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our serviced apartments are located in premium gated communities across Greater Noida (near India Expo Centre, Knowledge Park II, Honda, LG), Noida, and Gurgaon — including DLF, Jaypee Greens, and Godrej Golf Link neighbourhoods."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is included in a fully-furnished Sandane Homes apartment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Every apartment includes elegant furniture, bed & bath linens (changed twice weekly), one television, an air purifier, a hot & cold water dispenser, a fully-equipped kitchen with premium cutlery, and a dedicated workspace — everything you need to feel at home from day one."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How close is Sandane Homes to the India Expo Centre?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sandane Homes is located just 1.5 km from the India Expo Centre & Mart in Greater Noida — a 3-minute drive. This makes it exceptionally convenient for exhibitors, delegates, and business travellers attending events and trade fairs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I get a customised housing solution for my team?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We build tailored solutions for corporate teams — from sourcing multiple units in the same society to coordinating seamless move-ins. Contact us at sandanehomes@gmail.com or call +91 97117 22273 to discuss your team's requirements."
                    }
                }
            ]
        }
    };

    return (
        <div className="sandane-homes-page" style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <SEO {...seoProps} />
            <Header showTopBar={false} />
            <SubpageNav />
            <div style={{ flex: 1, paddingTop: '100px' }}>
                {/* Visually hidden but crawlable H1 for SEO */}
                <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
                    Serviced Apartments & Corporate Stays FAQ – Sandane Homes Greater Noida
                </h1>
                <FaqSection />
            </div>
            <Footer />
        </div>
    );
};

export default FaqPage;
