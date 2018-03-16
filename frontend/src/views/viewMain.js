import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './components/categoryList';
import PostList from './components/postList';

import { getCategories } from '../store/categoryStore';
import { getPosts, getPostsbyCategory } from '../store/postStore';
import { connect } from "react-redux";

class ViewMain extends Component {

    load = (prevCategory, category) => {
        if (prevCategory !== category) {
            this.props.getCategories();
            category ? this.props.getPostsbyCategory(category) : this.props.getPosts();
        }
    }

    componentDidMount() {
        const { category } = this.props.match.params;
        this.load("", category);
    }

    componentWillReceiveProps(nextProps) {
        const prevCategory = this.props.match.params.category;
        const category = nextProps.match.params.category;
        this.load(prevCategory, category);
    }

    selectedCategory = (props) => {
        let category = props.categoryReducer.categories.filter(category => category.path === this.props.match.params.category);
        if (category.length > 0)
            return category[0].name;
        return "all";
    }

    render() {
        const { categories } = this.props.categoryReducer;
        const { posts } = this.props.postReducer;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">{this.selectedCategory(this.props)}</h1>
                </header>
                <CategoryList categories={categories} />
                <PostList posts={Object.values(posts)} />
                <br />
                <Link to="/new">novo</Link>
            </div>
        );
    }
}

const mapStateToProps = ({ categoryReducer, postReducer }) => ({ categoryReducer, postReducer });

export default connect(mapStateToProps, { getCategories, getPosts, getPostsbyCategory })(ViewMain);