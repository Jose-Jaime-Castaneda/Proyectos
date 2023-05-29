import React, { useState, useEffect } from "react";
import "../../css/Main.css";

const Main = () => {
  // Variable para probar fetch API
  const [categorias, setCategorias] = useState([]);
  // Fecth API
  useEffect(() => {
    fetch("http://localhost:3001/categorias")
      .then((reponse) => reponse.json())
      .then((info) => {
        // console.log(info);
        setCategorias(info);
      });
  }, []);
  // Funciones para manejar los eventos clic de las categorias
  // Funcion para las laptops
  const handleLaptops = (id) => {
    alert("id de la catogeria: " + id);
  };

  return (
    <div className="AsideMain">
      <aside className="Aside">
        <h3>Categorias</h3>
        {categorias.map((e) => (
          <p onClick={() => handleLaptops(e.id)} key={e.id}>
            {e.title}
          </p>
        ))}
      </aside>
      <main className="Main">
        <h1>Contenido Principal</h1>
      </main>
    </div>
  );
};

export default Main;
