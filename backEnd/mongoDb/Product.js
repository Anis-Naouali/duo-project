const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const productSchema = new mongoose.Schema({
    name: String,
    price:String,
    description: String,
    categories: {
      type: String,
      enum: ["whey", "mass gainer", "pre workout"],     
    },
    imageUrl: String
  });
  
const Product = mongoose.model("Product", productSchema);

module.exports = Product;