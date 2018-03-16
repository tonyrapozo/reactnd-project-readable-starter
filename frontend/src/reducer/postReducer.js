import { GET_POST, GET_POSTS, DELETE_POST, UPDATE_POST, INSERT_POST } from '../actions/postActions'

export const postReducer = (state = { posts: [], post: {}, loading: true }, action) => {
    switch (action.type) {

        case GET_POSTS:
            const posts = action.posts.reduce((postsAcc, post) => {
                postsAcc[post.id] = post;
                return postsAcc;
            }, {});
            return {
                ...state,
                posts,
                modified: false,
                loading: false
            };

        case GET_POST:
            const thisPost = {};
            thisPost[action.post.id] = action.post;
            return { ...state, posts: { ...state.posts, ...thisPost }, modified: false };

        case DELETE_POST:
        case UPDATE_POST:
            return { ...state, modified: true };

        case INSERT_POST:
            const newPost = {};
            newPost[action.post.id] = action.post;
            return { ...state, posts: { ...state.posts, ...newPost }, modified: true, createdPostId: action.post.id };

        default:
            return state;
    }
};
