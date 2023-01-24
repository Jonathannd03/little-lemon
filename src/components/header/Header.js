import React from "react";
import "./Header.scss";
import Button from "../../shared/buttons/Button";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <section className="content">
        <h2>Little Lemon</h2>
        <p className="city-name">Chicago</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed
          do eiusmod tempor incididunt ut labore et dolore<br></br> magna
          aliqua. Ut enim ad minim veniam, quis nostrud<br></br> exercitation
          ullamco laboris nisi ut aliquip ex ea commodo<br></br> consequat.
        </p>
        <Button child="Reserve a table" />
      </section>

      <section className="picture">
        <img src={logo} alt="header-logo" />
      </section>
    </div>
  );
};

export default Header;
