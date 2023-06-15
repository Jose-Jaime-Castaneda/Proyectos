import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";
// Constante que usaremos para crear contexto
export const context = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
// Estado inicial del objeto cartItem
const estadoInicial = { cartItem: storage };
// Componente que usaremos como provedor de contexto
const CartContextProvider = ({ children }) => {
  // Estado para actualizar con el Reducer
  const [state, dispatch] = useReducer(CartReducer, estadoInicial);
  // Función que guarda los articulos en el carro
  const agregarProducto = (infoProd) => {
    dispatch({ type: "ADD", infoProd });
  };
  // Función para eliminar un producto del carro
  const eliminarProducto = (infoProd) => {
    dispatch({ type: "REMOVE", infoProd });
    return state.cartItem;
  };
  // Función para incrementar la cantidad del producto en el carro
  const incrementarCantidad = (infoProd) => {
    dispatch({ type: "INCCANT", infoProd });
    return state.cartItem;
  };
  // Función para decrementar la cantidad del producto en el carro
  const decrementarCantidad = (infoProd) => {
    dispatch({ type: "DECCANT", infoProd });
    return state.cartItem;
  };
  // Función para limpiar el carrito
  const limpiarCarrito = () => {
    dispatch({ type: "CLEAR", infoProd: null });
    return state.cartItem;
  };
  // Función para retornar los productos en el carro
  const getProductos = () => {
    return state.cartItem;
  };
  // Función que renderiza la información del estado actualizado
  const contextData = {
    agregarProducto,
    eliminarProducto,
    incrementarCantidad,
    decrementarCantidad,
    limpiarCarrito,
    getProductos,
    ...state,
  };

  return <context.Provider value={contextData}>{children}</context.Provider>;
};

export default CartContextProvider;
