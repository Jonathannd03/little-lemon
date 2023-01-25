import React from "react";
import "./TestimonialCard.scss";

const TestimonialCard = ({ child }) => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-container-item1">
        <h4>{child.title}</h4>
      </div>
      <div className="testimonial-container-item2">
        <img src={child.picture} alt="card-pic" className="img" />
        <p>{child.testimony}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
