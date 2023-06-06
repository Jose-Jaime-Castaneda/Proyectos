import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";
// Constante que usaremos para crear contexto
// y manejar los estados del carrito
export const context = createContext();
// Objeto que guardará los articulos en al carrito
const estadoInicial = { cartItem: [] };
// Componente que usaremos para cambiar el arbol de
// componentes en la estrcutura del proyecto
const CartContextProvider = ({ children }) => {
  // Estado para cambiar con el Reducer
  const [state, dispatch] = useReducer(CartReducer, estadoInicial);
  // Función que guarda los articulos en el carro
  const agregarProducto = (infoProd) => {
    dispatch({ type: "ADD", infoProd });
  };
  // Función que renderiza la información del estado
  // con los productos en el carrito
  const contextData = {
    agregarProducto,
    ...state,
  };

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default CartContextProvider;
