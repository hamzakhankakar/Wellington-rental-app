import React from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 37.7749, // Example latitude (San Francisco)
  lng: -122.4194 // Example longitude
};

function SatelliteMap() {
  const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

  return (
    <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={{
          mapTypeId: 'satellite' // Set map type to satellite view
        }}
      />
    </LoadScript>
  );
}

export default SatelliteMap;