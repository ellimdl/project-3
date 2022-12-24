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

const products = [
  {
    title: "Gamer Backpack",
    desc: "Modern and versatile, this generously sized backpack is ideal for daily commutes to work or school, and for travels that take you further. A multitude of organizational pockets for everything from your laptop to your phone ensure you can easily pack it all in and carry it in comfort.",
    img: "https://www.tumi.sg/dw/image/v2/AAWQ_PRD/on/demandware.static/-/Sites-Tumi/default/dw5e32da40/images/tu-142480/hi-res/142480_1041_hi-res_main_1.jpg?sw=750&sh=911",
    categories: ["gaming", "work", "school", "travel", "gamer"],
    size: "Large",
    color: "Black",
    price: 500,
  },
  {
    title: "Rugged Backpack",
    desc: "Built to perform, the Rugged Backpack features a flap lid with a strap that adjusts to accommodate your haul. The L-zip opening makes for simple packing while maximizing the carry capacity. There are dedicated pockets for your laptop, tablet, phone, and water bottle.",
    img: "https://www.tumi.sg/dw/image/v2/AAWQ_PRD/on/demandware.static/-/Sites-Tumi/default/dw4956c816/images/tu-142481/hi-res/142481_1041_hi-res_main_1.jpg?sw=750&sh=911",
    categories: ["outdoors", "work", "school", "travel", "rugged"],
    size: "Large",
    color: "Black",
    price: 450,
  },
  {
    title: "Classic Backpack",
    desc: "Spotlighting our utilitarian inspiration, this backpack is crafted with durable ripstop inspired by military parachute fabric. This compact style has smart organization for commuting and travel essentials, as well as a dedicated padded laptop compartment.",
    img: "https://www.tumi.sg/dw/image/v2/AAWQ_PRD/on/demandware.static/-/Sites-Tumi/default/dwcac979ea/images/tu-142614/hi-res/142614_1041_hi-res_main_1.jpg?sw=750&sh=911",
    categories: ["work", "school", "travel", "classic"],
    size: "Medium",
    color: "Black",
    price: 400,
  },
  {
    title: "Fashionista Backpack",
    desc: "Bring forward-thinking design to your everyday commute and big trips and the Fashionista Backpack. The lustrous fabric gives the piece a chic sheen and embodies its contemporary style. The unique buckled design echoes the utilitarian roots of the spacious bag.",
    img: "https://www.tumi.sg/dw/image/v2/AAWQ_PRD/on/demandware.static/-/Sites-Tumi/default/dw312a9aab/images/tu-142369/hi-res/142369_1041_hi-res_main_1.jpg?sw=750&sh=911",
    categories: ["women", "work", "school", "travel", "fashionista"],
    size: "Small",
    color: "Black",
    price: 350,
  },
  {
    title: "Elegance Backpack",
    desc: "Modern, elegant, and multifunctional, this backpack includes a padded laptop pocket, a water-resistant water bottle pocket that can be accessed from both in and outside the bag, and multiple smaller pockets to keep your essentials organized.",
    img: "https://www.tumi.sg/dw/image/v2/AAWQ_PRD/on/demandware.static/-/Sites-Tumi/default/dwe93880f7/images/tu-125102/hi-res/125102_1077_hi-res_main_1.jpg?sw=750&sh=911",
    categories: ["women", "work", "school", "travel", "elegance"],
    size: "Small",
    color: "Black",
    price: 300,
  },
];

const users = [
  {
    username: "Username_1",
    email: "username1@email.com",
    password: "password1",
    isAdmin: false,
  },
  {
    username: "Username_2",
    email: "username2@email.com",
    password: "password2",
    isAdmin: false,
  },
];

const carts = [
  {
    userId: "Username_1",
    products: [{ productId: "Gamer Backpack", quantity: 2 }],
  },
  {
    userId: "Username_2",
    products: [{ productId: "Fashionista Backpack", quantity: 1 }],
  },
];

const orders = [
  {
    userId: "Username_1",
    name: "Ryan",
    products: [
      { productId: "Gamer Backpack", title: "Gamer Backpack", quantity: 2 },
    ],
    amount: 1000,
    address: "78 Hotel California",
    email: "ryan@email.com",
    status: "dispatched",
  },
  {
    userId: "Username_2",
    name: "Elijah",
    products: [
      {
        productId: "Fashionista Backpack",
        title: "Fashionista Backpack",
        quantity: 1,
      },
    ],
    amount: 350,
    address: "33 Beverly Hills",
    email: "elijah@email.com",
    status: "pending",
  },
];

const performSeed = async () => {
  const createdProducts = await Product.insertMany(products);
  console.log(`Created ${createdProducts.length} products`);

  const createdUsers = await User.insertMany(users);
  console.log(`Created ${createdUsers.length} users`);

  const createdCarts = await Cart.insertMany(carts);
  console.log(`Created ${createdCarts.length} carts`);

  const createdOrders = await Order.insertMany(orders);
  console.log(`Created ${createdOrders.length} orders`);
};

// performSeed();

performSeed().then(() => {
  mongoose.connection.close();
});

setInterval(() => {
  console.log("Countdown 2s and exit...");
  process.exit(0);
}, 2000);
