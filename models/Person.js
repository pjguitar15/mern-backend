const mongoose = require('mongoose')
const PersonSchema = new mongoose.Schema({
  personName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  }
})

// string is collection name
const Person = mongoose.model('persondata', PersonSchema)
module.exports = Person