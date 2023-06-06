import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";
// Constante que usaremos para crear contexto
export const context = createContext();
// Estado inicial del objeto cartItem
const estadoInicial = { cartItem: [] };
// Componente que usaremos como provedor de contexto
const CartContextProvider = ({ children }) => {
  // Estado para actualizar con el Reducer
  const [state, dispatch] = useReducer(CartReducer, estadoInicial);
  // Función que guarda los articulos en el carro
  const agregarProducto = (infoProd) => {
    dispatch({ type: "ADD", infoProd });
  };
  // Función que renderiza la información del estado actualizado
  const contextData = {
    agregarProducto,
    ...state,
  };

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default CartContextProvider;
