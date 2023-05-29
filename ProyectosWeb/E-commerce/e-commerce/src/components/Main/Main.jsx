import React, { useState, useEffect } from "react";
import "../../css/Main.css";

const Main = () => {
  // Constante con la URL
  const url = "http://localhost:3001";
  // Variable para probar fetch API
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  // Fecth API
  useEffect(() => {
    fetch(url + "/categorias")
      .then((reponse) => reponse.json())
      .then((info) => {
        // console.log(info);
        setCategorias(info);
      });
  }, []);
  // Funcion para manejar los eventos clic de las categorias
  const handleProductos = (id) => {
    fetch(url + "/productos?catId=" + id)
      .then((reponse) => reponse.json())
      .then((info) => {
        // console.log(info);
        setProductos(info);
      });
  };

  return (
    <div className="AsideMain">
      <aside className="Aside">
        <h3>Categorias</h3>
        {categorias.map((e) => (
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
