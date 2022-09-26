const mongoose = require('mongoose')

const FysicalSchema = new mongoose.Schema({
  weight: {
    type: String,
    required: true,
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
