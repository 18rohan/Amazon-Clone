import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const PriceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JeZMFSDqf1gltBmdaUxRuZXzqlIW5pecGpArng6J6UWz1xQLK47UtUqY6g7YPJ63k4XnKZohjCiIM2DKs1ptOsY00EZFzRrCn";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="Amazon-Clone"
      billingAddress
      shippingAddress
      image="https://pbs.twimg.com/media/ESRg6JZXkAAhMFe.png"
      alipay
      description={`Your total is ₹${price}`}
      amount={PriceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeCheckoutButton;
