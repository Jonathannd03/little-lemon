import React, { useState } from "react";
import "./BookingForm.scss";
import LabelText from "../../../shared/Form components/label text/LabelText";
import InputDate from "../../../shared/Form components/input date/InputDate";
import Select from "../../../shared/Form components/select/Select";
import InputNumber from "../../../shared/Form components/input number/InputNumber";
import SelectOccasion from "../../../shared/Form components/select occasion/SelectOccasion";
import Button from "../../../shared/Form components/buttons/Button";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const selectTime = (e) => {
    setTime(e.target.value);
  };
  const selectDate = (e) => {
    setDate(e.target.value);
  };
  const selectNumberGuests = (e) => {
    setGuests(e.target.value);
  };
  const chooseOccasion = (e) => {
    setOccasion(e.target.value);
  };
  return (
    <>
      <div className="form-container">
        <form>
          <LabelText for="res-data" text="Choose date" />
          <InputDate value={date} id="res-date" onChange={selectDate} />
          <LabelText for="res-time" text="Choose time" />
          <Select id="res-time" value={time} onChange={selectTime} />
          <LabelText for="guest" text="Number fo guests" />
          <InputNumber
            id="guest"
            value={guests}
            onChange={selectNumberGuests}
          />
          <LabelText for="occasion" text="Occasion" />
          <SelectOccasion
            id="occasion"
            value={occasion}
            onChange={chooseOccasion}
          />
          <Button text="Make Your reservation" type="submit" />
        </form>
      </div>
    </>
  );
};

export default BookingForm;
