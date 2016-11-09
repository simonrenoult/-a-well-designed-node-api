const sinon = require('sinon')
const chai = require('chai')
const proxyquire = require('proxyquire').noCallThru()

const expect = chai.expect
const fakeRedis = { get () {} }
const productsServices = proxyquire('../../../lib/products/services', {
  '../utils/redis': fakeRedis
})

describe('products services', () => {
  describe('.findAll()', () => {
    before(() => {
      // Given
      this.redisGetStub = sinon.stub(fakeRedis, 'get')
    })
    beforeEach(() => {
      this.redisGetStub.reset()
    })
    after(() => {
      this.redisGetStub.restore()
    })
    describe('when redis.get fails', () => {
      before(() => {
        // Given
        this.redisGetStub.callsArgWith(1, new Error('fakeError'), null)
      })
      it('returns an error', () => {
        // When
        const findAllPromise = productsServices.findAll()

        // Then
        return findAllPromise.catch(error => expect(error).to.exist)
      })
    })
    describe('when redis.get returns an array', () => {
      before(() => {
        // Given
        this.redisGetStub.callsArgWith(1, null, [])
      })
      it('calls redis.get once', () => {
        // When
        const findAllPromise = productsServices.findAll()

        // Then
        return findAllPromise.then(() => sinon.assert.calledOnce(this.redisGetStub))
      })
      it('returns the array', () => {
        // When
        const findAllPromise = productsServices.findAll()

        // Then
        return findAllPromise.then(products => expect(products).to.deep.equal([]))
      })
    })
  })
})
