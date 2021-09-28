import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Redux Components
import UserReducer from "../reducers/UserReducer.js";
import CartReducer from "../reducers/CartReducer.js";
import WishListReducer from "../reducers/WishListReducer.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const RootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  wishlist: WishListReducer,
});

export default persistReducer(persistConfig, RootReducer);
