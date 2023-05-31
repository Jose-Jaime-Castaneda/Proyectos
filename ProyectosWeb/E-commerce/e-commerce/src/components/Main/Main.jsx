import React, { useState, useEffect } from "react";
import "../../css/Main.css";
import { getProductos, getCategorias } from "../../Utils";
import { Link } from "react-router-dom";

const Main = () => {
  // Estados para guardar la información
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  // Función para obtener las categorias
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategorias();
      setCategorias(data);
    };
    fetchData();
  }, []);
  // Funcion para obtener los productos dependiendo
  // de la categoria
  const handleProductos = async (id) => {
    const fetchData = await getProductos(id);
    setProductos(fetchData);
  };

  return (
    <div className="AsideMain">
      <aside className="Aside">
        <h3>Categorias</h3>
        {categorias &&
          categorias.map((e) => (
            <p onClick={() => handleProductos(e.id)} key={e.id}>
              {e.title}
            </p>
          ))}
      </aside>
      <main className="Main">
        {productos.map((l) => (
          <>
            <article className="article" key={l.id}>
              <Link to={`/productos/${l.id}`}>{l.title}</Link>
              <img src={l.imgSrc}></img>
              <h3>Precio: ${l.precio}</h3>
            </article>
          </>
        ))}
      </main>
    </div>
  );
};

export default Main;
