// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* import createStore */
import { Provider } from 'react-redux'; /* import Provider to avoid passing store as a props down the tree */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

// FIRST: INITIALIZE THE STORE and pass a reducer 
const store = createStore(shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
    // SECOND: wrap App inside Provider component to avoid passing store as props 
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
);
