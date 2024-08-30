
import React from "react";

const AlimentationCard = ({ alimentacion }) => {
  return (
    <div className="card">
      <img src={alimentacion.imagen} alt={alimentacion.nombre} />
      <div className="card-body">
        <h5 className="card-title">{alimentacion.titulo}</h5>
        <p className="card-text">Costo: ${alimentacion.precio}</p>
      </div>
    </div>
  );
};

export default AlimentationCard;
