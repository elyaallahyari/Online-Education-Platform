import React, { useContext } from 'react'
import '../assets/styles/Navbar.css'
import { Link } from 'react-router-dom'
import { IoLogoSoundcloud } from 'react-icons/io5'
import { LanguageContext } from '../context/LanguageContext'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = ({ path_3, logo_1, logo_2, logo_3, item_3 }) => {
  const { language, changeLanguage } = useContext(LanguageContext)
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <div className="navbar">
        <div className="navbar__left">
          <Link to={'/'} className="navbar__items">
            <IoLogoSoundcloud className="navbar__logo" />
            <span className="navbar__item logo">Platform</span>
          </Link>
        </div>

        <div className="navbar__right">
          <div className="navbar__items" onClick={toggleTheme}>
            <div className="navbar__logo">{logo_1}</div>
            <div className="navbar__item">{theme}</div>
          </div>

          <div
            className="navbar__items"
            onClick={() => changeLanguage(language === 'en' ? 'fa' : 'en')}
            style={{ cursor: 'pointer' }}
          >
            <div className="navbar__logo">{logo_2}</div>
            <div className="navbar__item">{language}</div>
          </div>

          <Link className="navbar__items search" to={path_3}>
            <div className="navbar__logo">{logo_3}</div>
            <div className="navbar__item">{item_3}</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
