import React from "react";

const DestinyCard = ({ destino }) => {
  return (
    <div className="card">
      <img src={destino.imagen} alt={destino.nombre} />
      <div className="card-body">
        <h5 className="card-title">{destino.titulo}</h5>
        <p className="card-text">Costo: ${destino.precio}</p>
      </div>
    </div>
  );
};

export default DestinyCard;
