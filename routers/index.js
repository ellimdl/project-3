const express = require("express");
const app = express();

const {
  create: createAuth,
  findAll: findAllAuth,
  findOne: findOneAuth,
  updateOne: updateOneAuth,
  deleteOne: deleteOneAuth,
} = require("../controllers/auth-controller");

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

// Endpoints
app.post("/auth", createAuth);
app.get("/auth", findAllAuth);
app.get("/auth/:id", findOneAuth);
app.put("/auth/:id", updateOneAuth);
app.delete("/auth/:id", deleteOneAuth);

app.post("/product", createProduct);
app.get("/product", findAllProduct);
app.get("/product/:id", findOneProduct);
app.put("/product/:id", updateOneProduct);
app.delete("/product/:id", deleteOneProduct);

app.post("/user", createUser);
app.get("/user", findAllUser);
app.get("/user/:id", findOneUser);
app.put("/user/:id", updateOneUser);
app.delete("/user/:id", deleteOneUser);

// Start server
app.listen(3000, () => {
  console.log("Listening to port 3000...");
});
