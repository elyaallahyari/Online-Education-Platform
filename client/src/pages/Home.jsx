import React from 'react'
import '../assets/styles/Home.css'
import PublicLayout from '../layouts/PublicLayout'
import Banner from '../assets/images/site-banner.png'
import PopularCourses from '../components/PopularCorses'
import Microsoft_Power_BI_Data_Analyst from '../assets/images/Microsoft-Power-BI-Data-Analyst.png'
import Excel_skills_for_business from '../assets/images/Excel-skills-for-business.png'
import IBM_Data_Science from '../assets/images/IBM-Data-Science.png'
import Navbar from '../components/Navbar'
import { FaSearch } from 'react-icons/fa'
import { IoInvertMode } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
const Home = () => {
  return (
    <>
      <PublicLayout>
        <div className="content">
          <Navbar
            path_1={'/dashboard'}
            logo_1={<FaSearch />}
            item_1={'explore'}
            logo_2={<IoInvertMode />}
            item_2={'mode'}
            logo_3={<IoLanguage />}
            item_3={'lang'}
          />

          <div className="head">
            <div className="head__title">
              <h1>Online Education Platform</h1>
            </div>
            <div className="head__banner">
              <img src={Banner} alt="Banner of the site" />
            </div>
          </div>

          <div className="foot">
            <div className="foot__title">
              <p>Popular courses</p>
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
                <button className="foot__cards-more">Show more</button>
              </div>
            </div>
          </div>
        </div>
      </PublicLayout>
    </>
  )
}

export default Home
