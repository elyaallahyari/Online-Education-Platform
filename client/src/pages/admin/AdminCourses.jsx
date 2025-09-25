import React, { useEffect, useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa6'
import { IoIosClock } from 'react-icons/io'
import { privateRequest } from '../../services/axios'
import '../../assets/styles/AdminCourses.css'

const AdminCourses = () => {
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await privateRequest.get('/admin/reports')
        setReport(res.data)
      } catch (error) {
        console.error('Error fetching reports:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReports()
  }, [])

  if (loading) return <p>Loading...</p>
  if (!report) return <p>No data found</p>

  return (
    <div className="admin-courses">
      <h1 className="admin-title">Users & Their Courses</h1>

      {report.usersWithCourses && report.usersWithCourses.length > 0 ? (
        report.usersWithCourses.map((user, idx) => (
          <div key={idx} className="user-section">
            <div className="user-header">
              <h2>{user.fullName}</h2>
              <p>{user.email}</p>
              <span className="user-course-count">
                Courses Selected: {user.selectedCourses.length}
              </span>
            </div>

            {user.selectedCourses.length > 0 ? (
              <div className="courses__grid">
                {user.selectedCourses.map((course) => (
                  <div key={course.courseId} className="course-card">
                    <img src={course.img} alt={course.title} className="course-card__img" />
                    <div className="course-card__content">
                      <span className="course-card__category">{course.category}</span>
                      <div className="course-card__info">
                        <span className="alignment">
                          <FaGraduationCap />
                        </span>
                        <span className="course-card__info-line">|</span>
                        <span className="alignment">
                          <IoIosClock />
                          {course.duration} Hours
                        </span>
                      </div>
                      <h3 className="course-card__title">{course.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-course">No Courses Selected</p>
            )}
          </div>
        ))
      ) : (
        <p>No Users Found</p>
      )}
    </div>
  )
}

export default AdminCourses
