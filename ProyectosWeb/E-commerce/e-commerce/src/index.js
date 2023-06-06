import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import CartContextProvider from "./components/Context/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <Navigation />
    </CartContextProvider>
  </React.StrictMode>
);
