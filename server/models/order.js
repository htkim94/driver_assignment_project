import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  description: String,
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
  revenue: Number,
  cost: Number,
  createdAt: { type: Date, default: new Date() },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;