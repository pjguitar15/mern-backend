const express = require('express')
const mongoose = require('mongoose')
const PersonModel = require('./models/Person')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

// converts to json format
app.use(express.json())

// connection to database
mongoose.connect('mongodb+srv://pjguitar15:Nktw1aaa3@cluster0.zl3q5.mongodb.net/people?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.post('/insert', async (req, res) => {

  const personName = req.body.personName
  const age = req.body.age
  const person = new PersonModel({ personName, age })

  try {

    await person.save()
    // without respose, localhost 3001 wont stop loading
    res.send('Inserted Data')
  } catch (err) {
    console.log(err)
  }
})



app.get('/read', async (req, res) => {
  PersonModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }

    res.send(result)

  })
})

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is listening to port 3001')
})