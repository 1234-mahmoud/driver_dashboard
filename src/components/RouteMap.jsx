// RouteMap.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

// MapSelector handles clicks and reverse geocoding
const MapSelector = ({ from, to, setFrom, setTo }) => {
  const [markers, setMarkers] = useState([]);

  const getLocationName = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await res.json();
      return data.display_name; // human-readable address
    } catch (error) {
      console.error(error);
      return `${lat},${lon}`;
    }
  };

  useMapEvents({
    click: async (e) => {
      const locationName = await getLocationName(e.latlng.lat, e.latlng.lng);

      if (!from) {
        setFrom(locationName);
        setMarkers([{ position: e.latlng, type: 'from' }]);
      } else if (!to) {
        setTo(locationName);
        setMarkers((prev) => [...prev, { position: e.latlng, type: 'to' }]);
      }
    },
  });

  return (
    <>
      {markers.map((m, idx) => (
        <Marker key={idx} position={m.position} />
      ))}
    </>
  );
};

// Main RouteMap component
export default function RouteMap({ from, to, setFrom, setTo }) {
  const egyptCenter = [26.8206, 30.8025]; // Center map on Egypt

  return (
    <MapContainer
      center={egyptCenter}
      zoom={6}
      style={{ height: '300px', width: '100%', borderRadius: '10px', marginTop: '1rem' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <MapSelector from={from} to={to} setFrom={setFrom} setTo={setTo} />
    </MapContainer>
  );
}
