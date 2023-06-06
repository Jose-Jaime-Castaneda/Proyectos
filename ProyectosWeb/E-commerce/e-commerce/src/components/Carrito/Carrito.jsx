import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        <article className="articleCarritoVacio">
          <p className="carroVacio">¡El carrito esta vacio!</p>
          <p className="invitacion">
            Agrega productos a tu carrito para poder verlos aquí
          </p>
          <button>
            <Link className="link" to={"/"}>
              Descubrir productos
            </Link>
          </button>
        </article>
      );
    }
  };
  return <section className="sectionCarrito">{renderCarrito()}</section>;
};

export default Carrito;
