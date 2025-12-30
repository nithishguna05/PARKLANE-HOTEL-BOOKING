import "./Room.css";
import room1 from "../images/1.webp";
import room2 from "../images/2.webp";
import room3 from "../images/3.webp";
import room4 from "../images/4.webp";
import room5 from "../images/5.webp";
import room6 from "../images/6.webp";
import wifi from "../icons/wifi.svg";
import tv from "../icons/tv.svg";
import meeting from "../icons/meeting.svg";
import parking from "../icons/parking.svg";
import dryer from "../icons/dryer.svg";
import robe from "../icons/robe.svg";
function Room() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={room1} alt=""  />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        <span>74 m²</span>
                        <span>King/Queen size</span>
                        <span>Rain shower</span><br />
                        <a href="">SHOW ROOM</a>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={room2} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        <span>74 m²</span>
                        <span>King/Queen size</span>
                        <span>Rain shower</span><br />
                        <a href="">SHOW ROOM</a>
                    </div>


                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={room3} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        <span>74 m²</span>
                        <span>King/Queen size</span>
                        <span>Rain shower</span><br />
                        <a href="">SHOW ROOM</a>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={room4} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        <span>74 m²</span>
                        <span>King/Queen size</span>
                        <span>Rain shower</span><br />
                        <a href="">SHOW ROOM</a>
                    </div>


                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={room5} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        <span>74 m²</span>
                        <span>King/Queen size</span>
                        <span>Rain shower</span><br />
                        <a href="">SHOW ROOM</a>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={room6} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        <span>74 m²</span>
                        <span>King/Queen size</span>
                        <span>Rain shower</span><br />
                        <a href="">SHOW ROOM</a>
                    </div>


                </div>
            </div>

            <div className="row">
                <div className="sub1">
                    <div className="col-md-6">
                        <div className="sub">
                            <h2>Each room has been carefully <br />
                                designed to ensure you have a <br />
                                unique and comfortable <br />
                                experience during your stay.</h2>
                            <img src={room4} alt="" />
                        </div>

                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="fac-need">
                        <h2 className="fac-need-title">
                            EVERYTHING YOU
                        </h2>
                        <h3 className="fac-need-subtitle" >
                            NEED
                        </h3>

                        <div className="fac-features">
                            {[
                                { icon: wifi, text: "WiFi" },
                                { icon: tv, text: "TV & Chromecast" },
                                { icon: meeting, text: "Meeting Rooms" },
                                { icon: parking, text: "Free Parking" },
                                { icon: dryer, text: "Blow Dryer & Steamer" },
                                { icon: robe, text: "Bathrobe & Slippers" },
                            ].map((item, i) => (
                                <div className="feature-box" key={i}>
                                    <img src={item.icon} className="feature-icon" alt="icon" />
                                    <p className="feature-text">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}
export default Room;