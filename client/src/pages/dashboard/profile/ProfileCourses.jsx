import React, { useEffect, useState } from 'react'
import { privateRequest } from '../../../services/axios'
import { FaGraduationCap } from 'react-icons/fa6'
import { IoIosClock } from 'react-icons/io'
import { AiOutlineDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { IoIosArrowBack } from 'react-icons/io'
import Profile from '../../../assets/images/icons8-profile-100.png'
import { useNavigate } from 'react-router-dom'
import '../../../assets/styles/ProfileCourses.css'

const ProfileCourses = () => {
  const [courses, setCourses] = useState([])
  const [user, setUser] = useState(null)

  const Navigate = useNavigate()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    setUser(storedUser)

    const fetchCourses = async () => {
      try {
        const res = await privateRequest.get(`/users/${storedUser.id || storedUser._id}/courses`)
        setCourses(res.data)
      } catch (err) {
        console.error('❌ Error fetching courses:', err)
      }
    }

    if (storedUser) fetchCourses()
  }, [])

  const handleRemoveCourse = async (courseId) => {
    try {
      const res = await privateRequest.delete(`/users/${user.id}/courses`, { data: { courseId } })
      setCourses(res.data)
      toast.success('Course removed!')
    } catch (err) {
      console.error('❌ Error removing course:', err)
      toast.error('Failed to remove course.')
    }
  }

  const backHandler = () => {
    Navigate(-1)
  }
  return (
    <div className="profile-background">
      <div className="profile-back-btn" onClick={backHandler}>
        <IoIosArrowBack size={'2rem'} />
      </div>
      <div className="profile-courses">
        {user && (
          <div className="profile-courses__header">
            <img
              src={user.profile || Profile}
              alt={user.fullName}
              className="profile-courses__avatar"
            />
            <div>
              <h2 className="profile-courses__name">{user.fullName || 'User'}</h2>
              <p className="profile-courses__email">{user.email}</p>
            </div>
          </div>
        )}

        <h3 className="profile-courses__title">Your Selected Courses</h3>

        {courses.length > 0 ? (
          <div className="profile-courses__grid">
            {courses.map((course) => (
              <div key={course.courseId} className="profile-courses__card">
                <img src={course.img} alt={course.title} className="profile-courses__img" />
                <div className="profile-courses__content">
                  <span className="profile-courses__category">{course.category}</span>
                  <h4 className="profile-courses__course-title">{course.title}</h4>
                  <div className="profile-courses__info">
                    <span>
                      <FaGraduationCap /> {course.students || 0} Students
                    </span>
                    <span className="divider">|</span>
                    <span>
                      <IoIosClock /> {course.duration} Hours
                    </span>
                    <AiOutlineDelete
                      className="profile-courses__delete"
                      onClick={() => handleRemoveCourse(course.courseId)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="profile-courses__empty">No courses selected yet.</p>
        )}
      </div>
    </div>
  )
}

export default ProfileCourses
