import React, { useState } from "react";
import "../../css/ComprarCarrito.css";

const ComprarCarrito = () => {
  //Validacion de formulario
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    estadoYMunicio: "",
    codigoPostal: "",
    calle: "",
  });

  const handleSubmit = (ev) => {};
  return (
    <section className="sectionComprar">
      <h3>Formulario de compra</h3>
      <form onSubmit={handleSubmit}>
        <h5>Datos del usuario</h5>
        <div className="infoUsu">
          <label className="label">Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre de usuario"
            required
          />
          <label>Correo</label>
          <input
            type="email"
            name="correo"
            placeholder="ejem@gmail.com"
            required
          />
        </div>
        <h5>Dirección</h5>
        <div className="direccionUsu">
          <label>Estado y Municio</label>
          <input
            type="text"
            name="estadoYMunicipio"
            placeholder="Aguascalientes, Aguascalientes"
            required
          />
          <label>Codigo postal</label>
          <input
            type="text"
            name="codigoPostal"
            placeholder="#44000"
            required
          />
          <label>Calle</label>
          <input
            type="text"
            name="calle"
            placeholder="Ingrese la calle de su domicilio"
            required
          />
        </div>
        <button className="btnComprar">Confirmar compra</button>
      </form>
    </section>
  );
};

export default ComprarCarrito;
