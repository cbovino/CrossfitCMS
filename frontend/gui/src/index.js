import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

function Red(){
  return(
  <Provider store = {store}>
    <App />
  </Provider>
)
}

ReactDOM.render(<Red />, document.getElementById('root'));
serviceWorker.unregister();
