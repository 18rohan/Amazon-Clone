export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_ITEM = "ADD_ITEM";

export const AddToCart = (payload) => ({
  type: ADD_TO_CART,
  product: payload,
});

export const AddItem = (payload) => ({
  type: ADD_ITEM,
  payload: payload,
});
