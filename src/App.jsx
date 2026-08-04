import React, { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';
import './MobileStyles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Residences from './components/pages/Residences';
import SandaneHomes from './components/pages/SandaneHomes';
import Amara from './components/pages/Amara';
import Amaaltash from './components/pages/Amaaltash';
import Saffron from './components/pages/Saffron';
import PineTales from './components/pages/PineTales';
import Glam from './components/pages/Glam';
import CocoHouse from './components/pages/CocoHouse';
import FaqPage from './components/pages/FaqPage';
import ServicedApartmentsGreaterNoida from './components/pages/ServicedApartmentsGreaterNoida';
import KoreanExpatHousing from './components/pages/KoreanExpatHousing';
import JapaneseExpatHousing from './components/pages/JapaneseExpatHousing';
import ChineseExpatHousing from './components/pages/ChineseExpatHousing';
import BlogList from './components/pages/BlogList';
import BlogPost from './components/pages/BlogPost';
import LandingPage from './components/pages/LandingPage';
import Relocation from './components/pages/Relocation';
import Preloader from './components/Preloader';
import WhatsAppButton from './components/WhatsAppButton';

import { Analytics } from '@vercel/analytics/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className="app" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residences" element={<Residences />} />
          <Route path="/residences/relocation" element={<Relocation />} />
          <Route path="/sandane-homes" element={<SandaneHomes />} />
          <Route path="/amara" element={<Amara />} />
          <Route path="/amaaltash" element={<Amaaltash />} />
          <Route path="/saffron" element={<Saffron />} />
          <Route path="/pine-tales" element={<PineTales />} />
          <Route path="/glam" element={<Glam />} />
          <Route path="/coco-house" element={<CocoHouse />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/serviced-apartments-greater-noida" element={<ServicedApartmentsGreaterNoida />} />
          <Route path="/korean-expat-housing-delhi-ncr" element={<KoreanExpatHousing />} />
          <Route path="/japanese-expat-housing-delhi-ncr" element={<JapaneseExpatHousing />} />
          <Route path="/chinese-expat-housing-greater-noida" element={<ChineseExpatHousing />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/zh/:slug" element={<BlogPost />} />
          <Route path="/cn/:slug" element={<BlogPost />} />
          
          {/* SEO Landing Pages (Pages 3-15) */}
          <Route path="/serviced-apartments-ansal-golf-links" element={<LandingPage slug="serviced-apartments-ansal-golf-links" />} />
          <Route path="/serviced-apartments-godrej-golf-link" element={<LandingPage slug="serviced-apartments-godrej-golf-link" />} />
          <Route path="/furnished-apartments-greater-noida" element={<LandingPage slug="furnished-apartments-greater-noida" />} />
          <Route path="/corporate-housing-greater-noida" element={<LandingPage slug="corporate-housing-greater-noida" />} />
          <Route path="/long-stay-apartments-greater-noida" element={<LandingPage slug="long-stay-apartments-greater-noida" />} />
          <Route path="/apartments-near-india-expo-centre" element={<LandingPage slug="apartments-near-india-expo-centre" />} />
          <Route path="/japanese-expat-housing-greater-noida" element={<LandingPage slug="japanese-expat-housing-greater-noida" />} />
          <Route path="/expat-housing-delhi-ncr" element={<LandingPage slug="expat-housing-delhi-ncr" />} />
          <Route path="/corporate-accommodation-noida" element={<LandingPage slug="corporate-accommodation-noida" />} />
          <Route path="/relocation-housing-noida" element={<LandingPage slug="relocation-housing-noida" />} />
          <Route path="/accommodation-visiting-engineers-noida" element={<LandingPage slug="accommodation-visiting-engineers-noida" />} />
          <Route path="/luxury-villa-rental-greater-noida" element={<LandingPage slug="luxury-villa-rental-greater-noida" />} />
          <Route path="/serviced-apartments-jaypee-greens" element={<LandingPage slug="serviced-apartments-jaypee-greens" />} />
        </Routes>
        <WhatsAppButton />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
