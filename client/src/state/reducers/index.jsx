import { combineReducers } from "redux";
import orderReducer from "./orderReducer";

const reducers = combineReducers({
  orders: orderReducer,
});

export default reducers;