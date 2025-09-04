import React from 'react'
import PublicLayout from '../../layouts/PublicLayout'
import Banner from '../../assets/images/site-banner.png'
import Navbar from '../../components/Navbar'
import { FaSearch } from 'react-icons/fa'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Register = () => {
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
            <h3>Register</h3>

            <input type="text" className="button" placeholder="full name" />
            <input type="number" className="button" placeholder="age" />
            <input type="text" className="button" placeholder="email" />
            <input type="text" className="button" placeholder="password" />
            <div className="buttons">
              <button className="buttons--primary button">Register</button>
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

export default Register
