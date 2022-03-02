const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
  let { email, password, username } = req.body

  if (!email || !password) {
    res.status(400)
    throw new Error('Please add all required credentials')
  }

  const userExiest = await User.findOne({ email })
  if (userExiest) {
    res.status(400)
    throw new Error('User already exists')
  }

  if (!username) {
    username = req.body.email
  }

  let salt = await bcrypt.genSaltSync(10)
  let hashPassword = await bcrypt.hash(password, salt)
  const createdUser = await User.create({
    email: email.toLowerCase(),
    username,
    password: hashPassword,
  })

  if (createdUser) {
    res
      .status(201)

      .json({
        _id: createdUser._id,
        username: createdUser.username,
        email,
        token: generateToken(createdUser._id, email),
      })
  } else {
    res.status(400).json('invalid email or password')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: email.toLowerCase(),
      token: generateToken(user._id, email),
    })
  } else {
    res.status(400).json('Unauthenticated')
  }
})

const getUser = asyncHandler(async (req, res) => {
  const {
    _id: id,
    username,
    email,
  } = await User.findById(req.user.id).select('-password')
  res.status(200).json({ id, username, email })
})

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, { expiresIn: '1d' })
}
module.exports = { getUser, registerUser, loginUser }
