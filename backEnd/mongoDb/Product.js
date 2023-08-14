const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    price:Number,
    category: {
      type: String,
      enum: ["whey", "mass gainer", "pre workout"],

    }
  });
  
const Product = mongoose.model("Product", productSchema);

module.exports = Product;