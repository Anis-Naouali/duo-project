const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const user = mongoose.model("user", userSchema);

module.exports = user;
