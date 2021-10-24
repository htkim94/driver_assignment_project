export const rearrangeDriverData = (drivers) => {
  const result = {};

  for (let d of drivers) {
    result[d._id] = {
      fullName: d.fullName,
      id: d._id,
      orders: [],
    }
  }

  return result;
}

export const arrangeOrdersByDriver = (orders, drivers) => {
  const result = drivers;

  for (let order of orders) {
    let currentOrder = {
      _id: order._id,
      description: order.description,
      driver: order.driver,
      revenue: order.revenue,
      cost: order.cost,
    };
    let currentDriverId = order.driver;
    result[currentDriverId].orders.push(currentOrder);
  }

  return result;
}

export const allDataButUnassigned = (orders) => {
  const copy = {...orders};
  const unassignedBucket = Object.values(copy).filter(
    (order) => order.fullName === "unassigned"
  );
  delete copy[unassignedBucket?.[0]?.id];
  return copy;
}