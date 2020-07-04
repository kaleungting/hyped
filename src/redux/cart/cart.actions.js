import { cartActionTypes } from "./cart.types";

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cartActionTypes.REMOVE_ITEMS,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
