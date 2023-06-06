import React, { createContext } from "react";

export const context = createContext();

const estadoInicial = { cartItem: [] };

const CartContextProvider = ({ children }) => {
  return <context.Provider value={estadoInicial}>{children}</context.Provider>;
};

export default CartContextProvider;
