import React from 'react'
import '../assets/styles/Navbar.css'
import { Link } from 'react-router-dom'
import { IoLogoSoundcloud } from 'react-icons/io5'

const Navbar = ({ path_3, logo_1, item_1, logo_2, item_2, logo_3, item_3 }) => {
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
          <div className="navbar__items">
            <div className="navbar__logo">{logo_1}</div>
            <div className="navbar__item">{item_1}</div>
          </div>

          <div className="navbar__items">
            <div className="navbar__logo">{logo_2}</div>
            <div className="navbar__item">{item_2}</div>
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
