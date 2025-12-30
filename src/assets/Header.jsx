import { useRef, useState } from "react";
import homeVideo from "../videos/home.mp4";
import logo from "../images/logo.svg";
import "./Header.css";

import Navbar from "./Navbar.jsx";
import RatingBar from "../assets/Rangebar.jsx";
import Rooms from "../assets/Rooms.jsx";
import About from "../assets/About.jsx";
import Experiences from "../assets/Experiences.jsx";
import Facilities from "../assets/Facilities.jsx";
import Apartments from "../assets/Apartments.jsx";
import Restaurant from "../assets/Restaurant.jsx";
import Qa from "./Qa.jsx";
import Footer from "../assets/Footer.jsx";

function Header() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState(1);

  const arrivalRef = useRef(null);
  const departureRef = useRef(null);

  return (
    <>
      <div className="header">
        <Navbar />

        <video autoPlay muted loop playsInline className="header-video">
          <source src={homeVideo} type="video/mp4" />
        </video>

        <div className="header-overlay"></div>

        <div className="header-logo">
          <img src={logo} alt="Park Lane" />
        </div>

        
        <div className="booking-container">
          <div className="booking-bar">

          
            <div className="booking-block">
              <div className="booking-top">
                <span>ARRIVAL</span>
                <span
                  className="arrow"
                  onClick={() => arrivalRef.current?.showPicker()}
                >
                  ▼
                </span>
              </div>

              <input
                ref={arrivalRef}
                type="date"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                className="date-input"
              />

              <div className="booking-line"></div>
            </div>

    
            <div className="booking-block">
              <div className="booking-top">
                <span>DEPARTURE</span>
                <span
                  className="arrow"
                  onClick={() => departureRef.current?.showPicker()}
                >
                  ▼
                </span>
              </div>

              <input
                ref={departureRef}
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="date-input"
              />

              <div className="booking-line"></div>
            </div>

            <div className="booking-block">
              <div className="booking-top">
                <span>GUESTS</span>
                <div className="guest-controls">
                  <button onClick={() => guests > 1 && setGuests(guests - 1)}>
                    −
                  </button>
                  <span>{guests}</span>
                  <button onClick={() => setGuests(guests + 1)}>+</button>
                </div>
              </div>

              <div className="booking-line"></div>
            </div>


            <div className="find-room">FIND ROOM</div>
          </div>
        </div>
      </div>

      <RatingBar />
      <Rooms />
      <About />
      <Experiences />
      <Facilities />
      <Apartments />
      <Restaurant />
      <Qa />
      <Footer />
    </>
  );
}

export default Header;
