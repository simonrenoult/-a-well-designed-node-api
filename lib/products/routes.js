const handlers = require('./handlers')

module.exports = app => {
  app.get('/products', handlers.findAll)
}
