import React from 'react';
// import PropTypes from 'prop-types';
// import L from 'leaflet';
// import 'leaflet.markercluster/dist/leaflet.markercluster';
// import 'leaflet.markercluster/dist/MarkerCluster.css';
// import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Map, TileLayer, Marker } from 'react-leaflet';
import 'react-leaflet-markercluster/dist/styles.min.css';

// Put <MarkerClusterGroup {...props} /> inside react-leaflet after <TileLayer />

const TestMap = () => {
  return (
    <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup>
        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
      </MarkerClusterGroup>
    </Map>
  );
};

// MarkerCluster.propTypes = {
//   markers: PropTypes.arrayOf(
//     PropTypes.shape({
//       position: PropTypes.objectOf(PropTypes.number).isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// };

export default TestMap;
