import { useRef, useEffect, useState } from "react";
import "./Experiences.css";
import { Link } from "react-router-dom";
import exp1 from "../images/exp1.webp";
import exp2 from "../images/exp2.webp";
import exp3 from "../images/exp3.webp";
import exp4 from "../images/exp4.jpg";
import exp5 from "../images/exp5.webp";
import exp6 from "../images/exp6.webp";
import exp7 from "../images/exp7.webp";
import exp8 from "../images/exp8.webp";
import exp9 from "../images/exp9.webp";
import exp10 from "../images/exp10.webp";

function Experiences() {
  const sliderRef = useRef(null);
  const [indicatorPos, setIndicatorPos] = useState(0);

  const experiences = [
    { img: exp1, title: "NEW YEAR'S EVE AT PARK LANE" },
    { img: exp2, title: "CHRISTMAS STAY AT PARK LANE" },
    { img: exp3, title: "THE PARK LANE WINTER ESCAPE" },
    { img: exp4, title: "THE GLOW RITUAL" },
    { img: exp5, title: "THE DEEP CLEANSE" },
    { img: exp6, title: "IV TREATMENTS AS NEEDED" },
    { img: exp7, title: "THE RECOVERY RECHARGE" },
    { img: exp8, title: "THE JET LAG RESET" },
    { img: exp9, title: "A TASTE OF PARK LANE" },
    { img: exp10, title: "A SPECIAL BRUNCH EXPERIENCE" },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const handleScroll = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const percent =
        maxScroll === 0 ? 0 : (slider.scrollLeft / maxScroll) * 100;
      setIndicatorPos(percent);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="exp-section">
      <div className="container">
        
        <div className="exp-title-row row align-items-center">
          <div className="col-12 col-md-6">
            <p className="exp-explore" data-aos="fade-right">EXPLORE</p>
            <h1 className="exp-main-title" data-aos="zoom-in">EXPERIENCES</h1>
          </div>

          <div className="col-12 col-md-6">
            <div className="exp-progress-track ms-md-auto">
              <div
                className="exp-progress-indicator"
                style={{ left: `${indicatorPos}%` }}
              ></div>
            </div>
          </div>
        </div>

      
        <div className="exp-slider" ref={sliderRef}>
          {experiences.map((item, index) => (
            <div className="exp-card" key={index}>
              <img src={item.img} alt={item.title} className="exp-img h-75" />
              <h2 className="exp-card-title">{item.title}</h2>
              <div className="exp-line"></div>
              {/* <button className=""></button> */}
              <Link to="/viewexp" className="exp-view-btn">
                VIEW EXPERIENCE
              </Link>
            </div>
          ))}
        </div>

        
        <div className="exp-bottom-line"></div>
      </div>
    </section>
  );
}

export default Experiences;
