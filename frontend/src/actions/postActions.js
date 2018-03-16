export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const INSERT_POST = "INSERT_POST";

export const getPostAction = post => ({
    type: GET_POST,
    post
});

export const getPostsAction = (posts) => ({
    type: GET_POSTS,
    posts
});

export const deletePostAction = post => ({
    type: DELETE_POST
});

export const updatePostAction = post => ({
    type: UPDATE_POST
});

export const insertPostAction = post => ({
    type: INSERT_POST,
     post
});