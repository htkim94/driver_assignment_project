import React from "react";
import ModalDelete from "./ModalDelete";
import { useDispatch } from "react-redux";
import "./ModalContainer.css";

export default function ModalContainer({
  mode,
  setModalOpen,
  order,
}) {
  const dispatch = useDispatch();

  const { _id: orderId, driverId, description, revenue, cost } = order;

  return (
    <div className="modal-background">
      {mode === "delete" && (
        <ModalDelete
          dispatch={dispatch}
          setModalOpen={setModalOpen}
          description={description}
          orderId={orderId}
          revenue={revenue}
          cost={cost}
        />
      )}
    </div>
  );
}
