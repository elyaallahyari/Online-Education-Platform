import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.jsx'
import './services/i18n'
import './assets/styles/themes.css'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <ThemeProvider>
      <GoogleOAuthProvider clientId="284361398088-cooijkffg4hi5q3cbc3cehglg4v2fk1c.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </ThemeProvider>
  </LanguageProvider>
)
