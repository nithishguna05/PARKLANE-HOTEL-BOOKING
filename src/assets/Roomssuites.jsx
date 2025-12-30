import homeVideo from "../videos/rooms.mp4";
import logo from "../images/logo.svg";
import Room from "./Room.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import "./Roomssuites.css";


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
        <div className="titt">

            <h1>Rooms & Suites</h1>
        </div>

       
       
      </div>

    
      <Room />
      <Footer />
    </>
  );
}

export default Header;
