import { GET_CATEGORIES } from '../actions/categoryActions'

export const categoryReducer = (state = { categories: [] }, action) => {
    switch (action.type) {

        case GET_CATEGORIES:
            return { ...state, categories: action.categories };

        default:
            return state;
    }
};
