import React from 'react'
import '../assets/styles/CategoryComponent.css'

const CategoryComponent = ({ name, image }) => {
  return (
    <>
      <a className="category">
        <div className="category__box">
          <img src={image} alt="category image" />
        </div>
        <div className="category__name">
          <span>{name}</span>
        </div>
      </a>
    </>
  )
}

export default CategoryComponent
