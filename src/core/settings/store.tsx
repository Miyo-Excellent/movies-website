import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

import { isDevelopment } from 'utils';
import { reducers } from '.';

export function getStore() {
  const middlewares = applyMiddleware(thunk);

  if (isDevelopment()) {
    const withDevTools =
      // @ts-ignore
      typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    // @ts-ignore
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    });

    const composeEnhancers = withDevTools ? devTools : compose;

    const enhancer = composeEnhancers(
      middlewares
      // other store enhancers if any
    );

    return createStore(reducers, enhancer);
  }

  return createStore(reducers, middlewares);
}

export default getStore();
