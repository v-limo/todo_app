const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const getUser = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.status(200).json({ users })
})

const registerUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400)
    throw new Error('Please add data')
  }
  const { User } = req.body
  const createdUser = await User.create({ User })
  res.status(200).json(createdUser)
})

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) {
    res.status(400)
    throw new Error('User not found')
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedUser)
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('User not found')
  }
  await User.remove()
  res.status(200).json({ message: 'Deleted success!', id: req.params.id })
})

module.exports = { getUser, registerUser, deleteUser, updateUser }
