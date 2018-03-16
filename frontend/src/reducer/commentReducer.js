import { GET_COMMENT, GET_COMMENTS, SAVE_COMMENT } from '../actions/commentActions'

export const commentReducer = (state = { comments: {} }, action) => {
    switch (action.type) {
        case GET_COMMENTS:

            const comments = action.comments.reduce((listOfComments, comment) => {
                listOfComments[comment.id] = comment;
                return listOfComments;
            }, {});

            return {
                ...state,
                comments,
                modified: action.modified
            };

        case GET_COMMENT:
        
            let comment = {};
            comment[action.comment.id] = action.comment;
            return {
                ...state,
                modified: action.modified, comments: { ...state.comments, ...comment }
            };

        case SAVE_COMMENT:
            let newComment = {};
            newComment[action.comment.id] = action.comment;
            return {
                ...state,
                modified: action.modified,
                newCommentId: action.comment.id,
                comments: { ...state.comments, ...newComment }
            };

        default:
            return state;
    }
};
