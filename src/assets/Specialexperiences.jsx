import homeVideo from "../videos/exp.mp4";
import logo from "../images/logo.svg";
import "./Specialexperiences.css";
import Exp from "./Exp.jsx";
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
        <div className="tia">

            <h1>EXPERIENCES</h1>
        </div>

       
       
      </div>

    
      <Exp />
      <Footer />
    </>
  );
}

export default Header;
