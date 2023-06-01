import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
