const express = require("express");
const router = express.Router();

const {createTodo} = require("../Controllers/createTodo");
const {updateTodoById} = require("../Controllers/updateTodo");
const {deleteTodoById} = require("../Controllers/deleteTodo");
const {getTodo, getTodoById} = require("../Controllers/getTodo");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodoById);
router.delete("/deleteTodo/:id", deleteTodoById);

module.exports = router;