import * as api from '../api'
import { getCommentAction, getCommentsAction, saveCommentAction } from '../actions/commentActions'

export const getComment = (id) => dispatch => (
    api.getComment(id).then(post => {
        dispatch(getCommentAction(post))
    })
);

export const getComments = (id) => dispatch => (
    api.getComments(id).then(post => {
        dispatch(getCommentsAction(post))
    })
);

export const saveComment = (id) => dispatch => (
    api.saveComment(id).then(post => {
        dispatch(saveCommentAction(post))
    })
);