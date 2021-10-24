import express from "express";
import cors from "cors";

//Db
import { connectDb } from "./db/db.js";

//Schema
import models from "./models/index.js";

//Function to initiate seed
import { createSeeds } from "./seeds/orderSeeds.js";

//Routes
import ordersRoutes from './routes/orders.js';
import driverRoutes from './routes/drivers.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/orders', ordersRoutes);
app.use('/drivers', driverRoutes);


const PORT = process.env.PORT || 5050;

connectDb()
  .then(async () => {

    //delete and recreate seeds when server restarts (only for development stage)
    await models.Order.deleteMany({});
    await models.Driver.deleteMany({});
    createSeeds();

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}!`);
    })
  })
  .catch((error) => console.log(error.message));

