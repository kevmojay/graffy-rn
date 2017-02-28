import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'
import Map from './components/Map'
import PostTagForm from './components/PostTagForm'
import configureStore from './store/configureStore'
import Router from './Router'
import ReduxThunk from 'redux-thunk'
 import { composeWithDevTools } from 'remote-redux-devtools';

class App extends Component {
  render () {
    const composeEnhancers = composeWithDevTools({ realtime: true })
    const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
