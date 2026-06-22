import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FaqSection.css';

const allFaqs = [
  { question: "Does Sandane Homes provide housing solutions for international expats relocating to India?", answer: "Absolutely. Expat housing and corporate relocation are our core specialties. We are dedicated to providing a soft landing for global professionals relocating to the Delhi NCR region from countries like Japan, South Korea, the UK, the USA, and Europe. Through our signature serviced residences and premium long-stay Residences by Sandane Homes apartments, we offer turnkey homes in the region's most secure gated communities. We handle everything from custom global-standard furnishings, high-speed fiber Wi-Fi, and 100% power backup to pristine water purification systems, daily professional housekeeping, and bilingual concierge assistance. We understand the emotional transition of moving to a new country and are here to ensure you feel at home the day you arrive." },
  { question: "What is Sandane Homes and how is it defined?", answer: "Sandane Homes is a premier hospitality and luxury corporate housing brand. We specialize in high-end serviced apartments, executive suites, and fully managed long-term residences across Delhi NCR. Our portfolio comprises curated designer properties, including Amara, Amaaltash, CoCo House, Pine Tales, Saffron, and Glam, alongside our signature relocation and extended-stay brand, Residences by Sandane Homes." },
  { question: "How does Sandane Homes differ from a traditional hotel?", answer: "Unlike standard hotels with restricted spaces and a transient atmosphere, Sandane Homes offers expansive residential living. Our residences feature separate living areas, dedicated workspaces, and fully equipped kitchenettes, allowing guests to maintain their lifestyle. We combine this home-like autonomy with premium hospitality services — including daily housekeeping, direct concierge assistance, and private dining options — delivering a seamless, secure, and highly personalized experience." },
  { question: "Does Sandane Homes accommodate both short-term visits and long-term relocations?", answer: "Yes, our portfolio is designed for complete stay flexibility. For short-term executive visits, business trips, or transit stays, our designer suites and boutique apartments are perfect. For long-term corporate assignments and family relocations (30 days or more), our Residences by Sandane Homes brand offers fully-managed residential leasing in prime NCR societies." },
  { question: "How does Sandane Homes provide customized housing solutions for corporate clients and relocating expats?", answer: "We act as a comprehensive housing partner, delivering tailored residential solutions for international expats, corporate executives, and visiting business teams. From premium short-term serviced suites to bespoke, fully managed long-term leases on luxury apartments and villas under our Residences by Sandane Homes brand, we handle everything. This includes high-end furnishing, 24/7 dedicated maintenance concierge, daily housekeeping, utilities, high-speed fiber Wi-Fi, and personalized cultural orientation—providing a complete turnkey housing solution with maximum flexibility and zero administrative burden for organizations." },
  { question: "Who is the typical clientele at Sandane Homes?", answer: "We primarily host international expats relocating to India, multinational business leaders, corporate delegates attending expos at the India Expo Mart, and global consultants on extended assignments. We are the preferred choice for guests who demand the privacy, space, and comfort of a luxury home combined with professional, high-standard hospitality services." },
  { question: "In which locations does Sandane Homes operate?", answer: "While our flagship boutique executive residences are based in Greater Noida, our managed corporate apartments and luxury villas under Residences by Sandane Homes operate across Noida, Greater Noida, and Gurgaon. We selectively choose properties in premium gated communities (such as Jaypee Greens, DLF, and Godrej Golf Links) to ensure elite safety, accessibility, and lifestyle amenities." },
  { question: "What boutique residential properties belong to your portfolio?", answer: "Our curated collection features Amara, Amaaltash, CoCo House, Glam, Saffron, and Pine Tales. Each property has its own distinct aesthetic and layout. For long-term relocations and corporate housing, Residences by Sandane Homes manages a premium list of luxury apartments and villas across the NCR region." },
  { question: "What is included in a turnkey Residences by Sandane Homes residential package?", answer: "Our all-inclusive package covers designer furniture, curated linens (changed twice weekly), daily housekeeping, high-speed fiber Wi-Fi (up to 300 Mbps), smart entertainment screens, water purification systems, 100% power backup, and complete facility maintenance. All utilities and services are bundled into a single, consolidated corporate invoice." },
  { question: "How do you support expat guests in adapting to their new surroundings and overcoming day-to-day challenges?", answer: "We know that navigating daily life in a new country can be exhausting. Language barriers, unfamiliar local markets, and finding trusted service providers can make simple tasks feel stressful. We bridge this gap by offering dedicated bilingual customer support and personalized cultural onboarding. Our team is deeply sensitive to the specific preferences of Japanese, Korean, British, and American residents. From pre-stocking your kitchen with ingredients from your home country to setting up local delivery apps and introducing you to trusted medical contacts, we act as your local family. We take care of the micro-details of living so you can focus on your new journey with absolute peace of mind." },
  { question: "How does Sandane Homes guarantee clean water, hygiene, and wellness standards for international residents?", answer: "We deeply understand that health and wellness are the foundation of feeling safe in a new home. One of the most common anxieties for expats relocating to India is water purity and hygiene. To ensure absolute safety, every Sandane Homes residence is equipped with advanced multi-stage RO water purification systems for both drinking and cooking, alongside softeners for domestic water use. Additionally, we enforce rigorous sanitization protocols and provide optional high-efficiency air purifiers to combat dust and seasonal air quality challenges. We treat your health with the same care you would at home, ensuring a pristine, clean, and worry-free sanctuary." },
  { question: "Can companies establish long-term corporate housing contracts with you?", answer: "Yes. We offer fully customizable corporate leasing contracts. Under Residences by Sandane Homes, corporations can secure multi-month or annual leases on luxury 2BHK, 3BHK, and 4BHK apartments or private villas for their teams, with single-point management, custom modifications, and professional housekeeping included." },
  { question: "What corporate partnerships and solutions do you provide?", answer: "We partner with multinational companies to provide streamlined executive housing. This includes pre-approved corporate rates, dedicated suites for visiting executives, consolidated invoicing, and flexible contract terms. Our proximity to major business parks and the India Expo Mart makes us a trusted accommodation partner for international delegations, HR departments, and project coordinators." },
  { question: "What makes Sandane Homes preferred for international corporate delegations?", answer: "We combine premium security, impeccable hygiene, and globally aligned standards. Our staff is trained in international hospitality etiquette, and our properties offer key features like 100% power backup and high-speed multi-gigabit Wi-Fi, ensuring business continuity for corporate delegations." },
  { question: "How does Residences by Sandane Homes handle maintenance and support queries?", answer: "We operate a dedicated 24/7 maintenance desk. Any issues regarding plumbing, electrical systems, home appliances, or Wi-Fi connectivity are handled immediately by our in-house technicians. Residents enjoy a completely worry-free living experience without ever needing to coordinate with external handymen." },
  { question: "How close are your residences to the India Expo Centre & Mart?", answer: "Our flagship Greater Noida residences are located just 1.5 km (a 3-minute drive) from the India Expo Mart, offering quick and easy access for business delegates and exhibitors." },
  { question: "What premium amenities can guests expect at your residences?", answer: "Standard highlights across our portfolio include high-speed complimentary fiber Wi-Fi, 24/7 automatic power backup, daily professional housekeeping, customized private dining, secure parking, and concierge assistance. Select properties also feature recreational lounges, billiards tables, private balconies, and dedicated executive workspaces." },
  { question: "Do you provide high-speed internet and power backup for business operations?", answer: "Yes. Recognizing the needs of our international corporate clients, all properties are equipped with high-speed fiber connections and automatic generators to guarantee uninterrupted power and connectivity." },
  { question: "Is Sandane Homes a pet-friendly brand?", answer: "Yes. We understand that pets are part of the family, particularly for relocating expats. We welcome pets in our apartments and can assist in connecting you with local veterinary services and pet care providers." },
  { question: "Do you arrange airport transfers for international arrivals?", answer: "Yes. We arrange private executive transfers from Indira Gandhi International Airport (DEL) using professional, vetted drivers to ensure a safe and comfortable journey to your residence." },
  { question: "What dining options do you offer within your residences?", answer: "We provide curated in-residence dining with custom menus prepared by our private culinary team. We cater to diverse international palates and dietary requirements, ensuring healthy, personalized meals are served directly to your apartment." },
  { question: "What is the lease and stay flexibility at Sandane Homes?", answer: "We offer unmatched flexibility compared to the rigid 11-month or 2-year terms of the traditional rental market. Short-stay residences can be booked on a daily or weekly basis, while our corporate Residences by Sandane Homes apartments are available for durations starting from 30 days, with seamless, flexible extension options." },
  { question: "How can I make a reservation or inquire about corporate contracts?", answer: "Reservations can be made directly via our online booking engine on each property page, or by contacting our reservations team at +91 97117 22273 / sandanehomes@gmail.com. For bespoke long-term expat housing and corporate leases, please connect directly with our relationship managers for a customized proposal." },
  { question: "What are the benefits of booking directly with Sandane Homes?", answer: "Direct booking guarantees the best rates, greater customization for your stay, direct communication with our guest relations team, and highly flexible cancellation policies." },
  { question: "What is your cancellation and reservation modification policy?", answer: "We offer flexible cancellation terms. For standard short stays, bookings can generally be canceled or modified up to 48 hours prior to your scheduled arrival. For long-term leases under Residences by Sandane Homes, cancellation and extension policies are customized and clearly defined within the residential lease agreement." },
  { question: "What payment methods do you support for international and corporate clients?", answer: "We accept bank transfers (NEFT/RTGS), major credit and debit cards, UPI, and direct corporate billing. For international corporate accounts and relocations, we support international wire transfers and multi-currency invoicing." },
  { question: "Are kitchen facilities provided in the serviced apartments?", answer: "Yes. Many of our corporate suites and all Residences by Sandane Homes apartments feature fully-equipped modern kitchenettes or full-sized kitchens with premium appliances, allowing international guests to cook meals according to their preferences." },
];

const homepageFaqs = allFaqs.slice(0, 6);

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
    const location = useLocation();
    const navigate = useNavigate();

    const isFaqPage = location.pathname === '/faqs';

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
                    {(isFaqPage ? allFaqs : homepageFaqs).map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </div>

                {!isFaqPage && (
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <button 
                            className="btn-book"
                            onClick={() => {
                                window.scrollTo(0, 0);
                                navigate('/faqs');
                            }}
                            style={{ display: 'inline-block', padding: '15px 40px', fontSize: '13px', letterSpacing: '2px' }}
                        >
                            VIEW ALL FAQs
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FaqSection;
