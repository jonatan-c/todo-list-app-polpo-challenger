const { Router } = require("express");
const {
  getUsers,
  createUser,
  getUserById,
} = require("../controllers/userController");
const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

module.exports = router;
