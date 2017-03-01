import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

const App = () => {
  const composeEnhancers = composeWithDevTools({ realtime: true });
  const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

  return (<Provider store={store}>
    <Router />
  </Provider>);
};

export default App;
