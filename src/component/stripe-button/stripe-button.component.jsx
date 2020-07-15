import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51H50WGAQMQnJCo6wY4zcmn8TQ0HqdP5iE8ceT6MNjvDZ5VzwDYl6DGgoas2b60Y8Kath99RnG8fyyuEdwALm1m4a00PcGuPjHr";

  const onToken = (token) => {
    console.log(token);
    alert("Your payment went thru!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Hyped Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
