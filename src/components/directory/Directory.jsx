import React from 'react'
import CategoryItem from '../categories/category-item.jsx'
function Directory({categories}) {
  return (
    <div>
        <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
        </div>
    </div>
  )
}

export default Directory