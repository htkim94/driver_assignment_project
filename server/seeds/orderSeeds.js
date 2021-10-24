import Order from "../models/order.js";
import Driver from "../models/driver.js";

const createSeeds = async () => {
  const driver0 = new Driver({
    fullName: "unassigned",
  });

  const driver1 = new Driver({
    fullName: "Steve Williams",
  });

  const driver2 = new Driver({
    fullName: "Chris Horton",
  });

  const driver3 = new Driver({
    fullName: "Alex Novak",
  });

  const order1 = new Order({
    driver: driver1,
    description: "Construction Materials",
    revenue: 4200,
    cost: 100,
  });

  const order2 = new Order({
    driver: driver1,
    description: "Construction Materials",
    revenue: 3948.45,
    cost: 71.38,
  });

  const order3 = new Order({
    driver: driver1,
    description: "Wood and Lumber",
    revenue: 1950.52,
    cost: 263.88,
  });

  const order4 = new Order({
    driver: driver1,
    description: "Wood and Lumber",
    revenue: 4991.45,
    cost: 116.98,
  });

  const order5 = new Order({
    driver: driver2,
    description: "Meat",
    revenue: 6739.72,
    cost: 279.17,
  });

  const order6 = new Order({
    driver: driver2,
    description: "Meat",
    revenue: 3618.08,
    cost: 537.91,
  });

  const order7 = new Order({
    driver: driver2,
    description: "Fresh Produce",
    revenue: 5345.91,
    cost: 420.69,
  });

  const order8 = new Order({
    driver: driver2,
    description: "Farm Supplies",
    revenue: 7429.78,
    cost: 171.13,
  });

  const order9 = new Order({
    driver: driver2,
    description: "Rose Rocket Swag Shirts",
    revenue: 7231.98,
    cost: 310.38,
  })

  const order10 = new Order({
    driver: driver3,
    description: "Rose Rocket Swag Shirts",
    revenue: 5404.24,
    cost: 350.79,
  });

  const order11 = new Order({
    driver: driver0,
    description: "Fresh Seafood",
    revenue: 10000.00,
    cost: 707.51,
  });

  const order12 = new Order({
    driver: driver0,
    description: "Construction Materials",
    revenue: 15551.98,
    cost: 1007.51,
  });

  await driver0.save();
  await driver1.save();
  await driver2.save();
  await driver3.save();

  await order1.save();
  await order2.save();
  await order3.save();
  await order4.save();
  await order5.save();
  await order6.save();
  await order7.save();
  await order8.save();
  await order9.save();
  await order10.save();
  await order11.save();
  await order12.save();
}

export { createSeeds };