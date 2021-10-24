import { orderActions } from "../actions";
import _ from "lodash";

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case orderActions.SET_INITIAL_LIST:
      return action.payload;
    case orderActions.UPDATE_LIST:
      return action.payload;
    case orderActions.UPDATE_ORDER:
      const newOrderState = _.cloneDeep(state);
      const { orderId, driverId, newOrder } = action.payload;
      const currentDriver = newOrderState[driverId]
      let orderIndex;
      currentDriver.orders.forEach((order, index) => {
        if(order._id === orderId) orderIndex = index; 
      })
      newOrderState[driverId].orders[orderIndex] = newOrder;
      return newOrderState;
    default:
      return state;
  }
}

export default orderReducer;