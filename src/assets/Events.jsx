import homeVideo from "../videos/events.mp4";
import logo from "../images/logo.svg";
import "./Events.css";
import Eventmenu from "./Eventmenu.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";



function Header() {
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
        <div className="t">

            <h1>EVENTS</h1>
        </div>

       
       
      </div>

    
      <Eventmenu />
      <Footer />
    </>
  );
}

export default Header;
