module.exports = app => {
  app.use(app.get('middlewares').registerService('products', require('./services')))
  require('./routes')(app)
}
