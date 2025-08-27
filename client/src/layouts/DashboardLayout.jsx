import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicLayout from './PublicLayout'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar'
import { IoLogIn } from 'react-icons/io5'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'

const DashboardLayout = () => {
  return (
    <div>
      <PublicLayout>
        <Navbar
          //   path_1={'/enter'}
          logo_1={<IoLogIn />}
          item_1={'enter'}
          logo_2={<IoInvertMode />}
          item_2={'mode'}
          logo_3={<IoLanguage />}
          item_3={'lang'}
        />
        <LeftSidebar />
        <div className="dashboard__content">
          <Outlet />
        </div>
      </PublicLayout>
    </div>
  )
}

export default DashboardLayout
