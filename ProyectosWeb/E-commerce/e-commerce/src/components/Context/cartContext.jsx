import React, { createContext } from "react";
// Constante que usaremos para crear contexto
// y manejar los estados del carrito
export const context = createContext();
// Objeto que guardará los articulos en al carrito
const estadoInicial = { cartItem: [] };
// Componente que usaremos para cambiar el arbol de
// componentes en la estrcutura del proyecto
const CartContextProvider = ({ children }) => {
  // Función que guarda los articulos en el carro
  const agregarProducto = (infoProd) => {
    debugger;
  };
  // Función que renderiza la información del estado
  // con los productos en el carrito
  const contextData = {
    agregarProducto,
    ...estadoInicial,
  };

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default CartContextProvider;
