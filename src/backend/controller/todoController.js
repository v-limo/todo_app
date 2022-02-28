const asyncHandler = require('express-async-handler')

const getTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Success!' })
})

const setTodo = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400)
    // throw new Error('Please add data')
  }
  res.status(200).json({ message: 'Success!' })
})

const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Success!' })
})

const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Success!' })
})

module.exports = { getTodo, setTodo, deleteTodo, updateTodo }
