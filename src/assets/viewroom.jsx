import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import contact from "../images/contact.jpg";
import logo from "../images/logo.svg";

import room1 from "../images/1.webp";
import room2 from "../images/2.webp";
import room3 from "../images/3.webp";
import room4 from "../images/4.webp";
import room5 from "../images/5.webp";
import room6 from "../images/6.webp";

import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

import "./viewroom.css";

function Viewroom() {

  const sliderRef = useRef(null);
  const [indicatorPos, setIndicatorPos] = useState(0);
  const rooms = [room1, room2, room3, room4, room5, room6];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateIndicator = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const percent =
        maxScroll === 0 ? 0 : (slider.scrollLeft / maxScroll) * 100;
      setIndicatorPos(percent);
    };

    slider.addEventListener("scroll", updateIndicator);
    return () => slider.removeEventListener("scroll", updateIndicator);
  }, []);

  return (
    <>

      <div className="header">
        <Navbar />
        <img src={contact} alt="" className="header-video" />
        <div className="header-overlay"></div>

        <div className="header-logo">
          <img src={logo} alt="Park Lane" />
        </div>

        <div className="tita">
          <h1>THE HILLIGER MASTER SUITE</h1>
        </div>
      </div>


      <div className="container room-intro">
        <div className="row">
          <div className="col-md-6">
            <div className="le1">
              <h1>THE HILLIGER MASTER SUITE</h1>
              <p className="sub-ti">
                Up to 2 guests | 74 m² | King/Queen size
              </p>
              <p>
                Named in honor of visionary architect Robert Hilliger, who
                designed the Strand Theatre in 1926. The Hilliger offers a
                tranquil location where architectural elegance meets cinematic
                history.
              </p>

              <a
                href="https://app.mews.com/distributor/0c164712-7c9f-4564-ac84-b2aa00e010b0"
                target="_blank"
                rel="noreferrer"
              >
                BOOK ROOM
              </a>
            </div>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-5">
            <div className="ri1">
              <div className="amenity">Coffee/tea set and minibar</div>
              <div className="amenity">Air cooling</div>
              <div className="amenity">Pillow menu</div>
              <div className="amenity">TV & Chromecast</div>
              <div className="amenity">Bathrobe & slippers</div>
              <div className="amenity">Luxury products</div>
            </div>
          </div>
        </div>
      </div><br/>

      <div className="room-carousel">
        <div
          id="roomCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4500"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={room1} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={room2} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={room3} className="d-block w-100" alt="" />
            </div>
          </div>

          <button
            className="carousel-control-prev custom-arrow"
            type="button"
            data-bs-target="#roomCarousel"
            data-bs-slide="prev"
          >
            ‹
          </button>

          <button
            className="carousel-control-next custom-arrow"
            type="button"
            data-bs-target="#roomCarousel"
            data-bs-slide="next"
          >
            ›
          </button>

 
          <div className="carousel-indicators custom-dots">
            <button data-bs-slide-to="0" className="active"></button>
            <button data-bs-slide-to="1"></button>
            <button data-bs-slide-to="2"></button>
          </div>
        </div>
      </div>

      <section className="details-row">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={room4} alt="" className="details-main-img" />
            </div>

            <div className="col-md-1"></div>

            <div className="col-md-5">
              <img src={room5} alt="" className="details-small-img" />
              <p className="details-subtitle">TIMELESS ATMOSPHERE</p>
              <h1>IT'S IN THE DETAILS</h1>
              <p className="details-text">
                In every detail we strive for the highest quality. Our rooms
                create a timeless atmosphere embracing heritage and elegance.
              </p>

              <a
                href="https://app.mews.com/distributor/0c164712-7c9f-4564-ac84-b2aa00e010b0"
                target="_blank"
                rel="noreferrer"
                className="lin"
              >
                BOOK ROOM
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="rooms-viewroom-section">
        <div className="container">
          <div className="row title-row align-items-center">
            <div className="col-md-6">
              <p className="explore-title">EXPLORE</p>
              <h1 className="main-title">ROOMS & SUITES</h1>
            </div>

            <div className="col-md-6 d-flex justify-content-end">
              <div className="title-progress-track">
                <div
                  className="title-progress-indicator"
                  style={{ left: `${indicatorPos}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="rooms-slider" ref={sliderRef}>
            {rooms.map((img, i) => (
              <div className="room-card" key={i}>
                <img src={img} className="room-img" alt="" />
                <h2 className="room-name">EXECUTIVE SUITE</h2>
                <div className="room-info">
                  <span>52 m²</span>
                  <span>King/Queen</span>
                  <span>Rain shower</span>
                </div>
                <Link to="/" className="view-room-btn">
                  SHOW ROOM
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Viewroom;
