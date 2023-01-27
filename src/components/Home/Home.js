import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import BookingForm from "../form/booking form/BookingForm";

const Home = () => {
  useEffect(() => {
    console.log("working");
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
