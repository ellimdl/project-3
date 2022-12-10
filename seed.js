const { Auth, Product, User } = require("./models");

const products = [
  {
    name: "Backpack 1",
    price: 300,
  },
  {
    name: "Backpack 2",
    price: 350,
  },
  {
    name: "Backpack 3",
    price: 400,
  },
];

const users = [
  {
    name: "Username 1",
    email: "username1@email.com",
  },
  {
    name: "Username 2",
    email: "username2@email.com",
  },
  {
    name: "Username 3",
    email: "username3@email.com",
  },
];

const performSeed = async () => {
  const createdProducts = await Product.insertMany(products);
  console.log(`Created ${createdProducts.length} products`);

  const createdUsers = await User.insertMany(users);
  console.log(`Created ${createdUsers.length} users`);
};

performSeed();

setInterval(() => {
  console.log("Countdown 2s and exit...");
  process.exit(0);
}, 2000);
