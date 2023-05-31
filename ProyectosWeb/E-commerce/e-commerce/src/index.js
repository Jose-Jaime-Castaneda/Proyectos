import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/APP";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carrito from "./components/Carrito/Carrito";
import About from "./components/About/About";
import NotFound from "./components/Error/NotFound";
import ProdutosInfo from "./components/ProdcutosInfo/ProductosInfo";
import Main from "./components/Main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Main />
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
        <Route path="/producto/:productoID" element={<ProdutosInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
