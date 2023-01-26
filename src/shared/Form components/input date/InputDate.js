import React from "react";
import "./InputDate.scss";

const InputText = (props) => {
  return (
    <>
      <input
        type="date"
        value={props.value}
        className="input-field"
        id={props.id}
        onChange={props.onChange}
      />
    </>
  );
};

export default InputText;
