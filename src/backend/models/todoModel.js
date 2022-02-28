const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema(
  {
    todo: { type: 'String', required: true },
    dateLine: { type: Date, default: Math.random(new Date()) },
    complete: { type: Boolean, default: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Todo', TodoSchema)
