import React from "react";
import "./RegularCard.scss";

const RegularCard = (props) => {
  return (
    <div className="container">
      <div className="container-item1">
        <img src={props.picture} alt="card-pic" />
      </div>
      <div className="container-item2">
        <div className="container-item2-1">
          <div className="title">
            <h4>{props.title}</h4>
          </div>
          <div className="price">
            <p>{props.price}</p>
          </div>
        </div>
        <div className="container-item2-2">
          <p>{props.content}</p>
        </div>
        <div className="container-item2-3">
          <h5>Delivery</h5>
          <a>
            <img src={props.icon} alt="" card-icon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegularCard;
