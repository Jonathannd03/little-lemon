import React from "react";
import Button from "../../shared/Form components/buttons/Button";
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
            <h2>
              <strong>This week's specials!</strong>
            </h2>
          </div>
          <div className="sub-container1-item2">
            <Button text="Online Menu" />
          </div>
        </div>
        <div className="sub-container2">
          <RegularCard
            picture={images.greekSalad}
            title="Greek Salad"
            price="€ 12.99"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
            icon={images.delivery}
          />
          <RegularCard
            picture={images.bruchetta}
            title="Bruchetta"
            price="€ 5.99"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
            icon={images.delivery}
          />
          <RegularCard
            picture={images.lemonDessert}
            title="Lemon Dessrt"
            price="€ 5.00"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
            icon={images.delivery}
          />
        </div>
      </section>

      {/* Testmonials container ************************************************** */}

      <section className="testimonials-container">
        <div className="container-item1">
          <h2>
            <strong>Testimonials</strong>
          </h2>
        </div>
        <div className="container-item2">
          <TestimonialCard
            rating="5"
            picture={images.profile}
            testimony="Perspiciatis natus Sed ut perspiciatis unde omnis iste natus error."
            name="Jackson Smith"
          />
          <TestimonialCard
            rating="5"
            picture={images.profile}
            testimony="Perspiciatis natus Sed ut perspiciatis unde omnis iste natus error."
            name="Jackson Smith"
          />
          <TestimonialCard
            rating="5"
            picture={images.profile}
            testimony="Perspiciatis natus Sed ut perspiciatis unde omnis iste natus error."
            name="Jackson Smith"
          />
        </div>
      </section>

      {/* display container ************************************************** */}

      <section className="display-container">
        <div className="container-item1">
          <h1>
            <strong>Little Lemon</strong>
          </h1>
          <p className="city-name">
            <strong>Chicago</strong>
          </p>
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
          <img
            src={images.restaurant}
            alt="testm-pic1"
            className="image1 img"
          />
          <img
            src={images.mario_and_adrian}
            alt="testm-pic2"
            className="image2 img"
          />
        </div>
      </section>
    </div>
  );
};

export default Main;
