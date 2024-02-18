import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import OurOffer from "./components/OurOffer/OurOffer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurOffer" element={<OurOffer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
