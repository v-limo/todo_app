const express = require('express')
const router = express.Router()

const protect = require('../middleware/authMiddleware')

const {
  getUser,
  registerUser,
  loginUser,
} = require('../controller/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/', protect, getUser)

module.exports = router
