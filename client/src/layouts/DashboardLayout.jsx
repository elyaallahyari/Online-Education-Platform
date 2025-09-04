import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import PublicLayout from './PublicLayout'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar'
import { IoLogIn } from 'react-icons/io5'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
import RightSidebar from '../components/RightSidebar'
import Profile from '../assets/images/icons8-profile-100.png'
import '../assets/styles/DashboardLayout.css'

const DashboardLayout = () => {
  const [user, setUser] = useState({})
  const [isLoggedin, setIsLoggedin] = useState(false)

  const logoutHandler = () => {
    localStorage.clear()
    setIsLoggedin(false)
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setIsLoggedin(true)
      setUser(JSON.parse(storedUser))
    }
  }, [])
  return (
    <div>
      <PublicLayout>
        <Navbar
          path_1={'/enter'}
          logo_1={<IoLogIn />}
          item_1={'enter'}
          logo_2={<IoInvertMode />}
          item_2={'mode'}
          logo_3={<IoLanguage />}
          item_3={'lang'}
        />
        <LeftSidebar />

        {isLoggedin && (
          <RightSidebar
            profile={user?.profile || Profile}
            fullName={user?.fullName}
            email={user?.email}
            age={user?.age}
            onClick={logoutHandler}
            style={{ visibility: isLoggedin ? 'visible' : 'hidden' }}
          />
        )}

        <div className="dashboard__content">
          <Outlet />
        </div>
      </PublicLayout>
    </div>
  )
}

export default DashboardLayout
