const express = require('express');
const taskController = require('./controllers/taskController');

const router = express.Router();
const tasksMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', taskController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus, taskController.updateTask);

module.exports = router;