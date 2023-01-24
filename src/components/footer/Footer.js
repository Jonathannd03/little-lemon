import React from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.scss"

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

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="footer-logo" />
      <section className="navigation">
        <h2>Restaurant Navigation</h2>
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
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h2>Social media</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Tiktok</li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
