import React from 'react'
import { Link } from 'react-router-dom'
import { FaUsers, FaBook, FaChartBar, FaHome } from 'react-icons/fa'
import '../../assets/styles/AdminSidebar.css'

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/dashboard">
            <FaHome /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/dashboard/users">
            <FaUsers /> Users
          </Link>
        </li>
        <li>
          <Link to="/admin/dashboard/courses">
            <FaBook /> Courses
          </Link>
        </li>
        <li>
          <Link to="/admin/dashboard/reports">
            <FaChartBar /> Reports
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminSidebar
