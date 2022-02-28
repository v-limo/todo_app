const express = require('express')
const router = express.Router()
const {
  getUser,
  registerUser,
  loginUser,
} = require('../controller/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/', getUser)

module.exports = router
