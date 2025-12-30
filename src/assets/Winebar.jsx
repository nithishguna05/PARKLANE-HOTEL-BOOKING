import homeVideo from "../videos/winebar.mp4";
import logo from "../images/logo.svg";
import Footer from "./Footer.jsx";
import Wine from "./Wine.jsx";
import Navbar from "./Navbar.jsx";
import "./Winebar.css";

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
        <div className="tit">

            <h1>WINE BAR</h1>
        </div>

       
       
      </div>

    
      <Wine />
      <Footer />
    </>
  );
}

export default Header;
