import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const { path, name } = props.category;
    return (
        <Link to={`/category/${path}`}>
            <i className="mdi mdi-label"></i>
            <span className="site-menu-title">{name}</span>
        </Link>
    );
};

export default Category;