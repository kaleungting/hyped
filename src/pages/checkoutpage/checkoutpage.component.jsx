import React from "react";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component";
import { connect } from "react-redux";

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  CartItemsContainer,
  Total,
} from "./checkoutpage.styles";

const CheckOutPage = ({ cartItems, cartItemsTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    <CartItemsContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </CartItemsContainer>
    <Total>TOTAL: ${cartItemsTotal}</Total>
    <StripeCheckoutButton className="checkoutbutton" price={cartItemsTotal} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
