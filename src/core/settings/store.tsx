import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { reducers } from '.';

const withDevTools =
  // @ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// @ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
});

const middlewares = applyMiddleware(thunk);

const composeEnhancers = withDevTools ? devTools : compose;

const enhancer = composeEnhancers(
  middlewares
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);

export default store;
