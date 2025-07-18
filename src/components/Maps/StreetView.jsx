import React from 'react';
import { GoogleMap, LoadScript, StreetViewPanorama } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 37.869085, // Example latitude
  lng: -122.255058 // Example longitude
};

function StreetViewExample() {
  const streetViewRef = React.useRef(null);
  const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

  return (
    <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {/* Replace with actual Street View Panorama */}
        <StreetViewPanorama
          position={center}
          visible={true}
          options={{
            pov: { heading: 100, pitch: 0 },
            zoom: 1,
          }}
          ref={streetViewRef}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default StreetViewExample;