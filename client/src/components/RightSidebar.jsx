import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TbLogout2 } from 'react-icons/tb'
import { privateRequest } from '../services/axios'
import { Link } from 'react-router-dom'
import { GrLinkNext } from 'react-icons/gr'
import '../assets/styles/RightSidebar.css'

const RightSidebar = ({ userId, profile, fullName, email, age, onClick }) => {
  const { t } = useTranslation()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await privateRequest.get(`/users/${userId}/courses`)
        setCourses(res.data || [])
      } catch (err) {
        console.error('❌ Error fetching courses:', err)
      }
    }

    if (userId) {
      fetchCourses()
    }
  }, [userId])

  return (
    <div className="rightSidebar">
      <Link className="rightSidebar__link" to={'/profile/courses'}>
        <GrLinkNext />
        Go to Profile
      </Link>
      <div className="rightSidebar__image">
        <img src={profile} alt="profile" />
      </div>
      <div className="rightSidebar__name">
        <p>{fullName}</p>
      </div>

      <div className="rightSidebar__info info">
        <p>
          {t('right_sidebar.email')}: {email}
        </p>
        <p>
          {t('right_sidebar.age')} : {age}
        </p>
      </div>

      <hr />
      <div className="rightSidebar__courses courses">
        <div className="courses__title">
          <p>{t('right_sidebar.your_courses')}</p>
        </div>
        <div className="courses__items">
          {courses.length > 0 ? (
            courses.slice(0, 2).map((course) => (
              <div key={course.id || course._id} className="course__item">
                {course.title}
              </div>
            ))
          ) : (
            <p>{t('right_sidebar.no_courses')}</p>
          )}
          {courses.length > 2 && (
            <Link to={'/profile/courses'} className="see-more">
              {t('right_sidebar.see_more')}
            </Link>
          )}
        </div>
      </div>

      <div className="rightSidebar__logout">
        <TbLogout2 />
        <span onClick={onClick}>{t('right_sidebar.logout')}</span>
      </div>
    </div>
  )
}

export default RightSidebar
