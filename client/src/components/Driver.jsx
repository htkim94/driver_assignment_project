import React from "react";
import Order from "./Order";
import "./Driver.css";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function Driver({ name, orders, droppableId, setModalStatus, setModalOpen }) {
  return (
    <div className="driver-container">
      <div className="title">Driver {name}</div>
      <div className="headers">
        <div>Description</div>
        <div>Revenue</div>
        <div>Cost</div>
      </div>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            className="orderList"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {orders.map((order, i) => {
              return (
                <Draggable key={order._id} draggableId={order._id} index={i}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Order
                        key={order._id}
                        order={order}
                        setModalOpen={setModalOpen}
                        setModalStatus={setModalStatus}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
    </div>
  );
}
