const { Product } = require("../models");
const httpStatus = require("http-status");

// Add new product (POST)
const create = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Find all products (GET)
const findAll = async (req, res) => {
  try {
    console.log(req.query);
    const result = await Product.find(req.query).exec();
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Find one product via ID (GET)
const findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const fetched = await Product.findOne({ _id: id });
    res.json(fetched);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Update one product via ID (PUT)
const updateOne = async (req, res) => {
  try {
    const id = req.params.id;

    const updated = await Product.updateOne({ _id: id }, { $set: req.body });
    res.json(updated);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Delete one product via ID (DELETE)
const deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Product.deleteOne({ _id: id });
    res.json(deleted);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne,
};
