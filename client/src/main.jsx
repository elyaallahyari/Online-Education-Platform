import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import App from './App.jsx'
import './services/i18n'
import './assets/styles/themes.css'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LanguageProvider>
)
