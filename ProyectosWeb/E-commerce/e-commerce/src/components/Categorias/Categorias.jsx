import React, { useState, useEffect } from "react";
import { getCategorias } from "../../Utils";
import { Link } from "react-router-dom";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategorias();
      setCategorias(data);
    };
    fetchData();
  }, []);
  return (
    <aside className="Aside">
      <h3>Categorias</h3>
      {categorias &&
        categorias.map((e) => (
          <Link to={`/productosByCat/${e.id}`} key={e.id}>
            {e.title}
          </Link>
        ))}
    </aside>
  );
};

export default Categorias;
