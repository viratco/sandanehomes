import React, { useState } from 'react';
import './FaqSection.css';

const faqs = [
  { question: "How far is Sandane Homes from the India Expo Centre & Mart?", answer: "Sandane Homes is located just 1.5 km from the India Expo Centre & Mart, making it a 3-minute drive or a short walk for event attendees and exhibitors." },
  { question: "What is the closest metro station to Sandane Homes Greater Noida?", answer: "The nearest metro station is the Knowledge Park-II Metro Station (Aqua Line), located less than a 5-minute drive from the property." },
  { question: "What is the exact address of Sandane Homes?", answer: "Sandane Homes is located at BB-28, Block B, Ansal Golf Link -1, Greater Noida, Uttar Pradesh 201315." },
  { question: "Does Sandane Homes provide free Wi-Fi and power backup?", answer: "Yes, we offer complimentary high-speed Wi-Fi throughout the property and 24/7 power backup to ensure uninterrupted business workflows." },
  { question: "Do you offer special corporate rates or group bookings for Expo Mart events?", answer: "Yes, Sandane Homes provides customized corporate packages and discounted group booking rates for event exhibitors and corporate delegations. Please contact our front desk for custom quotes." },
  { question: "Is free parking available on-site at Sandane Homes?", answer: "Yes, we provide secure, complimentary on-site parking for all staying guests." },
  { question: "What are the check-in and check-out timings at Sandane Homes?", answer: "Standard check-in time is 12:00 PM, and check-out time is 11:00 AM. Early check-in or late check-out is subject to room availability." },
  { question: "Are serviced apartments or kitchen facilities available at the property?", answer: "Yes, Sandane Homes offers boutique serviced apartments featuring modern amenities, and select units include kitchenette access for long-stay guests." }
];

const FaqItem = ({ faq, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                    <span className="faq-icon-line horizontal"></span>
                    <span className="faq-icon-line vertical"></span>
                </div>
            </div>
            <div className="faq-answer-wrapper">
                <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="faq-header">
                    <span className="faq-subtitle">ANSWERS TO YOUR QUESTIONS</span>
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                </div>
                
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FaqItem 
                            key={index} 
                            faq={faq} 
                            isOpen={openIndex === index} 
                            onClick={() => toggleFaq(index)} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
