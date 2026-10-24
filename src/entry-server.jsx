import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// Used at build time by generate-seo.js to prerender each route's HTML into
// dist/<route>/index.html, so crawlers see page content without running JS.
export function render(url) {
  return renderToString(
    <StrictMode>
      <HelmetProvider context={{}}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
}
