// src/components/Header.jsx
import React from "react";
// import catImage from "../assets/logosonder.png";
import "./Header.css"; // Importa el archivo CSS para estilizar el encabezado

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* <div className="logo">Logo</div> {<img src={catImage} alt="logo" />} */}
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">Nuestra Oferta</li>
          <li className="nav-item">Eventos</li>
          <li className="nav-item">Galería de Imágenes</li>
          <li className="nav-item">Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
