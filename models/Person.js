const mongoose = require('mongoose')
const PersonSchema = new mongoose.Schema({
  personName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true
  }
})

// string is collection name
const Person = mongoose.model('person', PersonSchema)
module.exports = Person