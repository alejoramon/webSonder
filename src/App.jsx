import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import OurOffer from "./components/OurOffer/OurOffer";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/OurOffer" element={<OurOffer />} />
          <Route path="/ImageGallery" element={<ImageGallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
