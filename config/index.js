const env = process.env.NODE_ENV || 'development'
const nconf = require('nconf')

module.exports = nconf
    .argv()
    .env({ lowerCase: true })
    .file(`./${env}.json`)
