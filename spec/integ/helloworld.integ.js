const supertest = require('supertest')
const app = require('../../')

const request = supertest(app)

describe('HelloWorld', () => {
  describe('When I send a GET on /', () => {
    it('returns 200', () => request.get('/').expect(200))
    it('returns hello world', () => request.get('/').expect('hello world!'))
  })
})
