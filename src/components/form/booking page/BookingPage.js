import React from "react";
import BookingForm from "../booking form/BookingForm";
import styled from "styled-components";

const BookingPage = ({ state, statechangingF }) => {
  return (
    <Container>
      <div>
        <BookingForm state={state} statechangingF={statechangingF} />
      </div>
    </Container>
  );
};

export default BookingPage;
const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    width: 80%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #495e57;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    color: #f4ce14;
    font-family: "Markazi Text", "serif";
    font-size: 64px;
    font-weight: 500;
  }
`;
