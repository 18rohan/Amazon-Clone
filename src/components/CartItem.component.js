import React from "react";
import styled from "styled-components";

// import actions
import { RemoveItem } from "../store/actions/CartActions.js";
import { useDispatch } from "react-redux";

import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { IncreaseItem, DecreaseItem } from "../store/actions/CartActions.js";

const CartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <ImageContainer>
        <img src={props.image} alt="product" />
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
          <QuantityButton>
            {" "}
            <Button
              onClick={() => {
                console.log("Decrease Clicked");
                // Decrease Quantity
                dispatch(DecreaseItem(props.product));
              }}
            >
              <IoMdArrowDropleft size={20} />
            </Button>
            Qty: {props.quantity}
            <Button
              onClick={() => {
                console.log("Increase Clicked");
                dispatch(IncreaseItem(props.product));
              }}
            >
              <IoMdArrowDropright size={20} />
            </Button>
          </QuantityButton>
          <Icon
            onClick={() => {
              console.log("Delete Clicked!: ", props.id);
              dispatch(RemoveItem(props.product));
            }}
          >
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

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
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

const Button = styled.button`
  background-color: transparent;
  width: 25px;
  border: 0px;
`;
const QuantityButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  background-color: #e3e6e6;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 7px;
  width: 120px;
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

const Icon = styled.button`
  border-left: 1px solid #e3e6e6;
  margin-left: 7px;
  margin-right: 7px;
  padding: 3px;
  padding-left: 8px;
  background-color: transparent;
  border: 0px;

  p {
    color: #007185;
    font-size: 12px;
    line-height: 16px;
  }
`;
export default CartItem;
