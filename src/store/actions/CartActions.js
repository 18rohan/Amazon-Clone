import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const INCREASE_ITEM = "INCREASE_ITEM";
export const EMPTY_CART = "EMPTY_CART";
export const SET_CART = "SET_CART";

export const AddToCart = (payload) => ({
  type: ADD_TO_CART,
  product: payload,
});

export const AddItem = (payload) => ({
  type: ADD_ITEM,
  payload: payload,
});
export const SetCart = (payload) => ({
  type: SET_CART,
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

export const EmptyCart = (payload) => ({
  type: EMPTY_CART,
  payload: payload,
});

export const AddToCartAPI = (payload) => {
  return async (dispatch) => {
    const UserDoc = doc(db, "users", payload.user_id);
    await updateDoc(UserDoc, {
      cart: arrayUnion(payload.product),
    });

    dispatch(AddItem(payload));
  };
};
