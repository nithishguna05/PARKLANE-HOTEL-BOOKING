import "./Abouthotel.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/1.webp";
import img2 from "../images/2.webp";
import img3 from "../images/3.webp";
import img4 from "../images/4.webp";
import img5 from "../images/5.webp";
import img6 from "../images/6.webp";
import img7 from "../images/6.webp";

function AboutHotels() {
  const dotRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!dotRef.current || !timelineRef.current) return;

      const sectionTop = timelineRef.current.offsetTop;
      const sectionHeight = timelineRef.current.offsetHeight;
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let progress = (scrollPos - sectionTop) / sectionHeight;
      progress = Math.max(0, Math.min(progress, 1));

      dotRef.current.style.top = `${progress * 100}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <section className="sec-one">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <img src={img1} className="img-big" alt="" />
            </div>

            <div className="col-lg-5">
              <img src={img2} className="img-small" alt="" />
              <div className="text-block">
                <p className="subtitle">OUR MISSION</p>
                <h2>
                  WE PLACE OUR <br />
                  GUESTS AT THE 
                  HEART OF 
                  EVERYTHING WE DO
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-center">
        <div className="container text-center">
          <p className="subtitle gold">THE STORY THAT DESERVES TO BE TOLD</p>
          <h2>AN ICON IS REBORN</h2>
          <p className="center-text">
            In the heart of Hellerup lies Park Lane Copenhagen, a boutique hotel where the aesthetics of the past meet the edge of the present. The building has always been a hub for culture and creativity, first as the iconic Strand Teatret, later as an exclusive club for the city's visionaries.
          </p>
          <p className="center-text">Now a new chapter is being written. With respect for history and an eye on the future, Park Lane Copenhagen has been reborn as a hotel where the soul of the past lives on in beautiful, atmospheric surroundings.</p>
        </div>
      </section>

      <section className="timeline-section" ref={timelineRef}>
        <div className="timeline-line">
          <span className="timeline-dot" ref={dotRef}></span>
        </div>

        <div className="container timeline-row">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={img3} className="img-normal" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="rr1">
                <h3>THE HISTORY OF STRAND THEATRE</h3>
              <p>
                At the beginning of the 20th century, the Strand Teatret was built at this very address. At that time, a ticket for a movie experience could be purchased for just 0.55 DKK, and the cinema quickly became a cornerstone of the city's cultural life.
              </p>
              <p>
                The curtain fell for the last time and Strand Teatret closed in the 1970s, but the legacy is not forgotten. Today, we continue the story by creating experiences that combine the atmosphere of a bygone era with the luxury and comfort that today's guests expect.
              </p>
              </div>
              
            </div>
          </div>
        </div>

      
        <div className="container timeline-row">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <img src={img4} className="img-normal-left" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="ll1">
              <h3>PRESERVING A UNIQUE HERITAGE</h3>
              <p>
                This historic property has not only served as a cinema, but also as a local hotel. In the transformation into Park Lane Copenhagen, we have carefully preserved the architectural details that make the place unique.
              </p>
              <p>The former ballroom has been transformed into elegant suites, where original stucco ceilings, impressive chandeliers and classic wood paneling still bear witness to the grandeur of the past.</p>
            </div>
            </div>
          </div>
        </div>

      
        <div className="container timeline-row">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={img5} className="img-normal" alt="" />
            </div>
            <div className="col-lg-6">
               <div className="rr1">
              <h3>A NEW ERA FOR THE BOUTIQUE HOTEL</h3>
              <p>
                The former cinema and hotel has undergone a transformation and reemerged as an exclusive boutique hotel for those who value Nordic design, personal experiences and a memorable stay.
              </p>
              <p>
                Whether you are looking for an exclusive setting for business meetings, a breather from everyday life, or a stylish hotel apartment for a longer stay, Park Lane Copenhagen offers an experience that goes beyond the ordinary.
              </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="container timeline-row">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <img src={img6} className="img-normal-left" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="ll1">
              <h3>PART OF SMALL LUXURY HOTELS</h3>
              <p>
               We are proud to be part of Small Luxury Hotels of the World: a recognized association of unique luxury hotels worldwide.
              </p>
              <p>
                With us, luxury is not flashy, it is something you sense in every detail.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>


      <section className="sec-final">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={img7} className="img-normal" alt="" />
            </div>
            <div className="col-lg-6">
              <p className="subtitle gold">CLASSIC & TIMELESS DESIGN</p>
              <h2>
                WELCOME BOUTIQUE HOTEL <br />
                IN HISTORIC SURROUNDINGS
              </h2>
              <p>
                In the heart of Hellerup, north of Copenhagen, lies Park Lane Copenhagen – a peaceful and exclusive retreat in scenic surroundings. We offer an exclusive and refined experience at our Boutique Hotel, where attention to detail is paramount.
              </p>
              <p>You can expect to enter a world of timeless elegance when you visit Park Lane Copenhagen. The hotel is characterized by a consistent style that embraces both classic and modern design traditions.</p>

              <div className="link-group">
                <Link to="/roomsandsuites" >
                BOOK ROOM <span>→</span>
              </Link>
              <Link to="/abouthotel" >
                EXPLORE THE HOTEL <span>→</span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHotels;
