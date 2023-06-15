import React, { useState, useEffect } from "react";
import { getProductoByQuery } from "../../Utils";
import { useSearchParams, Link } from "react-router-dom";

const Buscador = () => {
  const [productos, setProdutos] = useState([]);
  const [params] = useSearchParams();
  const query = params.get("b");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductoByQuery(query);
      setProdutos(response);
    };
    fetchData();
  }, [query]);

  return (
    <section>
      <h1>Resultados de busqueda</h1>
      {productos.map((p) => (
        <article className="article" key={p.id}>
          <h2>
            <Link to={`/productoInfo/${p.id}`} className="link">
              {p.title}
            </Link>
          </h2>
          <h3>
            <span className="spanPrecio">${p.precio} MXN</span>
          </h3>
          <img src={p.imgSrc}></img>
        </article>
      ))}
    </section>
  );
};

export default Buscador;
