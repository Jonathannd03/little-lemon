import React from "react";
import logo from "../assets/images/logo.png";

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
    <div>
      <img src={logo} alt="logo" />
      <nav>
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
      </nav>
    </div>
  );
};

export default Navbar;
