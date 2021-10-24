import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, },
    createdAt: { type: Date, default: new Date() },
  }
);

const Driver = mongoose.model('Driver', driverSchema);

export default Driver;