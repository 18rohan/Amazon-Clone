import styled from "styled-components";

// Importing components

import CartItem from "./CartItem.component";

import { useSelector } from "react-redux";

import StripeCheckoutButton from "./stripe-button/stripe-button.component.js";

const Cart = (props) => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const CartItems = useSelector((state) => state.cart.cartItems);
  // Fetch Data from firebase

  const currentCart = useSelector((state) => state.cart.cartItems);
  console.log("CURRENT CART: ", currentCart);
  var CartNumber = 0;
  CartItems.map((item) => (CartNumber += item.quantity));
  if (currentCart) {
    var CartList = currentCart.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        product={item}
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
  } else {
    CartList = "YOUR CART IS CURRENTLY EMPTY";
  }

  // useEffect(() => {
  //   dispatch(AddToCart(AllCartItems.length));
  // });
  return (
    <Container>
      <ItemContainer>
        <Heading>
          <p>Shopping Cart</p>
        </Heading>
        {CartList.length > 0 ? (
          CartList
        ) : (
          <h1>YOU DON'T HAVE ANY ITEMS IN YOUR CART YET!</h1>
        )}
        <TestWarning>
          <h1>**Please use the following Credentials for payment:</h1>
          <h2>Card Number: 4242 4242 4242</h2>
          <h2>Expiration Date: 02/24</h2>
          <h2>CVV: 123</h2>
        </TestWarning>
      </ItemContainer>
      <TotalContainer>
        <OrderEligibility>
          <img src="images/greencheck.png" alt="green check" />
          <p>Your order is eligible for FREE Delivery</p>
          <span>Select this option at checkout.Details</span>
        </OrderEligibility>

        <Total>
          <p>
            Subtotal ({CartNumber} items): Rs.{totalAmount}
          </p>
          {/* <Button>Proceed to Buy</Button> */}
          <StripeContainer>
            <StripeCheckoutButton price={totalAmount} />
          </StripeContainer>
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
  padding-top: 100px;
  height: 100vh;
  @media (min-width: 1600px) {
    width: 100%;
    display: flex;
    height: 100vh;

    flex-direction: column;
    margin-left: 225px;
    border: 0px;
    max-width: 1500px;

    background-color: white;
  }
  @media (max-width: 768px) {
    width: 768px;
    display: flex;
    padding-top: 0px;
    height: 1200px;
    overflow-x: hidden;
    overflow-y: hidden;
    flex-direction: column;
  }
`;
const StripeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
  padding-bottom: 15px;
  width: 90%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  p {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    position: fixed;
    top: 40px;
    background-color: white;
    justify-content: center;
    padding: 8px 0 8px 6px;
    align-items: flex-start;
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
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 90px;
    display: flex;

    padding: 0 4px 0 4px;
    flex-direction: column;
    margin-bottom: 10px;
  }
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
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px 5px 10px 5px;
    padding: 10px 0 15px 0;
  }
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

const TestWarning = styled.div`
  display: flex;
  flex-direction: column;
  widht: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  h1 {
    font-weight: 400;
    font-size: 14px;
    color: red;
  }
  h2 {
    font-weight: 400;
    font-size: 12px;
    color: red;
  }
`;
export default Cart;
