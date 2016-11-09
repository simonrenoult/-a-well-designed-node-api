const supertest = require('supertest')
const chai = require('chai')
const app = require('../../')

const expect = chai.expect
const request = supertest(app)

describe('HelloWorld', () => {
  describe('When I send a GET on /products', () => {
    describe('When the collection is empty', () => {
      it('returns 200', () => request.get('/products').expect(200))
      it('returns an empty list', () => request.get('/products').expect(res => {
        expect(res.body).to.deep.equal([])
      }))
    })
  })
})
