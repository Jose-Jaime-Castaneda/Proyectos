import React, { useState, useEffect } from "react";
import "../../css/Main.css";
import { getProductos, getCategorias } from "../../Utils";

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
        <h1>Productos</h1>
        {productos.map((l) => (
          <>
            <article key={l.id}>
              <h3>{l.title}</h3>
              <img src={l.imgSrc}></img>
              <p>
                <span>Acerca del producto: </span>
                {l.descripcion}
              </p>
              <h3>Precio: ${l.precio}</h3>
              <p>Disponibles: {l.stock}</p>
            </article>
          </>
        ))}
      </main>
    </div>
  );
};

export default Main;
