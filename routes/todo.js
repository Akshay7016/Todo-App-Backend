const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");
const { getTodoById } = require("../controllers/getTodoById");
const { updateTodoById } = require("../controllers/updateTodoById");
const { deleteTodo } = require("../controllers/deleteTodo");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodoById);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
