import React from 'react';
import { Link } from 'react-router-dom';
import Vote from './vote';

const Post = (props) => {
    const { post } = props;
    return (
        <div key={post.id} className="card m-t-15">
            <div className="card-header">
                <Link to={`/posts/${post.id}`}>
                    {post.title}
                </Link>
            </div>
            <div className="card-subtitle">
                {post.date}: {post.author} - {post.commentCount} comments
                <Vote voteScore={post.voteScore}/>
            </div>
        </div>
    );
};

export default Post;