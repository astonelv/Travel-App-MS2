import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const WorldMap = () => {
    const [places, setPlaces] = useState([
        { id: 1, name: "Paris", description: "The city of love", lat: 48.8566, lng: 2.3522 },
        { id: 2, name: "New York", description: "The Big Apple", lat: 40.7128, lng: -74.0060 },
        { id: 3, name: "Tokyo", description: "Heart of Japan", lat: 35.689487, lng: 139.691711 },
        { id: 4, name: "Las Vegas", description: "Poker-City", lat: 36.1699, lng: -115.1398 },

        
        // Add more places as needed
      ]);

      useEffect(() => {
        axios.get('http://localhost:3000/places')
          .then(response => {
            setPlaces(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {places.map(place => (
        <Marker key={place.id} position={[place.lat, place.lng]}>
          <Popup>
            <strong>{place.name}</strong>
            <p>{place.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WorldMap;