import React from "react";
import "./Header.scss";
import Button from "../../shared/Form components/buttons/Button";
import restauranfood from "../../assets/images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header-container">
      <section className="container-item1">
        <h1>
          <strong>Little Lemon</strong>
        </h1>
        <p className="city-name">
          <strong>Chicago</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed
          do eiusmod tempor incididunt ut labore et dolore<br></br> magna
          aliqua. Ut enim ad minim veniam, quis nostrud<br></br> exercitation
          ullamco laboris nisi ut aliquip ex ea commodo<br></br> consequat.
        </p>
        <Link to="/order-online">
          <Button text="Reserve a table" onClick={props.onClick} />
        </Link>
      </section>

      <section className="container-item2">
        <img src={restauranfood} alt="header-logo" />
      </section>
      <hr></hr>
    </div>
  );
};

export default Header;
