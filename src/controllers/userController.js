const generateId = require("../helpers/generateId");
const { users } = require("../models/userModel");

const getUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = { id: generateId(users), firstName, lastName, email };
  users.push(newUser);
  res.json(newUser);
};

const getUserById = (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
};
