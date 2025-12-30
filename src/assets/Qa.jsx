import { useState } from "react";
import "./Qa.css";
import topVideo from "../videos/rest.mp4"; 

const faqData = [
  {
    question:
      "WHERE IS PARK LANE LOCATED IN RELATION TO INNER COPENHAGEN AND OTHER ATTRACTIONS?",
    answer:
      "Park Lane is located just north of Copenhagen and gives easy access to attractions, restaurants and shopping areas.",
  },
  {
    question: "WHAT RESTAURANTS ARE ON PARK LANE?",
    answer:
      "We have a fine dining restaurant offering Nordic craftsmanship with international flavors.",
  },
  {
    question:
      "CAN YOU HOLD PRIVATE AND CORPORATE EVENTS AT PARK LANE?",
    answer:
      "Yes, our beautiful wine bar and meeting rooms are perfect for events and gatherings.",
  },
  {
    question:
      "WHAT TYPE OF GUEST EXPERIENCE CAN ONE EXPECT AT PARK LANE?",
    answer:
      "A very special stay where every detail has been carefully thought out to provide an extraordinary experience.",
  },
];

function Qa() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">

      <video autoPlay muted loop playsInline className="faq-video">
        <source src={topVideo} type="video/mp4" />
      </video>

      <div className="faq-content container">

        {faqData.map((item, index) => (
          <div key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>

            

            {openIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
            <hr />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Qa;
