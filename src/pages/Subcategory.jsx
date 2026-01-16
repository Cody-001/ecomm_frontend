import React from 'react'
const Subcategory = ({ onSelectSubcategory, selectedSubcategory }) => {
  return (
    <div className="subCategory">
      <button 
        onClick={() => onSelectSubcategory(null)} 
        className={selectedSubcategory === null ? "active" : ""}
      >
        All
      </button>
      <button 
        onClick={() => onSelectSubcategory("pants")} 
        className={selectedSubcategory === "pants" ? "active" : ""}
      >
        Pants
      </button>
      <button 
        onClick={() => onSelectSubcategory("shirts")} 
        className={selectedSubcategory === "shirts" ? "active" : ""}
      >
        Shirts
      </button>
      <button 
        onClick={() => onSelectSubcategory("hoodies")} 
        className={selectedSubcategory === "hoodies" ? "active" : ""}
      >
        Hoodies
      </button>
    </div>
  );
};

export default Subcategory;