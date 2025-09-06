import React from 'react'
import { useTranslation } from 'react-i18next'
import { TbLogout2 } from 'react-icons/tb'
import '../assets/styles/RightSidebar.css'

const RightSidebar = ({ profile, fullName, email, age, onClick }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="rightSidebar">
        <div className="rightSidebar__image">
          <img src={profile} alt="profile" />
        </div>
        <div className="rightSidebar__name">
          <p>{fullName}</p>
        </div>

        <div className="rightSidebar__info info">
          <div className="info__email">
            <p>
              {t('right_sidebar.email')}: {email}
            </p>
          </div>
          <div className="info__age">
            <p>
              {t('right_sidebar.age')} : {age}
            </p>
          </div>
        </div>
        <hr />
        <div className="rightSidebar__courses courses">
          <div className="courses__title">
            <p>{t('right_sidebar.your_courses')}</p>
          </div>
          <div className="courses__items"></div>
        </div>

        <div className="rightSidebar__logout">
          <TbLogout2 />
          <span onClick={onClick}>{t('right_sidebar.logout')}</span>
        </div>
      </div>
    </>
  )
}

export default RightSidebar
