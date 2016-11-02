import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { 
    StyleSheet, 
    View, 
    Text, 
    TickView, 
    Image, 
    TouchableHighlight
 } from 'react-native';

import { MKButton, MKColor, MKTouchable } from 'react-native-material-kit';
import * as actions from '../actions';

class Map extends Component {

    render() {
        const region  = this.props.map;
        const styles = {
            mapStyle: {
                 ...StyleSheet.absoluteFillObject
            }
        };

        const PlainFab = MKButton.plainFab()
        .withStyle(styles.fab)
        .withOnPress(() => {
            this.props.onPostFormPress;
        })
        .build();
        
        return(

            <View style={{flex: 1}}>
                <MapView style={styles.mapStyle}
                    region={region}
                    onRegionChange={this.onRegionChange}
                >
                {this.props.markers.map(marker => (
                        <MapView.Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                        />
                    ))}
                </MapView>
                    <PlainFab>
                        <Image pointerEvents="none" source={require('../assets/img/plus_dark.png')} />
                    </PlainFab>
            </View>
        );
    }
}



const mapStateToProps = state => {
    console.log(state);
    return { 
        map: state.map,
        markers: state.markers
       // onPostFormPress: state.map.
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);