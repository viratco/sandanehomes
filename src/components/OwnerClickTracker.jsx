import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isOwnerPath, listenForOwnerContactClicks } from '../utils/ownerLeads';

// Tracks call/WhatsApp clicks on property-owner pages as owner events (renders nothing).
const OwnerClickTracker = () => {
  const { pathname } = useLocation();
  useEffect(() => (isOwnerPath(pathname) ? listenForOwnerContactClicks() : undefined), [pathname]);
  return null;
};

export default OwnerClickTracker;
