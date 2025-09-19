import React from 'react'
import '../assets/styles/CategoryComponent.css'

const CategoryComponent = ({ name, image }) => {
  return (
    <>
      <div className="category">
        <div className="category__box">
          <img src={image} alt="category image" style={{ width: '90px', height: '90px' }} />
        </div>
        <div className="category__name">
          <span>{name}</span>
        </div>
      </div>
    </>
  )
}

export default CategoryComponent
