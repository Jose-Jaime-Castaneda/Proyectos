import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carrito from "./components/Carrito/Carrito";
import About from "./components/About/About";
import NotFound from "./components/Error/NotFound";
import ProdutosInfo from "./components/ProdcutosInfo/ProductosInfo";
import Main from "./components/Main/Main";
import Producto from "./components/Productos/Producto";
import Categorias from "./components/Categorias/Categorias";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Categorias />
              <Footer />
            </>
          }
        />
        <Route
          path="/carrito"
          element={
            <>
              <Header />
              <Carrito />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/productoInfo/:ID" element={<ProdutosInfo />} />
        <Route path="/productosByCat/:catID" element={<Producto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
