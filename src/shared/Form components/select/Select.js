import React from "react";
import "./Select.scss";

const Select = (props) => {
  return (
    <>
      <select
        id={props.id}
        value={props.value}
        className="select-element"
        onChange={props.onChange}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <br></br>
    </>
  );
};

export default Select;
