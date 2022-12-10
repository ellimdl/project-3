// Import dependencies
const mongoose = require("mongoose");
const Cart = require("./cart.js");
const Order = require("./order.js");
const Product = require("./product.js");
const User = require("./user.js");
require("dotenv").config();

// Config
const mongoURI = process.env.MONGO_URL;
const db = mongoose.connection;
console.log(mongoURI);
// Connect
mongoose.connect(mongoURI, () => {
  console.log("Connection to Mongo DB established.");
});

// Helpful events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// Export models
module.exports = {
  Cart,
  Order,
  Product,
  User,
};
