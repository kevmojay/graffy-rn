import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = rootReducer.default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
