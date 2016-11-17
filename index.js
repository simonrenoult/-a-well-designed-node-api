const express = require('express')
const middlewares = require('./lib/utils/middlewares')
const app = express()

app.use(middlewares.addStore)
app.use(middlewares.addServicesRegistry)
app.set('middlewares', middlewares)

require('./lib/hello-world')(app)
require('./lib/products')(app)

module.exports = app
