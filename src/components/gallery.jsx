import React from "react";
import "./gallery.css";

// You can replace these with real images later
import img1 from "../images/gallery.jpg"; 
import img2 from "../images/gallery7.jpg";
import img3 from "../images/gallery3.jpg";
import img4 from "../images/gallery4.jpg";
import img5 from "../images/gallery8.jpg";
import img6 from "../images/gallery6.jpg";

import me from "../images/1000022342.jpg"


const images = [img1, img2, img3, me, img4, img5, img6];

const Gallery = () => {
  return (
    <div className="container py-5">

      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Campus Gallery</h2>
        <p className="text-muted">
          Moments from InnovaTech University life, events, and activities
        </p>
      </div>

      {/* Grid */}
      <div className="row g-3">

        {images.map((img, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div className="gallery-card">
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Gallery;