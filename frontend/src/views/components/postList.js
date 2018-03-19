import React from 'react';
import Post from '../components/post'

const PostList = (props) => {
    const { posts } = props;
    return (

        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        {
                            posts.length > 0 ?
                                posts.map(post => {
                                    return <Post key={post.id} post={post} />
                                }) :
                                <div className="text-center">
                                    there's no posts for this category
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostList;