import React from "react";
import "./RegularCard.scss";

const RegularCard = ({ child }) => {
  return (
    <div className="container">
      <div className="container-item1">
        <img src={child.picture} alt="card-pic" />
      </div>
      <div className="container-item2">
        <div className="container-item2-1">
          <div className="title">
            <h4>{child.title}</h4>
          </div>
          <div className="price">
            <p>{child.price}</p>
          </div>
        </div>
        <div className="container-item2-2">
          <p>{child.content}</p>
        </div>
        <div className="container-item2-3">
          <h5>Delivery</h5>
          <img src={child.icon} alt="" card-icon />
        </div>
      </div>
    </div>
  );
};

export default RegularCard;
