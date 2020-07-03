import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),//passes in state into the reselector
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
