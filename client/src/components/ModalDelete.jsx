import React from "react";
import { deleteOrderAPI } from "../helpers/request";
import "./ModalDelete.css";

export default function ModalDelete({
  setModalOpen,
  dispatch,
  description,
  orderId,
  revenue,
  cost,
}) {
  return (
    <div className="delete-modal-container">
      <div className="delete-message">
        <h1>Are You Sure You Want To Delete?</h1>
      </div>
      <div className="modal-order">
        <div className="modal modal-order-detail">Order Detail</div>
        <div className="modal modal-description">
          Description: {description}
        </div>
        <div className="modal modal-revenue">
          Revenue: ${Number.parseFloat(revenue).toFixed(2)}
        </div>
        <div className="modal modal-cost">
          Cost: ${Number.parseFloat(cost).toFixed(2)}
        </div>
      </div>
      <div className="modal-footer">
        <button
          onClick={() => {
            setModalOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            deleteOrderAPI(dispatch, orderId);
            setModalOpen(false);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
