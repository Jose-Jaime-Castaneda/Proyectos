import React, { useState, useEffect } from "react";
import "../../css/Productos.css";
import { getProductos } from "../../Utils";
import { useParams, Link } from "react-router-dom";

const Producto = () => {
  // Estado donde almacenamos los productos
  const [productos, setProductos] = useState([]);
  // Variable donde guardamos la prop que viene
  // desde la ruta interna
  const { catID } = useParams();
  // Función que obtiene los productos
  // dependiendo del id de la categoria
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductos(catID);
      setProductos(data);
    };
    fetchData();
  });

  return (
    <section>
      {productos.map((l) => (
        <article className="article" key={l.id}>
          <h2>
            <Link to={`/productoInfo/${l.id}`} className="link">
              {l.title}
            </Link>
          </h2>
          <h3>
            <span className="spanPrecio">${l.precio} MXN</span>
          </h3>
          <img src={l.imgSrc}></img>
        </article>
      ))}
    </section>
  );
};

export default Producto;
