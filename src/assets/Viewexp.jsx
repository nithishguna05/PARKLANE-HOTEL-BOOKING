import homeVideo from "../videos/winebar.mp4";
import logo from "../images/logo.svg";
import Footer from "./Footer.jsx";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./Viewexp.css";

function Viewexp() {
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
        <div className="tita">

            <h1>Glow Ritual</h1>
        </div>

       
       
      </div><br/>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="first">
            <p >650.00 kr.</p>
            <h2 className="viewexp-title">BEAUTY AND VITALITY DIRECTLY IN THE ROOM</h2>
            <p className="viewexp-text">
              This treatment is designed to promote both skin glow and body vitality. The combination of red light therapy for the face and leg compression increases lymph flow, reduces swelling and supports a healthy glow. The result is a fresher, more radiant look – perfect before dinner, events or as a mindful reset.
            </p>
            <ul> Includes:
                <li>
                    Red light face mask and leg compression (available for up to 2 hours)
                </li>
                <li>
                    Signature cold-pressed juice
                </li>
                <li>
                    Ginger shot
                </li>
                <li>
                    Selection of seasonal fruits
                </li>
            </ul>
            <a href="https://app.mews.com/distributor/4a148810-52bd-4d8f-8946-b3360103ff25">book now</a>
          </div>
            </div>
          <div className="col-md-6">
          </div>
        </div>
      </div><br/>

    
      <Footer />
    </>
  );
}

export default Viewexp;
