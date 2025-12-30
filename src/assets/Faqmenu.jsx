import "bootstrap/dist/css/bootstrap.min.css";
import "./Faqmenu.css";
import { Link } from "react-router-dom";
import img1 from "../images/faq1.webp";
import img2 from "../images/faq2.webp";
import img3 from "../images/faq3.webp";
import img4 from "../images/faq4.webp";

function Faqmenu() {
    return (
        <section className="faq-wrapper">

            <div className="container faq-intro">
                <p className="faq-label">GUEST INFORMATION</p>

                <h2 className="faq-title">
                    INFORMATION <span>ABOUT YOUR <br />STAY</span>

                </h2>

                <p className="faq-desc">
                    At Park Lane Copenhagen, our guests are our top priority.
                    We tailor your stay to your specific needs and preferences.
                    If you have any special requests or requirements, you are
                    always welcome to contact us.
                </p>

                <div className="faq-buttons">
                    <a href="#" className="faq-btn">BOOK A ROOM</a>
                    <a href="#" className="faq-btn">CONTACT US</a>
                </div>
            </div>

       
            <div className="container-fluid faq-row">
                <div className="row align-items-center g-0">
                    <div className="col-lg-6">
                        <img src={img1} className="faq-img" alt="Arrival" />
                    </div>

                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="faq-content">
                            <p className="faq-sub">CHECK-IN AND CHECK-OUT</p>
                            <h3 className="faq-heading">
                                ARRIVAL <span>&DEPARTURE</span>
                            </h3>

                            <p>
                                You are welcome to check in from 3:00 PM, and we ask that you check out no later than 10:00 AM.


                            </p>

                            <p>
                                If you would like to arrive earlier, please contact us and we will do our best to accommodate your needs. We also offer self-service check-in.


                            </p>
                            <p>If you wish to stay longer, you can choose late check-out for an additional fee.

                            </p>


                            <Link to="/contact" className="faq-link">
                                CONTACT US<span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

         
            <div className="container-fluid faq-row">
                <div className="row align-items-center g-0">
                    <div className="col-lg-6">
                        <img src={img2} className="faq-img" alt="Breakfast" />
                    </div>

                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="faq-content">
                            <p className="faq-sub">A GOOD START TO THE DAY</p>
                            <h3 className="faq-heading">
                                ENJOY YOUR BREAKFAST IN OUR <br />
                                <span> RESTAURANT</span>
                            </h3>

                            <p>
                                We believe a good day starts with a good breakfast,
                                prepared with the best ingredients.
                            </p>

                            <Link to="/" className="faq-link">
                                MORE ABOUT THE RESTAURANT<span>→</span>
                            </Link>
                            

                            <Link to="/roomsandsuites" className="faq-link">
                                BOOK ROOM<span>→</span>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="container-fluid faq-row">
                <div className="row align-items-center g-0">
                    <div className="col-lg-6">
                        <img src={img3} className="faq-img" alt="Parking" />
                    </div>

                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="faq-content">
                            <p className="faq-sub">PARKING</p>
                            <h3 className="faq-heading">
                                PARKING <span>AVAILABILITY</span>
                            </h3>

                            <p>
                                There is free parking available throughout the area
                                during your stay at Park Lane Copenhagen.
                            </p>

                            <Link to="/roomsandsuites" className="faq-link">
                                BOOK ROOM<span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="container-fluid faq-row">
                <div className="row align-items-center g-0">
                    <div className="col-lg-6">
                        <img src={img4} className="faq-img" alt="Dog Friendly" />
                    </div>

                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="faq-content">
                            <p className="faq-sub">DOG FRIENDLY</p>
                            <h3 className="faq-heading">
                                DOG-FRIENDLY <br />
                                <span>BOUTIQUE HOTEL</span>
                            </h3>

                            <p>
                                We warmly welcome well-behaved dogs in selected rooms
                                and suites.
                            </p>

                            <Link to="/roomsandsuites" className="faq-link">
                                BOOK ROOM<span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Faqmenu;
