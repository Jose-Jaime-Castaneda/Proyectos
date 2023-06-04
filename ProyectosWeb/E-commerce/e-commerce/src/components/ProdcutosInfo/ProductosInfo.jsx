import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../Utils";
import "../../css/ProductoInfo.css";

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
        <button>Agregar al carrito</button>
        <button>Volver</button>
      </div>
    </section>
  );
};

export default ProdutosInfo;
