export const CartReducer = (estado, accion) => {
  let index = -1;

  if (accion.infoProd)
    index = estado.cartItem.findIndex((i) => i.id === accion.infoProd.id);
  let newItems = [...estado.cartItem];

  const storage = (cartItems) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
  };

  switch (accion.type) {
    case "ADD":
    case "INCCANT":
      if (index === -1) {
        //estado.cartItem.push({ ...accion.infoProd, cantidad: 1 });
        newItems.push({ ...accion.infoProd, cantidad: 1 });
      } else {
        //estado.cartItem[index].cantidad++;
        newItems[index].cantidad++;
      }
      break;

    case "REMOVE":
      if (index > -1) {
        //estado.cartItem.splice(index, 1);
        newItems = estado.cartItem.filter((x) => x.id !== accion.infoProd.id);
      }
      break;

    case "DECCANT":
      if (index > -1) {
        if (newItems[index].cantidad > 1)
          //estado.cartItem[index].cantidad--;
          newItems[index].cantidad--;
      }
      break;

    case "CLEAR":
      //estado.cartItem = [];
      newItems = [];
      break;

    default:
  }
  estado.cartItem = newItems;
  storage(newItems);
  return estado;
};
