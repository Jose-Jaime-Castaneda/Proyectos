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
        <article className="mainArticle">
          <img src={p.imgSrc}></img>
          <article className="articleInfo">
            <h4>{p.title}</h4>
            <p>Cantidad: {p.cantidad / 2}</p>
            <button>+</button>
            <button>-</button>
          </article>
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
