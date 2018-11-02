import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import Routes from './routes';

const preloadedState = JSON.parse(document.getElementById('react-engine-props').text);

const store = createStore(reducers, preloadedState.store, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <Routes />
  </Provider>,
  document.querySelector('#root'));
