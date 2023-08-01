const generateId = require("../helpers/generateId");
const { tasks } = require("../models/taskModel");
const { todos } = require("../models/todoModel");

const getTodosById = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === todoId);
  if (!todo) {
    return res.status(404).json({ error: "To-Do not found" });
  }
  const todoTasks = tasks.filter((task) => task.todoId === todoId);
  const todoWithTasks = { ...todo, todos: todoTasks };
  res.json(todoWithTasks);
};

const createTaskByTodo = (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find((todo) => todo.id === todoId);
  if (!todo) {
    return res.status(404).json({ error: "To-Do not found" });
  }

  const newTask = {
    id: generateId(tasks),
    title,
    completed: completed ? 1 : 0,
    todoId,
    userId: todo.userId,
  };
  tasks.push(newTask);

  res.json(newTask);
};

module.exports = {
  getTodosById,
  createTaskByTodo,
};
