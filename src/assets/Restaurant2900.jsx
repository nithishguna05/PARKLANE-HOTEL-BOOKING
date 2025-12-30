import contact from "../images/contact.jpg";
import logo from "../images/logo.svg";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import lunch from "../images/lunch.pdf";
import dinner from "../images/dinner.pdf";
import r1 from "../images/r1.webp";
import r2 from "../images/r2.webp";
import r3 from "../images/r4.webp";
import r4 from "../images/restaurant.webp";
import r5 from "../videos/events.mp4";

import { Link } from "react-router-dom";
import "./Restaurant2900.css";

function Restaurant2900() {
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
          <h1>RESTAURANT 2900</h1>
        </div>
      </div>

      <br />

      <div className="container">

      
        <div className="row">
          <div className="col-md-6">
            <div className="l1">
              <p className="tit1">Restaurant 2900</p>
              <h1>Global cuisine with Nordic roots</h1>
              <p>
                We invite you on a culinary journey where international flavors meet Nordic craftsmanship. Under the leadership of Tom Fransson, we work with seasonal Danish ingredients and carefully selected specialty ingredients from abroad. Our sharing dishes are full of flavor and precision, where balance, texture and detail create a memorable experience.
              </p>
              <a href={lunch}>see lunch menu</a>
              <a href={dinner}>see dinner menu</a>
              <br />
              <img src={r1} alt="" />
            </div>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-5">
            <div className="r1">
              <img src={r2} alt="" />
            </div>
          </div>
        </div>

   
        <div className="row">
          <div className="col-md-6">
            <div className="l2">
              <p className="tit1">Events</p>
              <h1>A cultural gathering point</h1>
              <p>
                Events are the heart of our community. We want to be the place where people gather around food and culture in all its forms. Throughout the year you will find Friday Lounge with live music performance.
              </p>
              <a
                href="https://book.easytable.com/book/?id=62e67&lang=auto"
                className="ev-btn"
              >
                book table
              </a>
              <Link to="/Meetingsconferences" className="ev-btn">
                see events
              </Link>
            </div>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-5">
            <div className="r2">
              <img src={r3} alt="" />
            </div>
          </div>
        </div>

    
        <div className="row">
          <div className="col-md-6">
            <div className="l3">
              <img src={r4} alt="" />
            </div>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-5">
            <div className="r3">
              <h1>A place where taste and style meet</h1>
              <p>
                Experience how historic charm meets modern elegance. The restaurant combines classic architectural elements with international details and warm materials.
              </p>
              <p>
                Light and textures create an atmosphere of calm and presence, while sharing dishes at communal tables promote conversation and community.
              </p>
              <video autoPlay muted loop playsInline>
                <source src={r5} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="l3">
              <img src={r1} alt="" />
            </div>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-5">
            <div className="r3">
              <h1>BRUNCH ON PARK LANE</h1>
              <p>
               Treat yourself to a brunch where classic favorites meet elegant details. From crispy croissants and eggs to sweet temptations, everything is served with a focus on the best seasonal ingredients and a touch of luxury for those who desire it.
              </p>

              <a href={lunch} className="ev-btn">
                SEE BREAKFAST MENU
              </a>
              <br />

              <a href={dinner} className="ev-btn">
                SEE BRUNCH MENU
              </a>

              <img src={r2} alt="" className="brunch-circle-img" />
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-6">
            <div className="l3">
              <p className="tit1">OPENING HOURS</p>

              <h1>
                WE WELCOME YOU <br /> FROM MORNING TO NIGHT
              </h1>

              <p>
                Breakfast, lunch and dinner served daily.
              </p>

              <p>
                <strong>Breakfast</strong><br />
                Mon–Fri: 07:00–10:00<br />
                Sat: 08:00–11:00<br />
                Sun: 08:00–14:00
              </p>

              <p>
                <strong>Lunch</strong><br />
                All days: 12:00–15:00
              </p>

              <p>
                <strong>Evening</strong><br />
                Mon–Thu & Sun: 5:30–9:00<br />
                Fri & Sat: 5:30–10:00
              </p>
            </div>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-5">
            <div className="r3">
              <img src={r4} alt="" className="hours-img" />
            </div>
          </div>
        </div>

      </div>

      <br />
      <Footer />
    </>
  );
}

export default Restaurant2900;
