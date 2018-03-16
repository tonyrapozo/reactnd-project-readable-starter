import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { postReducer } from './reducer/postReducer';
import { categoryReducer } from './reducer/categoryReducer';
import { commentReducer } from './reducer/commentReducer';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker'

import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
        commentReducer,
        postReducer,
        categoryReducer
    }),
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()