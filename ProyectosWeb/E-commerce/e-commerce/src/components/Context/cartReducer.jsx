export const CartReducer = (estado, accion) => {
  debugger;
  let index = -1;

  if (accion.infoProd)
    index = estado.cartItem.findIndex((i) => i.id === accion.infoProd.id);

  switch (accion.type) {
    case "ADD":
    case "INCCANT":
      if (index === -1) {
        estado.cartItem.push({ ...accion.infoProd, cantidad: 1 });
      } else {
        estado.cartItem[index].cantidad++;
      }
      break;

    case "REMOVE":
      if (index > -1) {
        estado.cartItem.splice(index, 1);
      }
      break;

    case "DECCANT":
      if (index > -1) {
        estado.cartItem[index].cantidad--;
      }
      break;

    case "CLEAR":
      estado.cartItem = [];
      break;

    default:
  }
  return estado;
};
