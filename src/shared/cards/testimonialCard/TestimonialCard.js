import React from "react";
import "./TestimonialCard.scss";
import { images } from "../../../constants";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-container-item1">
        <h5>Rating:</h5>
        <img src={images} />
        {props.rating}
      </div>
      <div className="testimonial-container-item2">
        <img src={props.picture} alt="card-pic" className="img" />
        <p>{props.name}</p>
      </div>
      <div className="testimonial-container-item3">{props.testimony}</div>
    </div>
  );
};

export default TestimonialCard;
