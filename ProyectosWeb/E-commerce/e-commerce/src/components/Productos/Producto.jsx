import React, { useState, useEffect } from "react";
import { getProductos } from "../../Utils";
import { useParams, Link } from "react-router-dom";

const Producto = () => {
  const [productos, setProductos] = useState([]);
  const { catID } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductos(catID);
      setProductos(data);
    };
    fetchData();
  }, []);
  return (
    <section>
      {productos.map((l) => (
        <>
          <article className="article" key={l.id}>
            <h4>
              <Link to={`/productoInfo/${l.id}`} className="link">
                {l.title}
              </Link>
            </h4>
            <img src={l.imgSrc}></img>
            <h3>Precio: ${l.precio}</h3>
          </article>
        </>
      ))}
    </section>
  );
};

export default Producto;
