import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/admin/AdminSidebar'
import AdminNavbar from '../components/admin/AdminNavbar'
import '../assets/styles/AdminLayout.css'

const AdminLayout = () => {
  const [admin, setAdmin] = useState({})

  useEffect(() => {
    const storedAdmin = localStorage.getItem('user')
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin))
    }
  }, [])

  return (
    <div className="admin-layout">
      <AdminNavbar admin={admin} />
      <div className="layout-body">
        <AdminSidebar />
        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
