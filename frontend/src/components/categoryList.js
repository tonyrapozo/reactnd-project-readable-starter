import React, { Component } from 'react';
import Category from '../components/category'

class CategoryList extends Component {
    render() {
        return (
            <div className="category-list">
                <Category />
                <Category />
                <Category />
                <Category />
            </div>
        );
    }
}

export default CategoryList;
