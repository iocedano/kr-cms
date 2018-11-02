import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

export default function configureStore(initialState = {}) {
  // Create the store with middlewares
  const middlewares = [];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    reducers
    , initialState
    , compose(...enhancers)
  );

  // Extensions
  store.asyncReducers = {}; // Async reducer registry

  return store
}
