import "./Apartments.css";
import apt1 from "../images/apt1.webp";
import apt2 from "../images/apt2.webp";
import { Link } from "react-router-dom";

export default function Apartments() {
  return (
    <section className="apartments-section">
      <div className="container text-center">

        <h2
          className="apartments-title"
          data-aos="zoom-out-right"
        >
          STAY LONGER – SEE OUR APARTMENTS
        </h2>

        <div className="row justify-content-center g-5 mt-5">

          <div className="col-sm-10 col-md-6 col-lg-5 apartment-card">
            <img src={apt1} className="apt-img" alt="Park Studio" />

            <h3 className="apt-name">PARK STUDIO</h3>
            <div className="underline"></div>

            <span className="apt-size">
              <i className="bi bi-arrows-angle-expand"></i> 83 m²
            </span><br/>

            <Link to="/apartdetails" className="apt-btn">
                VIEW APARTMENT
              </Link>
          </div>

          <div className="col-sm-10 col-md-6 col-lg-5 apartment-card">
            <img src={apt2} className="apt-img" alt="Robert Studio" />

            <h3 className="apt-name">ROBERT'S STUDIO</h3>
            <div className="underline"></div>

            <span className="apt-size">
              <i className="bi bi-arrows-angle-expand"></i> 52 m²
            </span><br/>

            
            <Link to="/apartdetails" className="apt-btn">
                VIEW APARTMENT
              </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
