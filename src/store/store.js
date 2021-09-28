import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import RootReducer from "../store/reducers/root-reducer.js";

const middlewares = [logger, thunkMiddleware];
export const Store = createStore(RootReducer, applyMiddleware(...middlewares));
export const persistStor = persistStore(Store);

const exporter = { Store, persistStor };
export default exporter;
