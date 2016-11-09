const express = require('express')
const conf = require('./config')
const PORT = conf.get('port') || 3000
const app = express()

app.get('/', (req, res) => {
  res.send('hello foo!')
})

app.listen(PORT)
