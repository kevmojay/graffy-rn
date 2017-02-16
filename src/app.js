import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'
import Map from './components/Map'
import PostTagForm from './components/PostTagForm'
import configureStore from './store/configureStore'
import Router from './Router'


const store = configureStore()

class App extends Component {

  onPostFormPress () {
    console.log('helllo')
  }

  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
