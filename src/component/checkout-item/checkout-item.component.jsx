import React from "react";
import "./checkout-item.styles.scss";
import {
  removeItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";

import { connect } from "react-redux";
const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  removeItem,
  addItem,
}) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <div className="value"> {quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
