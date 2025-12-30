import "./About.css";
import aboutImg from "../images/about.webp";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">

          
          <div className="col-lg-5 about-text">
            <h3 className="welcome-title">
              WELCOMING <br /> BOUTIQUE HOTEL
            </h3>

            <h3 className="main-titl">
              IN HISTORIC <br /> SURROUNDINGS
            </h3>

            <p className="about-desc">
              In the heart of Hellerup, north of Copenhagen, lies Park Lane Copenhagen.
              A unique retreat with nature as its setting, where history merges with
              contemporary aesthetics.
            </p>

            <p className="about-desc">
              Step inside and you immediately notice the echoes of history in the
              craftsmanship with timeless beauty.
            </p>

            <p className="about-desc">
              We have thought about the details that make all the difference.
            </p>

            <div className="about-btn-group">
              
              <Link to="/roomsandsuites" className="about-btn">
               BOOK A TABLE <span className="arrow">→</span>
              </Link>
              
            
            <hr className="underline und" />
            <Link to="/abouthotel" className="about-btn">
              EXPLORE THE RESTAURANT <span className="arrow">→</span>
              </Link>
            <hr className="underline und"/>
              
            </div>
          </div>

       
          <div className="col-lg-6 mt-5 mt-lg-0" data-aos="zoom-in">
            <img src={aboutImg} alt="Hotel View" className="about-img" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
