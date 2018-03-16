import * as api from '../api'
import { getPostAction, getPostsAction, deletePostAction, updatePostAction, insertPostAction } from '../actions/postActions'

export const getPost = (id) => dispatch => (
    api.getPost(id).then(post => {
        dispatch(getPostAction(post))
    })
);

export const getPosts = () => dispatch => (
    api.getPosts().then(posts => {
        dispatch(getPostsAction(posts))
    })
);

export const getPostsbyCategory = (category) => dispatch => (
    api.getPostsByCategory(category).then(posts => {
        dispatch(getPostsAction(posts))
    })
);

export const insertPost = (post) => dispatch => (
    api.insertPost(post).then(() => {
        dispatch(insertPostAction(post))
    })
);

export const updatePost = (post) => dispatch => (
    api.updatePost(post).then(
        dispatch(updatePostAction())
    )
);

export const deletePost = (id) => dispatch => (
    api.deletePost(id).then(post => {
        dispatch(deletePostAction(post))
    })
);