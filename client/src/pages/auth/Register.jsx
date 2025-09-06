import React, { useState } from 'react'
import PublicLayout from '../../layouts/PublicLayout'
import Banner from '../../assets/images/site-banner.png'
import Navbar from '../../components/Navbar'
import { useTranslation } from 'react-i18next'
import { VscRemoteExplorer } from 'react-icons/vsc'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { axiosReq } from '../../services/axios'

const Register = () => {
  const Navigate = useNavigate()
  const { t } = useTranslation()

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
          logo_1={<IoInvertMode />}
          item_1={t('navbar.mode')}
          logo_2={<IoLanguage />}
          item_2={'lang'}
          path_3={'/dashboard'}
          logo_3={<VscRemoteExplorer />}
          item_3={t('navbar.explore')}
        />
        <div className="enter">
          <form className="enter__content" onSubmit={registerHandler}>
            <h3>{t('register.title')}</h3>

            <input
              type="text"
              className="button"
              placeholder={t('register.fullName')}
              name="fullName"
              onChange={inputHandler}
            />
            <input
              type="number"
              className="button"
              placeholder={t('register.age')}
              name="age"
              onChange={inputHandler}
            />
            <input
              type="email"
              className="button"
              placeholder={t('register.email')}
              name="email"
              onChange={inputHandler}
            />
            <input
              type="text"
              className="button"
              placeholder={t('register.password')}
              name="password"
              onChange={inputHandler}
            />
            <div className="buttons">
              <button className="buttons--primary button" type="submit">
                {t('register.button')}
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
