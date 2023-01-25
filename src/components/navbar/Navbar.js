import React from "react";
import { images } from "../../constants";
import "./Navbar.scss";

const navMenu = [
  {
    name: "HOME",
    href: "",
  },
  {
    name: "ABOUT",
    href: "",
  },
  {
    name: "MENU",
    href: "",
  },
  {
    name: "RESERVATIONS",
    href: "",
  },
  {
    name: "ORDER ONLINE",
    href: "",
  },
  {
    name: "LOGIN",
    href: "",
  },
];

const Navbar = () => {
  return (
    <nav className="grid-container">
      <div className="grid-item1">
        <img src={images.logo} alt="logo" />
      </div>

      <div className="grid-item2">
        <ul>
          {navMenu.map((menu, index) => {
            return (
              <>
                <li key={index}>
                  <a href={menu.href}>{menu.name}</a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
