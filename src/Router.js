import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Map from './components/Map';
import PostTagForm from './components/PostTagForm';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="main">
                <Scene key="map" component={Map} title="Map" onRight={() => Actions.tagCreate()} rightTitle={null}/>
                <Scene key="postTag" component={PostTagForm} title="Tag Form" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;