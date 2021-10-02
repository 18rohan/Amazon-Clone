import React, { useState } from "react";
import styled from "styled-components";
import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Import Icons
import { FaRupeeSign } from "react-icons/fa";
// Import actions
import { AddToCartAPI } from "../store/actions/CartActions.js";
import { AddToWishListAPI } from "../store/actions/WishListActions.js";

import { useDispatch } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState();
  const user = useSelector((state) => state.user.CurrentUser);
  const handleLike = (liked) => {
    setLiked((currentState) => !currentState);
  };
  return (
    <Container>
      <Imagediv>
        <img src={props.image} alt="product" />
      </Imagediv>
      <HeadingDiv>
        <Link to={"/" + props.id} style={{ textDecoration: "none" }}>
          <p>{props.heading}</p>
        </Link>
      </HeadingDiv>
      <RatingDiv>
        ⭐️⭐️⭐️⭐️ ⌄<span>54,551</span>
      </RatingDiv>
      <PriceDiv>
        <h1>
          <RupeeSign>
            <FaRupeeSign size={12} />
            {props.price}
            <div>
              <h2 style={{ fontSize: "13px", color: "grey" }}>
                <span>₹{props.price}</span> Save ₹3,000 (15%)
              </h2>
            </div>
          </RupeeSign>
        </h1>
      </PriceDiv>
      <DeliveryDiv>
        <p>
          FREE delivery by <span>Sat, 25 Sep, 7:00 am - 9:00 pm</span>
        </p>
      </DeliveryDiv>
      <AddtoCartContainer>
        <Button
          onClick={() => {
            user ? (
              dispatch(
                AddToCartAPI({ product: props.product, user_id: user.uid })
              )
            ) : (
              <Redirect to="/signin" />
            );
          }}
        >
          Add to Cart
        </Button>
        <Icon
          onClick={() => {
            handleLike();
            dispatch(
              AddToWishListAPI({ product: props.product, user_id: user.uid })
            );
          }}
        >
          {liked ? (
            <AiFillHeart size={33} color={"#007185"} />
          ) : (
            <AiOutlineHeart size={33} />
          )}
        </Icon>
        <Button>Buy Now</Button>
      </AddtoCartContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: center;
  margin-top: 70px;
  width: 360px;
  max-height: 420px;
  min-height: 450px;
  margin-left: 15px;
  margin-right: 15px;
  z-index: 88;
  ${"" /* margin-left: 40px; */}
  ${"" /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */}
  @media (max-width: 768px) {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 300px;
    max-height: 300px;
    min-height: 300px;
    margin: 20px 20px 10px 20px;
    padding: 10px 0 15px 0;
  }
`;

const Imagediv = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;
const HeadingDiv = styled.div`
  width: 100%;
  background-color: transparent;
  padding-top: 6px;
  padding-bottom: 6px;

  p {
    color: black;
    font-size: 16px;
    font-weight: 600;
  }
`;
const RatingDiv = styled.div`
  width: 100;
  display: flex;
  flex-direction: row;

  padding-bottom: 6px;
  span {
    font-size: 13px;
    padding-top: 15px;
    padding-left: 8px;
    color: #007185;
  }
`;
const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  h1 {
    font-size: 21px;
    color: #b12704;
    font-weight: 500;
    text-align: start;
    line-height: normal;
    font-family: sans-serif;
  }
`;
const Icon = styled.button`
  display: flex;
  background-color: transparent;
  border: 0px;
  justify-content: center;
  padding-top: 8px;
  align-items: center;
`;
const RupeeSign = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  p {
    font-size: 13px;
    color: grey;
    padding-left: 7px;
  }
  span {
    text-decoration: line-through;
    color: grey;
    font-size: 13px;
    padding-left: 7px;
  }
`;
const DeliveryDiv = styled.div`
  padding-top: 8px;
  p {
    font-size: 15px;
    color: grey;
  }
  span {
    font-size: 15px;
    font-weight: 600;
    color: grey;
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

const AddtoCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;

  margin-top: 8px;
`;

export default ProductCard;
