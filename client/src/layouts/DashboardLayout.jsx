import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar'
import { IoLogIn } from 'react-icons/io5'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
import RightSidebar from '../components/RightSidebar'
import Profile from '../assets/images/icons8-profile-100.png'
import { RiArrowDownWideFill } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import '../assets/styles/DashboardLayout.css'

const DashboardLayout = () => {
  const [user, setUser] = useState({})
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)

  const { t } = useTranslation()

  const logoutHandler = () => {
    setOpenSidebar(false)
    setIsLoggedin(false)
    localStorage.clear()
  }
  const profileHandler = () => {
    setOpenSidebar(!openSidebar)
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
      <Navbar
        logo_1={<IoInvertMode />}
        item_1={t('navbar.mode')}
        logo_2={<IoLanguage />}
        item_2={t('navbar.lang')}
        path_3={!isLoggedin && '/enter'}
        logo_3={isLoggedin ? <CgProfile onClick={profileHandler} /> : <IoLogIn />}
        item_3={isLoggedin ? <RiArrowDownWideFill /> : t('navbar.enter')}
      />
      <LeftSidebar />

      {openSidebar && (
        <RightSidebar
          userId={user?.id}
          profile={user?.profile || Profile}
          fullName={user?.fullName}
          email={user?.email}
          age={user?.age}
          onClick={logoutHandler}
        />
      )}

      <div className="dashboard__content">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
