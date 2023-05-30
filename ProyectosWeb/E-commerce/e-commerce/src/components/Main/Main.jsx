import React, { useState, useEffect } from "react";
import "../../css/Main.css";
import { fetcher } from "../../Utils";

const Main = () => {
  // Variable para probar fetch API
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  // Fecth API
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("/categorias");
      setCategorias(data);
    };
    fetchData();
  }, []);
  // Funcion para manejar los eventos clic de las categorias
  const handleProductos = async (id) => {
    const fetchData = await fetcher("/productos?catId=" + id);
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
          <p key={l.id}>{l.title}</p>
        ))}
      </main>
    </div>
  );
};

export default Main;
