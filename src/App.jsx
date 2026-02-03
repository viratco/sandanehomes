import React from 'react';
import ScrollToTop from './components/ScrollToTop';
import './MobileStyles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import CatarinaServices from './components/pages/CatarinaServices';
import SandaneHomes from './components/pages/SandaneHomes';
import Amara from './components/pages/Amara';
import Amaaltash from './components/pages/Amaaltash';
import Saffron from './components/pages/Saffron';
import PineTales from './components/pages/PineTales';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catarina-services" element={<CatarinaServices />} />
          <Route path="/sandane-homes" element={<SandaneHomes />} />
          <Route path="/amara" element={<Amara />} />
          <Route path="/amaaltash" element={<Amaaltash />} />
          <Route path="/saffron" element={<Saffron />} />
          <Route path="/pine-tales" element={<PineTales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
