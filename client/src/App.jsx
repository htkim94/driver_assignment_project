import React, { useEffect } from "react";
import DriversContainer from "./components/DriversContainer";
import OrderContainer from "./components/OrderContainer";
import { allDataButUnassigned } from "./helpers/helpers";
import { fetchInitialDataAPI, rearrangeOrderAPI } from "./helpers/request";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "./state/actions";
import { DragDropContext } from "react-beautiful-dnd";
import _ from "lodash";
import "./App.css";

const App = () => {
  const orders = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchInitialDataAPI(dispatch);
  }, []);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceId = source.droppableId;
    const sourceIndex = source.index;

    const destinationId = destination.droppableId;
    const destinationIndex = destination.index;

    //moving within the same table
    if (sourceId === destinationId) {
      const copy = _.cloneDeep(orders);
      copy[sourceId].orders.splice(
        destinationIndex,
        0,
        copy[sourceId].orders.splice(sourceIndex, 1)[0]
      );
      dispatch({
        type: orderActions.UPDATE_LIST,
        payload: copy,
      });
      //moving between the table
    } else {
      const copy = _.cloneDeep(orders);
      //get and change source Item driver to destinationId's id
      let sourceItem = copy[sourceId].orders.splice(sourceIndex, 1)[0];
      const newDriverId = copy[destinationId].id;
      sourceItem.driver = newDriverId;
      copy[destinationId].orders.splice(destinationIndex, 0, sourceItem);
      const orderId = copy[destinationId].orders[destinationIndex]._id;

      rearrangeOrderAPI(dispatch, { orderId, newDriverId, copy });
    }
  };

  const assignedOrders = allDataButUnassigned(orders);
  const unassignedBucket = Object.values(orders).filter(
    (order) => order.fullName === "unassigned"
  );

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        {unassignedBucket.length && (
          <OrderContainer
            orders={unassignedBucket[0].orders}
            droppableId={unassignedBucket[0].id}
          />
        )}
        <DriversContainer
          drivers={Object.values(assignedOrders)}
          orderData={assignedOrders}
        />
      </DragDropContext>
    </div>
  );
};

export default App;
