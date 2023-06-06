export const CartReducer = (estado, accion) => {
  debugger;

  switch (accion.type) {
    case "ADD":
      const index = estado.cartItem.findIndex(
        (i) => i.id === accion.infoProd.id
      );

      if (index === -1) {
        estado.cartItem.push({ ...accion.infoProd, cantidad: 1 });
      } else {
        estado.cartItem[index].cantidad++;
      }

      return estado;

    case "REMOVE":
      return estado;

    default:
      return estado;
  }
};
