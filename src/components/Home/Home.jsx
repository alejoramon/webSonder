// src/components/Home.jsx
import React from "react";
// import backgroundImage from "../assets/sonderlosalcazares.JPG"; // Importa la imagen del local

const Home = () => {
  return (
    <div
      className="home-container"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home-content">
        <h1>Welcome to Our Website</h1>
        <p>Explore our offerings and events</p>
      </div>
    </div>
  );
};

export default Home;
