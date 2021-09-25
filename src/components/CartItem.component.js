import React from "react";
import styled from "styled-components";

const CartItem = (props) => {
  return (
    <Container>
      <ImageContainer>
        <img src={props.image} />
      </ImageContainer>

      <Description>
        <Heading>
          <div>
            <p>{props.heading}</p>
          </div>
          <div>
            <h1>Rs.{props.price}</h1>
          </div>
        </Heading>
        <StockStatus>
          <p>{props.InstockStatus}</p>
        </StockStatus>
        <FreeShippingTag>
          <p>{props.shippingStatus}</p>
          {props.amazonfullfilled === "true" ? (
            <img src="images/amazonfullfilled.png" alt="amazon fullfilled" />
          ) : (
            ""
          )}
        </FreeShippingTag>
        <InfoRow>
          <p>
            <span>Color Name:</span>
            {props.colorName}
          </p>
        </InfoRow>
        <LastRow>
          <QuantityButton>Qty: {props.quantity} </QuantityButton>
          <Icon>
            <p>Delete</p>
          </Icon>
          <Icon>
            <p>Save for Later</p>
          </Icon>
          <Icon>
            <p>See more like this</p>
          </Icon>
        </LastRow>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 25%;
  padding-right: 15px;
  img {
    width: 100%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  padding-top: 8px;
  padding-bottom: 3px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  align-items: stretch;
  h1 {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    padding-top: 3px;
  }
  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
  }
`;
const FreeShippingTag = styled.div`
  padding-top: 8px;
  p {
    font-size: 12px;
    color: grey;
  }
  img {
    margin-top: 4px;
  }
`;
const StockStatus = styled.div`
  p {
    font-size: 13px;
    color: green;
    font-weight: 400;
  }
`;
const QuantityButton = styled.button`
  background-color: #e3e6e6;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 7px;
  width: 70px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #f9f9f9;
  box-shadow: 2px 2px 7px grey;
`;

const LastRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 12px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  p {
    font-weight: 400;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.9);
  }
  p > span {
    font-weight: bold;
  }
`;

const Icon = styled.div`
  border-left: 1px solid #e3e6e6;
  margin-left: 7px;
  margin-right: 7px;
  padding: 3px;
  padding-left: 8px;

  p {
    color: #007185;
    font-size: 12px;
    line-height: 16px;
  }
`;
export default CartItem;
