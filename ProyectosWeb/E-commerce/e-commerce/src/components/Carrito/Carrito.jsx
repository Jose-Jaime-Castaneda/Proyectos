import React, { useContext } from "react";
import "../../css/Carrito.css";
import { context } from "../Context/cartContext";

const Carrito = () => {
  // Funcion para obtener los productos en el carrito
  const { getProductos } = useContext(context);
  // Funcion para renderizar la información del carrito
  const renderCarrito = () => {
    const productos = getProductos();

    if (productos.length > 0) {
      return productos.map((p) => (
        <article className="articleCarrito">
          <h1>{p.title}</h1>
        </article>
      ));
    } else {
      return (
        <article>
          <p className="carroVacio">El carrito esta actualmente vacio</p>
          <p className="invitacion">
            Agrega productos a tu carrito para poder verlos aquí
          </p>
        </article>
      );
    }
  };
  return <section className="sectionCarrito">{renderCarrito()}</section>;
};

export default Carrito;
