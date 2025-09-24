import React from 'react'
import { FaUsers, FaBook, FaChartBar } from 'react-icons/fa'
import '../../assets/styles/AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Admin Dashboard</h1>
      <p className="dashboard-subtitle">
        Use the sidebar to manage <span>users</span>, <span>courses</span> and <span>reports</span>.
      </p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>
            <FaUsers /> Users
          </h3>
          <p>Manage user accounts, roles and permissions.</p>
        </div>
        <div className="card">
          <h3>
            <FaBook /> Courses
          </h3>
          <p>Add, edit and assign courses to users.</p>
        </div>
        <div className="card">
          <h3>
            <FaChartBar /> Reports
          </h3>
          <p>View insights, activity and course statistics.</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
