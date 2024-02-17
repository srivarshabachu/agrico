//import React from "react";
const CategoryManagement = ({ categories, onSelectCategory }) => {
    return (
        <div>
            <h2>Category Management</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <button onClick={() => onSelectCategory(category)}>{category}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryManagement;