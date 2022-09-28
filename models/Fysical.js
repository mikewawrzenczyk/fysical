const mongoose = require('mongoose')

const FysicalSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true,
    default: 285
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Fysical', FysicalSchema)