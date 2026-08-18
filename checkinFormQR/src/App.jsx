import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GuestRegistration from './pages/GuestRegistration.jsx';
import Confirmation from './pages/Confirmation.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestRegistration />} />
        <Route path="/confirmation" element={<Confirmation />} />
        {/* Catch-all — redirect to form */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
