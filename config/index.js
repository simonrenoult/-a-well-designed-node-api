const env = process.env.NODE_ENV || 'development'
const nconf = require('nconf')
const path = require('path')

console.log(`Current environment: %s`, env)

module.exports = nconf
    .argv()
    .env({ lowerCase: true, separator: '__' })
    .file(path.resolve(__dirname, `./${env}.json`))
