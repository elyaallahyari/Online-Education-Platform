import React from 'react'
import { courses } from '../../data/courses'
import { FaGraduationCap } from 'react-icons/fa6'
import { IoIosClock } from 'react-icons/io'
import { privateRequest } from '../../services/axios'
import { AiOutlinePlus } from 'react-icons/ai'
import { toast } from 'react-toastify'
import '../../assets/styles/Courses.css'

const Courses = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const userId = user?.id

  const handleAddCourse = async (courseId, title, category, duration, img) => {
    try {
      const res = await privateRequest.post(`/users/${userId}/courses`, {
        courseId,
        title,
        category,
        duration,
        img
      })

      if (res.status === 200 || res.status === 201) {
        toast.success('Course added successfully!')
      }
    } catch (error) {
      console.error('Error adding course:', error)
      toast.error('Failed to add course.')
    }
  }

  return (
    <div className="courses">
      {courses.length > 0 ? (
        <div className="courses__grid">
          {courses.map((item) => (
            <div key={item.id} className="course-card">
              <img src={item.img} alt={item.title} className="course-card__img" />
              <div className="course-card__content">
                <span className="course-card__category">{item.category}</span>
                <div className="course-card__info">
                  <span className="alignment">
                    <FaGraduationCap /> {item.students} Students
                  </span>
                  <span className="course-card__info-line">|</span>
                  <span className="alignment">
                    <IoIosClock />
                    {item.duration} Hours
                  </span>
                </div>
                <h3 className="course-card__title">{item.title}</h3>

                <button
                  className="course-card__btn"
                  onClick={() =>
                    handleAddCourse(item.id, item.title, item.category, item.duration, item.img)
                  }
                >
                  <AiOutlinePlus /> Select Course
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-course">No Course..</p>
      )}
    </div>
  )
}

export default Courses
