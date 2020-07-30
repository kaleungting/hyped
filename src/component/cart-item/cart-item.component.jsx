import React from "react";
import {
  CartItemContainer,
  ItemDetailsContainer,
  NameSpan,
  PriceSpan,
  ItemImage,
} from "./cart-item.styles";
const CartItem = ({ cartItem: { name, imageUrl, quantity, price } }) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameSpan>{name}</NameSpan>
      <PriceSpan>
        {quantity} X ${price}
      </PriceSpan>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
