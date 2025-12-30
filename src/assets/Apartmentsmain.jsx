import "./Apartmentsmain.css";
import Apart from "./Apart.jsx";
import homeVideo from "../videos/rest.mp4";
import logo from "../images/logo.svg";
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
        <div className="tii">

            <h1>Apartments</h1>
        </div>

       
       
      </div>

    
      <Apart />
      <Footer />
    </>
  );
}

export default Header;
