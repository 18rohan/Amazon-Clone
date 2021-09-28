import {
  ADD_TO_CART,
  ADD_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  REMOVE_ITEM,
} from "../actions/CartActions.js";

// Import Data Model
import CartItem from "../../models/cartItem.model.js";
import { addItemToCart, RemoveFromCart } from "../../utils/Cart.utils.js";

const INITIAL_STATE = {
  cartItems: [],
  totalAmount: 0,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const quantity = action.product.quantity;
      const price = action.product.price;
      const image = action.product.image;
      const heading = action.product.heading;
      // const fullfilled = action.product.amazonFullfilled;
      const shippingStatus = action.product.shippingStatus;
      const sum = quantity * price;
      if (state.cartItems[addedProduct.id]) {
        const updatedItem = new CartItem(
          state.cartItems[addedProduct.id].quantity + 1,
          heading,
          price,
          quantity,
          sum,
          image,
          shippingStatus
        );
        return {
          ...state,
          cartItems: { ...state.cartItems, [addedProduct.id]: updatedItem },
          // cartItems: [...state.cartItems, updatedItem],
          totalAmount: state.totalAmount + price,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          heading,
          price,
          quantity,
          sum,
          image,
          shippingStatus
        );
        return {
          ...state,
          cartItems: { ...state.cartItems, [addedProduct.id]: newCartItem },
          // cartItems: [...state.cartItems, newCartItem],
          totalAmount: state.totalAmount + price,
        };
      }
    case ADD_ITEM:
      const AddedProduct = action.payload;

      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
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

      const UpdatedItem = state.cartItems.map((cartItem) =>
        cartItem.id === SelectedItem.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            }
          : cartItem
      );
      return {
        ...state,
        cartItems: RemoveFromCart(state.cartItems, action.payload),
        totalAmount: state.totalAmount - SelectedItem.price,
      };
    default:
      return state;
  }
};

export default CartReducer;
