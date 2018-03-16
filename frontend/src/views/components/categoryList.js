import React from 'react';
import Category from '../components/category'

const CategoryList = (props) => {
    const { categories } = props;
    return (
        <div className="category-list">
            <Category category={{ path: "../", name: "all" }} />
            {
                categories.map(category => {
                    return <Category key={category.path} category={category} />
                })
            }
        </div>
    );
};

export default CategoryList;