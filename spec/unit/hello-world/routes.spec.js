const sinon = require('sinon')
const helloWorldRoutes = require('../../../lib/hello-world/routes')
const helloWorldHandlers = require('../../../lib/hello-world/handlers')

describe('hello-world routes', () => {
  describe('GET /', () => {
    it('is supported', () => {
      // Given
      const getStub = sinon.stub()
      const fakeApp = { get: getStub }

      // When
      helloWorldRoutes(fakeApp)

      // Then
      sinon.assert.calledWith(getStub, '/')
    })
    it('uses handlers.sayHello', () => {
      // Given
      const getStub = sinon.stub()
      const fakeApp = { get: getStub }

      // When
      helloWorldRoutes(fakeApp)

      // Then
      sinon.assert.calledWith(getStub, '/', helloWorldHandlers.sayHello)
    })
  })
})
