import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import Map from './components/Map';
import PostTagForm from './components/PostTagForm';
import configureStore from './store/configureStore';
import Router from './Router';


const store = configureStore();

class App extends Component {

    onPostFormPress() {
        console.log('helllo');
    }

    render(){
        const initState = {
        map:{
            latitude: 34.2554414,
            longitude: -118.5853856,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
    }

        return (
          <Provider store={store}>
                    <Router />
            </Provider>
        );
    }

}

export default App;