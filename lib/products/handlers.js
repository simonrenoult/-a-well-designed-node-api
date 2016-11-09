const services = require('./services')

exports.findAll = (req, res) => {
  return services.findAll().then(products => {
    res.send(products)
  })
}
