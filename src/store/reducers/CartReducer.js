import {
  ADD_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  REMOVE_ITEM,
  EMPTY_CART,
  SET_CART,
} from "../actions/CartActions.js";

// Import Data Model

import {  RemoveFromCart } from "../../utils/Cart.utils.js";

const INITIAL_STATE = {
  cartItems: [],
  totalAmount: 0,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CART:
      const Products = action.payload.product;
      var sum = 0;
      Products.map((product) => (sum = sum + product.price * product.quantity));

      return {
        cartItems: action.payload.product,
        totalAmount: sum,
      };
    case ADD_ITEM:
      const AddedProduct = action.payload.product;

      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload.product),
        totalAmount: state.totalAmount + AddedProduct.price,
      };
    case REMOVE_ITEM:
      const ItemToRemove = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
        totalAmount:
          state.totalAmount - ItemToRemove.price * ItemToRemove.quantity,
      };
    case INCREASE_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        totalAmount: state.totalAmount + action.payload.price,
      };
    case DECREASE_ITEM:
      const SelectedItem = action.payload;
      // const UpdatedItem = state.cartItem.find(
      //   (item) => item.id === SelectedItem.id
      // );

      // const UpdatedItem = state.cartItems.map((cartItem) =>
      //   cartItem.id === SelectedItem.id
      //     ? {
      //         ...cartItem,
      //         quantity: cartItem.quantity - 1,
      //       }
      //     : cartItem
      // );
      return {
        ...state,
        cartItems: RemoveFromCart(state.cartItems, action.payload),
        totalAmount: state.totalAmount - SelectedItem.price,
      };
    case EMPTY_CART:
      return {
        cartItems: INITIAL_STATE.cartItems,
        totalAmount: INITIAL_STATE.totalAmount,
      };
    default:
      return state;
  }
};

export default CartReducer;
