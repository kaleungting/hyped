import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { CartIconContainer, ItemCountContainer } from "./cart-icon.styles";

const CartIcon = ({ toggleCart, itemCount }) => (
  <CartIconContainer onClick={toggleCart}>
    <ShoppingIcon height="36px" width="36px" />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount, //passes in state into the reselector
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
