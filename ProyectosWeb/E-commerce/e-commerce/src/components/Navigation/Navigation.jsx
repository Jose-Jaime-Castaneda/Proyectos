import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carrito from "../Carrito/Carrito";
import About from "../About/About";
import NotFound from "../Error/NotFound";
import ProdutosInfo from "../ProdcutosInfo/ProductosInfo";
import Main from "../Main/Main";
import Producto from "../Productos/Producto";
import Categorias from "../Categorias/Categorias";

const Navigation = () => {
  return (
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
        <Route
          path="/productoInfo/:ID"
          element={
            <>
              <ProdutosInfo />
              <Footer />
            </>
          }
        />
        <Route
          path="/productosByCat/:catID"
          element={
            <>
              <Header />
              <Producto />
              <Categorias />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
