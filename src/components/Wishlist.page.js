import React from "react";
import styled from "styled-components";

// Importing components

import WishlistItem from "./WishListItem.component.js";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const WishListItems = useSelector((state) => state.wishlist.WishListItems);

  var CartNumber = 0;
  WishListItems.map((item) => (CartNumber += item.quantity));

  const WishList = WishListItems.map((item) => (
    <WishlistItem
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
    />
  ));

  // useEffect(() => {
  //   dispatch(AddToCart(AllCartItems.length));
  // });
  return (
    <Container>
      <ItemContainer>
        <Heading>
          <p>Your WishList</p>
        </Heading>
        {WishList.length > 0 ? (
          WishList
        ) : (
          <h1>YOU DON'T HAVE ANY ITEMS IN YOUR CART YET!</h1>
        )}
      </ItemContainer>
      {/* <TotalContainer>
        <OrderEligibility>
          <img src="images/greencheck.png" alt="green tick logo" />
          <p>Your order is eligible for FREE Delivery</p>
          <span>Select this option at checkout.Details</span>
        </OrderEligibility>

        <Total>
          <p>
            Subtotal ({CartNumber} items): Rs.{totalAmount}
          </p>
          <Button>Proceed to Buy</Button>
        </Total>
      </TotalContainer> */}
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

const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
  width: 90%;
  border-bottom: 1px solid #eeeeee;

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

export default Cart;
