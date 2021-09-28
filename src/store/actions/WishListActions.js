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
