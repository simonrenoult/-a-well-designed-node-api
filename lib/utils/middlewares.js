const redis = require('./redis')

exports.addStore = (req, res, next) => {
  req.store = redis()
  next()
}

exports.addServicesRegistry = (req, res, next) => {
  req.services = {}
  next()
}

exports.registerService = (serviceName, service) => {
  return (req, res, next) => {
    req.services[serviceName] = service(req.store)
    next()
  }
}
