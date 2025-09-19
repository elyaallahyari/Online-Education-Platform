import React from 'react'
import CategoryComponent from './CategoryComponent'
import { useNavigate } from 'react-router-dom'
import { category } from '../data/categories'

const CategoriesSection = () => {
  const Navigate = useNavigate()

  const handleClick = (id) => {
    Navigate(`/category/${id}`)
  }

  return (
    <>
      {category.map((item) => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          <CategoryComponent name={item.name} image={item.img} />
        </div>
      ))}
    </>
  )
}

export default CategoriesSection
