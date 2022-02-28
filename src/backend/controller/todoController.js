const asyncHandler = require('express-async-handler')
const Todo = require('../models/todoModel')

const getTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.find({})
  res.status(200).json({ todos })
})

const setTodo = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400)
    throw new Error('Please add data')
  }
  const { todo } = req.body
  const createdtodo = await Todo.create({ todo })
  res.status(200).json(createdtodo)
})

const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  if (!todo) {
    res.status(400)
    throw new Error('Todo not found')
  }
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedTodo)
})

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error('Todo not found')
  }
  await todo.remove()
  res.status(200).json({ message: 'Deleted success!', id: req.params.id })
})

module.exports = { getTodo, setTodo, deleteTodo, updateTodo }
