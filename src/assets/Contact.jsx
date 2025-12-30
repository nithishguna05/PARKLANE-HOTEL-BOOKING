import contact from "../images/contact.jpg";
import logo from "../images/logo.svg";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import "./Contact.css";
import Cont from "./cont.jsx";

function Contact() {
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

            <h1>CONTACT</h1>
        </div>

       
       
      </div>

    
     <Cont/>
      <Footer />
    </>
  );
}

export default Contact;
