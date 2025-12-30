import "bootstrap/dist/css/bootstrap.min.css";
import "./Giftcard.css";

import giftImg from "../images/gift.webp";

function GiftCard() {
  return (
    <section className="giftcard-section">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <p className="sh">Share the experience of true comfort</p>

          
            <img
              src={giftImg}
              alt="Gift Card"
              className="giftcard-img"
            />

         
            <div className="giftcard-content">
              <p>
                Share an experience with your loved ones in quiet and luxurious surroundings. Whether it's a romantic weekend, a getaway from the everyday or a celebration of life's special moments, our gift vouchers provide the perfect opportunity to share the beauty and tranquility of the hotel with your loved ones. Come and experience the comfort, charm and warmth that make our hotel a place of true relaxation.


              </p>

              <a href="https://order.lifepeaks.dk/park-lane-copenhagen" className="giftcard-btn">
                ORDER
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default GiftCard;
