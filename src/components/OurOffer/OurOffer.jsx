import React from "react";
import Cerveza from "./Beers";
import Carta from "./Menu";
import Cocktails from "./Cocktails";
import Conciertos from "./Concerts";
import "./OurOffer.css"; // Importa los estilos CSS para este componente

const OurOffer = () => {
  return (
    <div className="our-offer-container">
      <div className="section-container">
        <h3 className="section-title">Nuestra oferta</h3>
        <p>
          En Sonder Los Alcazares, nos enorgullece ofrecer una amplia gama de
          servicios y productos para satisfacer tus necesidades. Desde
          deliciosos platos preparados con ingredientes frescos y locales hasta
          eventos emocionantes que te mantendrán entretenido, ¡nuestra oferta
          tiene algo para todos!
        </p>
      </div>
      <div className="offer-highlights">
        {/* Cada componente tiene su contenedor con fondo magenta */}
        <div className="offer-item">
          <Cerveza />
        </div>
        <div className="offer-item">
          <Carta />
        </div>
        <div className="offer-item">
          <Cocktails />
        </div>
        <div className="offer-item">
          <Conciertos />
        </div>
      </div>
    </div>
  );
};

export default OurOffer;
