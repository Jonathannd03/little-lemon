import React from "react";
import "./InputText.scss";

const InputText = ({ value }) => {
  return (
    <div className="text-container">
      <input type="text" value={value} className="input-field" />
    </div>
  );
};

export default InputText;
