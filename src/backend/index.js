const express = require('express')
const dotenv = require('dotenv').config()
var morgan = require('morgan')

const PORT = process.env.PORT || 5000
const app = express()

app.use(morgan('tiny'))

app.use('/api/v1/todos', require('./routes/todoRoutes'))

app.get('/', (req, res) => {
  res.json({ Data: 'Hey' })
})

app.listen(PORT, () => {
  console.log('Express server listening on port', PORT)
})
