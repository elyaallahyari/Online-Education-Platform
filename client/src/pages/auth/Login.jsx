import React from 'react'
import { useState } from 'react'
import PublicLayout from '../../layouts/PublicLayout'
import Banner from '../../assets/images/site-banner.png'
import Navbar from '../../components/Navbar'
import { FaSearch } from 'react-icons/fa'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/styles/Login.css'
import { axiosReq } from '../../services/axios'

const Login = () => {
  const Navigate = useNavigate()

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const inputHandler = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const loginHandler = async (e) => {
    e.preventDefault()
    if (!loginData.email.trim() || !loginData.password.trim()) {
      alert('Plese Complete all fields!')
      return
    }
    try {
      const res = await axiosReq.post('/auth/login', loginData)
      if (res) {
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.data))
        Navigate('/dashboard')
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
          <div className="enter__content">
            <h3>Login</h3>

            <form onSubmit={loginHandler}>
              <input
                type="email"
                className="button"
                placeholder="email"
                name="email"
                onChange={inputHandler}
              />
              <input
                type="password"
                className="button"
                placeholder="password"
                name="password"
                onChange={inputHandler}
              />
              <div className="buttons">
                <button className="buttons--primary button" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="enter__banner">
            <img src={Banner} />
          </div>
        </div>
      </PublicLayout>
    </>
  )
}

export default Login
