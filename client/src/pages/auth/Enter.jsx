import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import PublicLayout from '../../layouts/PublicLayout'
import Navbar from '../../components/Navbar'
import Banner from '../../assets/images/site-banner.png'
import '../../assets/styles/Enter.css'
import { useTranslation } from 'react-i18next'
import { VscRemoteExplorer } from 'react-icons/vsc'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const Enter = () => {
  const { t } = useTranslation()
  const Navigate = useNavigate()

  const LoginWithGoogleHandler = (credentialResponse) => {
    console.log('Google login success:', credentialResponse)
    Navigate('/login')
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
            <h3>{t('enter.welcome')}</h3>
            <div className="buttons">
              <Link to={'/login'}>
                <button className="buttons--primary button">{t('enter.login')}</button>
              </Link>
              <Link to={'/register'}>
                <button className="buttons--secondary button">{t('enter.register')}</button>
              </Link>

              <GoogleLogin
                onSuccess={LoginWithGoogleHandler}
                onError={() => {
                  console.log('Login Failed')
                }}
                useOneTap
              />
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
