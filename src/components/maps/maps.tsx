'use client';

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Maps = ({ coordinates, name }) => {
  const icon = L.icon({ iconUrl: 'https://cdn.discordapp.com/attachments/673502691372171274/1218767009509281792/icons8-download-from-the-cloud-24.png?ex=6608dc3a&is=65f6673a&hm=3102a4bafce779d1e1783feb67afcaf724364ba1e75dee28f60d7f57e0e7c4f8&' });

  return (
    <div className="w-full">
      <MapContainer
        className="h-[300px] w-full"
        center={coordinates}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={icon}>
          <Popup>
            { name }
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
