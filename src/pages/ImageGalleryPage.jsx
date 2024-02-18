import React from "react";
import ImageGallery from "./ImageGallery"; // Importa el componente ImageGallery

const ImageGalleryPage = () => {
  return (
    <div className="image-gallery-page">
      <h1>Image Gallery Page</h1>
      <ImageGallery /> {/* Renderiza el componente ImageGallery */}
    </div>
  );
};

export default ImageGalleryPage;
