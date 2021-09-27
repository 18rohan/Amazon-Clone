export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const INCREASE_ITEM = "INCREASE_ITEM";

export const AddToCart = (payload) => ({
  type: ADD_TO_CART,
  product: payload,
});

export const AddItem = (payload) => ({
  type: ADD_ITEM,
  payload: payload,
});

export const RemoveItem = (payload) => ({
  type: REMOVE_ITEM,
  payload: payload,
});

export const DecreaseItem = (payload) => ({
  type: DECREASE_ITEM,
  payload: payload,
});

export const IncreaseItem = (payload) => ({
  type: INCREASE_ITEM,
  payload: payload,
});
