import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../css/APP.css";
import Header from "../components/Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import NotFound from "./Error/NotFound";

const App = () => {
  const navegar = useNavigate();
  useEffect(() => {
    navegar("/home");
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
