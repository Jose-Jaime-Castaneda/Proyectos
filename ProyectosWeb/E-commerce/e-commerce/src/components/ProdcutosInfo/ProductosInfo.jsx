import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../Utils";

const ProdutosInfo = () => {
  // Estado para almacenar la informacion del producto
  const [producto, setProducto] = useState({});
  // Variable donde guardamos la información del navigator
  const { ID } = useParams();
  // Hook para trar la información del producto
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductoById(ID);
      setProducto(data);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h1>{producto.title}</h1>
    </section>
  );
};

export default ProdutosInfo;
