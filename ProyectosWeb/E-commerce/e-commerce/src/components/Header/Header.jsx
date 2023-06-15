import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/Header.css";

const Header = () => {
  const navegador = useNavigate();

  const handleChange = (text) => {
    navegador("/buscar?b=" + text.target.value);
  };

  return (
    <header className="header">
      <nav className="NavBar">
        <ul className="UL">
          <Link to={"/"} className="link">
            <li>Inicio</li>
          </Link>
          <Link to={"/carrito"} className="link">
            <li>Carrito</li>
          </Link>
          <Link to={"/about"} className="link">
            <li>About</li>
          </Link>
          <div className="buscador">
            <label>Buscar</label>
            <input
              type="search"
              placeholder="buscar producto"
              onChange={handleChange}
            />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
