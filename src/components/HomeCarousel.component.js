import React from "react";
import styled from "styled-components";

// Carousel Packages
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HomeCarousel = (props) => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={6000}
      transitionTime={1000}
      stopOnHover={false}
    >
      <Slider>
        <img src="./images/asset6.jpeg" alt="first" />
        {/* <p className="legend">Legend 1</p> */}
      </Slider>
      <Slider>
        <img src="images/asset2.jpeg" alt="second" />
        {/* <p className="legend">Legend 2</p> */}
      </Slider>
      <Slider>
        <img src="images/asset3.jpeg" alt="third" />
        {/* <p className="legend">Legend 3</p> */}
      </Slider>
    </Carousel>
  );
};
const Slider = styled.div`
  width: 100%;
  height: 560px;

  img {
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
`;

export default HomeCarousel;
