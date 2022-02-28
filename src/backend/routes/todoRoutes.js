const express = require('express')
const router = express.Router()
const {
  getTodo,
  setTodo,
  deleteTodo,
  updateTodo,
} = require('../controller/todoController')

router.get('/', getTodo).post('/', setTodo)

router.put('/:id', updateTodo).delete('/:id', deleteTodo)

module.exports = router
