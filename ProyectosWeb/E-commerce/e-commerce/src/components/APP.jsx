import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../css/APP.css";
import Header from "./Header/Header";

const App = () => {
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
    <div>
      <Routes>
        <Route path="/home" />
      </Routes>
      <header className="Header">
        <Header />
      </header>
      <main>
        <h1>Categorias</h1>
        {categorias.map((e) => (
          <p key={e.id}>{e.title}</p>
        ))}
      </main>
    </div>
  );
};

export default App;
