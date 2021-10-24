import Driver from "../models/driver.js";

export const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();

    res.status(200).json(drivers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}