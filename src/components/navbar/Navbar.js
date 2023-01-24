import React from "react";
import logo from "../../assets/images/logo.png";
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
  return (<nav>
      <img src={logo} alt="logo" />
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
  );
};

export default Navbar;
