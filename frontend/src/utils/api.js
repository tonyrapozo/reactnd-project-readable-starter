const AUTH = 'ASDASDASDASDASDASD'

export function fetchCategories() {
    return fetch(`http://localhost:3001/categories`, { header: `Authorization:${AUTH}` }).then((res) => res.json())
}

/*************** POSTS **************/
export function fetchPostsCategories(category = '') {
    return fetch(`http://localhost:3001/${category}/posts`, { header: `Authorization:${AUTH}` }).then((res) => res.json())
}

export function fetchPosts() {
    return fetch(`http://localhost:3001/posts`, { header: `Authorization:${AUTH}` }).then((res) => res.json())
}

export function fetchPosts() {
    return fetch(`http://localhost:3001/posts`, { header: `Authorization:${AUTH}` }).then((res) => res.json())
}
/**************************************/

/************** COMMENTS **************/
export function fetchComments() {
    return fetch(`http://localhost:3001/comments`, { header: `Authorization:${AUTH}` }).then((res) => res.json())
}

export function fetchCommentById(comment) {
    return fetch(`http://localhost:3001/comments/${comment}`, { header: `Authorization:${AUTH}` }).then((res) => res.json())
}

export function fetchCommentById(comment) {
    return fetch(`http://localhost:3001/comments/${comment}`, { header: `Authorization:${AUTH}` }).then((res) => res.json())
}
/**************************************/