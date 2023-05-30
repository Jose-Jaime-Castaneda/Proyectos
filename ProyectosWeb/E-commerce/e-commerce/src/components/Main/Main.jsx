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
  const handleProductos = (id) => {
    fetch("/productos?catId=" + id)
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
        {categorias && categorias.map((e) => <p key={e.id}>{e.title}</p>)}
      </aside>
      <main className="Main">
        <h1>Productos</h1>
      </main>
    </div>
  );
};

export default Main;
