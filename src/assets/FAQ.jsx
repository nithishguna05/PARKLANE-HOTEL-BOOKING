import contact from "../images/contact.jpg";
import logo from "../images/logo.svg";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import "./FAQ.css";
import Faqmenu from "./Faqmenu.jsx";

function Faq() {
  return (
    <>
      <div className="header">
        <Navbar />

        <img src={contact} alt="" className="header-video"/>

    
        <div className="header-overlay"></div>

        
        <div className="header-logo">
          <img src={logo} alt="Park Lane" />
        </div>
        <div className="tiiii">

            <h1>FAQ</h1>
        </div>

       
       
      </div>

    
     <Faqmenu/><br/>
      <Footer />
    </>
  );
}

export default Faq;
