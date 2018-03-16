const api = 'http://localhost:3001';
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
})

export function getCategories() {
    return fetch(`${api}/categories`, { headers })
        .then((res) => res.json())
        .then((data) => data.categories);
}

/*************** POSTS **************/
export function getPostsByCategory(category = '') {
    return fetch(`${api}/${category}/posts`, { headers })
        .then((res) => res.json())
}

export const getPost = (post_id) =>
    fetch(`${api}/posts/${post_id}`, { headers })
        .then(res => res.json())

export function getPosts() {
    return fetch(`${api}/posts`, { headers })
        .then((res) => res.json());
}

export const insertPost = ({id, title, body, timestamp, author, category}) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers,
        body: JSON.stringify({id, title, timestamp, body, author, category})
    }).then(res => res.json())

export const updatePost = ({id, title, body, author, category}) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({id, title, body, author, category})
    }).then(res => res.json())

export const deletePost = (post_id) =>
    fetch(`${api}/posts/${post_id}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json())


export const voteOnPost = (post_id, vote) =>
    fetch(`${api}/posts/${post_id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ vote })
    }).then(res => res.json())

/**************************************/

/************** COMMENTS **************/
export function fetchComments() {
    return fetch(`${api}/comments`, { headers })
        .then((res) => res.json())
}

export function fetchCommentById(comment) {
    return fetch(`${api}/comments/${comment}`, { headers })
        .then((res) => res.json())
}

/**************************************/