// Constante con la URL
const url_base = "http://localhost:3001";

export const fetcher = async (url) => {
  const response = await fetch(url_base + url);
  const responseData = await response.json();
  return responseData;
};
