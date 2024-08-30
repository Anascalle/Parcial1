import React, { useState } from "react"; 
import HotelCard from "../HotelCard/HotelCard";
import AlimentationCard from "../AlimentationCard/AlimentationCard";
import planDeViajes from "../../data";
import DestinyCard from "../DestinyCard/DestinyCard";
import "./GridCards.css";

const GridCard = () => {
  const [selectedAlimentation, setSelectedAlimentation] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleSelect = (alimentacion) => {
    setSelectedAlimentation(alimentacion);
  };

  return (
    <div className="container">
      <h1>Plan de Viajes</h1>

      <h2>Alimentación</h2>
      <div className="card-container">
        {planDeViajes.alimentacion.map((alimentacion) => (
          <AlimentationCard
            key={alimentacion.id}
            alimentacion={alimentacion}
            onSelect={() => handleSelect(alimentacion)}
          />
        ))}
      </div>

      <h2>Hoteles</h2>
      <div className="card-container">
        {planDeViajes.hoteles.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>

      <h2>Destinos</h2>
      <div className="card-container">
        {Object.keys(planDeViajes.destinosdla).map((destinoKey, index) => (
          <DestinyCard key={index} destino={planDeViajes.destinosdla[destinoKey]} />
        ))}
      </div>

      {selectedAlimentation && (
        <div className="selected-card">
          <h2>Detalles de la Alimentación Seleccionada</h2>
          <div className="card">
            <img src={selectedAlimentation.imagen} alt={selectedAlimentation.nombre} />
            <div className="card-body">
              <h5 className="card-title">{selectedAlimentation.titulo}</h5>
              <p className="card-text">Costo: ${selectedAlimentation.precio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridCard;

