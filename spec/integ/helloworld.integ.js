const chai = require('chai')
const supertest = require('supertest')
const app = require('../../')

const request = supertest(app)
const expect = chai.expect

describe('HelloWorld', () => {
  describe('When I send a GET on /', () => {
    it('returns 200', () => request.get('/').expect(200))
    it('returns hello world', () => request.get('/').expect('hello world!'))
  })
})
