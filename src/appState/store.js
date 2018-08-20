import { createStore, applyMiddleware } from 'redux';
import middleware from './middleware';
import AppReducer from './reducer';

export default function configureStore() {
  const store = createStore(AppReducer, applyMiddleware(...middleware));

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
