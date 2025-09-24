import React from 'react'
import { courses } from '../../data/courses'
import { FaGraduationCap } from 'react-icons/fa6'
import { IoIosClock } from 'react-icons/io'
import '../../assets/styles/Courses.css'

const Courses = () => {
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
