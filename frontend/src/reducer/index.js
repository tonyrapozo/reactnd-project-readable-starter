import { combineReducers } from 'redux'

import {
    ADD_POST,
    REMOVE_POST,
    ADD_COMMENT,
    EDIT_COMMENT,
    REMOVE_COMMENT
} from '../actions'

function food(state = {}, action) {
    switch (action.type) {
        case ADD_POST:
            const { post } = action

            return {
                ...state,
                [post]: post,
            }
        default:
            return state
    }
}
export default combineReducers({
    food
})