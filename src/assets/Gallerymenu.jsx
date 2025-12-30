import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallerymenu.css";

import g1 from "../images/1.webp";
import g2 from "../images/2.webp";
import g3 from "../images/3.webp";
import g4 from "../images/4.webp";
import g5 from "../images/5.webp";
import g6 from "../images/6.webp";
import g7 from "../images/exp1.webp";
import g8 from "../images/exp2.webp";
import g9 from "../images/exp3.webp";
import g10 from "../images/exp4.jpg";


function Gallerymenu() {
  const images = [
    g1, g2, g3, g4,g5,g6,g7,g8,g9,g10,
  
  ];

  return (
    <section className="gallery-section">
      <div className="container">

        <div className="row gallery-grid">
          {images.map((img, index) => (
            <div className="col-lg-6 gallery-item" key={index}>
              <img src={img} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallerymenu;
