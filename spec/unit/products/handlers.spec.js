const sinon = require('sinon')
const productsHandlers = require('../../../lib/products/handlers')
const servicesHandlers = require('../../../lib/products/services')

describe('products handlers', () => {
  describe('.findAll()', () => {
    describe('when handlers.findAll returns an empty array', () => {
      before(() => {
        this.servicesFindAllStub = sinon.stub(servicesHandlers, 'findAll')
        this.servicesFindAllStub.returns(Promise.resolve([]))
      })
      after(() => {
        this.servicesFindAllStub.restore()
      })
      it('calls res.send once', () => {
        // Given
        const fakeReq = {}
        const sendStub = sinon.stub()
        const fakeRes = { send: sendStub }

        // When
        const findAllPromise = productsHandlers.findAll(fakeReq, fakeRes)

        // Then
        return findAllPromise.then(() => sinon.assert.calledOnce(sendStub))
      })
      it('calls res.send with an empty array', () => {
        // Given
        const fakeReq = {}
        const sendStub = sinon.stub()
        const fakeRes = { send: sendStub }

        // When
        const findAllPromise = productsHandlers.findAll(fakeReq, fakeRes)

        // Then
        return findAllPromise.then(() => sinon.assert.calledWith(sendStub, []))
      })
    })
  })
})
