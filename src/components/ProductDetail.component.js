import React from "react";
import styled from "styled-components";
import { PRODUCTS } from "../Data/data.js";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  // Accessing Parameters from URL
  // UseParams(): Hook function to access parameters passed in the URL
  const { id } = useParams();

  // Accessing the Product with id matching with the parameters passed.
  const Product = PRODUCTS.filter((item) => item.id === id);

  console.log("PRODUCT: ", Product);
  return (
    <PageContainer>
      <Container>
        <ImageContainer>
          <img src={Product[0].image} alt="TV" />
        </ImageContainer>
        <DescContainer>
          <Heading>
            <p>{Product[0].heading}</p>
          </Heading>
          <RatingDiv>
            ⭐️⭐️⭐️⭐️ ⌄<span>54,551 | 1000+ answered questions</span>
          </RatingDiv>
          <PriceDiv>
            <p>
              M.R.P.: <span>₹{Product[0].price}</span>
            </p>
            <h1>
              Price: <span>₹{Product[0].price}</span>
              <img src="images/amazonfullfilled.png" alt="amazon fullfilled" />
              <p>FREE Scheduled delivery</p>
            </h1>
            <div>
              <p>You Save:</p>
              <h3>₹3000</h3>
            </div>
          </PriceDiv>
          <Button>Add to Cart</Button>
          <Button>Buy Now</Button>
        </DescContainer>
      </Container>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: grid;
  width: 90%;
  margin-top: 35px;
  grid-column-gap: 40px;
  grid-template-columns: 1fr 2fr;
  background-color: #ffffff;
  padding: 10px;
`;
const ImageContainer = styled.div``;
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading = styled.div`
  width: 60%;
  p {
    font-size: 24px;
    line-height: 32px;
    text-align: start;
    letter-spacing: normal;
    font-weight: 500;
    color: #0f1111;
  }
`;
const RatingDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 6px;
  span {
    font-size: 14px;
    line-height: 20px;
    padding-top: 15px;
    padding-left: 8px;
    color: #007185;
    &:hover {
      color: #c7511f;
    }
  }
`;
const PriceDiv = styled.div`
  margin-top: 12px;

  p {
    font-size: 14px;
    color: #565959;
    font-weight: 300;
    font-weight: 600;
  }
  p > span {
    text-decoration: line-through;
  }
  h1 {
    color: #565959;
    font-weight: 400;
  }
  h1 > span {
    color: #b12704;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: start;
    letter-spacing: normal;
    padding-right: 8px;
  }
  div {
    display: flex;
    flex-direction: row;
    padding-top: 6px;
    h3 {
      color: #b12704;
      font-weight: 300;
      text-align: right;
      padding-left: 3px;
    }
  }
`;

const Button = styled.button`
  width: 35%;
  background-color: #f0c14b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  margin-top: 10px;
  padding: 8px;
  border: 1px solid grey;
  p {
    padding-bottom: 8px;
  }
`;

export default ProductDetail;
