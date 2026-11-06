import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isOwnerPath, listenForOwnerContactClicks } from '../utils/ownerLeads';

// Tracks owner call/WhatsApp/proposal clicks as owner events (renders nothing): on owner pages
// every call/WhatsApp link, elsewhere only links inside `data-owner-source` CTAs.
const OwnerClickTracker = () => {
  const { pathname } = useLocation();
  useEffect(() => listenForOwnerContactClicks({ onOwnerPage: isOwnerPath(pathname) }), [pathname]);
  return null;
};

export default OwnerClickTracker;
