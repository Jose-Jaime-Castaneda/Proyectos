import React from "react";
import { Routes, Route } from "react-router-dom";
import "../css/APP.css";
import Header from "../components/Header/Header";
import Main from "./Main/Main";

const App = () => {
  return (
    <div>
      <Routes></Routes>
      <Header />
      <Main />
    </div>
  );
};

export default App;
