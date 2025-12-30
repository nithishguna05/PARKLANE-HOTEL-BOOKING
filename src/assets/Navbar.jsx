import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/menu-logo.svg";
import homes from "../images/homes.webp";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
   
      <nav className={`navbar-custom ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">

       
          <div
            className={`menu-lines ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </div>

       
          <img
            src={logo}
            alt="logo"
            className={`nav-logo ${scrolled ? "show" : "hide"}`}
          />

          <div className="nav-actions d-none d-md-flex">
            <a
              href="https://book.easytable.com/book/?id=62e67&lang=auto"
              target="_blank"
              rel="noreferrer"
              className="nav-btn"
            >
              BOOK A TABLE
            </a>

            <a
              href="https://www.parklanecph.com/book/"
              target="_blank"
              rel="noreferrer"
              className="nav-btn"
            >
              BOOK A ROOM
            </a>
          </div>
        </div>
      </nav>


      {menuOpen && (
        <div className="menu-overlay">
          <div className="container h-100">

            
            <div className="row align-items-center menu-top">
       
              <div className="col-4">
                <span className="menu-close" onClick={() => setMenuOpen(false)}>
                  ✕
                </span>
              </div>

            
              <div className="col-4 text-center">
                <img src={logo} className="menu-logo" alt="logo" />
              </div>

           
              <div className="col-4 d-none d-md-flex justify-content-end gap-3">
                <a
                  href="https://book.easytable.com/book/?id=62e67&lang=auto"
                  target="_blank"
                  rel="noreferrer"
                  className="menu-top-btn"
                >
                  BOOK A TABLE
                </a>

                <a
                  href="https://app.mews.com/distributor/bf254c30-ac51-429b-af97-b1490091e25a"
                  target="_blank"
                  rel="noreferrer"
                  className="menu-top-btn"
                >
                  BOOK A ROOM
                </a>
              </div>
            </div>

        
            <div className="row menu-content">
              <div className="col-md-6 text-center text-md-start">
                <ul className="menu-list">

                  <li onClick={() => goTo("/roomsandsuites")}>ROOMS & SUITES</li>
                  <hr />

                  <li onClick={() => goTo("/apartments")}>APARTMENTS</li>
                  <hr />

                  <li onClick={() => goTo("/special-experiences")}>
                    SPECIAL EXPERIENCES
                  </li>
                  <hr />

                  <li className="restaurant-item">
                    RESTAURANT
                    <ul className="restaurant-dropdown">
                      <li  className="re"onClick={() => goTo("/Restaurant2900")}>
                    Restaurant 2900
                  </li>
                      {/* <a href="https://www.parsleysalon.dk/" target="_blank"></a> */}
                      <hr />
                      <a href="https://roserosebistro.dk/en/hellerup/" target="_blank">Rose Rose Bistro</a>
                      <hr />
                      <a href="https://www.parsleysalon.dk/" target="_blank">Parsley Salon</a>
                    </ul>
                  </li>
                  <hr />

                  <li onClick={() => goTo("/events")}>EVENTS</li>
                  <hr />

                  <li onClick={() => goTo("/winebar")}>WINE BAR</li>
                  <hr />

                  <li onClick={() => goTo("/Meetingsconferences")}>
                    MEETINGS & CONFERENCES
                  </li>
                  <hr />
                </ul>

                
                <div className="menu-booking d-md-none">
                  <a href="https://www.parsleysalon.dk/" target="_blank">BOOK A TABLE</a>
                  <a href="https://www.parklanecph.com/book/" target="_blank">BOOK A ROOM</a>
                </div>

                <div className="menu-footer">
                  <a onClick={() => goTo("/contact")}>CONTACT |</a>
                  <a onClick={() => goTo("/faq")}>FAQ |</a>
                  <a onClick={() => goTo("/gift")}>GIFT CARD |</a>
                  <a onClick={() => goTo("/gallery")}>GALLERY</a>
                </div>
              </div>

              <div className="col-md-6 d-none d-md-block">
                <img src={homes} className="menu-image" alt="menu" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
