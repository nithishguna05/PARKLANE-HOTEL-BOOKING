import contact from "../images/contact.jpg";
import logo from "../images/logo.svg";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import g1 from "../images/1.webp";
import g2 from "../images/2.webp";
import g3 from "../images/3.webp";

import "./Apartdetails.css";


function Apartdetails() {
    return (
        <>
            <div className="header">
                <Navbar />

                <img src={contact} alt="" className="header-video" />


                <div className="header-overlay"></div>


                <div className="header-logo">
                    <img src={logo} alt="Park Lane" />
                </div>
                <div className="tit">

                    <h1>Park Studio</h1>
                </div>



            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="park">
                            <p className="title">2-ROOM APARTMENT</p>
                            <h2>SPACIOUS 2-BEDROOM<br /> APARTMENT <br /> <span>IN HELLERUP</span></h2>
                            <p>Step into our elegant and modern 2-bedroom hotel apartment, where every detail has been carefully designed with both comfort and style in mind. From the custom-made designer furniture to the thoughtful amenities, everything is designed to give you a unique experience. And of course, there is the breathtaking view of Øregårdsparken, where the beauty of nature unfolds before you.</p>
                            <p>Inspired by the nearby park, the decor combines calm natural tones with soft green hues, creating an atmosphere that is both down-to-earth and refreshingly calm. The result is an inviting open space where you can truly relax and enjoy the beautiful views.</p>
                        </div>

                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="parks">
                            <h4>OWN TERRACE <span>Yes</span></h4>
                            <hr />
                            <h4>ELEVATOR ACCESS <span>Yes</span></h4>
                            <hr />
                            <h4>PARK<span>Yes</span></h4>
                            <hr />
                            <h4>EAR HEALTH OUTLOOK <span>Yes</span></h4>
                            <hr />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={g1} className="d-block w-100 h-25" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={g2} className="d-block w-100 h-25" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={g3} className="d-block w-100 h-25" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="photo">
                            <img src={g1} alt="" />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="photos">
                            <img src={g2} alt="" />
                            <p className="heading">RENTAL</p>
                            <h1>Flexible long-term <br />
                                rental of 2-bedroom <br />
                                apartment
                                <span> near <br />Copenhagen
                                </span>
                            </h1>
                            <p>On the top floor of our Boutique Hotel you will find our 2-bedroom apartment, which has a spectacular view of Øregårdsparken.</p>
                            <p>The apartment is available for long-term rental and is ideal for long-term stays in Denmark or as a temporary residence.

                            </p>
                            <Link to="/contact" className="ap-btn">
                                Contact us
                            </Link>

                        </div>
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="map-section">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps?q=Strandvejen%20203,%202900%20Hellerup&output=embed"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="foot">
                            <p className="f-t">CLASSIC AND TIMELESS</p>
                            <h1>WELCOME BOUTIQUE<br /> HOTEL <span>IN HISTORIC<br /> SURROUNDINGS</span></h1>
                            <p>In the heart of Hellerup, north of Copenhagen, lies<br/>
                             Park Lane Copenhagen – a peaceful and exclusive<br/>
                             retreat in scenic surroundings. We offer an exclusive<br/>
                              and refined experience at our Boutique Hotel, where <br/>
                              attention to detail is paramount.</p>
                            <p>You can expect to enter a world of timeless elegance<br/>
                             when you visit Park Lane Copenhagen. The hotel is<br/>
                              characterized by a consistent style that embraces both<br/> classic and modern design traditions.

                            </p>
                            <Link to="/roomsandsuites" className="a-btn">
                                booknow
                            </Link><br/><br/>
                            
                            <Link to="/abouthotel" className="a-btn">
                               Explore the Hotel
                            </Link>
                            
                        </div>
                    </div>
                </div>


            </div><br />



            <Footer />
        </>
    );
}

export default Apartdetails;
