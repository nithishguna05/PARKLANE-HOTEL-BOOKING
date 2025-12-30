import "bootstrap/dist/css/bootstrap.min.css";
import "./Restaurant.css";
import { Link } from "react-router-dom";
import restImg from "../images/restaurant.webp";
import restVideo from "../videos/restaurant.mp4";

function Restaurant() {
  return (
    <div className="restaurant-section container-fluid">
      <div className="row align-items-center justify-content-center g-0">

        {/* IMAGE */}
        <div className="col-lg-6 col-md-12">
          <img
            src={restImg}
            alt="Restaurant"
            className="restaurant-big-img"
          />
        </div>

        {/* CONTENT */}
        <div className="col-lg-5 col-md-12 content-box">
          <h2 className="rest-title-top">2900 AT PARK LANE</h2>
          <h2 className="rest-title">RESTAURANT</h2>

          <p className="rest-description">
            Welcome to 2900 at Park Lane, a new culinary destination in Hellerup
            under the direction of renowned chef Tom Fransson. We invite you to
            a unique dining experience, where international flavors meet Nordic
            craftsmanship in a relaxed and elegant atmosphere.
          </p>

          <div className="rest-links">
            <Link to="/roomsandsuites" className="rest-btn">
                BOOK A TABLE <span className="arrow">→</span>
              </Link>
            <hr className="underline" />

            <Link to="/abouthotel" className="rest-btn">
            EXPLORE THE RESTAURANT <span className="arrow">→</span>
              </Link>
            <hr className="underline" />
          </div>

          {/* VIDEO */}
          <video className="rest-video" autoPlay loop muted playsInline>
            <source src={restVideo} type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  );
}

export default Restaurant;
