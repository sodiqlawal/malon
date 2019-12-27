import React from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import bannerimg from "../images/bannerimg.jpg";
import prog6 from "../images/prog6.jpg";

const Slider = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carouselitem">
        <img
          className="d-block w-100 carouselimage"
          src={bannerimg}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>Let your imagination run wild</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="captionbutton">
            <button className="bannerbutton">
              Start Now <strong>&rarr;</strong>{" "}
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carouselitem">
        <img
          className="d-block w-100 carouselimage"
          src={prog6}
          alt="Third slide"
        />

        <Carousel.Caption className="caption">
          <h3>Join Us Now</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="captionbutton">
            <button className="bannerbutton">
              Start Now<strong>&rarr;</strong>{" "}
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
