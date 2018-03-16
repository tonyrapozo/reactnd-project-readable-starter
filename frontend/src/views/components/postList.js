import React from 'react';
import Post from '../components/post'

const PostList = (props) => {
    const { posts } = props;
    return (
        <div className="post-list">
            {
                posts.map(post => {
                    return <Post key={post.id} post={post} />
                })
            }
        </div>
    );
};

export default PostList;