const { Cart, Order, Product, User } = require("./models");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("Mongo Connection Open!!");
  })
  .catch((err) => {
    console.log(err);
  });

const clearAllData = async () => {
  await Cart.deleteMany({});
  await Order.deleteMany({});
  await Product.deleteMany({});
  await User.deleteMany({});
};

clearAllData().then(() => {
  mongoose.connection.close();
});

setInterval(() => {
  console.log("Countdown 2s and exit...");
  process.exit(0);
}, 2000);
