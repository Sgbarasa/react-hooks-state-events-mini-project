import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : "";
    return (
      <button
        key={category}
        className={className}
        onClick={() => onCategoryChange(category)}
      >
        {category}
      </button>
    );
  });

  return <div className="categories">{categoryButtons}</div>;
}

export default CategoryFilter;
