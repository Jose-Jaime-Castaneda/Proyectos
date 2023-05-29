import React, { useState, useEffect } from "react";

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
    <main>
      <h1>Categorias</h1>
      {categorias.map((e) => (
        <p key={e.id}>{e.title}</p>
      ))}
    </main>
  );
};

export default Main;
