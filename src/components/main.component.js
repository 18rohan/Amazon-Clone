import React from "react";
import styled from "styled-components";

// Importing components
import HomeCarousel from "./HomeCarousel.component";
import Card from "./Card.component";
import SigninCard from "./SigninCard.component";

const MainFeed = (props) => {
  return (
    <Container>
      <CarouselContainer>
        <HomeCarousel />
      </CarouselContainer>
      <ProductRow1>
        <Card
          image="images/asset10.jpeg"
          caption="Up to 70% off | Electronics clearance store"
        />
        <Card
          image="images/indianfestival.jpg"
          caption="Sale starts early for Prime members"
        />
        <Card
          image="images/sofa.jpg"
          caption="Up to 45% off | Top ofers from Amazon Brand - Solimo"
        />
        <SigninCard />
      </ProductRow1>
      <ProductRow2></ProductRow2>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-position: top center;
`;

const CarouselContainer = styled.div`
  width: 100%;
  margin-bottom: -270px;
`;
const ProductRow1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 240px;
`;
const ProductRow2 = styled.div``;

export default MainFeed;
