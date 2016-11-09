const express = require('express')
const app = express()
const helloWorld = require('./lib/hello-world')

app.get('/', helloWorld.sayHello)

module.exports = app
