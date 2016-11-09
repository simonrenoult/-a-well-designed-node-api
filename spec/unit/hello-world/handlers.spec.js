const sinon = require('sinon')
const helloWorldHandlers = require('../../../lib/hello-world/handlers')

describe('hello-world handlers', () => {
  describe('.sayHello()', () => {
    it('calls res.send once', () => {
      // Given
      const fakeReq = {}
      const sendStub = sinon.stub()
      const fakeRes = { send: sendStub }

      // When
      helloWorldHandlers.sayHello(fakeReq, fakeRes)

      // Then
      sinon.assert.calledOnce(sendStub)
    })
    it('calls res.send with "hello world!"', () => {
      // Given
      const fakeReq = {}
      const sendStub = sinon.stub()
      const fakeRes = { send: sendStub }

      // When
      helloWorldHandlers.sayHello(fakeReq, fakeRes)

      // Then
      sinon.assert.calledWith(sendStub, 'hello world!')
    })
  })
})
