const { Router } = require("express");
const {
  getTodosById,
  createTaskByTodo,
} = require("../controllers/taskController");

const router = Router();

router.get("/:id", getTodosById);

router.post("/:id/task", createTaskByTodo);

module.exports = router;
