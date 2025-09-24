import React from 'react'
import { CgProfile } from 'react-icons/cg'
import '../../assets/styles/AdminNavbar.css'

const AdminNavbar = ({ admin }) => {
  return (
    <div className="admin-navbar">
      <h1>Admin Dashboard</h1>
      <div className="admin-profile">
        <CgProfile size={28} />
        <span>{admin?.email}</span>
      </div>
    </div>
  )
}

export default AdminNavbar
