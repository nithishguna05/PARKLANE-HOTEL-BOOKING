import homeVideo from "../videos/mc.mp4";
import logo from "../images/logo.svg";
import "./Meetingsconferences.css";
import Meetings from "./mc.jsx";
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
        <div className="ti">

            <h1>Meetings and Conferences</h1>
        </div>

       
       
      </div>

    
     <Meetings/><br/>
      <Footer />
    </>
  );
}

export default Header;
