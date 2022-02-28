const express = require('express')
const router = express.Router()
const {
  getUser,
  registerUser,
  deleteUser,
  updateUser,
} = require('../controller/userController')

router.get('/', getUser)

router.post('/', registerUser)

router.put('/:id', updateUser).delete('/:id', deleteUser)

module.exports = router
