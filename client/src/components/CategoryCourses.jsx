import React from 'react'
import { useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import { category } from '../data/categories'
import '../assets/styles/CategoryCourses.css'

const CategoryCourses = () => {
  const { id } = useParams()
  const categoryId = parseInt(id)
  const categories = category.find((category) => category.id === categoryId)
  const filteredCourses = courses.filter((course) => course.categoryId === categoryId)

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
                  <div>{course.students} students</div>
                  <div>{course.duration} hours</div>
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
