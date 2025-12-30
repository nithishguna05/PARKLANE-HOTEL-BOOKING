import "./Wine.css";
import { Link } from "react-router-dom";
import img1 from "../images/winebar1.webp";
import img2 from "../images/winebar2.webp";
import pdf from "../images/Wine-Bar-Menu.pdf";

import video1 from "../videos/wine1.mp4";
import video2 from "../videos/wine2.mp4";
import video3 from "../videos/wine3.mp4";

function Wine() {
  return (
    <section className="wine-section">


      <div className="container">
        <div className="row wine-row">

          <div className="col-lg-6">
            <div className="wine-block">
              <p className="wine-tag">THE WINE BAR</p>
              <h1>Business & pleasure</h1>
              <p className="wine-text">
               Whether you're enjoying a quiet moment with a glass of wine in hand or meeting to land an important deal, our beautiful wine bar sets the perfect setting for contemplation and great conversations.<br />
                Enjoy an exclusive selection of wines in a sophisticated atmosphere where every gathering, private or professional, feels like an experience in itself.
              </p>

              <a href={pdf} className="wine-btn">VIEW MENU LIST</a>

              <img src={img1} className="wine-media" alt="Wine Bar" />
            </div>
          </div>

       
          <div className="col-lg-6">
            <div className="wine-block">


             
              <video autoPlay muted loop playsInline className="wine-medi">
                <source src={video1} type="video/mp4" />
              </video>

              <p className="wine-ta ">OUR WINE SELECTION</p>
              <h1 className="h">
                Explore our curated  <br />wine selection
              </h1>
              <p className="wine-tex">
                Whether you are a passionate wine connoisseur or simply want to explore and expand your taste horizons, our wine bar is the perfect place.
                
              </p>
            </div>
          </div>

        </div>
      </div>

    
      <div className="wine-full-video">
        <video autoPlay muted loop playsInline>
          <source src={video2} type="video/mp4" />
        </video>
      </div><br />

     
      <div className="container">
        <div className="row wine-row">

         
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="wine-block">
              <p className="wine-tag">SET THE SCENE</p>
              <h1>
                Doing Business <br /> in Great Atmosphere
              </h1>
              <p className="wine-text">
                Some meetings deserve more than just a table and chairs. In our
                refined wine bar, the setting sparks conversations and ideas.
              </p>

              <Link to="/Meetingsconferences" className="wine-btn">
                EXPLORE MEETING ROOM
              </Link>

            
              <video autoPlay muted loop playsInline className="wine-media tall">
                <source src={video3} type="video/mp4" />
              </video>
            </div>
          </div>

         
          <div className="col-lg-6 order-1 order-lg-2">
            <img src={img2} className="wine-media tall" alt="Meeting Space" />
          </div>

        </div>
      </div>

    </section>
  );
}

export default Wine;
