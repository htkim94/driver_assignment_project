import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import modalReducer from "./modalReducer";

const reducers = combineReducers({
  orders: orderReducer,
  modalInfo: modalReducer,
});

export default reducers;