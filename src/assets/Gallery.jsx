import contact from "../images/contact.jpg";
import logo from "../images/logo.svg";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import "./Gallery.css";
import Gallerymenu from "./Gallerymenu.jsx";

function Gallery() {
  return (
    <>
      <div className="header">
        <Navbar />

        <img src={contact} alt="" className="header-video"/>

    
        <div className="header-overlay"></div>

        
        <div className="header-logo">
          <img src={logo} alt="Park Lane" />
        </div>
        <div className="tit">

            <h1>GALLERY</h1>
        </div>

       
       
      </div>

    
     <Gallerymenu/>
      <Footer />
    </>
  );
}

export default Gallery;
