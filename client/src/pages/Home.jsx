import React from 'react'
import '../assets/styles/Home.css'
import PublicLayout from '../layouts/PublicLayout'
import Banner from '../assets/images/site-banner.png'
import PopularCourses from '../components/PopularCorses'
import Microsoft_Power_BI_Data_Analyst from '../assets/images/Microsoft-Power-BI-Data-Analyst.png'
import Excel_skills_for_business from '../assets/images/Excel-skills-for-business.png'
import IBM_Data_Science from '../assets/images/IBM-Data-Science.png'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'
import { VscRemoteExplorer } from 'react-icons/vsc'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
import CategoriesSection from '../components/CategoriesSection'

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <PublicLayout>
        <div className="content">
          <Navbar
            logo_1={<IoInvertMode />}
            item_1={t('navbar.mode')}
            logo_2={<IoLanguage />}
            item_2={t('navbar.lang')}
            path_3={'/dashboard'}
            logo_3={<VscRemoteExplorer />}
            item_3={t('navbar.explore')}
          />

          <div className="head">
            <div className="head__title">
              <h1>{t('home.title')}</h1>
            </div>
            <div className="head__banner">
              <img src={Banner} alt="Banner of the site" />
            </div>
          </div>

          <div className="content_categories">
            <p>{t('home.categories')}</p>
            <div className="content_categories-item">
              <CategoriesSection />
            </div>
          </div>

          <div className="foot">
            <div className="foot__title">
              <p>{t('home.popular_courses')}</p>
            </div>

            <div className="foot__cards">
              <PopularCourses
                image={IBM_Data_Science}
                category={'IBM'}
                title={'IBM Data Science'}
              />

              <PopularCourses
                image={Microsoft_Power_BI_Data_Analyst}
                category={'Microsoft'}
                title={'Microsoft Power BI Data Analyst'}
              />

              <PopularCourses
                image={Excel_skills_for_business}
                category={'Macquarie University'}
                title={'Excel Skills For Business'}
              />

              <div className="foot__cards-moree">
                <button className="foot__cards-more">{t('home.more_btn')}</button>
              </div>
            </div>
          </div>
        </div>
      </PublicLayout>
    </>
  )
}

export default Home
