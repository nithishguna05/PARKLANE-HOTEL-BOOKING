import homeVideo from "../videos/about.mp4";
import logo from "../images/logo.svg";
import "./Aboutthehotel.css";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import AboutHotels from "./Abouthotel.jsx"



function Abouthotel() {
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
        <div className="tie">

            <h1>ABOUT THE HOTEL</h1>
        </div>

       
       
      </div>

    
      <AboutHotels />
      <Footer />
    </>
  );
}

export default Abouthotel;
