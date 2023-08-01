const { Router } = require("express");
const {
  createTodoByUser,
  getTodoByUser,
} = require("../controllers/todoController");

const router = Router();

router.get("/:id/todos", getTodoByUser);

router.post("/:id/todos", createTodoByUser);

module.exports = router;
