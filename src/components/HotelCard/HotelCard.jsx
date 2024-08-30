import React from 'react';
import "./HotelCard.css"

const HotelCard = ({ hotel }) => {
  return (
    <div className="card">
      <img src={hotel.imagen} alt={hotel.nombre} />
      <div className="card-body">
        <h5 className="card-title">{hotel.nombre}</h5>
        <p className="card-text">Costo: ${hotel.costo}/noche</p>
        <p className="card-text">Estrellas: {hotel.estrellas}</p>
        <p className="card-text">Ubicación: {hotel.ubicacion}</p>
        <p className="card-text">Servicios: {hotel.servicios.join(', ')}</p>
      </div>
    </div>
  );
};

export default HotelCard;
