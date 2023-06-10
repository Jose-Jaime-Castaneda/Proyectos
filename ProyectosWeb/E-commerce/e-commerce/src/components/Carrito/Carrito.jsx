import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Carrito.css";
import { context } from "../Context/cartContext";

const Carrito = () => {
  // Funcion para obtener los productos en el carrito
  const {
    getProductos,
    limpiarCarrito,
    eliminarProducto,
    incrementarCantidad,
    decrementarCantidad,
  } = useContext(context);
  const [productos, setProductos] = useState([]);
  // Función para llenar el arreglo
  useEffect(() => {
    setProductos(getProductos());
  }, [getProductos]);
  // Funcion para renderizar la información del carrito
  const renderCarrito = () => {
    if (productos.length > 0) {
      return productos.map((p) => (
        <article className="mainArticle">
          <img src={p.imgSrc}></img>
          <article className="articleInfo">
            <h4>{p.title}</h4>
            <p>Cantidad: {p.cantidad}</p>
            <button
              onClick={() => setProductos(incrementarCantidad({ id: p.id }))}
            >
              +
            </button>
            <button
              onClick={() => setProductos(decrementarCantidad({ id: p.id }))}
            >
              -
            </button>
            <button
              onClick={() => setProductos(eliminarProducto({ id: p.id }))}
            >
              x
            </button>
            <p className="precioProd">${p.precio * (p.cantidad / 2)}</p>
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

  const renderTotal = () => {
    const productos = getProductos();

    const total = productos.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
    return total / 2;
  };

  return (
    <section className="sectionCarrito">
      {renderCarrito()}
      <div className="carritoContainer">
        <button onClick={() => setProductos(limpiarCarrito())}>
          Limpiar carrito
        </button>
        <button>Comprar carrito</button>
      </div>
      <p className="carritoTotal">Total: ${renderTotal()}</p>
    </section>
  );
};

export default Carrito;
