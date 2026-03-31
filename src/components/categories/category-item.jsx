import React from "react";
import "./categories.styles.scss";
import { useNavigate } from "react-router-dom";
function CategoryItem({ category }) {
  const navigate=useNavigate();
  const navigateHandler=()=>{
    console.log(`shop/${category.title}`);
    navigate(`shop/${category.title}`)
  }
  return (
    <div key={category.id} className="category-container">
      <div
        className="background-image"
        style={{ background: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container" onClick={navigateHandler}>
        <h2 >
            {category.title.toUpperCase()}
        
        </h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
