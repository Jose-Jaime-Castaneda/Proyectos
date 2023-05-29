import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../css/APP.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "./Main/Main";
import Carrito from "./Carrito/Carrito";
import About from "./About/About";
import NotFound from "./Error/NotFound";

const App = () => {
  const navegar = useNavigate();
  useEffect(() => {
    navegar("/home");
  }, []);

  return (
    <div className="MainDiv">
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
