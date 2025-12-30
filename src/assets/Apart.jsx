import "./apart.css";
import aptr1 from "../images/apt1.webp";
import aptr2 from "../images/apt2.webp";
import wifi from "../icons/wifi.svg";
import tv from "../icons/tv.svg";
import meeting from "../icons/meeting.svg";
import parking from "../icons/parking.svg";
import dryer from "../icons/dryer.svg";
import robe from "../icons/robe.svg";
function Apart() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={aptr1} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        <span>74 m²</span><br/>
                        <a href="">SHOW APARTMENT</a>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={aptr2} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        <span>74 m²</span><br/>
                        <a href="">SHOW APARTMENT</a>
                    </div>


                </div>
            </div>

            <div className="row">
                <div className="sub1">
                    <div className="col-md-6">
                        <div className="sub">
                            <h2>We offer<br/>
                                long-term stays in fully<br/>
                                serviced apartments with peace,<br/>
                                comfort and space to live<br/>
                                beautifully.</h2>
                            <img src={aptr2} alt="" />
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
export default Apart;