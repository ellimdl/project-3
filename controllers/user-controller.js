const { User } = require("../models");
const httpStatus = require("http-status");

// Add new user (POST)
const create = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Find all users (GET)
const findAll = async (req, res) => {
  try {
    console.log(req.query);
    const result = await User.find(req.query).exec();
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Find one user via ID (GET)
const findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const fetched = await User.findOne({ _id: id });
    res.json(fetched);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Update one user via ID (PUT)
const updateOne = async (req, res) => {
  try {
    const id = req.params.id;

    const updated = await User.updateOne({ _id: id }, { $set: req.body });
    res.json(updated);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Delete one user via ID (DELETE)
const deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await User.deleteOne({ _id: id });
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
