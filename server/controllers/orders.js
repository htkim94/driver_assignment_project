import Order from "../models/order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const moveOrder = async (req, res) => {
  try {
    const { orderId, newDriverId } = req.body;
    const order = await Order.find().updateOne(
      { _id: orderId },
      { $set: {
          driver: newDriverId
      }}
    );

    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const updateOrder = async (req, res) => {
  try {
    const { orderId, revenue, cost } = req.body;
    const order = await Order.findOneAndUpdate(
      { _id: orderId },
      { $set: {
          revenue,
          cost,
      }},
      { returnOriginal: false }
    );

    res.status(200).json(order);
  } catch {
    res.status(404).json({message: error.message});
  }
}