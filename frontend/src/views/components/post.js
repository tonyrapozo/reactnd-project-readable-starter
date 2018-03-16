import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { post } = props;
    return (
        <div style={{marginTop:'50px'}}>
            {post.author}<br/>
            {post.body}<br/>
            {post.category}<br/>
            {post.commentCount}<br/>
            {post.id}<br/>
            {post.title}<br/>
            {post.voteScore}<br/>
            <Link to={`/posts/${post.id}`} >
                edit
            </Link><br/>
            <Link to={`/posts/${post.id}`} >
                 remove
            </Link>
        </div>
    );
};

export default Post;