import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, cartItemsTotal }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <div className="total">Total: ${cartItemsTotal}</div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartItemsTotal: selectCartItemsTotal(state),
});
export default connect(mapStateToProps, null)(CartDropdown);
