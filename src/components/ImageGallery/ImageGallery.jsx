import React from "react";

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <h2>Gallery</h2>
      <div className="gallery-container">
        <div className="image-item">
          <img src="/images/image1.jpg" alt="Image 1" />
        </div>
        <div className="image-item">
          <img src="/images/image2.jpg" alt="Image 2" />
        </div>
        <div className="image-item">
          <img src="/images/image3.jpg" alt="Image 3" />
        </div>
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default ImageGallery;
