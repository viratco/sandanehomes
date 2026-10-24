import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import Preloader from './components/Preloader'

// The inline script in index.html sets data-preload only for human visitors landing
// on the homepage (once per session). Bots and every other page skip the preloader.
if (document.documentElement.hasAttribute('data-preload')) {
  const preloaderEl = document.createElement('div');
  document.body.appendChild(preloaderEl);
  const preloaderRoot = createRoot(preloaderEl);
  preloaderRoot.render(
    <Preloader
      onComplete={() => {
        document.documentElement.removeAttribute('data-preload');
        preloaderRoot.unmount();
        preloaderEl.remove();
      }}
    />
  );
}

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// Prerendered markup is only reused when it was rendered for this exact path. Routes
// without their own HTML fall back to the homepage's index.html, so render fresh there.
const currentPath = window.location.pathname.replace(/(.)\/$/, '$1');
if (container.hasChildNodes() && container.dataset.prerendered === currentPath) {
  hydrateRoot(container, app);
} else {
  container.innerHTML = '';
  createRoot(container).render(app);
}
