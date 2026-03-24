import React from "react";
import "./categories.styles.scss";
import { Link } from "react-router-dom";
function CategoryItem({ category }) {
  return (
    <div key={category.id} className="category-container">
      <div
        className="background-image"
        style={{ background: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>
          <Link to={`shop/${category.title}`}>
            {category.title.toUpperCase()}
          </Link>
        </h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
