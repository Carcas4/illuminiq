import { useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';


function LightMap() {


  const lights = [
    { id: 1, name: "Light 1", location: "Location 1", lat: 45.810825, lng: 16.041033, state: "ON" },
    { id: 2, name: "Light 2", location: "Location 2", lat: 45.811390, lng: 16.040999, state: "ON" },
    { id: 3, name: "Light 3", location: "Location 3", lat: 45.811200, lng: 16.041915, state: "ON" },
    { id: 4, name: "Light 4", location: "Location 4", lat: 45.812063, lng: 16.041007, state: "ON" },
    { id: 5, name: "Light 5", location: "Location 5", lat: 45.812067, lng: 16.041702, state: "ON" },
  ];

  const customIcon= new Icon({
    iconUrl: require("../../img/logo-icon.png"),
    iconSize: [21, 37]
  })
  return (
    <div>
    <MapContainer center={[45.811515, 16.041591]} zoom={22} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {lights && lights.map(light => (
        <Marker key={light.id} position={[light.lat, light.lng]} icon={customIcon}>
          <Popup>
            <div>
              <h3>{light.name}</h3>
              <p>{light.location}</p>
              <p>{light.state}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    <div>
      <h3>List of Lights</h3>
      <ul>
        {lights.map(light => (
          <li key={light.id} >{light.name} ({light.lat}, {light.lng}) {light.state}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}



export default LightMap;

