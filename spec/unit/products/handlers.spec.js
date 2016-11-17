const sinon = require('sinon')

const handlers = require('../../../lib/products/handlers')

describe('products handlers', () => {
  describe('.findAll()', () => {
    describe('when services.products.findAll returns an empty array', () => {
      it('calls res.send once', () => {
        // Given
        const findAllStub = sinon.stub()
        findAllStub.returns(Promise.resolve([]))
        const fakeReq = { services: { products: { findAll: findAllStub } } }
        const sendStub = sinon.stub()
        const fakeRes = { send: sendStub }

        // When
        const findAllPromise = handlers.findAll(fakeReq, fakeRes)

        // Then
        return findAllPromise.then(() => sinon.assert.calledOnce(sendStub))
      })
      it('calls res.send with an empty array', () => {
        // Given
        const findAllStub = sinon.stub()
        findAllStub.returns(Promise.resolve([]))
        const fakeReq = { services: { products: { findAll: findAllStub } } }
        const sendStub = sinon.stub()
        const fakeRes = { send: sendStub }

        // When
        const findAllPromise = handlers.findAll(fakeReq, fakeRes)

        // Then
        return findAllPromise.then(() => sinon.assert.calledWith(sendStub, []))
      })
    })
  })
})
