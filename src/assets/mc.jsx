import "./mc.css";
import { Link } from "react-router-dom";


import meetingBig from "../images/mc1.webp";
import meetingVideo from "../videos/mc1.mp4";


import wineImg from "../images/fac1.webp";
import meetImg from "../images/fac2.webp";
import restImg from "../images/fac3.webp";


import hotelImg from "../images/about.webp";


import corpImg from "../images/mc2.webp";

function Meetings() {
  return (
    <section className="meetings-page">


      <div className="container meeting-row-one">
        <div className="row align-items-end">

          <div className="col-lg-6">
            <p className="small-title">MEETING ROOMS</p>

            <h1 className="main-title">
              WHEN MEETINGS BECOME AN<br />
              <span>EXPERIENCE</span>
            </h1>

            <p className="desc">
              Hold your next meeting in the exclusive setting of Park Lane Copenhagen. Here, it's not just about efficiency, but about creating the best conditions for productive meetings and new ideas. Our meeting rooms are designed to inspire, with sophisticated details, natural materials and a harmonious connection to Øregårdspark, allowing nature and design to merge and open up new perspectives.
            </p>

            <img src={meetingBig} alt="Meeting Room" className="bottom-image" />
          </div>

          <div className="col-lg-6">
            <div className="le">
              <video autoPlay muted loop playsInline className="meeting-video">
                <source src={meetingVideo} type="video/mp4" />
              </video>

              <p className="small-title mt-5">SET THE SCENE</p>

              <h2 className="sub-title">BUSINESS MEETINGS</h2>

              <p className="desc">
                To make your time with us more efficient and smooth, we provide a little extra for you when you book our meeting rooms. And when you're done with meetings, so you can continue your day without interruptions.
              </p>

              <Link to="/meetings" className="gold-btn">
                BOOK MEETING ROOMS
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="facilities-section">
        <div className="container text-center">

          <p className="fac-small">FACILITIES</p>

          <h2 className="fac-title">
            PARK LANE<br /> COPENHAGEN’S <br /><span>FACILITIES</span>
          </h2>

          <p className="fac-desc">
            At Park Lane Copenhagen we offer first-class facilities<br />
            that will enhance your stay. Enjoy fantastic gastronomic<br />
            experiences in our hotel restaurant, treat yourself to a<br />
            fine glass of wine in our elegant wine bar or use our<br />
            professional meeting rooms for business events.


          </p>

          <div className="row fac-grid">

            <div className="col-md-4">
              <Link to="/winebar" className="fac-card">
                <div className="fac-img">
                  <img src={wineImg} alt="Wine Bar" />
                </div>
                <h3>WINE BAR</h3>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/meetings" className="fac-card">
                <div className="fac-img">
                  <img src={meetImg} alt="Meetings" />
                </div>
                <h3>MEETINGS</h3>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/restaurant" className="fac-card">
                <div className="fac-img">
                  <img src={restImg} alt="Restaurant" />
                </div>
                <h3>RESTAURANT</h3>
              </Link>
            </div>

          </div>
        </div>
      </div>


      <div className="hotel-row">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 order-2 order-lg-1">
              <p className="pp">CLASSIC & TIMELESS DESIGN</p>
              <h2 className="hotel-title">
                <span>INVITING BOUTIQUE<br /> HOTEL</span><br />
                IN HISTORIC<br /> SURROUNDINGS
              </h2>

              <p className="hotel-text">
                In the heart of Hellerup, north of Copenhagen, lies<br />
                Park Lane Copenhagen – a peaceful and exclusive<br />
                retreat in scenic surroundings. We offer an exclusive<br />
                and refined experience at our Boutique Hotel, where<br />
                attention to detail is paramount.
              </p>

              <p className="hotel-text">
                You can expect to enter a world of timeless elegance<br />
                when you visit Park Lane Copenhagen. The hotel is <br />
                characterized by a consistent style that embraces both<br />
                classic and modern design traditions.
              </p>

              <div className="hotel-links">
                <Link to="/rooms" className="hotel-link">
                  BOOK ROOM <span>→</span>
                </Link>



                <Link to="/about" className="hotel-link">
                  EXPLORE THE HOTEL <span>→</span>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <img src={hotelImg} alt="Hotel" className="hotel-image" />
            </div>

          </div>
        </div>
      </div>

   
      <section className="corporate-section">
        <div className="container-fluid">
          <div className="row g-0">

            <div className="col-lg-6">
              <img
                src={corpImg}
                alt="Corporate agreement"
                className="corporate-img"
              />
            </div>

            <div className="col-lg-6 corporate-content">

              <p className="corp-small">GET IN TOUCH WITH US</p>

              <h2 className="corp-title">
                INTERESTED IN A <br />
                <span>CORPORATE AGREEMENT?</span>
              </h2>

              <p className="corp-desc">
                Over 30 companies already have advantageous<br/> agreements with Park Lane Copenhagen.<br/>
                Get discounts on accommodation, meetings and F&B.
              </p>

              <p className="corp-desc bold">What do you get:</p>

              <ul className="corp-list">
                <li>Advantageous prices on accommodation, meeting rooms and restaurant</li>
                <li>Priority booking</li>
                <li>Flexible payment solutions</li>
              </ul>

              <p className="corp-note">
                NON-BINDING INQUIRY <br />
                WE WILL CONTACT YOU WITHIN 24 HOURS
              </p>

              <form className="corp-form">
                <input type="text" placeholder="Name  *" />
                <input type="text" placeholder="Business *" />
                <input type="email" placeholder="Email*" />
                <input type="text" placeholder="Telephone number*" />

                <p className="corp-desc bold">What are you interested in?</p>

                <label><input type="checkbox" className="ch" /> Overnight stays</label>
                <label><input type="checkbox" /> Meetings & conferences</label>
                <label><input type="checkbox" /> Events & arrangements</label>
                <label><input type="checkbox" /> Restaurant & dinners</label>

                <textarea placeholder="Message"></textarea>

                <button type="submit" className="corp-btn">
                  SEND INQUIRY
                </button>

                <p className="corp-privacy">
                  We will treat your data confidentially to handle your inquiry. Read more in our Privacy Policy .
                </p>
                <p className="ppp">
                  Recently featured by Vogue, Condé Nast Traveler and  <br/>Travel + Leisure.
                </p>
              </form>

            </div>
          </div>
        </div>
      </section>

    </section>
  );
}

export default Meetings;
