require('dotenv').config()
const express = require('express')
const { Text } = require('./db/models')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  Text.findAll().then(data => {
    res.json(data)
  }).catch(err => {
    console.log(err)
    res.json({ error: err.message })
  })
})

app.post('/', (req, res) => {
  Text.create(req.body)
    .then(data => {
      res.json(data)
    }).catch(err => {
      res.json({ error: err.message })
    })
})

const PORT = process.env.PORT ?? 4040

app.listen(PORT, () => { console.log('On port ' + PORT) })
