const Redis = require('ioredis')
const conf = require('../../config')

module.exports = new Redis(conf.get('redis'))
