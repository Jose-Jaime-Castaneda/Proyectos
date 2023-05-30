// Constante con la URL base
const url_base = "http://localhost:3001";
// Función fetch para obtener la información del servidor
const fetcher = async (url) => {
  const response = await fetch(url_base + url);
  const responseData = await response.json();
  return responseData;
};
// Función que manda la url para las categorias
export const getCategorias = () => {
  return fetcher("/categorias");
};
// Función que manda la url para los productos
export const getProductos = (id) => {
  return fetcher("/productos?catId=" + id);
};
