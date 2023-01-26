import React from "react";
import "./SelectOccasion.scss";

const SelectOccasion = (props) => {
  return (
    <>
      <select
        id={props.id}
        value={props.value}
        className="select-occasion"
        onChange={props.onChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
    </>
  );
};

export default SelectOccasion;
