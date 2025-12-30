import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Rooms.css";

import room1 from "../images/1.webp";
import room2 from "../images/2.webp";
import room3 from "../images/3.webp";
import room4 from "../images/4.webp";
import room5 from "../images/5.webp";
import room6 from "../images/6.webp";

function Rooms() {
  const sliderRef = useRef(null);
  const [indicatorPos, setIndicatorPos] = useState(0);

  const rooms = [room1, room2, room3, room4, room5, room6];

  useEffect(() => {
    const slider = sliderRef.current;
    const updateIndicator = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const percent = maxScroll === 0 ? 0 : (slider.scrollLeft / maxScroll) * 100;
      setIndicatorPos(percent);
    };

    slider.addEventListener("scroll", updateIndicator);
    return () => slider.removeEventListener("scroll", updateIndicator);
  }, []);

  return (



    <section className="container">
      <div className="row">


        <div className="row title-row align-items-center">
          <div className="col-12 col-md-6">
            <p className="explore-title" data-aos="fade-right">EXPLORE</p>
            <h1 className="main-title" >ROOMS & SUITES</h1>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-md-end">
            <div className="title-progress-track">
              <div className="title-progress-indicator" style={{ left: `${indicatorPos}%` }}></div>
            </div>
          </div>
        </div>

       
        <div className="rooms-slider" ref={sliderRef}>
          {rooms.map((img, index) => (
            <div className="room-card" key={index}>
              <img src={img} alt="Room" className="room-img" />

              <h2 className="room-name">EXECUTIVE SUITE</h2>
              <div className="room-info">
                <span><i className="bi bi-aspect-ratio"></i>52 m²</span>
                <span><i className="bi bi-moon-stars"></i>King / Queen Size</span>
                <span><i className="bi bi-cloud-rain"></i>Rainshower</span>
              </div>

              {/* <button className=""></button> */}
              <Link to="/viewroom" className="view-room-btn">
                VIEW ROOM
              </Link>
            </div>
          ))}
        </div>

        <div className="rooms-bottom-line"></div>



      </div>
    </section>
  );
}

export default Rooms;
