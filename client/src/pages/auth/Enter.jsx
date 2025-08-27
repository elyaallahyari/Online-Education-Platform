import React from 'react'
import PublicLayout from '../../layouts/PublicLayout'
import Navbar from '../../components/Navbar'
import Banner from '../../assets/images/site-banner.png'
import '../../assets/styles/Enter.css'
import { FaSearch } from 'react-icons/fa'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'

const Enter = () => {
  return (
    <>
      <PublicLayout>
        <Navbar
          path_1={'/dashboard'}
          logo_1={<FaSearch />}
          item_1={'explore'}
          logo_2={<IoInvertMode />}
          item_2={'mode'}
          logo_3={<IoLanguage />}
          item_3={'lang'}
        />
        <div className="enter">
          <div className="enter__content">
            <h3>Welcome to online education</h3>
            <div className="buttons">
              <button className="buttons--primary button">Login</button>
              <button className="buttons--secondary button">Register</button>
            </div>
          </div>

          <div className="enter__banner">
            <img src={Banner} />
          </div>
        </div>
      </PublicLayout>
    </>
  )
}

export default Enter
