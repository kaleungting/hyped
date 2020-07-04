import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCart } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, cartItemsTotal, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <div className="total">Total: ${cartItemsTotal}</div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCart());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
