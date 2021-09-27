import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

// Redux Components
import UserReducer from "../src/store/reducers/UserReducer.js";
import CartReducer from "../src/store/reducers/CartReducer.js";
import WishListReducer from "./store/reducers/WishListReducer.js";

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  wishlist: WishListReducer,
});
const middlewares = [logger, thunkMiddleware];
const Store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
