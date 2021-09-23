import { combineReducer } from "redux";
// Import reducers
import { UserReducer } from "user/UserReducer";
import { CartReducer } from "cart/CartReducer";

const rootReducer = combineReducer({
  user: UserReducer,
  cart: CartReducer,
});

export default rootReducer;
