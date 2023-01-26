import React from "react";
import "./LabelText.scss";

const LabelText = (props) => {
  return (
    <>
      <label className="label-text" htmlFor={props.for}>
        {props.text}
      </label>
    </>
  );
};

export default LabelText;
