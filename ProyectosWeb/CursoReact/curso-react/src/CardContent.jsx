import React from "react";

const CardContent = (props) => {
  return (
    <div className="CardInfo" key={props.id}>
      <h3>{props.Nombre}</h3>
      <h3>{props.Apellido}</h3>
      <p>{props.Ocupacion}</p>
    </div>
  );
};

export default CardContent;
