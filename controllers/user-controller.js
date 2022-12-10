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
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Find one user via ID (GET) - code different
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
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Delete one user via ID (DELETE)
const deleteOne = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
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
