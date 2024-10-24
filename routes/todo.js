import { Router } from "express";
import { addTodo, countTodos, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todo.js";
import {  remoteUpload } from "../middlewares/upload.js";

// Create a router
const todoRouter = Router();

// Define routes
todoRouter.post('/todos', remoteUpload.single('icon'), addTodo);

todoRouter.get('/todos', getTodos);

// overview
todoRouter.get('/todos/count', countTodos);

todoRouter.get('/todos/:id', getTodo);

todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todos/:id', deleteTodo);

// Export router
export default todoRouter;