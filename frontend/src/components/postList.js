import React, { Component } from 'react';
import Post from '../components/post'

class PostList extends Component {
    render() {
        return (
            <div className="category-list">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}

export default PostList;
