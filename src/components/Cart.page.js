import React, { useEffect } from "react";
import styled from "styled-components";

// Importing components
import MainFeed from "./main.component";
import CartItem from "./CartItem.component";
import SigninCard from "./SigninCard.component";
import { PRODUCTS } from "../Data/data.js";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../store/actions/CartActions.js";

const Cart = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const CartItems = useSelector((state) => state.cart.cartItems);

  var CartNumber = 0;
  CartItems.map((item) => {
    CartNumber += item.quantity;
  });
  const AllCartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (var key in state.cart.cartItems) {
      transformedCartItems.push({
        key: key,
        heading: state.cart.cartItems[key].heading,
        price: state.cart.cartItems[key].price,
        quantity: state.cart.cartItems[key].quantity,
        sum: state.cart.cartItems[key].sum,
        image: state.cart.cartItems[key].image,
        // InstockStatus: state.cart.cartItems.InstockStatus,
        shippingStatus: state.cart.cartItems.shippingStatus,
        // amazonfullfilled: state.cart.cartItems.amazonfullfilled,
      });
    }

    return transformedCartItems;
  });
  const CartList = AllCartItems.map((item) => (
    <CartItem
      heading={item.heading}
      price={item.price}
      quantity={item.quantity}
      sum={item.sum}
      image={item.image}
      shippingStatus={item.shippingStatus}
      amazonfullfilled="true"
      colorName="6 FEET-STRAIGHT BAR (26mm)"
    />
  ));

  // useEffect(() => {
  //   dispatch(AddToCart(AllCartItems.length));
  // });
  return (
    <Container>
      <ItemContainer>
        <Heading>
          <p>Shopping Cart</p>
        </Heading>
        {AllCartItems.length > 0 ? (
          CartList
        ) : (
          <h1>YOU DON'T HAVE ANY ITEMS IN YOUR CART YET!</h1>
        )}
      </ItemContainer>
      <TotalContainer>
        <OrderEligibility>
          <img src="images/greencheck.png" />
          <p>Your order is eligible for FREE Delivery</p>
          <span>Select this option at checkout.Details</span>
        </OrderEligibility>

        <Total>
          <p>
            Subtotal ({CartNumber} items): Rs.{totalAmount}
          </p>
          <Button>Proceed to Buy</Button>
        </Total>
      </TotalContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #eeeeee;

  height: 100vh;
  @media (min-width: 1600px) {
    width: 100%;
    margin-left: 225px;
    border: 0px;
    max-width: 1500px;

    background-color: white;
  }
`;
const Button = styled.div`
  width: 80%;
  background-color: #ffd814;
  padding: 8px;
  font-size: 13px;
  text-align: center;
  border-radius: 8px;
  margin-top: 13px;
`;
const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 8px;
  width: 90%;

  p {
    font-size: 28px;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  width: 70%;
  background-color: white;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const TotalContainer = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  margin-top: 40px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 14px;
  height: 160px;
  background-color: white;
  flex-direction: column;
`;
const OrderEligibility = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #007185;
    font-size: 12px;
  }
  span {
    font-size: 12px;
    color: grey;
  }
  img {
    width: 7%;
  }
`;

const Total = styled.div`
  padding-top: 34px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 18px;
  }
  p {
    font-size: 17px;
    font-weight: bold;
  }
`;
export default Cart;
