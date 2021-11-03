import { orderActions } from "../actions";
import _ from "lodash";

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case orderActions.SET_INITIAL_LIST:
      return action.payload;

    case orderActions.UPDATE_LIST:
      return action.payload;

    case orderActions.UPDATE_ORDER:
      const newOrderStateForUpdate = _.cloneDeep(state);
      const { orderId, driverId, newOrder } = action.payload;
      const currentDriverForUpdate = newOrderStateForUpdate[driverId];
      let orderIndex;
      currentDriverForUpdate.orders.forEach((order, index) => {
        if (order._id === orderId) orderIndex = index;
      });
      newOrderStateForUpdate[driverId].orders[orderIndex] = newOrder;
      return newOrderStateForUpdate;

    case orderActions.DELETE_ORDER:
      const newOrderStateForDelete = _.cloneDeep(state);
      const { driver, _id } = action.payload;
      const currentDriverForDelete = newOrderStateForDelete[driver];
      currentDriverForDelete.orders.forEach((order, index) => {
        if (order._id === _id) currentDriverForDelete.orders.splice(index, 1);
      });
      return newOrderStateForDelete;

    default:
      return state;
  }
};

export default orderReducer;
