import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

const Header = () => {
  return (
    <nav className="NavBar">
      <ul className="UL">
        <Link to={"/home"}>
          <li>Inicio</li>
        </Link>
        <Link>
          <li>Link</li>
        </Link>
        <Link>
          <li>Link</li>
        </Link>
        <Link>
          <li>Link</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
