import React from "react";
import "./Footer.css"; // Importa el archivo CSS para estilizar el Footer si es necesario

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
