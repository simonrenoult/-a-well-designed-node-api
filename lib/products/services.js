const redis = require('../utils/redis')

exports.findAll = () => {
  return new Promise((resolve, reject) => {
    redis.get('products', (err, products) => {
      if (err) return reject(err)
      resolve(products || [])
    })
  })
}
