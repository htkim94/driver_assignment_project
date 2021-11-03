import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Order from "./Order";
import "./OrderContainer.css";

export default function OrderContainer({ setModalOpen, setModalStatus, orders, droppableId }) {
  return (
    <div className="order-container">
      <div className="title">Unassigned Orders</div>
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
