import React from "react";
import "./Button.scss";

const display = () => {
  console.log("working");
};

const Button = ({ child }) => {
  return (
    <div>
      <button onClick={display}>
        <div className="text">{child}</div>
      </button>
    </div>
  );
};

export default Button;
