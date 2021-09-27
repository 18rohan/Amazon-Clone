// Import actions
import { ADD_WISHLIST_ITEM } from "../actions/WishListActions.js";

const INITIAL_STATE = {
  WishListItems: [],
};

const WishListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WISHLIST_ITEM:
      return {
        ...state,
        WishListItems: [...state.WishListItems, action.payload],
      };
    default:
      return state;
  }
};

export default WishListReducer;
