// import React from 'react';
// import { LoadScript, GoogleMap } from '@react-google-maps/api';
// import { useLocation } from 'react-router-dom';


// const containerStyle = {
//   width: '100%',
//   height: '100vh'
// };

// // const center = {
// //   lat: 37.7749, // Example latitude (San Francisco)
// //   lng: -122.4194 // Example longitude
// // };

// function SatelliteMap() {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const lat = searchParams.get('lat');
//   const lon = searchParams.get('lon');

//   console.log('lat:', lat); // should be the value passed
//   console.log('lon:', lon); // should be the value passed
// console.log("lat", lat)
// const center = {
//   lat: lat, // Example latitude (San Francisco)
//   lng: lon // Example longitude
// };
//   const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

//   return (
//     <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={14}
//         options={{
//           mapTypeId: 'satellite' // Set map type to satellite view
//         }}
//       />
//     </LoadScript>
//   );
// }

// export default SatelliteMap;

import React from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

function SatelliteMap() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const latParam = searchParams.get('lat');
  const lonParam = searchParams.get('lon');

  // Convert to float
  const lat = latParam ? parseFloat(latParam) : null;
  const lon = lonParam ? parseFloat(lonParam) : null;

  console.log('lat:', lat);
  console.log('lon:', lon);

  // Check if valid coordinates are available
  if (lat === null || lon === null || isNaN(lat) || isNaN(lon)) {
    return <div>Invalid or missing coordinates</div>;
  }

  const center = {
    lat: lat,
    lng: lon
  };

  const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

  return (
    <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={{
          mapTypeId: 'satellite'
        }}
      />
    </LoadScript>
  );
}

export default SatelliteMap;