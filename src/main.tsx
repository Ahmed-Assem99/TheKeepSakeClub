import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production builds ship pre-rendered HTML (see scripts/prerender.mjs); dev renders from scratch.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
