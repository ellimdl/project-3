const express = require("express");
const app = express();
const cors = require("cors");

const {
  create: createCart,
  findAll: findAllCart,
  findOne: findOneCart,
  updateOne: updateOneCart,
  deleteOne: deleteOneCart,
} = require("../controllers/cart-controller");

const {
  create: createOrder,
  findAll: findAllOrder,
  findOne: findOneOrder,
  updateOne: updateOneOrder,
  deleteOne: deleteOneOrder,
} = require("../controllers/order-controller");

const {
  create: createProduct,
  findAll: findAllProduct,
  findOne: findOneProduct,
  updateOne: updateOneProduct,
  deleteOne: deleteOneProduct,
} = require("../controllers/product-controller");

const {
  create: createUser,
  findAll: findAllUser,
  findOne: findOneUser,
  updateOne: updateOneUser,
  deleteOne: deleteOneUser,
} = require("../controllers/user-controller");

// Middleware
app.use(express.json());
app.use(cors());

// Endpoints
app.post("/carts", createCart);
app.get("/carts", findAllCart);
app.get("/carts/:id", findOneCart);
app.put("/carts/:id", updateOneCart);
app.delete("/carts/:id", deleteOneCart);

app.post("/orders", createOrder);
app.get("/orders", findAllOrder);
app.get("/orders/:id", findOneOrder);
app.put("/orders/:id", updateOneOrder);
app.delete("/orders/:id", deleteOneOrder);

app.post("/products", createProduct);
app.get("/products", findAllProduct);
app.get("/products/:id", findOneProduct);
app.put("/products/:id", updateOneProduct);
app.delete("/products/:id", deleteOneProduct);

app.post("/users", createUser);
app.get("/users", findAllUser);
app.get("/users/:id", findOneUser);
app.put("/users/:id", updateOneUser);
app.delete("/users/:id", deleteOneUser);

// Start server
app.listen(5000, () => {
  console.log("Listening to port 3000...");
});
