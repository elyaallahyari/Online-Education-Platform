import React from 'react'
import '../assets/styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ path_1, logo_1, item_1, logo_2, item_2, logo_3, item_3 }) => {
  return (
    <div>
      <div className="navbar">
        <Link className="navbar__items" to={path_1}>
          <div className="navbar__logo">{logo_1}</div>
          <div className="navbar__item">{item_1}</div>
        </Link>

        <div className="navbar__items">
          <div className="navbar__logo">{logo_2}</div>
          <div className="navbar__item">{item_2}</div>
        </div>

        <div className="navbar__items">
          <div className="navbar__logo">{logo_3}</div>
          <div className="navbar__item">{item_3}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
