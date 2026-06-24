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
          <Route path="/sandane-homes" element={<SandaneHomes />} />
          <Route path="/amara" element={<Amara />} />
          <Route path="/amaaltash" element={<Amaaltash />} />
          <Route path="/saffron" element={<Saffron />} />
          <Route path="/pine-tales" element={<PineTales />} />
          <Route path="/glam" element={<Glam />} />
          <Route path="/coco-house" element={<CocoHouse />} />
          <Route path="/faqs" element={<FaqPage />} />
        </Routes>
        <WhatsAppButton />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
