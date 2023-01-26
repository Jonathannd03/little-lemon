import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div>
      <button className="my-button" onClick={props.onClick} type={props.type}>
        <div className="text">{props.text}</div>
      </button>
    </div>
  );
};

export default Button;
