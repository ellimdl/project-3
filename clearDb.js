const { Auth, Product, User } = require("./models");

const clearAllData = async () => {
  await Auth.deleteMany({});
  await Product.deleteMany({});
  await User.deleteMany({});
};

clearAllData();

setInterval(() => {
  console.log("Countdown 2s and exit...");
  process.exit(0);
}, 2000);
