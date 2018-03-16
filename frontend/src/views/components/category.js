import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const { path, name } = props.category;
    return (
        <div className="category-list">
            <Link to={`/category/${path}`} >
                <span className="site-menu-title">{name}</span>
            </Link>
        </div>
    );
};

export default Category;