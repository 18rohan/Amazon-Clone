import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// Importing components
import HomeCarousel from "./HomeCarousel.component";
import Card from "./Card.component";
import SigninCard from "./SigninCard.component";
import ProductCard from "../components/ProductCard.component.js";
import { PRODUCTS } from "../Data/data.js";

const MainFeed = (props) => {
  const currentUser = useSelector((state) => state.user.CurrentUser);
  // Fetch DATA
  const ProductList = PRODUCTS.map((item) => (
    <ProductCard
      key={item.id}
      id={item.id}
      heading={item.heading}
      price={item.price}
      quantity={item.quantity}
      sum={item.sum}
      image={item.image}
      shippingStatus={item.shippingStatus}
      amazonfullfilled="true"
      colorName="6 FEET-STRAIGHT BAR (26mm)"
      product={item}
    />
  ));
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
        {currentUser ? (
          <Card
            image="images/asset 115.jpeg"
            caption="Up to 20% off | Top ofers from Amazon Stationary Bundle"
          />
        ) : (
          <SigninCard />
        )}
      </ProductRow1>
      <ProductRow1>
        <Card
          image="images/asset 58.jpeg"
          caption="Up to 70% off | Electronics clearance store"
        />
        <Card
          image="images/asset 34.jpeg"
          caption="Up to 70% off | Kitchen Appliances"
        />
        <Card
          image="images/asset 63.jpeg"
          caption="Sale starts early for Prime members"
        />
        <Card
          image="images/asset 108.jpeg"
          caption="Upto 65% off | Prime members"
        />
      </ProductRow1>
      <ProductRow3>{ProductList}</ProductRow3>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-position: top center;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 3px;
    padding-right: 3px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  padding-top: 120px;
  margin-bottom: -270px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: -450px;
  }
`;
const ProductRow1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 90%;
    overflow: scroll;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
const ProductRow3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 35px;
`;

export default MainFeed;
