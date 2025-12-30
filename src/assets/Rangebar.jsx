import "./Rangebar.css";

function RatingBar() {
  return (
    <div className="container-fluid">
      <div className="row">
    <div className="rating-wrapper">
      
      <div className="rating-item main-rating">
        <span className="rating-number">4.7
          <span className="rating-small">/5</span>
        </span>
        <span className="rating-label">Fremragende ⓘ</span>
        <span className="rating-sub">baseret på 219 anmeldelser</span>
      </div>

      <div className="rating-divider"></div>

      <div className="rating-item">
        <span className="rating-source">TripAdvisor</span>
        <span className="rating-number">4.8
          <span className="rating-small">/5</span>
        </span>
      </div>

      <div className="rating-item">
        <span className="rating-source">Booking.com</span>
        <span className="rating-number">9.1
          <span className="rating-small">/10</span>
        </span>
      </div>

      <div className="rating-item">
        <span className="rating-source">Hotels.com</span>
        <span className="rating-number">9.8
          <span className="rating-small">/10</span>
        </span>
      </div>

      <div className="rating-item">
        <span className="rating-source">Expedia</span>
        <span className="rating-number">9.6
          <span className="rating-small">/10</span>
        </span>
      </div>

    </div>
    </div>
    </div>
  );
}

export default RatingBar;
