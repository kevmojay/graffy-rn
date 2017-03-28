import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    View,
    Image,
 } from 'react-native';

import { MKButton } from 'react-native-material-kit';
import { onNewTagPress, onRegionChange } from '../actions';
import plusDark from '../assets/img/plus_dark.png';

class Map extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      region: null
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position =>{
      this.setState({
        region:{
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }
      })
    });
  }


  render() {
    if( this.state.region === null ){
      return false;
    }
    const region = this.props.map;
    const styles = {
      mapStyle: {
        ...StyleSheet.absoluteFillObject,
      },
      mapWrapper: {
        flex: 1,
      },
    };
    const PlainFab = MKButton.plainFab()
        .withStyle(styles.fab)
        .withOnPress(() => {
          console.log('plainfab3');
          Actions.postTag();
        })
        .build();

    return (

      <View style={styles.mapWrapper}>
        <MapView
          ref={ref => { this.map = ref; }}
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          region={this.state.region}
        >
          {this.props.markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
        <PlainFab>
          <Image pointerEvents="none" source={plusDark} />
        </PlainFab>
      </View>
    );
  }



}

Map.propTypes = {
  map: React.PropTypes.object,
  markers: React.PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    map: state.map,
    markers: state.markers,
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     onNewTagPress,
//     onRegionChange,
//   };
// }

export default connect(mapStateToProps, { onNewTagPress, onRegionChange })(Map);
