import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

import { isDevelopment } from 'utils';
import { reducers } from '.';

export function getStore() {
  const middlewares = applyMiddleware(thunk);

  const reduxDevtoolsExtensionCompose: any =
    // @ts-ignore
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || undefined;

  if (
    isDevelopment() &&
    window &&
    typeof window === 'object' &&
    reduxDevtoolsExtensionCompose
  ) {
    const devTools =
      reduxDevtoolsExtensionCompose({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) || null;

    const composeEnhancers = devTools ? devTools : compose;

    const enhancer = composeEnhancers(
      middlewares
      // other store enhancers if any
    );

    return createStore(reducers, enhancer);
  }

  return createStore(reducers, middlewares);
}

export default getStore();
