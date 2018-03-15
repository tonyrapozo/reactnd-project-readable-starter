export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export function addPost({ post, category }) {
    return {
        type: ADD_POST,
        post,
        category
    }
}

export function removePost({ post }) {
    return {
        type: REMOVE_POST,
        post
    }
}

export function addComment({ post, comment }) {
    return {
        type: ADD_COMMENT,
        post,
        comment
    }
}

export function editComment({ post, comment }) {
    return {
        type: EDIT_COMMENT,
        post,
        comment
    }
}

export function removeComment({ post, comment }) {
    return {
        type: REMOVE_COMMENT,
        post,
        comment
    }
}