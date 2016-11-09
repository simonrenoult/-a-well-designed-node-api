const express = require('express')
const app = express()

require('./lib/hello-world')(app)

module.exports = app
