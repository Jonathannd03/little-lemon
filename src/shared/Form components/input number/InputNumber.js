import React from "react";
import "./InputNumber.scss";

const InputNumber = (props) => {
  return (
    <>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className="number-field"
      />
    </>
  );
};

export default InputNumber;
