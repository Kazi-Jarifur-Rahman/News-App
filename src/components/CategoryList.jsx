import React from "react";
import "./CategoryList.css";

function CategoryList({ selectedCategory, onSelectCategory }) {
  const categories = [
    "All",
    "Sports",
    "Technical",
    "Business",
    "Health",
    "Entertainment",
  ];

  return (
    <div className="category-list">
      {categories.map((cat, index) => (
        <button
          key={index}
          className={`category-btn ${
            selectedCategory === cat ? "active" : ""
          }`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
