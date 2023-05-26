import React, { useState, useEffect } from "react";
import "../css/APP.css";

const App = () => {
  // Variable para probar fetch API
  const [aux, setAux] = useState([]);
  // Fecth API
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((reponse) => reponse.json())
      .then((info) => {
        console.log(info);
        setAux(info);
      });
  }, []);

  return (
    <main>
      <h1>Categorias</h1>
      {aux.map((e) => (
        <p key={e.id}>{e.title}</p>
      ))}
    </main>
  );
};

export default App;
