import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

const Header = () => {
  return (
    <nav className="NavBar">
      <ul className="UL">
        <Link to={"/"}>
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
        <Link>
          <li>Link</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
