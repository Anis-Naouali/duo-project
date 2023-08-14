const { db } = require("./index.js");
const Product = require("./Product.js");

const sampleData = require("./data.json");

const insertSampleProducts = function () {
  Product.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSampleProducts();