require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const { unknownEndpoint } = require('./middleware/unknownEndpoint')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
const app = express()

app.use(morgan('tiny'))
app.use(express.json())
// app.use(express.bodyParser())

app.use('/api/v1/todos', require('./routes/todoRoutes'))

connectDB()

app.get('/', (req, res) => {
  res.json({ Data: 'Hey' })
})

app.use(errorHandler)
app.use(unknownEndpoint)

app.listen(PORT, () => {
  console.log('Express server listening on port', PORT)
})
