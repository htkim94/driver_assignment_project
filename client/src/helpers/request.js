import { rearrangeDriverData, arrangeOrdersByDriver } from "./helpers";
import { orderActions } from "../state/actions";

export const fetchInitialDataAPI = (dispatch) => {
  fetch("http://localhost:5050/drivers")
    .then((response) => response.json())
    .then((drivers) => {
      const rearrangedDriverList = rearrangeDriverData(drivers);
      fetch("http://localhost:5050/orders")
        .then((response) => response.json())
        .then((orders) => {
          const sortedOrders = arrangeOrdersByDriver(
            orders,
            rearrangedDriverList
          );
          dispatch({
            type: orderActions.SET_INITIAL_LIST,
            payload: sortedOrders,
          });
        });
    });
};

export const rearrangeOrderAPI = (dispatch, { orderId, newDriverId, copy }) => {
  fetch("http://localhost:5050/orders", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId: orderId,
      newDriverId: newDriverId,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: orderActions.UPDATE_LIST,
        payload: copy,
      });
    });
};

export const updateOrderAPI = (
  dispatch,
  { orderId, newRevenue, newCost, driverId }
) => {
  fetch("http://localhost:5050/orders/updateOrder", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId: orderId,
      revenue: newRevenue,
      cost: newCost,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const newOrder = data;

      dispatch({
        type: orderActions.UPDATE_ORDER,
        payload: { orderId, driverId, newOrder },
      });
    });
};
