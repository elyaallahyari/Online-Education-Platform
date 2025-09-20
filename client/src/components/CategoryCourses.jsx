import React from 'react'
import { useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import { category } from '../data/categories'
import { FaGraduationCap } from 'react-icons/fa6'
import { IoIosClock } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { privateRequest } from '../services/axios'
import '../assets/styles/CategoryCourses.css'

const CategoryCourses = () => {
  const { id } = useParams()
  const categoryId = parseInt(id)
  const categories = category.find((category) => category.id === categoryId)
  const filteredCourses = courses.filter((course) => course.categoryId === categoryId)

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
    <>
      <div className="categoryPage">
        <h3> Courses for {categories?.name}</h3>
        {filteredCourses.length > 0 ? (
          <ul className="categorySection">
            {filteredCourses.map((course) => (
              <li key={course.id} className="courseItem">
                <img src={course.img} style={{ width: '231px', height: '130px' }} />
                <div>
                  <div>{course.title}</div>
                  <div className="courseItem__info">
                    <span className="alignment">
                      <FaGraduationCap /> {course.students} Students
                    </span>
                    <span className="courseItem__info-line">|</span>
                    <span className="alignment">
                      <IoIosClock />
                      {course.duration} Hours
                    </span>
                  </div>
                  <button
                    className="courseItem__btn"
                    onClick={() =>
                      handleAddCourse(
                        course.id,
                        course.title,
                        course.category,
                        course.duration,
                        course.img
                      )
                    }
                  >
                    <AiOutlinePlus /> Select Course
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p>There is no course for this category.</p>
            <p>Wait for course updates</p>
          </div>
        )}
      </div>
    </>
  )
}

export default CategoryCourses
