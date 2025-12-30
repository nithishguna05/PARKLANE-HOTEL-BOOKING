import "./Footer.css";
import { Link } from "react-router-dom";
import mainLogo from "../images/logo.svg";
import luxuryHotelImg from "../images/small-luxury.png";
import michelinImg from "../images/michelin2025.png";

function Footer() {
  return (
    <footer className="footer">

 
      <div className="footer-top container">
        <span className="line"></span>
        <img src={mainLogo} alt="Park Lane Logo" className="footer-logo" />
        <span className="line"></span>
      </div>

 
      <div className="container footer-content">
        <div className="row gy-5">

          <div className="col-lg-7 col-md-12">
            <h2 className="footer-title">BOOK ROOM</h2>

            <div className="footer-badge">
              <img src={luxuryHotelImg} alt="Luxury Hotels" />
              <div>
                <h4>A PART OF</h4>
                <span>
                  SMALL LUXURY HOTELS <br />
                  OF THE WORLD
                </span>
              </div>
            </div>

            <div className="footer-badge">
              <img src={michelinImg} alt="Michelin 2025" />
              <div>
                <h4>MICHELIN 2025</h4>
                <span>A VERY SPECIAL STAY</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="section-title">PARK LANE CPH</h4>
            <p className="pa">+45 7788 2900</p>
            <p className="pa">info@parklanecph.com</p>
            <p className="pa">
              Strandvejen 203, <br />
              2900 Hellerup
            </p>
          </div>

          <div className="col-lg-2 col-md-6 lee">
            <h4 className="section-title">INFO</h4>
            <Link to="/abouthotel" >
                About the hotel
              </Link>
              <Link to="/contact" >
                Contact
              </Link>
              <Link to="/roomsandsuites" >
                Rooms
              </Link>
              <Link to="/gift" >
              Gift
              </Link>

            
          </div>
        </div>
      </div>

      <div className="container newsletter">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6">
            <h4 className="newsletter-title">SIGN UP FOR OUR NEWSLETTER</h4>
            <p className="newsletter-text">
              Get notified about our exceptional facilities and unforgettable moments.
            </p>
          </div>

          <div className="col-lg-6">
            <form className="newsletter-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <button type="submit">SEND</button>

              <label className="privacy-check">
                <input type="checkbox" />
                <span>I accept the privacy policy</span>
              </label>
            </form>
          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>©2025 – All rights reserved by Park Lane Copenhagen</p>

          <div className="footer-links">
            <a href="#">Cookies</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
