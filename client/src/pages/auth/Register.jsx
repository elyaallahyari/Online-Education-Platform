import React, { useState } from 'react'
import PublicLayout from '../../layouts/PublicLayout'
import Banner from '../../assets/images/site-banner.png'
import Navbar from '../../components/Navbar'
import { FaSearch } from 'react-icons/fa'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { axiosReq } from '../../services/axios'

const Register = () => {
  const Navigate = useNavigate()
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    fullName: '',
    age: ''
  })
  const inputHandler = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const registerHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axiosReq.post('/auth/register', registerData)
      if (res) {
        Navigate('/login')
      }
    } catch (err) {
      console.log(err)
    }
  }
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
          <form className="enter__content" onSubmit={registerHandler}>
            <h3>Register</h3>

            <input
              type="text"
              className="button"
              placeholder="full name"
              name="fullName"
              onChange={inputHandler}
            />
            <input
              type="number"
              className="button"
              placeholder="age"
              name="age"
              onChange={inputHandler}
            />
            <input
              type="email"
              className="button"
              placeholder="email"
              name="email"
              onChange={inputHandler}
            />
            <input
              type="text"
              className="button"
              placeholder="password"
              name="password"
              onChange={inputHandler}
            />
            <div className="buttons">
              <button className="buttons--primary button" type="submit">
                Register
              </button>
            </div>
          </form>

          <div className="enter__banner">
            <img src={Banner} />
          </div>
        </div>
      </PublicLayout>
    </>
  )
}

export default Register
