const express = require('express')
const app = express()

require('./lib/hello-world')(app)
require('./lib/products')(app)

module.exports = app
