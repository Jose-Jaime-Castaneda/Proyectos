import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  return (
    <section className="sectionComprar">
      <h3>Formulario de compra</h3>
      <form>
        <h5>Datos del usuario</h5>
        <div className="infoUsu">
          <label className="label">Nombre</label>
          <input type="text" name="nombre" placeholder="Nombre de usuario" />
          <label>Correo</label>
          <input type="email" name="correo" placeholder="ejem@gmail.com" />
        </div>
        <h5>Dirección</h5>
        <div className="direccionUsu">
          <label>Estado y Municio</label>
          <input
            type="text"
            name="estadoYMunicipio"
            placeholder="Aguascalientes, Aguascalientes"
          />
          <label>Codigo postal</label>
          <input type="text" name="codigoPostal" placeholder="#44000" />
          <label>Calle</label>
          <input
            type="text"
            name="calle"
            placeholder="Ingrese la calle de su domicilio"
          />
        </div>
        <button className="btnComprar">
          <Link to={"/confirmarCompra"} className="link">
            Confirmar compra
          </Link>
        </button>
      </form>
    </section>
  );
};

export default ComprarCarrito;
