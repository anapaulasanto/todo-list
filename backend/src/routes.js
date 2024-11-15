import express from 'express';
import { getAllTodos,createTodo, editTodo, deleteTodo } from './controllers/todoController.js';

const router = express.Router();

router.post('/createTodo', createTodo)
router.get('/todos', getAllTodos)
router.put('/todos/:id', editTodo)
router.delete('/todos/:id', deleteTodo)

export default router;