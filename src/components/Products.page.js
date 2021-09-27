import React from "react";
import styled from "styled-components";

// Import components
import ProductCard from "./ProductCard.component";
import { PRODUCTS } from "../Data/data.js";
const ProductsPage = (props) => {
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
      <CoverImg>
        <img src="images/products_cover.jpg" alt="banner" />
      </CoverImg>
      <ProductsContainer>
        <ProductRow>
          {ProductList}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </ProductRow>
      </ProductsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: white;

  @media (min-width: 1600px) {
    width: 100%;
    margin-left: 225px;
    border: 0px;
    max-width: 1500px;

    backaground-color: white;
  }
`;
const CoverImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${"" /* margin-bottom: 10px; */}
  height: 500px;
  img {
    ${"" /* width: 100%;
    height: 500px; */}
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
`;
const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin-top: 150px;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 35px;
`;
const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export default ProductsPage;
