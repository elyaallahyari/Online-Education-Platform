import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PublicLayout from '../../layouts/PublicLayout'
import Banner from '../../assets/images/site-banner.png'
import Navbar from '../../components/Navbar'
import { VscRemoteExplorer } from 'react-icons/vsc'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/styles/Login.css'
import { axiosReq } from '../../services/axios'

const Login = () => {
  const Navigate = useNavigate()
  const { t } = useTranslation()

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
          logo_1={<IoInvertMode />}
          item_1={t('navbar.mode')}
          logo_2={<IoLanguage />}
          item_2={'lang'}
          path_3={'/dashboard'}
          logo_3={<VscRemoteExplorer />}
          item_3={t('navbar.explore')}
        />
        <div className="enter">
          <div className="enter__content">
            <h3>{t('login.title')}</h3>

            <form onSubmit={loginHandler}>
              <input
                type="email"
                className="button"
                placeholder={t('login.email')}
                name="email"
                onChange={inputHandler}
              />
              <input
                type="password"
                className="button"
                placeholder={t('login.password')}
                name="password"
                onChange={inputHandler}
              />
              <div className="buttons">
                <button className="buttons--primary button" type="submit">
                  {t('login.button')}
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
