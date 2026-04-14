import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ThemeProvider } from '@context/ThemeProvider'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </HelmetProvider>
  </StrictMode>
)