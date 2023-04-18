import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const MapaFarmacia = ({ positions, zoom = 10 }) => {


  if (!positions || positions.length === 0) {
    return <div>Carregando mapa...</div>;
  }

  const center = {
    lat: positions[0].latitude,
    lng: positions[0].longitude,
  };
   

  return (
    <>
   <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%', zIndex: 0 }} >

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map(({latitude, longitude, farmacia}, index) => (
  <Marker key={index} position={[latitude, longitude]}>
    <Popup>
      <span className='font-extrabold text-orange-600 flex justify-center'>{farmacia.razaoSocial}</span>
      <br />
      <span className='font-bold'>Cnpj:</span>  {farmacia.cnpj}
      <br />
      <span className='font-bold'>Endereço:</span> {farmacia.logradouro}, {farmacia.logradouroNumero}, {farmacia.bairro}
      <br/>
      <span className='font-bold'>Telefone:</span> {farmacia.telefone}
      <br/>
      <span className='font-bold'>Whatsapp:</span> {farmacia.telefone}      
    </Popup>
  </Marker>
))}

    </MapContainer>
    
  </>
);
};

export default MapaFarmacia;
