import contact from "../images/contact.jpg";
import logo from "../images/logo.svg";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import "./Gift.css";

import GiftCard from "./Giftcard.jsx";

function Gift() {
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

            <h1>GIFT CART</h1>
        </div>

       
       
      </div>

    
     <GiftCard/>
      <Footer />
    </>
  );
}

export default Gift;
