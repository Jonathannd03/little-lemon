import React from "react";
import Button from "../../shared/buttons/Button";
import RegularCard from "../../shared/cards/regular card/RegularCard";
import TestimonialCard from "../../shared/cards/testimonialCard/TestimonialCard";
import { images } from "../../constants";
import "./Main.scss";

const cardOne = {
  picture: images.logo,
  title: "Great Salad",
  price: "€ 5.70",
  content:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
  icon: images.delivery,
};

const testimonialOne = {
  title: "Lorem",
  picture: images.profile,
  testimony:
    "Perspiciatis natus Sed ut perspiciatis unde omnis iste natus error.",
};
const Main = () => {
  return (
    <div>
      {/* Specials container ************************************************** */}

      <section className="specials-container">
        <div className="sub-container1">
          <div className="sub-container1-item1">
            <h2>Specials</h2>
          </div>
          <div className="sub-container1-item2">
            <Button child="On The Menu" />
          </div>
        </div>
        <div className="sub-container2">
          <RegularCard child={cardOne} />
          <RegularCard child={cardOne} />
          <RegularCard child={cardOne} />
        </div>
      </section>

      {/* Testmonials container ************************************************** */}

      <section className="testimonials-container">
        <div className="container-item1">
          <h2>Testimonials</h2>
        </div>
        <div className="container-item2">
          <TestimonialCard child={testimonialOne} />
          <TestimonialCard child={testimonialOne} />
          <TestimonialCard child={testimonialOne} />
        </div>
      </section>

      {/* display container ************************************************** */}

      <section className="display-container">
        <div className="container-item1">
          <h1>Little Lemon</h1>
          <p className="city-name">Chicago</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="container-item2">
          <img src={images.logo} alt="testm-pic1" className="image1 img" />
          <img src={images.logo} alt="testm-pic2" className="image2 img" />
        </div>
      </section>
    </div>
  );
};

export default Main;
