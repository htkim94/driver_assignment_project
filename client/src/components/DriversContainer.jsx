import React from "react";
import Driver from "./Driver";
import './DriversContainer.css';

export default function DriversContainer({ drivers, orderData }) {


  return (
    <div className="drivers">
      { drivers.map((driver, i) => {
        return (
          <Driver key={i} name={driver.fullName} orders={orderData[driver.id].orders} droppableId={driver.id}/>
        )
      }) }
    </div>
  )
}