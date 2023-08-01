const generateId = require("../helpers/generateId");
const { todos } = require("../models/todoModel");
const { users } = require("../models/userModel");

const createTodoByUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { title, keywords } = req.body;

  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const newTodo = { id: generateId(todos), title, keywords, userId };
  todos.push(newTodo);

  res.json(newTodo);
};

const getTodoByUser = (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const userTodos = todos.filter((todo) => todo.userId === userId);

  res.json(userTodos);
};

module.exports = {
  createTodoByUser,
  getTodoByUser,
};
