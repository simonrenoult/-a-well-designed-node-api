const env = process.env.NODE_ENV || 'development'
const nconf = require('nconf')
const path = require('path')

module.exports = nconf
    .argv()
    .env({ lowerCase: true })
    .file(path.resolve(__dirname, `./${env}.json`))
