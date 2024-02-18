// src/components/Footer/Footer.jsx

import React from "react";
import "./Footer.css"; // Importa el archivo CSS para estilizar el footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="contact-info"> Formas de contacto</p>
        <p>
          AVD. Libertadores nº178 | Contacto 610 09 09 09 |
          sonderlosalcazares@gmail.com
        </p>
        <p>© 2024 Sonde los Alcazares.</p>
      </div>
    </footer>
  );
};

export default Footer;
