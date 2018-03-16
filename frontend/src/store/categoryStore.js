import * as api from '../api'
import { getCategoriesAction } from '../actions/categoryActions'

export const getCategories = () => dispatch => (
    api.getCategories().then(categories => {
        dispatch(getCategoriesAction(categories))
    })
);