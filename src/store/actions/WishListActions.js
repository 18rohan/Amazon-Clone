import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const ADD_WISHLIST_ITEM = "ADD_WISHLIST_ITEM";
export const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";

export const AddItemToWishList = (payload) => ({
  type: ADD_WISHLIST_ITEM,
  payload: payload,
});

export const DeleteFromWishList = (payload) => ({
  type: DELETE_FROM_WISHLIST,
  payload: payload,
});

export const AddToWishListAPI = (payload) => {
  return async (dispatch) => {
    const UserDoc = doc(db, "users", payload.user_id);
    await updateDoc(UserDoc, {
      wishlist: arrayUnion(payload.product),
    });
    dispatch(AddItemToWishList(payload.product));
  };
};
