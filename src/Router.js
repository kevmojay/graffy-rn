import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Map from './components/Map';
import PostTagForm from './components/PostTagForm';
import Login from './components/Login';

const styles = StyleSheet.create({
  RouterPaddingTop: {
    paddingTop: 65,
  },
});

const RouterComponent = () => (
  <Router sceneStyle={styles.RouterPaddingTop}>
    <Scene key="main">
      <Scene key="login" component={Login} title="Login" />
      <Scene key="map" component={Map} title="Map" rightTitle={null} />
      <Scene key="postTag" component={PostTagForm} title="Tag Form" />
    </Scene>
  </Router>
    );

export default RouterComponent;
