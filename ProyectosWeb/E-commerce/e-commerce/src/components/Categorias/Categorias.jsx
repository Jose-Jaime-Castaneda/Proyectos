import React, { useState, useEffect } from "react";
import "../../css/Categorias.css";
import { getCategorias } from "../../Utils";
import { Link } from "react-router-dom";

const Categorias = () => {
  // Estado para almacenar las categorias
  const [categorias, setCategorias] = useState([]);
  // Hook para obtener las categorias cuando
  // se monte el componente
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
      <div className="navLink">
        {categorias &&
          categorias.map((e) => (
            <Link className="link" to={`/productosByCat/${e.id}`} key={e.id}>
              {e.title}
            </Link>
          ))}
      </div>
    </aside>
  );
};

export default Categorias;
