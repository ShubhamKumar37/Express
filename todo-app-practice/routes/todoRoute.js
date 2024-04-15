const { Router } = require("express");
const {createTodo} = require("../controllers/createTodo");
const {getAllTodo, getTodoById} = require("../controllers/getAllTodo");
const {updateTodoById} = require("../controllers/updateTodo");
const {deleteTodoById} = require("../controllers/deleteTodo");
const route = Router();

route.post("/createTodo", createTodo);
route.get("/getAllTodo", getAllTodo);
route.get("/getTodoById/:id", getTodoById);
route.put("/updateTodoById/:id", updateTodoById);
route.delete("/deleteTodoById/:id", deleteTodoById);

module.exports = route;