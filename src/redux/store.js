import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

// Import Combined Reducers
import rootReducer from "./store";

export const Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
