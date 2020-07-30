import React from "react";
import {
  removeItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemContainer,
  NameSpan,
  PriceSpan,
  QuantitySpan,
  ImageContainer,
  ItemImage,
  Arrow,
  Value,
  RemoveButtonContainer,
} from "./checkout-item.styles";
import { connect } from "react-redux";
const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  removeItem,
  addItem,
}) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ItemImage src={imageUrl} alt="item" />
      </ImageContainer>
      <NameSpan>{name}</NameSpan>
      <PriceSpan>{price}</PriceSpan>
      <QuantitySpan>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QuantitySpan>
      <RemoveButtonContainer onClick={() => removeItemFromCart(cartItem)}>
        &#10008;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
