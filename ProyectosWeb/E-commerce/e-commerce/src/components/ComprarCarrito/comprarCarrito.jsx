import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ComprarCarrito.css";

const ComprarCarrito = () => {
  const navegar = useNavigate();
  //Validacion de formulario
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    estadoYMunicio: "",
    codigoPostal: "",
    calle: "",
  });

  const handleChange = (ev) => {
    const { nombre, valor } = ev.target;
    setForm((estadoAnterior) => {
      return {
        ...estadoAnterior,
        [nombre]: valor,
      };
    });
  };

  const handleSubmit = (ev) => {
    navegar("/confirmarCompra");
  };

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
            onChange={handleChange}
          />
          <label>Correo</label>
          <input
            type="email"
            name="correo"
            placeholder="ejem@gmail.com"
            required
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <label>Codigo postal</label>
          <input
            type="text"
            name="codigoPostal"
            placeholder="#44000"
            required
            onChange={handleChange}
          />
          <label>Calle</label>
          <input
            type="text"
            name="calle"
            placeholder="Ingrese la calle de su domicilio"
            required
            onChange={handleChange}
          />
        </div>
        <button className="btnComprar">Confirmar compra</button>
      </form>
    </section>
  );
};

export default ComprarCarrito;
