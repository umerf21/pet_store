import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import { useMapsScreen } from './useMapsScreen';

const MapsScreen = () => {
  const {location} = useMapsScreen()

  // Default location for Dubai
  const DEFAULT_LOCATION = {
    latitude: 25.2048,
    longitude: 55.2708,
  }; 


  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_DEFAULT}
      showsUserLocation
      initialRegion={{
        latitude: location?.latitude ?? DEFAULT_LOCATION.latitude,
        longitude: location?.longitude ?? DEFAULT_LOCATION.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={location ?? DEFAULT_LOCATION} />
    </MapView>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
