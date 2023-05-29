import React, { useState, useEffect } from "react";
import "../../css/Main.css"

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

  return (
    <div className="AsideMain">
      <aside>
        <h3>Categorias</h3>
        {categorias.map((e) => (
          <p key={e.id}>{e.title}</p>
        ))}
      </aside>
      <main>Contenido Principal</main>
    </div>
  );
};

export default Main;
