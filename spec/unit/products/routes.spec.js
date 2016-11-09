const sinon = require('sinon')
const productsRoutes = require('../../../lib/products/routes')
const productsHandlers = require('../../../lib/products/handlers')

describe('products routes', () => {
  describe('GET /products', () => {
    it('is supported', () => {
      // Given
      const getStub = sinon.stub()
      const fakeApp = { get: getStub }

      // When
      productsRoutes(fakeApp)

      // Then
      sinon.assert.calledWith(getStub, '/products')
    })
    it('uses handlers.findAll', () => {
      // Given
      const getStub = sinon.stub()
      const fakeApp = { get: getStub }

      // When
      productsRoutes(fakeApp)

      // Then
      sinon.assert.calledWith(getStub, '/products', productsHandlers.findAll)
    })
  })
})
