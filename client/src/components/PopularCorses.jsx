import React from 'react'
import '../assets/styles/PopularCourses.css'
const PopularCourses = ({ image, category, title }) => {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <img src={image} />
        </div>

        <div className="card__content">
          <span>{category}</span>
          <p>{title}</p>
        </div>
      </div>
    </>
  )
}

export default PopularCourses
