import React, { Component } from 'react';
import CategoryList from './components/categoryList';
import PostList from './components/postList';
import Header from './components/header';

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

    render() {
        const { categories } = this.props.categoryReducer;
        const { posts } = this.props.postReducer;

        return (
            <div className="App">
                <Header props={this.props}/>
                <CategoryList categories={categories} path={document.location} />
                <PostList posts={Object.values(posts)} />
            </div>
        );
    }
}

const mapStateToProps = ({ categoryReducer, postReducer }) => ({ categoryReducer, postReducer });

export default connect(mapStateToProps, { getCategories, getPosts, getPostsbyCategory })(ViewMain);