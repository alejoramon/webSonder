import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Importa los iconos de Facebook e Instagram desde react-icons

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/logosonder.png" alt="Sonder" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">Nuestra Oferta</li>
          <li className="nav-item">Eventos</li>
          <li className="nav-item">Galería de Imágenes</li>
          <li className="nav-item">Contacto</li>
        </ul>
        <div className="social-icons">
          {/* Utiliza los componentes de iconos de react-icons */}
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
