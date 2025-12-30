import "./Eventmenu.css";
import event1 from "../images/event1.webp";
import event2 from "../images/event2.jpg";
import event3 from "../images/event3.jpg";
import event4 from "../images/event4.webp";
import event5 from "../images/event5.jpg";
function Eventmenu() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={event1} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        
                        <span>BY REQUEST</span><br />
                        <a href="">SHOW EVENT</a>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={event2} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        <span>BY REQUEST</span><br />
                        <a href="">SHOW EVENT</a>
                    </div>


                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={event3} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                       
                        <span>EVERY SUNDAY</span><br />
                        <a href="">SHOW EVENT</a>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={event4} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        <span>EVERY FRIDAY</span><br />
                        <a href="">SHOW EVENT</a>
                    </div>


                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="rooms">
                        <img src={event5} alt="" />
                        <h1>THE HILLIGER | MASTER SUITE</h1>
                        <hr />
                        
                        <span>EVERY DAY</span><br />
                        <a href="">SHOW EVENT</a>
                    </div>

                </div>
                <div className="col-md-6">


                </div>
            </div>

            
    
            

        </div>

    )
}
export default Eventmenu;