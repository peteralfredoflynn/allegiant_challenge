var redux = require('redux');
var {fetchCustomersReducer} = require('../reducers/reducers.jsx');
import ReduxPromise from 'redux-promise';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    customers: fetchCustomersReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

