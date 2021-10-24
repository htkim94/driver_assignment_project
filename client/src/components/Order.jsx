import React, { useState } from "react";
import { MdDragHandle, MdModeEditOutline } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { orderActions } from "../state/actions";
import { updateOrderAPI } from "../helpers/request";
import { useDispatch } from "react-redux";
import "./Order.css";

export default function Order({ description, orderId, driverId, revenue, cost }) {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [newRevenue, setNewRevenue] = useState(revenue);
  const [newCost, setNewCost] = useState(cost);

  const onRevenueChange = (e) => {
    setNewRevenue(e.target.value);
  }
  const onCostChange = (e) => {
    setNewCost(e.target.value);
  }

  return (
    <div className="order">
      <MdDragHandle className={"handleIcon"} />
      <div className="description">{description}</div>
      <div className="revenue">
        {edit ? (
          <input type="number" id="revenue" value={newRevenue} onChange={onRevenueChange} placeholder="revenue" />
        ) : (
          `$${Number.parseFloat(revenue).toFixed(2)}`
        )}
      </div>
      <div className="cost">
        {edit ? (
          <input type="number" id="cost" value={newCost} onChange={onCostChange} placeholder="cost" />
        ) : (
          `$${Number.parseFloat(cost).toFixed(2)}`
        )}
      </div>
      {edit ? (
        <FaSave onClick={() => {
          setEdit(!edit)
          updateOrderAPI(dispatch, {orderId, newRevenue, newCost, driverId});
        }
        } />
      ) : (
        <MdModeEditOutline onClick={() => setEdit(!edit)} />
      )}
    </div>
  );
}
