import { SET_CART_NUMBER } from "../actions/CartActions.js";

const INITIAL_STATE = {
  cartNumber: 0,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CART_NUMBER:
      return {
        ...state,
        cartNumber: action.number,
      };
    default:
      return state;
  }
};

export default CartReducer;
