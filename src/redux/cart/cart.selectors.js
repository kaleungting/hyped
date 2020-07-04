import { createSelector } from "reselect";

//input selector - just grab one slice of the state
const selectCart = (state) => state.cart;

//createSelector takes in two arguments, first is the inputSelector, second is the return value output
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems //memoizes the cart slice
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    )
);
