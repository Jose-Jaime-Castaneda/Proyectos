import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../Utils";
import "../../css/ProductoInfo.css";
import { context } from "../Context/cartContext";

const ProdutosInfo = () => {
  // Estado para almacenar la informacion del producto
  const [producto, setProducto] = useState({});
  // Variable donde guardamos la información del navigator
  const { ID } = useParams();
  // Hook para trar la información del producto
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductoById(ID);
      setProducto(data);
    };
    fetchData();
  }, []);
  // Variable que usará el contexto del comoponente
  // donde lo generamos
  const contexto = useContext(context);
  const { agregarProducto } = contexto;

  return (
    <section className="section">
      <h2 className="h1">{producto.title}</h2>
      <img className="img" src={producto.imgSrc} />
      <p className="precio">${producto.precio} MXN</p>
      <p>
        <span>Descripción: </span>
        {producto.descripcion}
      </p>
      <p className="stock">Disponibles: {producto.stock}</p>
      <div className="btnContainer">
        <button>Comprar ahora</button>
        <button onClick={() => agregarProducto({ ...producto })}>
          Agregar al carrito
        </button>
        <button>Volver</button>
      </div>
    </section>
  );
};

export default ProdutosInfo;
