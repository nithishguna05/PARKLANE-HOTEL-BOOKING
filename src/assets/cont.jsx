import "bootstrap/dist/css/bootstrap.min.css";
import "./Cont.css";
import receptionVideo from "../videos/wine2.mp4"; 

function Cont() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">

              <p className="small-title">LEAVE US A MESSAGE</p>

              <h1 className="main-title">
                CONTACT <br/> <span>PARK LANE COPENHAGEN</span>
              </h1>

              <p className="address">
                Strandvejen 203, <br />
                DK – 2900 Hellerup
              </p>

              <p className="desc">
                Please feel free to contact us with any questions, booking
                requests or for further information. We look forward to
                welcoming you to an unforgettable stay at Park Lane Copenhagen.
              </p>

              <div className="info-block">
                <div className="row mb-4">
                  <div className="col-md-4 label">For reservations</div>
                  <div className="col-md-8">
                    <p>reservations@parklanecph.com</p>
                    <p>Phone +45 7788 2900</p>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-4 label">For general inquiries</div>
                  <div className="col-md-8">
                    <p>info@parklanecph.com</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 label">Press</div>
                  <div className="col-md-8">
                    <p>pr@parklanecph.com</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="location-title-section">
        <p className="location-small">LOCATION</p>
        <h2 className="location-title">
          CENTRAL LOCATION <br />
          <span>IN HELLERUP</span>
        </h2>
      </section>


      <section className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Strandvejen%20203,%202900%20Hellerup&output=embed"
          loading="lazy"
        ></iframe>
      </section>


      <section className="video-section">
        <video autoPlay muted loop playsInline>
          <source src={receptionVideo} type="video/mp4" />
        </video>
      </section>
    </>
  );
}

export default Cont;
