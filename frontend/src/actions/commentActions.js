export const GET_COMMENT = "GET_COMMENT";
export const GET_COMMENTS = "GET_COMMENTS";
export const SAVE_COMMENT = "SAVE_COMMENT";

export const getCommentAction = comment => ({
    type: GET_COMMENT,
    comment,
    modified: false
});

export const getCommentsAction = (comments) => ({
    type: GET_COMMENTS,
    comments,
    modified: false
});

export const saveCommentAction = comment => ({
    type: SAVE_COMMENT,
    comment,
    modified: true
});