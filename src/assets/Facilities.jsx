import "./Facilities.css";

import fac1 from "../images/fac1.webp";
import fac2 from "../images/fac2.webp";
import fac3 from "../images/fac3.webp";

import wifi from "../icons/wifi.svg";
import tv from "../icons/tv.svg";
import meeting from "../icons/meeting.svg";
import parking from "../icons/parking.svg";
import dryer from "../icons/dryer.svg";
import robe from "../icons/robe.svg";
import { Link } from "react-router-dom";

function Facilities() {
  return (
    <section className="fac-section">


      <div className="fac-header">
        <h2 className="fac-title-top" data-aos="fade-down">
          PARK LANE <br /> COPENHAGEN'S
        </h2>

        <h1 className="fac-title-main" data-aos="fade-left">

          FACILITIES
        </h1>

        <p className="fac-text">
          At Park Lane Copenhagen, we are all about making your stay extraordinary, both inside and outside your room. Treat yourself to an unforgettable dinner in our restaurant, enjoy a perfectly selected glass of wine in our beautiful wine bar, or hold your next meeting in one of our meeting rooms, where creativity and important conversations take center stage.
        </p>
        <p className="fac-text">
          Every detail has been carefully thought out to give you an experience beyond the ordinary.


        </p>
      </div>

      <div className="fac-img-row">
        <div className="fac-col">
          <img src={fac1} alt="Wine Bar" className="fac-img" />
           <Link to="/winebar" className="fac-img-title">
            WINE BAR
          </Link>
        </div>

        <div className="fac-col">
          <img src={fac2} alt="Meetings" className="fac-img" />

          <Link to="/Meetingsconferences" className="fac-img-title">
            MEETINGS
          </Link>
        </div>

        <div className="fac-col">
          <img src={fac3} alt="Restaurant" className="fac-img" />
          
          <Link to="/contact" className="fac-img-title">
            RESTAURANT
          </Link>
          
        </div>
      </div>

      <div className="fac-divider"></div>


      <div className="fac-need">
        <h2 className="fac-need-title" data-aos="fade-right">
          EVERYTHING YOU
        </h2>
        <span className="fac-need-subtitle" data-aos="fade-up">
          NEED
        </span>

        <div className="fac-features">
          {[
            { icon: wifi, text: "WiFi" },
            { icon: tv, text: "TV & Chromecast" },
            { icon: meeting, text: "Meeting Rooms" },
            { icon: parking, text: "Free Parking" },
            { icon: dryer, text: "Blow Dryer & Steamer" },
            { icon: robe, text: "Bathrobe & Slippers" },
          ].map((item, i) => (
            <div className="feature-box" key={i}>
              <img src={item.icon} className="feature-icon" alt="icon" />
              <p className="feature-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Facilities;
