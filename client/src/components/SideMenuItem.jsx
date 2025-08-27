import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/styles/SideMenuItem.css'

const SideMenuItem = ({ icon, name, to }) => {
  return (
    <>
      <NavLink to={to} className={({ isActive }) => `menu ${isActive ? 'active' : ''}`}>
        <span className="menu__icon">{icon}</span>
        <span className="menu__name">{name}</span>
      </NavLink>
    </>
  )
}

export default SideMenuItem
