import React from "react";

const InputTime = () => {
  return (
    <div>
      <input
        type="time"
        id="appt"
        name="appt"
        min="09:00"
        max="18:00"
        required
      ></input>
    </div>
  );
};

export default InputTime;
