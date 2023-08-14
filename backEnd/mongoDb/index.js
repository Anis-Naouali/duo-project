const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/prota";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;
const Product = require ("./Product.js")

const getAllProducts = () => {
return Product.find()
};

module.exports = {
  db,
  getAllProducts
};


