const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/prota";
mongoose
  .connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("db mongo connected");
  })
  .catch((err) => console.log(err));
const db = mongoose.connection;
const product = require("./Product.js");
const users = require("./users.js");
const getAllProducts = () => {
  return product.find();
};
const addProduct = (obj) => {
  return product.create(obj);
};
const uppProduct = (id, obj) => {
  return product.findByIdAndUpdate(id, obj);
};
const deleteProduct = (id) => {
  return product.findByIdAndDelete(id);
};

//users:
const getAllusers = () => {
  return users.find();
};
const getUser = (email) => {
  return users.find({ "email": email});
};
const addadmin = (obj) => {
  return users.create(obj);
};
module.exports = {
  db,
  getAllProducts,
  addProduct,
  uppProduct,
  deleteProduct,
  getAllusers,
  getUser,
  addadmin,
};
