import React from 'react';
import styled from 'styled-components';

// Carousel Packages
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const HomeCarousel = (props) =>{
  return (
    <Carousel  autoPlay={true} infiniteLoop={true} showArrows={true} showStatus={false} showIndicators={false} showThumbs={false} interval={6000}>
               <Slider>
                   <img src="./images/asset6.jpeg" alt="first" />
                   {/* <p className="legend">Legend 1</p> */}
               </Slider>
               <Slider>
                   <img src="images/asset7.jpeg" alt="second"/>
                   {/* <p className="legend">Legend 2</p> */}
               </Slider>
               <Slider>
                   <img src="images/asset9.jpeg" alt="third" />
                   {/* <p className="legend">Legend 3</p> */}
               </Slider>
    </Carousel>
  );
}
const Slider = styled.div`
  width:100%;
  height:560px;
  z-index: -1;
`

export default HomeCarousel;
